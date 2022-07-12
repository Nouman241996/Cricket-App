
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../../../res/style/color'
import { fonts } from '../../../../../res/style/fonts'
import { widthPercentageToDP, heightPercentageToDP } from '../../../../component/React Native Responsive Screen'


export const styles = StyleSheet.create({

  tabbarStyle : {
    borderRadius:30,
      // padding:10,
      height:30,
      paddingLeft:15,
      paddingRight:15,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent:'center',
  },
    matchstatusbar:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        flex:2,
        marginTop:15,
        marginBottom:20,
      },
      matchstatusbartext:{
      
        fontSize: RFValue(10, 580),
        fontFamily: fonts['DMSans-Medium'],
        fontStyle:'normal',
        letterSpacing:1,
        color:Colors.white,
        
        
      },
      matchstatusbartextSelected:{
        fontSize: RFValue(10, 580),
        fontFamily: fonts['DMSans-Medium'],
        fontStyle:'normal',
        letterSpacing:1,
        color:Colors.grayMedium,
        
        
      },
     
      normal:
      
      {backgroundColor: "transparent",
      borderRadius:20,
      width:100,
      height:25,
      justifyContent:'center',
      alignContent:'center',
    },
    loaderStyle:{
      marginTop:8,
      flexDirection:'row',
      justifyContent:'center'
    },
    ViewBackground: {
      alignSelf: 'center',
      padding: 10,
      width: widthPercentageToDP(80),
     
      backgroundColor: Colors.white,
      borderRadius: 10,
      elevation: 2,
      shadowColor: 'rgba(0,0,0,0.8)',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.7,
      shadowRadius: 5,
    },
    seperatorStyle:{ width:'100%', 
     backgroundColor:Colors.lightgray,
      height:0.4},


 runTag: {
      
        marginRight: 9,


       
   borderRadius:20,
   // padding:10,
   height:22,
   paddingLeft:8,
   paddingRight:8,
   justifyContent: 'center',
   alignItems: 'center',
   alignContent:'center',
   marginTop: 14
     },
     confirmTag: {
      backgroundColor:Colors.positive,
       marginRight: 9,


      
  borderRadius:20,
  // padding:10,
  height:22,
  paddingLeft:8,
  paddingRight:8,
  justifyContent: 'center',
  alignItems: 'center',
  alignContent:'center',
  marginTop: 14
    },
    comingSoonTag: {
     
       marginRight: 9,


      
  borderRadius:20,
  // padding:10,
  height:22,
  paddingLeft:8,
  paddingRight:8,
  justifyContent: 'center',
  alignItems: 'center',
  alignContent:'center',
  marginTop: 12
    },

  
});

