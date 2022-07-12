import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../../res/style/color'
import { widthPercentageToDP, heightPercentageToDP } from '../../../../component/React Native Responsive Screen'
import {fonts} from '../../../../../res/style/fonts'

export const styles = StyleSheet.create({
    //My contests style
  
   
    container: {
      flex: 1,
      backgroundColor: Colors.white
    },
    updateText:{
        fontSize: RFValue(18),
     
        color:Colors.darkGrey,
    
        textAlign:'center',
         fontFamily: fonts['DMSans-Bold'],
      },
      subUpdateText:{
        fontSize: RFValue(15),
     
        color:Colors.grayMedium,
    
        textAlign:'center',
         fontFamily: fonts['DMSans-Bold'],
      },
  
})