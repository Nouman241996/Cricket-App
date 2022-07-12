
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../res/style/color'
import {fonts} from '../../../../res/style/fonts'
import { widthPercentageToDP, heightPercentageToDP } from '../../React Native Responsive Screen'


export const styles = StyleSheet.create({

 
  
 inputTextStyle: { 
  height: 43,
  backgroundColor:Colors.white,
  width:widthPercentageToDP(75),
  padding:12,
  borderWidth: 1,
  borderColor:Colors.logBack,
  borderRadius: 15,alignSelf:'center'},
 
});

