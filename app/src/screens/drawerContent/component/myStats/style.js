import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../../res/style/color'
import { widthPercentageToDP, heightPercentageToDP } from '../../../../component/React Native Responsive Screen'
import {fonts} from '../../../../../res/style/fonts'

export const styles = StyleSheet.create({
    //My contests style
  
    linearcontainer: {
        flexDirection:'column',
        marginLeft:15,
        marginRight:15,
        //borderRadius:15,
        marginTop:8,
      },
      statsView: {
        flexDirection:'column',
        marginLeft:15,
        marginRight:15,
        //borderRadius:15,
        marginTop:8,
      },

      totalBalanceText:
      {
        fontSize:RFValue(16),
        color:Colors.grayMedium,
       
        fontFamily:fonts['DMSans-Bold']
      },
      totalBalancePriceText:{
        fontSize:RFValue(20),
        color:Colors.darkGrey,
       
        fontFamily:fonts['DMSans-Bold']
      },
  
    container: {
      flex: 1,
      backgroundColor: Colors.white
    },
    containerLeft:{
        flexDirection:'column',
        width:'50%',
         borderBottomColor:Colors.seperatorColor,
         borderBottomWidth:0.8, 
         borderRightWidth:1,
        borderRightColor:Colors.seperatorColor,
        alignItems:'center',
        justifyContent:'center'
    },
    containerRight:{
        flexDirection:'column',
        width:'50%',
         borderBottomColor:Colors.seperatorColor,
         borderBottomWidth:0.8, 
        
       
        alignItems:'center',
        justifyContent:'center'
    },
    headingText:{
        color:Colors.grayMedium,
        fontSize:RFValue(12),
        fontFamily:fonts['DMSans-Medium']
    },
    subHeadingText:{
        color:Colors.darkGrey,
        fontSize:RFValue(16),
        fontFamily:fonts['DMSans-Bold']
    }
})