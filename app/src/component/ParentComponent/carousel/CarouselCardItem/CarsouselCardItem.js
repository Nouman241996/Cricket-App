import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);
import LinearGradient from 'react-native-linear-gradient';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { styles } from './style';
import { widthPercentageToDP, heightPercentageToDP } from '../../../React Native Responsive Screen'
import { Colors } from '../../../../../res/style/color';
import {fonts} from '../../../../../res/style/fonts'
import { TouchableOpacity } from 'react-native-gesture-handler';
import  ParentCard from '../../../../../res/images/svg/parentCard.svg'

import icons from '../../../../../res/constants/icons'

const CarouselCardItem = ({ item, index }) => {
 

  return (
    <View key={index}>
       {/* <View style={styles.cardview}> */}
       <Image
        source={{ uri: item.banner_image }}
          resizeMode={'stretch'}
        style={styles.image}
      />
          {/* <Image  source={icons.banner} resizeMode="contain"  style={styles.barimage}/> */}
        {/* <View style={styles.upcomingView}><Text style={styles.upcommingText}>Upcoming game</Text></View>
        <View style={styles.countryVsCountryView}><Text numberOfLines={0.2} style={styles.countryVsCountryText}>INDIA VS BANGLADESH</Text></View>
        <View style={styles.buttonView}>
 <TouchableOpacity style={styles.button}>
 <Text style={styles.buttonText}>Play score kiya?</Text>
 </TouchableOpacity> 
</View> */}


      </View>
      // </View>
   
  );
};
export default CarouselCardItem;

