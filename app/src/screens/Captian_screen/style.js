
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../res/style/color'
import { widthPercentageToDP, heightPercentageToDP } from '../../../src/component/React Native Responsive Screen'
import {fonts} from '../../../res/style/fonts';


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 24,
       
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
        fontSize: RFValue(10, 580),
        color:'white',
    },
      bar:{
        backgroundColor:'black',
        height:8,
        width:'100%',
        borderRadius:10,

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
       marginTop:5,
        justifyContent: 'space-between',
        alignContent:'center'
      },
      barimage:
      {
        marginTop:18,
        width: 20,
        height: 15,
        marginLeft:15   
      },
      logoimage:{
        marginTop:8,
        // width: 50,
        // height: 50
      },
      searchimage:
      {
        marginTop:18,
        // width: 30,
        // height: 30,
        marginRight:15   
      },
      timetagblack:{
        backgroundColor: 'rgba(0, 0, 0,0.9)',
        borderRadius:20,
        width:120,
        height:25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        marginLeft:5,
    },
    matchstatusbar:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        flex:2,
        marginTop:15,
        marginBottom:20,
      },
      matchstatusbartext:{
        //fontWeight:'bold',
        fontSize: 12,
        //marginLeft:11,
        color:'black',
       
        
      },
      matchstatusbartextselected:{
        //fontWeight:'bold',
        fontSize: 12,
        //marginLeft:11,
        color:'white',
       
        
      },
      contentContainer: {
        paddingVertical: 10,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
      },
      leaugecontainer:{
        flex:1,
        //flexDirection:'row',
        backgroundColor:"lightgrey",
        borderRadius:20,
        margin:10,
        marginTop:0,
        marginBottom:20,
        


    },
    jointag:{
        backgroundColor: Colors.grayMedium,
        borderRadius:30,
        padding:12,
        height:23,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
       
       
        // marginRight:5,
    },
    jointagSelected:{
      backgroundColor: Colors.orange,
      borderRadius:30,
      padding:12,
      height:23,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent:'center',
     
     
      // marginRight:5,
  },
    swipeUpDownMainView:{
      flexDirection:'row',
       justifyContent:'center',
       width:'100%',
       alignContent:'center',
       alignItems:'center',
      
       backgroundColor:Colors.white,
       height:50,
       borderTopLeftRadius:25,
       borderTopRightRadius:25,
       shadowColor: "#000",
       shadowOffset: {
           width: 0,
           height: 4,
       },
       shadowOpacity: 0.32,
       shadowRadius: 5.46,
       
       elevation: 9,
   },
   swipeUpDownOpened:{
    flexDirection:'row', 
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    width:'100%',
    height:50,
    borderRadius:20,
   
},
    bar:{
            backgroundColor:'#FD6D14',
            height:8,
            width:'50%',
            borderRadius:10,

    },
    barwhite:{
        backgroundColor:Colors.white,
        height:8,
        width:'50%',
        borderRadius:10,

    },
   
    bar:{
        backgroundColor:Colors.darkGrey,
        height:2,
        width:'48%',
        borderRadius:10,
        

    },
    bar_2:{
      backgroundColor:Colors.darkGrey,
        height:2,
        width:'22%',
        borderRadius:10,

    },
    progressBar1:{
      flexDirection:'row',
      alignItems:'center',
       marginRight:15,
       marginLeft:15
      },
      circleSelected:{ 
        borderRadius: 100, 
        backgroundColor: Colors.darkGrey,
        height:10,
        width:'3%'
    },
    progressBar2:{
        backgroundColor:Colors.black,
        height:2,
        width:'22%',
        borderRadius:10,

    },
    circleUnSelected:{
         borderRadius: 100,
          backgroundColor: Colors.white,
          height:10,
          width:'3%'
        },
    progressBarTextView:{ 
        flexDirection: 'row',
         marginLeft: 15, 
         marginTop: 5, 
         marginRight: 15,
         justifyContent:'space-between' 
        },
    barwhite:{
        backgroundColor:'white',
        height:2,
        width:'22%',
        borderRadius:10,

    },
    contestcontainer: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        width:widthPercentageToDP(93),
        margin: 8,
        borderRadius: 20,
        justifyContent: 'space-evenly',
        height: 105,

    },
    captiantag:{
        backgroundColor:Colors.grayMedium,
        width:30,
        height:25,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
    },
    captiantag_selected:{
        backgroundColor:Colors.orange,
        width:30,
        height:25,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginRight:5,
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
    seperatorStyle:{ width:'100%',  backgroundColor:Colors.grayMedium, height:1}

  
});

