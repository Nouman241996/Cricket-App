
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../res/style/color'
import { fonts } from '../../../res/style/fonts'




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
    padding:10,
    backgroundColor:Colors.mainbackground, 
    justifyContent: 'space-between',
    alignItems:'center'
  },
  logoimage:{
    // marginTop:8,
    //  marginLeft:30,
    alignSelf:'center',
  },
  searchimage:
  {
    marginTop:18,
    // width: 30,
    // height: 30,
    marginRight:15   
  },
  segmentLeftStyle:{
    width:50,
    height:25,
    borderBottomLeftRadius:5,
    borderWidth:1,
    justifyContent: 'center',
    borderColor:Colors.white
    },
    segmentRightStyle:{
      width:30,
      height:25,
      borderBottomRightRadius:5,
      borderWidth:1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor:Colors.white
      },
      languageTextStyle:{
        fontSize: RFValue(10, 580),textAlign:'center',marginLeft:2,marginRight:2, fontWeight: '700', fontFamily: fonts['DMSans-Bold'],
      }
 




   
});

