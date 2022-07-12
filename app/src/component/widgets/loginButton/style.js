
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP, heightPercentageToDP } from '../../../../src/component/React Native Responsive Screen'
import { Colors } from '../../../../res/style/color'
import {fonts} from '../../../../res/style/fonts'


export const styles = StyleSheet.create({

 
  
 buttonStyle: {
    backgroundColor: Colors.blue ,
   
    borderRadius: 50,
    width: widthPercentageToDP(75),
    height: 37,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
   

  },
  buttonText: {
    fontSize: RFValue(12),
    fontFamily: fonts['DMSans-Bold'],
    fontStyle: 'normal',
    fontWeight:'bold',
    letterSpacing: 1,
    // marginLeft:20,

    color: Colors.white,
  },




});

