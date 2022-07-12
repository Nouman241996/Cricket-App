import React from 'react';
import { View ,Text, StyleSheet} from "react-native";
import { Colors } from '../../../../res/style/color'
import Carousel , { Pagination }  from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../../../component/crouselCarditem/CarouselCardItem'
import {styles} from './style'
import { fonts } from '../../../../res/style/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { useTranslation } from 'react-i18next';

const CarouselCards = ({navigation,itemsdata}) => {
  console.log("length",itemsdata.length)
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)
  const { t } = useTranslation();
  

  return (
<>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:14,marginLeft:9 ,marginBottom:-25,}}>
    <View style={{marginLeft:12}}>
        <Text style={{fontFamily: fonts['DMSans-Bold'],fontStyle:'normal' ,letterSpacing: 0.5,color:Colors.darkGrey,fontSize: RFValue(11)}}>{t('homePage:myMatch')}</Text>
    </View>
    <TouchableOpacity 
    onPress={()=>{
     navigation.navigate('trophy',{
      type: 'crousel',
      contestname:itemsdata[index].match_status
     })
    }}
    style={{marginRight:10,height:30,marginBottom:10,}}>
              <Text style={ {
    
    fontSize: RFValue(11),
   
   
    color:Colors.orange,
    fontFamily: fonts['DMSans-Bold'],
    fontStyle:'normal',
    letterSpacing:0.5
  }
} numberOfLines={1}>
              {t('homePage:VIEW ALL')}
               
              </Text>
            </TouchableOpacity>
    </View>

 <TouchableOpacity
 onPress={()=>{
   console.log('clicked',itemsdata[index].match_status)



   if (itemsdata[index].match_status === 'Fixture') {
   navigation.navigate('upcommingcontest', {
      match_id_c: itemsdata[index].match_id,
      item:itemsdata[index],
      teamname1: itemsdata[index].team_short_name1,
      teamname2: itemsdata[index].team_short_name2,
    });
  } else if (itemsdata[index].match_status === 'Live') {

   navigation.navigate('LiveJoinTeam', {
      match_id_c: itemsdata[index].match_id,
      item:itemsdata[index],
      uniqueId:itemsdata[index].unique_id,
      teamname1: itemsdata[index].team_short_name1,
      teamname2: itemsdata[index].team_short_name2,
    });
  } else if (itemsdata[index].match_status === 'Result') {
   navigation.navigate('completedContest', {
      match_id_c: itemsdata[index].match_id,
      item:itemsdata[index],
      uniqueId:itemsdata[index].unique_id,
      teamname1: itemsdata[index].team_short_name1,
      teamname2: itemsdata[index].team_short_name2,
    });
  }




 }}
 
 style={{ 
    alignItems: 'center',
    justifyContent: 'center',paddingRight:50,marginTop:28,
    }}>
 <Carousel
   layout="default"
   layoutCardOffset={9}
   ref={isCarousel}
   data={itemsdata}
   renderItem={CarouselCardItem}
   sliderWidth={SLIDER_WIDTH}
  //  autoplay={true}
  //  autoplayDelay={1}
   itemWidth={ITEM_WIDTH}
   inactiveSlideShift={0}
   onSnapToItem={(index) => setIndex(index)}
   useScrollView={true}
 />

</TouchableOpacity>
{itemsdata.length<=1?
<View style={{justifyContent:'center',alignItems:'center',marginBottom:5}}>
  <View style={{backgroundColor:Colors.grayMedium,borderRadius:10,height:10,width:10,borderColor:Colors.grayMedium}}></View>
  </View>
  :
<View style={{flexDirection:'row', justifyContent:'center', marginTop:-35,marginBottom:-19}}>
 
    <Pagination 
      dotsLength={itemsdata.length}
      activeDotIndex={index}
      carouselRef={isCarousel}
      dotContainerStyle={{width:0}}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        backgroundColor: Colors.grayMedium,
        borderColor : Colors.grayMedium,
     
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
      tappableDots={true}
    />

    </View>
}
</>
  )
  }
  
  export default  withNavigation(CarouselCards) ;





//    