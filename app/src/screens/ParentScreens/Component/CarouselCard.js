import React from 'react';
import { View ,Text, StyleSheet} from "react-native";
import { Colors } from '../../../../res/style/color'
import Carousel , { Pagination }  from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../../../component/ParentComponent/carousel/CarouselCardItem/CarsouselCardItem'
import {styles} from './style'
import { fonts } from '../../../../res/style/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import analytics from '@react-native-firebase/analytics';
import data from './data'
//import { styles } from '../../../component/ParentComponent/carousel/CarouselCardItem/style';
const CarouselCards = ({data}) => {
 
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)
  

  return (

    <View style={styles.mainView}>
    <View style={{marginLeft:13}}>
        <Text style={styles.headinText}>Join the Arena!</Text>
    </View>
 

 <View style={{flex:1,marginTop:10}}>
    <TouchableOpacity
 onPress={()=>{
  analytics().logEvent('homepage_cards_clicks', {       
    description: "clicks on sport cards on home page"
    }) 
  }}
 style={{alignSelf:'center',}}>
 
 <Carousel
   layout="default"
   layoutCardOffset={9}
   ref={isCarousel}
   data={data}
   renderItem={CarouselCardItem}
   sliderWidth={SLIDER_WIDTH}
  //  autoplay={true}
  //  autoplayDelay={1}
   itemWidth={ITEM_WIDTH}
   inactiveSlideShift={0}
   onSnapToItem={(index) => {setIndex(index),
    analytics().logEvent('no_of_swipes_on_marketting_card', {       
      description: "no of swipes on marketting card"
      }) 
    console.log("i am swiped",index)}}
   useScrollView={true}
 />

</TouchableOpacity>

   </View>
 <View style={{justifyContent:'flex-start',alignItems:'flex-start',bottom:10}}>
<Pagination 
      dotsLength={data.length<=1?2:data.length}
      activeDotIndex={index}
      carouselRef={isCarousel}
      dotContainerStyle={{width:0}}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        backgroundColor: Colors.white,
        borderColor : Colors.grayMedium,
     
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
      tappableDots={true}
    />
  
  </View>

    </View>




  )
  }
  
  export default  CarouselCards ;





//    