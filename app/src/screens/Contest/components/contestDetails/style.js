
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP} from '../../../../component/React Native Responsive Screen'
import { Colors } from '../../../../../res/style/color'
import {fonts} from '../../../../../res/style/fonts'


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
        alignContent: 'center'
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
    width: 120,
    height: 25,
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
    fontSize: RFValue(12, 580),
    //marginLeft:11,
    color: Colors.grayMedium,


  },
  matchstatusbartextselected: {
    //fontWeight:'bold',
    fontSize: RFValue(12, 580),
    //marginLeft:11,
    color: Colors.white,


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
    backgroundColor: Colors.orange,
    height:20,
    borderRadius:25,
    paddingLeft:15,
    paddingRight:15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',

  },
  typetag: {
    backgroundColor: Colors.highLight,
    height:20,
    borderRadius:25,
    paddingLeft:15,
    paddingRight:15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',


  },
  bar: {
    backgroundColor: '#FD6D14',
    height: 8,

    borderRadius: 10,

  },
  barwhite: {
    backgroundColor: Colors.barlightgrey,
    height: 8,

    borderRadius: 10,

  },
  buildteamtagLeft: {
    backgroundColor: Colors.orange,
    borderRadius: 30,
    width:'35%',
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
    fontSize: RFValue(12, 580),
   
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
    backgroundColor: 'black',
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
    marginTop: 5,
    marginRight: 15,
    justifyContent: 'space-between',
  },

  buildTeamNameView: {
    flexDirection: 'column', marginLeft: 15,
    marginRight: 15
  },

  leaugeName:
  {
    fontWeight: 'bold',
    fontSize: RFValue(30, 580),
    color: Colors.darkGrey
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
    marginBottom: 15,
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
  contestContainerView:{
    flexDirection:'column'
  },
  prizePoolView:{flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginTop:10,marginRight:15,marginLeft:15},
  barView:
  {flexDirection:'row',
  alignItems:'center', marginTop:10,marginRight:20,marginLeft:20,
  backgroundColor: Colors.mainbackground,
  borderRadius: 10,
},
  imagesView:{flexDirection:'row',alignItems:'center', justifyContent:'space-between', marginTop:10,marginRight:10,marginLeft:10,marginBottom:10},





  tabStyling: {
    backgroundColor: Colors.white
  },
  activeTabStyle: {
    backgroundColor: Colors.white,
    borderColor: 'white',
    borderBottomColor: 'red'
  },
  tabTextStyle: {
    color: Colors.grayMedium,
    fontFamily:fonts['DMSans-Medium'],
    fontSize: 12
  },
  activeTabTextStyle: {
    
    fontFamily:fonts['DMSans-Bold'],
    color: Colors.darkGrey,
    fontSize: 12
  },
  loader_style:{
    marginTop:10,
    justifyContent:'center'
  },

  ViewBackground: {
    alignSelf: 'center',
    padding: 20,
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

});

