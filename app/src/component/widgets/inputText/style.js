
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../res/style/color'
import {fonts} from '../../../../res/style/fonts'
import { widthPercentageToDP, heightPercentageToDP } from '../../React Native Responsive Screen'


export const styles = StyleSheet.create({

 
  
 inputTextStyle: { 
  height: 43,
  width:widthPercentageToDP(92),
  padding:12,
  borderWidth: 1,
borderRadius:10,alignSelf:'center',

  fontSize: RFValue(12),
  color: Colors.black
 ,fontFamily:fonts['DMSans-Medium']
 }
 
});

