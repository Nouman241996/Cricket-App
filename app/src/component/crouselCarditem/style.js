
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../res/style/color'
import {fonts} from '../../../res/style/fonts'
const SLIDER_WIDTH = Dimensions.get('window').width + 0;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)

export const styles = StyleSheet.create({

  // crouselCard styles


  testText: {
    
    fontSize: RFValue(10),
    marginTop: 4,
    // width: 100,
    textAlign:'center',
    color:Colors.darkGrey,
    fontFamily: fonts['DMSans-Bold'],
    fontStyle:'normal',
    // letterSpacing:0.8
  },

  statusText: {
    
    fontSize: RFValue(9),
    color: 'white',
    fontFamily: fonts['DMSans-Bold'],
    fontStyle:'normal',
    
  },

  livetag:
  {
    backgroundColor: Colors.orange,
//     borderRadius: 20,
//     padding: 10,
//     height: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: -3,
marginRight:12,



borderRadius:20,
// padding:10,
height:20,
paddingLeft:8,
paddingRight:8,
justifyContent: 'center',
alignItems: 'center',
alignContent:'center',


  },
  contesttag:
  {
    backgroundColor: Colors.blue,
    // borderRadius: 20,
    // // width:50,
    // // height:20,
    // padding: 10,
    // height: 30,
    // left: -10,
    // marginTop: -5,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginLeft:20,



    borderRadius:20,
    // padding:10,
    height:30,
    paddingLeft:8,
    paddingRight:8,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',


  },


  teamtagright: {
    backgroundColor: Colors.grayMedium,
    borderRadius: 30,
    marginLeft: 5,
    height:25,
    padding: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineupView: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',



  },
  teamtagleft: {
    backgroundColor: Colors.grayMedium,
    borderRadius: 20,
    padding: 9,
    height:25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tickImage: {
    
    marginTop:5,
    width: 11,
    height: 11,
    marginLeft:2
  },




  // country vs country

  countryVScountryMainView: {
    flexDirection: 'row', marginTop: -44, marginBottom: 10, justifyContent: 'space-between'
  },
  Mainview: {
    justifyContent: 'center', flexDirection: 'row',marginTop:9
  },
  countryImage1: {
    marginTop: 26, alignItems: 'center', justifyContent: 'center', marginRight: 10
  },
  countryText: {
    fontSize: RFValue(14), 
    marginTop: 5, 
    color:Colors.darkGrey,
    fontFamily: fonts['DMSans-Bold'],
    fontStyle:'normal',
  },
  vsText: {
    color: Colors.white, opacity: 0.35, fontSize: RFValue(134), fontFamily: fonts['DMSans-Bold'],
    fontStyle:'normal',
  },
  countryImage2: {
    marginTop: 26, alignItems: 'center', justifyContent: 'center', marginLeft: 10
  },


});

