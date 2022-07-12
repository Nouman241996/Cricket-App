
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../res/style/color'
import {fonts} from '../../../../res/style/fonts'


export const styles = StyleSheet.create({

 
  
 buttonStyle: {
    backgroundColor: Colors.orange,
    //borderRadius: 50,
    width:'50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection:'row',
    alignItems:'center',
   

  },
  buttonText: {
  
    fontFamily: fonts['DMSans-Medium'],
    fontSize: RFValue(9, 580),
        fontFamily: fonts['DMSans-Medium'],
        fontStyle:'normal',
        letterSpacing:2,

    color: Colors.white,
  },
});

