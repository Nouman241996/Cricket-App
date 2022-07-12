
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../res/style/color'
import { widthPercentageToDP, heightPercentageToDP } from '../../../src/component/React Native Responsive Screen'
import { fonts } from '../../../res/style/fonts';


export const styles = StyleSheet.create({

   mainView:{
    //    backgroundColor: Colors.mainbackground,
    flexDirection:'row',justifyContent:'space-between',paddingLeft:15,paddingTop:15,paddingBottom:5
    },
    listHeading:{
        color:Colors.darkGrey,
        fontSize: RFValue(10, 580),
        fontFamily: fonts['DMSans-Bold'],
        fontStyle:'normal',
        // letterSpacing:1,

      
       },
       mainBody:{
        flexDirection:'row',justifyContent:'space-between',height:50,paddingLeft:15,paddingTop:10,paddingBottom:1,paddingRight:12
       },
       listBody:{
        color:Colors.darkGrey,
        fontSize: RFValue(8, 580),
        fontFamily: fonts['DMSans-Medium'],
        fontStyle:'normal',

      
       },
});

