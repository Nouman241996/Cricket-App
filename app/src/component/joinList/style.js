
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { color } from 'react-native-reanimated';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../res/style/color'
import {fonts} from '../../../res/style/fonts'
import { widthPercentageToDP, heightPercentageToDP } from '../../../src/component/React Native Responsive Screen'



export const styles = StyleSheet.create({

   
    contentContainer: {
        paddingVertical: 10,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
      },
      leaugecontainer:{
        flex:1,
        //flexDirection:'row',
        backgroundColor:'#EFF2F8',
        borderRadius:20,
       marginLeft:10,
       marginRight:10,
       marginBottom:8,

       
       
        


    },
    seperatorStyleModal:{ width:'100%',  backgroundColor:Colors.seperatorColor, height:1},
    jointag:{
        backgroundColor: Colors.blue,
        borderRadius:25,
        padding:15,
        height:35,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        marginLeft:5,
        // marginRight:5,
    },
    bar:{
            backgroundColor:'#FD6D14',
            height:8,
           
            borderRadius:10,

    },
    barwhite:{
        backgroundColor:Colors.white,
        height:8,
       
        borderRadius:10,

    },
    buildteamtag:{
      backgroundColor: Colors.orange,
      borderRadius:30,
      padding:10,
      height:35,
      width:100,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent:'center',
      
  },
    buildteamtagtext:{
        fontSize: RFValue(12, 580),
        
        color:'white',
    },
    line_1:{
        backgroundColor:'black',
        height:2,
        width:'47%',
        borderRadius:10,

    },
    line_2:{
        backgroundColor:'white',
        height:2,
        width:'23.5%',
        borderRadius:10,

    },
    line_3:{
        backgroundColor:'white',
        height:2,
        width:'23.5%',
        borderRadius:10,

    },
    loader_style:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:'25%',
        marginBottom:'25%'
      
      },
      stauts: {
        marginTop: '25%',
        // fontFamily: fonts['Gotham-Bold'],
        fontSize: RFValue(16),
        letterSpacing: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        color: Colors.NewBackgroundColor,
        // lineHeight: 12
      },
      stautsNext: {
        width: 300,
        marginTop: 8,
        // fontFamily: fonts['Gotham-Medium'],
        fontSize: RFValue(12),
        letterSpacing: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        color: Colors.lightgray,
        textAlign: 'center',
        lineHeight: 20
      },
      verificationTagTextFailed:{
        fontSize: RFValue(9),
        color:Colors.darkGrey,
        fontFamily: fonts['DMSans-Bold'],
      },
      containerJoinView:{flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginRight:10, marginTop:10, marginLeft:10},
      prizePoolView:{flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginTop:10,marginRight:10,marginLeft:10},
      barView:
      {flexDirection:'row',
      alignItems:'center', marginTop:10,marginRight:20,marginLeft:20,
      backgroundColor: Colors.white,
      borderRadius: 10,
    },
    verificationTagFailed:{
      height:15,
      padding:8,
      borderRadius:30,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:10,
      backgroundColor:Colors.confirmLight
    },
    verificationTagNotConfirmed:{
      height:15,
      padding:8,
      borderRadius:30,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:10,
     
      borderWidth:1,
      borderColor:Colors.confirmLight
    },
    verificationTagText:{
      fontSize: RFValue(8),
     
      color:Colors.darkGrey,
      fontFamily: fonts['DMSans-Bold'],
    },
    ViewBackground: {
      alignSelf: 'center',
      padding: 10,
      width: widthPercentageToDP(80),
      justifyContent: 'center',
      backgroundColor: Colors.mainbackground,
      borderRadius: 10,
      elevation: 2,
      shadowColor: 'rgba(0,0,0,0.8)',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.7,
      shadowRadius: 5,
    },
    imagesView:{
      flexDirection:'row',
      flex:1,
      alignItems:'center', 
      justifyContent:'space-evenly',
       marginTop:20,
      height:35,
       backgroundColor:Colors.highLight,
       borderBottomLeftRadius:20,
       borderBottomRightRadius:20,
      
      },});

