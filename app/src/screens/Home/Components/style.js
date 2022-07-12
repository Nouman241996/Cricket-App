
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../../res/style/color'
 const SLIDER_WIDTH = Dimensions.get('window').width + 0;
 const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)



export const styles = StyleSheet.create({

   

      // couselCards styling 


      headingCrousel:
      {
        fontWeight:'bold',
        fontSize: 13,
        marginLeft:12,
        marginTop:26
  
      },
   
      

      // match Status styling   


      container: {
        flex: 1,
        padding: 24,
       
      },
      heading:
      {
        fontWeight:'bold',
        fontSize: RFValue(12, 580),
        marginLeft:14,
  
      },
      mainheader:
      {
        flexDirection:'row', 
        height:60, 
        backgroundColor:'white', 
        justifyContent: 'space-between'
      },
      barimage:
      {
        marginTop:19,
        width: 30,
        height: 25,
        marginLeft:15   
      },
      logoimage:{
        marginTop:8,
        width: 50,
        height: 50
      },
      searchimage:
      {
        marginTop:18,
        width: 30,
        height: 30
      },
      scrollercontainer:
      {
        flex:1,
         
         backgroundColor:'white',
         marginTop:5,
       
  
      },
      matchstatusbar:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        flex:2,
        marginTop:15,
        marginBottom:10,
      },
      matchstatusbartext:{
        //fontWeight:'bold',
        fontSize: RFValue(14, 580),
        marginLeft:11,
        color:'white',
        
      },
      matchstatusbartags:{
        backgroundColor: "#FD6D14",
        borderRadius:20,
        width:100,
        height:25,
        justifyContent:'center',
        alignContent:'center',
        
        
      },
      normal:
      
      {backgroundColor: "transparent",
      borderRadius:20,
      width:100,
      height:25,
      justifyContent:'center',
      alignContent:'center',
    },
    leaugecontainer:{
        flex:1,
        //flexDirection:'row',
        backgroundColor:'white',
        borderRadius:35,
        margin:10,
        marginTop:10,
        marginBottom:20,
    },
    vscontainer:{
      flexDirection:'row',
      flex:1,
      justifyContent: 'space-between',
      marginTop:0,
    },
    flagimage:
    {
      
      width:40,
      height:40,
    },
    vsflagleft:
    {
      height:70,
      width:70,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius:20,
      borderBottomRightRadius:20,
      //backgroundColor:imagecolorfor1,
      marginTop:-5,
     
     
    },
    vsflagright:
    { 
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor:'rgba(253, 109, 20,0.3)',
      height:70,
      width:70,
      borderTopLeftRadius:20,
      borderBottomLeftRadius:20,
      marginTop:-5
    },
    vsflagtext:{
      fontWeight:'bold',
      fontSize: RFValue(10, 580),
      marginTop:2,
    },
    vstext:{
      fontWeight:'bold',
      fontSize: RFValue(20, 580),
      marginTop:5,
    },
    timetag:{
        backgroundColor: 'rgba(253, 109, 20,0.8)',
        borderRadius:20,
        width:120,
        height:25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
    },
    timetagblack:{
      backgroundColor: 'rgba(0, 0, 0,0.9)',
      borderRadius:20,
      width:120,
      height:25,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'row',
  },
  
    chatuptag:{
        backgroundColor: "#D1C6A8",
        borderRadius:20,
        width:70,
        height:25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:5,
    },
    noofuserstag:{
      backgroundColor: "#D1C6A8",
        borderRadius:20, 
        justifyContent: 'center',
        alignItems: 'center',
        width:50,
        height:20,
        flexDirection:'row',               
    },  
  
  
});

