
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../res/style/color'
import {fonts} from '../../../../res/style/fonts'


export const styles = StyleSheet.create({

 
  
 buttonStyle: {   backgroundColor: Colors.orange,
  marginTop: 9,
  height: 25,
  width:25,
  borderRadius: 30,
  marginLeft: 5,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth:1,borderColor:'white'},
  buttonText: {
    fontFamily: fonts['DMSans-Bold'],
    fontStyle:'normal',
   fontSize: RFValue(30),
   color: 'white',
   alignContent:'center',
   alignSelf:'center',
   paddingBottom:3
 }
});

