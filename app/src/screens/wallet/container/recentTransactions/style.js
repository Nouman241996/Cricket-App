import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../../res/style/color'
import { widthPercentageToDP, heightPercentageToDP } from '../../../../component/React Native Responsive Screen'
import {fonts} from '../../../../../res/style/fonts'

export const styles = StyleSheet.create({
    //My contests style
  

  
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
      headerTitle:{

        fontSize: RFValue(12),
     
        color:Colors.darkGrey,
      //  marginTop:18,
        textAlign:'center',
         marginRight:'8%',
         fontFamily: fonts['DMSans-Bold'],

      },
      backBtn:
      {
      //  marginTop:19,
        //width: 30,
        //height: 20,
        marginLeft:12   
      },
      header: {
        backgroundColor: Colors.mainbackground,
        padding: 14,
        flexDirection:'row',
        justifyContent:'space-between',
      
       
      },
      headerActive: {
        backgroundColor: Colors.mainbackground,
        padding: 14,
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:Colors.darkGrey,
        borderWidth:0.5,
        borderBottomWidth:0
       
      },
      headerText: {
       
        fontSize: RFValue(10),
     
        color:Colors.darkGrey,
      //  marginTop:18,
        textAlign:'center',
       
         fontFamily: fonts['DMSans-Bold'],
      },
      content: {
        padding: 20,
        backgroundColor: Colors.white,
        marginBottom:15,
        borderColor:Colors.darkGrey,
        borderWidth:0.5,
        borderTopWidth:0
       
      },
     
      contentText: {
       
        fontSize: RFValue(12),
     
        color:Colors.darkGrey,
   
      
       
         fontFamily: fonts['DMSans-Medium'],
         textAlign:'left'
      },
      timeText: {
       
        fontSize: RFValue(8),
     
        color:Colors.grayMedium,
      marginTop:10,
        
       
         fontFamily: fonts['DMSans-Medium'],
      },
      
})

