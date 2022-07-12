import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../../res/style/color'
import { widthPercentageToDP, heightPercentageToDP } from '../../../../component/React Native Responsive Screen'
import {fonts} from '../../../../../res/style/fonts'

export const styles = StyleSheet.create({
    //My contests style
  

  
    container: {
      
      //backgroundColor:Colors.positive
    },
    headingText:
    {
      fontSize:RFValue(12),
      color:Colors.darkGrey,
     
      fontFamily:fonts['DMSans-Bold']
    },
    subHeadingText:{
      fontSize:RFValue(8),
      color:Colors.darkGrey,
    
      marginTop:6,
      fontFamily:fonts['DMSans-Bold'],
      
    },
    emailSubHeadingText:{
      fontSize:RFValue(8),
      color:Colors.darkGrey,
    
      marginTop:6,
      fontFamily:fonts['DMSans-Bold'],
      
    },
    emailSubHeadingTextVerified:{
      fontSize:RFValue(8),
      color:Colors.darkGrey,
    
      marginTop:6,
      fontFamily:fonts['DMSans-Bold'],
      
    }

})

