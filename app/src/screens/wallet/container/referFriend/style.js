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
      codeText:{
        fontSize: RFValue(10),
        fontFamily: fonts['DMSans-Medium'],
        color:Colors.darkGrey,
      },
      referText:{
        fontSize: RFValue(22),
     
        color:Colors.grayMedium,
    
        textAlign:'center',
         fontFamily: fonts['DMSans-Bold'],
      },
      referTextAmount:{
        fontSize: RFValue(36),
     
        color:Colors.blue,
    
        textAlign:'center',
         fontFamily: fonts['DMSans-Bold'],
      },

      backBtn:
      {
      //  marginTop:19,
        //width: 30,
        //height: 20,
        marginLeft:12   
      },
      searchSection: {
   
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 43,
        borderWidth: 1,
        borderColor:Colors.grayMedium,
        borderRadius: 15,
        borderStyle: 'dashed',
        marginTop: 10 ,
        width:'70%'
    },
    inputTextStyle: { 
        height: 40,
        backgroundColor:Colors.white,
        //width:widthPercentageToDP(7),
        padding:12,      
        borderColor:Colors.logBack,
        borderRadius: 15,
        alignSelf:'center',
        width:'90%',
        justifyContent:'center',
        textAlign:'center',
        color:Colors.orange,
        fontSize: RFValue(15),
       
    },
   bonusText:{
        fontSize: RFValue(12),
     
        color:Colors.darkGrey,
    
        textAlign:'center',
         fontFamily: fonts['DMSans-Bold'],
      },
      contextText:{
        fontSize: RFValue(10),
     
        color:Colors.grayMedium,
    
        textAlign:'center',
         fontFamily: fonts['DMSans-Medium'],
      },
      notSelectedTags:
      {
          borderRadius: 20,
          borderColor: 'white',
          borderWidth: 2,
          backgroundColor: Colors.blue,
          width: '5%',
          height:'35%',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        
  
  
      },
      progressBarText:{
        fontSize: RFValue(10),
     
        color:Colors.darkGrey,
    
       
         fontFamily: fonts['DMSans-Medium'],
      },
})

