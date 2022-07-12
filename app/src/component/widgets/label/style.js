
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../res/style/color'
import {fonts} from '../../../../res/style/fonts'
import { widthPercentageToDP, heightPercentageToDP } from '../../React Native Responsive Screen'


export const styles = StyleSheet.create({

 
  
 labelText: {color:Colors.darkGrey,letterSpacing:0.8,fontFamily:fonts['DMSans-Bold'],fontSize:RFValue(12)},
 
});

