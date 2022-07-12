import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../../res/style/color'
import { fonts } from '../../../../../res/style/fonts'
import { heightPercentageToDP } from '../../../../component/React Native Responsive Screen';


export const styles = StyleSheet.create({



  mainContainer: { backgroundColor: 'white', flex: 1 },
  // tabs style
  tabbarView: {
    flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.mainbackground,
    paddingLeft:10
  },
  tabbarStyle: {


    borderRadius:22,
    // padding:10,
    height:30,
    paddingLeft:10,
    paddingRight:10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
    
  },

  tabsText: {
    //fontWeight:'bold',
    fontSize: RFValue(12),
    fontFamily: fonts['DMSans-Medium'],
    //marginLeft:11,
    color: Colors.darkGrey,
    letterSpacing: 0.5


  },
  tabBarView: {
    backgroundColor: Colors.mainbackground,
    height: 48,
  },
  myTeamView: { flexDirection: 'row', justifyContent: 'center',marginVertical: 15, },

// scored card

mainView:{
  //    backgroundColor: Colors.mainbackground,
  flexDirection:'row',justifyContent:'space-between',paddingLeft:15,paddingTop:15,paddingBottom:5
  },
 

  listHeadingscore:{
    color:Colors.grayMedium,
    fontSize: RFValue(10, 580),
    fontFamily: fonts['DMSans-Bold'],
    fontStyle:'normal',
    letterSpacing:1,

  
   },

   footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor:Colors.white,
    flexDirection:'row',
    height:60,
       borderTopLeftRadius:25,
       borderTopRightRadius:25,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    // borderColor:Colors.grayMedium,
    // borderWidth:.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    
    elevation: 23,
  },
  topHeading:{
    color:Colors.darkGrey,
    // fontSize: RFValue(14, 580),
    fontSize:RFValue(13),
    fontFamily: fonts['DMSans-Bold'],
    fontStyle:'normal',
     letterSpacing:1,
  
  
   },
   confirmtag: {
     borderRadius:25,
     // padding:10,
     height:20,
     paddingLeft:8,
     paddingRight:8,
     justifyContent: 'center',
     alignItems: 'center',
     alignContent:'center',
  },
  textColor: {
    color: Colors.darkGrey,
    fontSize:8,
    fontFamily: fonts['DMSans-Medium'],
  },
  groundText:{
    fontWeight: 'bold',
    color: Colors.darkGrey,
    fontSize: RFValue(12),
    fontFamily: fonts['DMSans-Medium'],
    letterSpacing: 0.5,
  },

//Leaderboard Modal

 swipeUpDownOpened: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 20,
  },

  topHeadingModal: {
    color: Colors.darkGrey,
    // fontSize: RFValue(14, 580),
    fontSize: 12,
    fontFamily: fonts['DMSans-Bold'],
    fontStyle: 'normal',
    //  letterSpacing:1,
  },
  modaltag: {
    height: 25,
    // justifyContent:'center',
    // marginTop:6

    borderRadius: 25,
    // padding:10,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },



//prizing modal



  stauts: {
    marginTop: '25%',
    // fontFamily: fonts['Gotham-Bold'],
    fontSize: RFValue(16),
    letterSpacing: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    color: Colors.darkGrey,
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
    color: Colors.grayMedium,
    textAlign: 'center',
    lineHeight: 20,
  },
  listHeading: {
    color: Colors.darkGrey,
    fontSize: RFValue(10, 580),
    fontFamily: fonts['DMSans-Bold'],
    fontStyle: 'normal',
    // letterSpacing:1,
  },

  listHeadingscore: {
    color: Colors.grayMedium,
    fontSize: RFValue(10, 580),
    fontFamily: fonts['DMSans-Bold'],
    fontStyle: 'normal',
    letterSpacing: 1,
  },

  mainBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 1,
    paddingRight: 12,
  },
  listBody: {
    color: Colors.darkGrey,
    fontSize: RFValue(9, 580),
    fontFamily: fonts['DMSans-Medium'],
    fontStyle: 'normal',
  },
  modalButtonView: {
    width: '30%',
    marginTop: 10,
    marginBottom: 5,
    alignSelf: 'center',
  },
  buildteamtag: {
    backgroundColor: Colors.orange,
    borderRadius: 30,

    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  buildteamtagtext: {
    fontSize: RFValue(12, 580),
    paddingLeft: 40,
    paddingRight: 40,
    color: Colors.white,
  },
  contentContainer: {
    paddingVertical: 0,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  selectedTab: {
    borderRadius: 30,
    // padding:10,
    height: 30,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  
  matchstatusbartext: {
    //fontWeight:'bold',
    fontSize: RFValue(10, 580),
    //marginLeft:11,
    color: Colors.grayMedium,
    fontFamily: fonts['DMSans-Medium'],
    fontWeight: '500',
    letterSpacing: 2,
  },

});

