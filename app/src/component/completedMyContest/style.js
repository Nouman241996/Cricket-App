import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../res/style/color'
import {fonts} from '../../../res/style/fonts'
import { heightPercentageToDP } from '../../component/React Native Responsive Screen';


export const styles = StyleSheet.create({

  
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  teamContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.mainbackground,
  
    borderRadius: 25,
    width: '92%',
    marginTop: '5%',
  
  },
  contestFullHeader: {
    // height:'38%',
      borderTopLeftRadius: 20,
      borderTopEndRadius: 20,
      // justifyContent:'center',
      // alignItems:'center',
      // padding:25,
      backgroundColor: Colors.darkGrey,
    },

       textColor: {
      color: Colors.white,
      fontFamily: fonts['DMSans-Medium'],
    },
    prizePoolView: {
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
      marginTop: 13,
      marginRight: 10,
      marginLeft: 10,
    },
    poolBarView:{flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginTop:20,marginRight:10,marginLeft:10,marginBottom:-4},
    barView:
    {flexDirection:'row',
    alignItems:'center', marginTop:10,marginRight:20,marginLeft:20,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  bar:{
    backgroundColor:'#FD6D14',
    height:8,
   
    borderRadius:10,

},
    textPrice: {
      color: Colors.orange,
      fontFamily: fonts['DMSans-Medium'],
    },
    prizewinnerView: {
     
      marginTop: 17,
      marginRight: 10,
      marginLeft: 10,
      paddingBottom:10
      // marginBottom:15
    },
    contestFullBody: {
      marginTop: 20,
      marginLeft: 15
    },

    textgrayColor: {
      color: Colors.grayMedium,
      fontFamily: fonts['DMSans-Medium'],
    },
    teamRow: { marginLeft: 15, marginRight: 15,marginTop:3 },

    teamBodylist: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 17,
    },
    wontag: {
      backgroundColor: '#78E542',
      borderRadius: 25,
      padding: 10,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      marginTop:-5
      // marginRight:5,
    },

    textgrayColor2: {
      color: Colors.darkGrey,
      fontFamily: fonts['DMSans-Bold'],
    },
    
horizonalLine: {
  width: '100%',
  borderBottomColor: Colors.white,
  borderBottomWidth: 1,
  marginTop:15
},

bottomItems:
  { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 15 }

,
editBtnstyle: {
  paddingRight: 40,
},
imagesView:{
  flexDirection:'row',
  flex:1,
  alignItems:'center', 
  justifyContent:'space-evenly',
   marginTop:20,
  height:35,
   backgroundColor:Colors.highLight,
  //  borderBottomLeftRadius:20,
  //  borderBottomRightRadius:20,
  
  },


});

