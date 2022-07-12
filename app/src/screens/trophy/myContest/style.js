import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../../res/style/color'
import { fonts } from '../../../../res/style/fonts';



export const styles = StyleSheet.create({

   container:{
    flex: 1,
    backgroundColor:Colors.white
    // justifyContent: "center",
    // alignItems: "center"
   },
   myContestMain:{
marginBottom:70,
marginTop:10,
   },

   matchstatusbartext:{
    //fontWeight:'bold',
     fontSize: RFValue(10, 580),
     fontFamily: fonts['DMSans-Medium'],
     fontStyle:'normal',
     letterSpacing:1,
    //marginLeft:11,
    color:Colors.darkGrey,
    
    
  },

  tabbarView:{
    flexDirection:'row',justifyContent:'space-evenly',marginTop:5
  },
  tabbarStyle : {
    borderRadius:30,
    // padding:10,
    height:30,
    paddingLeft:15,
    paddingRight:15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
    // marginTop:5,   
  },
  loader_style:{
    marginTop:10,
    justifyContent:'center'
  },
    
});

