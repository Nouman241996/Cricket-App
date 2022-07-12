
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../res/style/color'
import { fonts } from '../../../res/style/fonts'
import { widthPercentageToDP, heightPercentageToDP } from '../../component/React Native Responsive Screen'


export const styles = StyleSheet.create({

    sideMenuContainer: {
        width: '100%',
        height: heightPercentageToDP(100),
        flex:1,
        backgroundColor: Colors.darkGrey,
        paddingTop: 20,
        
    },
    modalItemText: {
        fontFamily: fonts['DMSans-Bold'],
        fontSize: RFValue(14),
        paddingLeft: 10,
        color: Colors.black,
      },
      upgradeText:{
        fontFamily: fonts['DMSans-Medium'],
      fontSize: RFValue(13),
      
      color: Colors.black,
      },
      upgradeButton:{ position: 'absolute',
      bottom:7,
       backgroundColor: Colors.green,
      //borderRadius: 50,
      width:'90%',
      height: 40,
      alignSelf:'center',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection:'row',
      borderRadius: 8
      },
    confirmtag: {
       
         marginRight: 9,


        
    borderRadius:20,
    // padding:10,
    height:22,
    paddingLeft:8,
    paddingRight:8,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
        
      },
      textStyle:{
          color:Colors.white
      },
     
});

