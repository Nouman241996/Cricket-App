
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../res/style/color'

import { fonts } from '../../../res/style/fonts';


export const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 24,
       
      },
      heading:
      {
        fontWeight:'bold',
        fontSize: 13,
        marginLeft:14,

      },
      mainheader:
      {
        flexDirection:'row', 
        height:50, 
        backgroundColor:Colors.mainbackground, 
        alignItems: 'center',
         justifyContent: 'space-between'
      },
      mainheaderlive:
      {
        flexDirection:'row', 
        height:50, 
      
        alignItems: 'center',
         justifyContent: 'space-between'
      },
      barimage:
      {
      //  marginTop:19,
        //width: 30,
        //height: 20,
        marginLeft:12   
      },
      rightView:{
        flexDirection:'row',
        padding:8,
      },
      title:{

        fontSize: RFValue(12),
     
        color:Colors.darkGrey,
      //  marginTop:18,
        textAlign:'center',
         marginLeft:'15%',
         fontFamily: fonts['DMSans-Bold'],

      }







   
});

