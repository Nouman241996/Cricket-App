
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../../res/style/color'
import {fonts} from '../../../../../res/style/fonts'
const SLIDER_WIDTH = Dimensions.get('window').width + 0;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)
import { widthPercentageToDP, heightPercentageToDP } from '../../../React Native Responsive Screen'
export const styles = StyleSheet.create({
cardview:{
  borderRadius: 16,
  alignSelf:'center',
  backgroundColor:Colors.white,
  marginTop:20,
  height:200,
  width:widthPercentageToDP(90)
},
image: {
  width: ITEM_WIDTH-30,
  // marginTop:10,
  height: 230,
  alignSelf:'center',
  borderRadius: 16,

},
  barimage:{
   
 
    height:199,
    width:360,
    alignSelf:'center'
   
   // width:widthPercentageToDP(100)

  //  backgroundColor:'white',
    

  },
  upcomingView:{
    position:'absolute' ,
    top:10,
    left:20
  },
  upcommingText:{
    color:Colors.white,
    fontFamily:fonts['DMSans-Medium'],
    fontSize:RFValue(13),
   
  },
countryVsCountryText:{
  color:Colors.white,
  fontFamily:fonts['DMSans-Bold'],
  fontSize:RFValue(20),
 
},
countryVsCountryView:{
  position:'absolute' ,
  top:30,
  left:20
},
buttonView:{
  position: 'absolute', 
  top: 146,
   left: 0, 
   right: 0,
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
button:{
  backgroundColor:'#FF7D4A',
  borderRadius:15,
  height:38,
  justifyContent:'center',
  marginTop:40,
  padding:20,
  width:ITEM_WIDTH-70
},
buttonText:{
  alignSelf:'center',
  color:Colors.white,
  fontFamily:fonts['DMSans-Medium'],
  fontSize:RFValue(16),
  letterSpacing:1,
  marginBottom:2
},


});

