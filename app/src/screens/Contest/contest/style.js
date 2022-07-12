
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../res/style/color'
import {fonts} from '../../../../res/style/fonts'
import { widthPercentageToDP, heightPercentageToDP } from '../../../../src/component/React Native Responsive Screen'


export const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 24,

  },
  heading:
  {
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 14,

  },
  mainheader:
  {

    flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignContent: 'center',
       

  },
  barimage:
  {
    marginTop: 18,
    width: 20,
    height: 15,
    marginLeft: 15
  },
  logoimage: {
    marginTop: 8,
    // width: 50,
    // height: 50
  },
  searchimage:
  {
    marginTop: 18,
    // width: 30,
    // height: 30,
    marginRight: 15
  },
  timetagblack: {
    backgroundColor: '#262C46',
    borderRadius: 20,
    //width: 120,
    padding:8,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 5,
   
  },
  matchstatusbar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 2,
    marginTop: 15,
    marginBottom: 20,
  },
  matchstatusbartext: {
    //fontWeight:'bold',
    //marginLeft:11,
    color: Colors.grayMedium,
    padding:5,
    fontFamily: fonts['DMSans-Medium'],
    fontSize: RFValue(10, 580),
        fontFamily: fonts['DMSans-Medium'],
        fontStyle:'normal',
        letterSpacing:1,
   

  },
  matchstatusbartextselected: {
    color: Colors.white,
 fontSize: RFValue(10, 580),
     fontFamily: fonts['DMSans-Medium'],
     fontStyle:'normal',
     letterSpacing:1,
     padding:5,




  },
  contentContainer: {
    paddingVertical: 10,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  leaugecontainer: {
    flex: 1,
    //flexDirection:'row',
    backgroundColor: "lightgrey",
    borderRadius: 20,
    margin: 10,
    marginTop: 0,
    marginBottom: 20,



  },
  jointag: {
    backgroundColor: "#30B4FF",
    borderRadius: 25,
    padding: 10,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 5,
    // marginRight:5,
  },
  bar: {
    backgroundColor: '#FD6D14',
    height: 8,

    borderRadius: 10,

  },
  barwhite: {
    backgroundColor: 'white',
    height: 8,

    borderRadius: 10,

  },
  buildteamtagLeft: {
    backgroundColor: Colors.orange,
    borderRadius: 50,
    width:'100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

  },
  buildteamtagRight: {
    backgroundColor: Colors.orange,
    borderRadius: 30,
    width:'60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

  },
  buildteamtagtext: {
  
    fontFamily: fonts['DMSans-Medium'],
    fontSize: RFValue(9, 580),
        fontFamily: fonts['DMSans-Medium'],
        fontStyle:'normal',
        letterSpacing:1,

    color: Colors.white,
  },
  line_1: {
    backgroundColor: Colors.black,
    height: 2,
    width: '47%',
    borderRadius: 10,

  },
  line_2: {
    backgroundColor: Colors.white,
    height: 2,
    width: '22.5%',
    borderRadius: 10,

  },
  line_3: {
    backgroundColor: 'white',
    height: 2,
    width: '22.5%',
    borderRadius: 10,

  },
  line_5: {
    backgroundColor: Colors.darkGrey,
    height: 2,
    width: '22.5%',
    borderRadius: 10,

  },
  loader_style: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '25%',
    marginBottom: '25%'

  },
  teambuildbartext: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 5,
    marginRight: 15,
    justifyContent: 'space-between',
  },
  buildTeamView:
  {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15,
    justifyContent: 'space-between'
  },
  statusBarView:
  {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15
  },
  statusBarText: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 3,
    marginRight: 15,
    justifyContent: 'space-between',
  },

  buildTeamNameView: {
    flexDirection: 'column',
    padding:13
  },

  leaugeName:
  {
    
    fontSize: RFValue(25, 580),
    color: Colors.darkGrey,
    fontFamily: fonts['DMSans-Bold'],
  },
  matchDateTimeView:
  {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 10
  },
  bottomButtonView:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 25,
    marginLeft:15,
    marginRight:15
   
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
buildteamtagsucc:{
    fontSize: RFValue(10, 580),
    color:'white',
},
segmentLeftStyle:{
width:50,
height:25,
borderBottomLeftRadius:5,
borderWidth:1,
justifyContent: 'center',
borderColor:Colors.white
},
segmentRightStyle:{
  width:30,
  height:25,
  borderBottomRightRadius:5,
  borderWidth:1,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor:Colors.white
  }

});

