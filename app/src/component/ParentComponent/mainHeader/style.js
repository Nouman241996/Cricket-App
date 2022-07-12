
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../../res/style/color'
 const SLIDER_WIDTH = Dimensions.get('window').width + 0;
 const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)



export const styles = StyleSheet.create({

 
  barimage:
  {
    marginTop:15,
   
  },
  logoImage:
  {
    marginTop:10,
   // marginRight:10
     
  },
profile:{
  marginTop:25,
  marginRight:14
}

  
});

