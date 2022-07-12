
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../../../res/style/color'
import { fonts } from '../../../../../res/style/fonts';
 const SLIDER_WIDTH = Dimensions.get('window').width + 0;
 const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)



export const styles = StyleSheet.create({

  mainContainer: { backgroundColor:Colors.bluedark, flex: 1 },
  imageView: { alignSelf:'center',marginTop:8 },
  barimage:
  {
    marginTop:35,
    //width: 30,
    //height: 20,
    marginLeft:14   
  },
  logoImage:
  {
    marginTop:10,
   // marginRight:10
     
  },
profile:{
  marginTop:30,
  marginRight:14
},
mainHeading:{
  color:'white',fontSize:RFValue(20),fontFamily:fonts['DMSans-Bold']
},
card:{
  height:98,width:90,borderRadius:15
},
cardText:{
  color:Colors.white,
  textAlign:'center',
  marginTop:5,
  fontSize:RFValue(14),
  fontFamily:fonts['DMSans-Medium']
},
playNowContainer:{
  flexDirection:'row',
  alignItems: 'center',
  paddingLeft:20,
  paddingRight:20,
},
horizontalLine:{
  flex:1,
  height:1,
  backgroundColor:Colors.white,
},
image: {
  width: ITEM_WIDTH-30,
  marginTop:10,
  height: 230,
  alignSelf:'center',
  borderRadius: 16,
},

  
});

