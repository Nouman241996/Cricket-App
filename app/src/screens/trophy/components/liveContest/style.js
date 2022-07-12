import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../../../res/style/color';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../../../component/React Native Responsive Screen';
import {fonts} from '../../../../../res/style/fonts';

export const styles = StyleSheet.create({
  //My contests style

  container: {
    flex: 1,
    backgroundColor: Colors.white,
    // justifyContent: "center",
    // alignItems: "center"
  },
  myContestMain: {
    marginBottom: 70,
    marginTop: 10,
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
  matchstatusbartextselected: {
    //fontWeight:'bold',
    fontSize: RFValue(10, 580),
    //marginLeft:11,
    color: Colors.white,
    fontFamily: fonts['DMSans-Medium'],
    fontWeight: '500',
    letterSpacing: 2,
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Allstatusbartext: {
    //fontWeight:'bold',
    fontSize: RFValue(14, 580),
    //marginLeft:11,
    color: Colors.darkGrey,
  },

  tabbarView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.mainbackground,
    height: 45,
  },
  tabbarStyle: {
    borderRadius: 30,
    padding: 5,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 5,
  },
  loader_style: {
    marginTop: 10,
    justifyContent: 'center',
  },
  bottomButtonView: {
    width: '90%',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
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

  //My team style

  teamContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.mainbackground,

    borderRadius: 25,
    width: '92%',
    marginTop: '5%',
  },
  teamTagsText: {
    color: Colors.darkGrey,
  },
  editBtnstyle: {
    paddingRight: 40,
  },
  cricketerMainView: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  cricketerButtonView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  cricketerButtonText: {
    fontSize: RFValue(10),
  },
  cricketTagContianer: {
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
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
  teamNameAndBtnsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15,
  },
  teamCandVcImagesView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  teamNamesView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
    marginTop: '5%',
  },

  // my contest style

  contestFullHeader: {
    height: 130,
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
    // justifyContent:'center',
    // alignItems:'center',
    // padding:25,
    backgroundColor: Colors.darkGrey,
  },

  jointag: {
    backgroundColor: Colors.blue,
    borderRadius: 25,
    padding: 15,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 5,
    // marginRight:5,
  },
  confirmtag: {
    borderRadius: 25,
    padding: 9,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    // marginLeft: 5,
    marginRight: 10,
  },
  bar: {
    backgroundColor: Colors.orange,
    height: 8,

    borderRadius: 10,
  },
  barwhite: {
    backgroundColor: Colors.white,
    height: 8,

    borderRadius: 10,
  },
  buildteamtag: {
    backgroundColor: Colors.orange,
    borderRadius: 30,
    padding: 10,
    height: 40,
    marginBottom: 20,
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
    width: '23.5%',
    borderRadius: 10,
  },
  line_3: {
    backgroundColor: Colors.white,
    height: 2,
    width: '23.5%',
    borderRadius: 10,
  },
  loader_style: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '2%',
    // marginBottom: '25%',
  },
  textColor: {
    color: Colors.white,
  },
  contestFullText: {
    fontSize: RFValue(9, 580),
    marginLeft: 10,
    marginTop: 3,
  },
  textPrice: {
    color: Colors.orange,
  },
  teamContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.mainbackground,

    borderRadius: 25,
    width: '92%',
    marginTop: '5%',
  },
  editBtnstyle: {
    paddingRight: 40,
  },
  cricketerMainView: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  cricketerButtonView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  cricketerButtonText: {
    fontSize: RFValue(10),
    color: Colors.darkGrey,
  },
  cricketTagContianer: {
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  cricketTags: {
    height: 45,
    width: 45,
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  teamNameAndBtnsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15,
  },
  teamCandVcImagesView: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    // justifyContent:'space-around',
    marginTop: 15,
  },
  teamNamesView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
    marginTop: '5%',
  },

  containerJoinView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  prizePoolView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  barView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },

  contestFullBody: {
    marginTop: 25,
    marginLeft: 25,
  },
  teamRow: {marginLeft: 25, marginRight: 25},
  textgrayColor: {
    color: Colors.darkGrey,
  },
  teamBodylist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  horizonalLine: {
    width: '100%',
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
  },
  bottomItems: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },

  //live styling

  liveScoreTabScore: {
    flexDirection: 'column',
  },
  livescoreTabRow: {
     flexDirection: 'row',
    marginLeft: 10,
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  livescoreRow: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 7,
    justifyContent: 'flex-end',
  },
  liveScoreText: {
    color: Colors.darkGrey,
    fontFamily: fonts['DMSans-Medium'],
    fontWeight: '200',
  },
  liveScoreTextBottom: {
    color: Colors.darkgreywithopacity,
    fontFamily: fonts['DMSans-Medium'],
    fontWeight: '200',
  },
  notSelectedTags: {
    marginRight: 6,
    backgroundColor: Colors.darkGrey,

    height: 17,

    borderRadius: 17,
    // padding:10,
    paddingLeft: 6,
    paddingRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  roundScoreText: {
    fontSize: RFValue(7, 580),
    fontFamily: fonts['DMSans-Medium'],
    color: Colors.white,
  },
  notSelectedTagsOrange: {
    borderRadius: 20,

    backgroundColor: Colors.orange,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
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
  swipeUpDownMainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',

    backgroundColor: Colors.white,
    height: 50,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  footer: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    height: 60,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    // borderColor:Colors.grayMedium,
    // borderWidth:.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },

  // mycontest Design

  topHeading: {
    color: Colors.darkGrey,
    // fontSize: RFValue(14, 580),
    fontSize: RFValue(13),

    fontFamily: fonts['DMSans-Bold'],
    fontStyle: 'normal',
    letterSpacing: 1,
  },
  confirmtag: {
    // borderRadius: 25,
    // padding: 9,
    // height: 25,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
    // // marginLeft: 5,
    //  marginRight:10,

    height: 20,
    // justifyContent:'center',
    // marginTop:6

    borderRadius: 22,
    // padding:10,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  textColor: {
    color: Colors.darkGrey,
    fontSize: 8,
    fontFamily: fonts['DMSans-Medium'],
  },

  myTeamView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },

  //stats list design

  mainView: {
    //    backgroundColor: Colors.mainbackground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 5,
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

  //Leader board modal

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
  modalButtonView: {
    width: '30%',
    marginTop: 10,
    marginBottom: 5,
    alignSelf: 'center',
  },
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
  groundText:{
    fontWeight: 'bold',
    color: Colors.darkGrey,
    fontSize: RFValue(12),
    fontFamily: fonts['DMSans-Medium'],
    letterSpacing: 0.5,
  },
  livescoreTabRowTest: {
    flexDirection: 'row',
   marginLeft: 10,
   width: '100%',
   paddingLeft: 20,
   paddingRight: 20,
   marginTop: 20,
 },

  // buildteamtag: {
  //   backgroundColor: Colors.orange,
  //   borderRadius: 30,

  //   height: 40,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   alignContent: 'center',
  // },
  // buildteamtagtext: {
  //   fontSize: RFValue(12, 580),
  //   paddingLeft: 40,
  //   paddingRight: 40,
  //   color: Colors.white,
  //   fontFamily: fonts['DMSans-Medium'],
  // },
});
