import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../res/style/color'
import {fonts} from '../../../res/style/fonts'



import { widthPercentageToDP, heightPercentageToDP } from '../../../src/component/React Native Responsive Screen'


export const styles = StyleSheet.create({

   container:{
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
   },

   ViewBackground: {
    alignSelf: 'center',
    padding: 10,
    width: widthPercentageToDP(83),
    justifyContent: 'center',
    backgroundColor: Colors.mainbackground,
    borderRadius: 10,
    elevation: 2,
    shadowColor: 'rgba(0,0,0,0.8)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.7,
    shadowRadius: 5,
    
  },

  seperatorStyle:{ width:'100%',  backgroundColor:Colors.grayMedium, height:1},

  buildteamtag:{
    backgroundColor: Colors.orange,
    borderRadius:30,
    padding:10,
    height:35,
    width:widthPercentageToDP(78),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
    
},
buildteamtagtext:{
  fontSize: RFValue(12, 580),
  color:'white',
  
},
inputTextStyle: { 
  height: 43,
  width:widthPercentageToDP(78),
  padding:12,
  borderWidth: 1,
borderRadius:10,alignSelf:'center',

  fontSize: RFValue(12),
  color: Colors.black
 ,fontFamily:fonts['DMSans-Medium']
 },










   myContestMain:{
marginBottom:70,
marginTop:10,
   },

   matchstatusbartext:{
    //fontWeight:'bold',
    fontSize: RFValue(12, 580),
    //marginLeft:11,
    color:Colors.darkGrey,
    
    
  },

  tabbarView:{
    flexDirection:'row',justifyContent:'space-evenly',backgroundColor:Colors.mainbackground,
  },
  tabbarStyle : {
    borderRadius:30,
    padding:5,
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
    marginTop:5,   
  },
  loader_style:{
    marginTop:10,
    justifyContent:'center'
  },
  teamContainer:{
      flexDirection:'column',
      backgroundColor:'#EFF2F8',
     
      marginTop:8,
      borderRadius:25,
      width:'92%',
      
  },
  editBtnstyle:{
        paddingRight:40,
  },
  cricketerMainView:{
    flexDirection: 'row',
     marginLeft: 15,
      marginRight: 15,
       marginTop: 15, 
       justifyContent: 'space-between',
        alignItems: 'center',
    alignContent: 'center', 
    marginBottom: 15
},
cricketerButtonView:{
    flexDirection: 'column',
     justifyContent: 'center', 
     alignContent: 'center', 
     alignItems: 'center' ,
    
   },
   notSelectedTags:
    {
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'black',
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginLeft: -10,


    },
    cricketerButtonText:{ 
        fontSize: RFValue(10) 
    },
   cricketTagContianer:
                        {
                         
                            alignItems: 'center',
                            alignContent: 'center',
                            flexDirection: 'row'
                        },
   cricketTags: {
    height: 45,
    width: 45,
    backgroundColor: Colors.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    

},
teamNameAndBtnsView:{
   flexDirection: 'row', 
   justifyContent: 'space-between', 
   alignContent: 'center',
    alignItems: 'center',
    marginRight:15,
    marginLeft:15,
    marginTop:25
   },
   teamCandVcImagesView:{
      flexDirection: 'row', justifyContent: 'space-evenly',
      marginTop:15
     },
     teamNamesView:
     { flexDirection: 'row', justifyContent: 'center',
      alignContent: 'center', 
     alignItems: 'center',
     marginBottom:20,marginTop:15 
    },

});

