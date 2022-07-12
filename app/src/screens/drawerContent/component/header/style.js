import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../../res/style/color'
import { widthPercentageToDP, heightPercentageToDP } from '../../../../component/React Native Responsive Screen'
import {fonts} from '../../../../../res/style/fonts'

export const styles = StyleSheet.create({
    

mainheader:
{
  flexDirection:'row', 
  height:50, 
  backgroundColor:Colors.mainbackground, 
  alignItems: 'center',
   justifyContent: 'space-between'
},
backBtn:
{
//  marginTop:19,
  //width: 30,
  //height: 20,
  marginLeft:12   
},
headerTitle:{

  fontSize: RFValue(12),

  color:Colors.darkGrey,
//  marginTop:18,
  textAlign:'center',
   marginRight:'8%',
   fontFamily: fonts['DMSans-Bold'],

},
})