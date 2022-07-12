import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../../res/style/color'
import { widthPercentageToDP, heightPercentageToDP } from '../../../../component/React Native Responsive Screen'
import {fonts} from '../../../../../res/style/fonts'

export const styles = StyleSheet.create({
    //My contests style
  

  
    container: {
      flexDirection:'column',
      marginLeft:15,
      marginRight:15,
      borderRadius:15,
      marginTop:8,
    },
    totalBalanceText:
    {
      fontSize:RFValue(10),
      color:Colors.darkGrey,
     
      fontFamily:fonts['DMSans-Bold']
    },
    totalBalancePriceText:{
      fontSize:RFValue(16),
      color:Colors.darkGrey,
     
      fontFamily:fonts['DMSans-Bold']
    }

})

