
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../res/style/color'
import { widthPercentageToDP, heightPercentageToDP } from '../../../src/component/React Native Responsive Screen'
import { fonts } from '../../../res/style/fonts';


export const styles = StyleSheet.create({

   mainView:{
    //    backgroundColor: Colors.mainbackground,
    flexDirection:'row',justifyContent:'space-between',paddingLeft:15,paddingTop:15
    },
    listHeading:{
        color:Colors.grayMedium,
        fontSize: RFValue(10, 580),
        fontFamily: fonts['DMSans-Bold'],
        fontStyle:'normal',
        letterSpacing:1,

      
       },
       mainBody:{
        flexDirection:'row',justifyContent:'space-between',paddingLeft:15,paddingBottom:1,paddingRight:12
       },
       listBody:{
        color:Colors.darkGrey,
        fontSize: RFValue(6, 580),
        fontFamily: fonts['DMSans-Bold'],
        fontStyle:'normal',
        letterSpacing:1,

      
       },
});

