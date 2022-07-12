import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../../res/style/color'
import { widthPercentageToDP, heightPercentageToDP } from '../../../../component/React Native Responsive Screen'
import {fonts} from '../../../../../res/style/fonts'
import { color } from 'react-native-reanimated';

export const styles = StyleSheet.create({
    //My contests style
  

  
    container: {
      flexDirection:'column',
      marginLeft:15,
      marginRight:15,
      borderRadius:15,
      marginTop:8,
      backgroundColor:Colors.mainbackground
    },
    totalBalanceText:
    {
      fontSize:RFValue(10),
      color:Colors.darkGrey,
      letterSpacing:1,
      fontFamily:fonts['DMSans-Bold']
    },
    totalBalancePriceText:{
      fontSize:RFValue(18),
      color:Colors.darkGrey,
      letterSpacing:1,
      fontFamily:fonts['DMSans-Bold'],
      marginTop:5,

    },
    verifyAccountText:{
        fontSize:RFValue(12),
        color:Colors.orange,
        letterSpacing:1,
        fontFamily:fonts['DMSans-Bold'],
        marginTop:2,
        //textDecorationLine: 'underline',
        textAlign:'right'
      },
      verifyAccountHeadingText:{
        fontSize:RFValue(10),
        color:Colors.darkGrey,
        letterSpacing:0.2,
        fontFamily:fonts['DMSans-Bold'],
        marginTop:2,
        textAlign:'right'
      
      
        
  
      }

})

