import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../../res/style/color'
import { widthPercentageToDP, heightPercentageToDP } from '../../../../component/React Native Responsive Screen'
import {fonts} from '../../../../../res/style/fonts'

export const styles = StyleSheet.create({
    
  

  
    container: {
      flex: 1,
      backgroundColor: Colors.white
    },
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
      cashCards:{
          backgroundColor:Colors.mainbackground,
          width:'20%',
          height:45,
          borderRadius:12,
          alignItems:'center',
          alignContent:'center',
          justifyContent:'center',
          marginRight:10,
      },
     cashText:
    {
      fontSize:RFValue(13),
      color:Colors.darkGrey,
      letterSpacing:1,
      fontFamily:fonts['DMSans-Bold']
    },
    cashView:{
      flexDirection:'row',
      marginRight:15,
      marginLeft:15,
      marginTop:5,
    },
    inputView:{
      
     
     
      marginTop:12,
    },
    ViewBackground: {
      alignSelf: 'center',
      padding: 10,
      width: widthPercentageToDP(80),
      justifyContent: 'center',
      backgroundColor: Colors.white,
      borderRadius: 10,
      elevation: 2,
      shadowColor: 'rgba(0,0,0,0.8)',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.7,
      shadowRadius: 5,
    },
})

