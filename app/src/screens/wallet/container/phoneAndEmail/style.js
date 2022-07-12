import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../../res/style/color'
import { widthPercentageToDP, heightPercentageToDP } from '../../../../component/React Native Responsive Screen'
import { fonts } from '../../../../../res/style/fonts'

export const styles = StyleSheet.create({
  //My contests style



  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  input: {
    height: 40,
  
    borderWidth: 0.5,
    borderRadius:10,
    width:'100%'
  },
  ViewBackground: {
    alignSelf: 'center',
    padding: 10,
    width: widthPercentageToDP(80),
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 2,
    shadowColor: 'rgba(0,0,0,0.8)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.7,
    shadowRadius: 5,
  },
  verifyCode: {
    borderBottomWidth: 0,
    // padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
  },

  newFonts: {
    fontFamily: fonts['DMSans-Medium'],
    fontSize: 14,
    letterSpacing: 2,
    color: Colors.Courseborder,
    lineHeight: 16
  },
  code: {
    fontFamily: fonts['DMSans-Medium'],
    fontSize: 18,
    color: Colors.Courseborder,
  },
  emailError: {
    fontFamily: fonts['DMSans-Medium'],
    fontSize: 14,
    color: Colors.red,
  },

  panBarContainer: {
    flex: 1,
    marginTop: 15,

  },

  mainheader:
  {
    flexDirection: 'row',
    height: 50,
    backgroundColor: Colors.mainbackground,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  backBtn:
  {
    //  marginTop:19,
    //width: 30,
    //height: 20,
    marginLeft: 12
  },
  headerTitle: {

    fontSize: RFValue(12),

    color: Colors.darkGrey,
    //  marginTop:18,
    textAlign: 'center',
    marginRight: '8%',
    fontFamily: fonts['DMSans-Bold'],

  }, 
  selectedTab: {
    // backgroundColor: Colors.orange,
    borderRadius: 15,
    // padding: 1,

    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    //  marginLeft: 2,
    // marginRight: 2,
  },
  matchstatusbartext: {
    //fontWeight:'bold',
    fontSize: RFValue(10, 580),
    //marginLeft:11,
    color: Colors.grayMedium,
    fontFamily: fonts['DMSans-Medium'],
    fontWeight: '500',
    letterSpacing: 0.7,
    textAlign: 'center',
    paddingLeft: 1,
    paddingRight: 1,


  },
  matchstatusbarSubtext: {
    fontSize: RFValue(8, 580),
    //marginLeft:11,
    color: Colors.grayMedium,
    fontFamily: fonts['DMSans-Medium'],
    fontWeight: '500',
    letterSpacing: 0.2,
    textAlign: 'center',
    marginTop: 4,

  },
  matchstatusbartextselected: {
    //fontWeight:'bold',
    fontSize: RFValue(10, 580),
    //marginLeft:11,
    color: Colors.white,
    fontFamily: fonts['DMSans-Medium'],
    fontWeight: '500',
    letterSpacing: 2,
    textAlign: 'center'


  },
  bottomButtonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 15,

  },
  textDescription: {
    color: Colors.darkGrey,
    fontSize: RFValue(8, 580),
    fontFamily: fonts['DMSans-Medium'],
  },
  ViewBackground: {
    alignSelf: 'center',
    padding: 10,
    width: widthPercentageToDP(80),
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 2,
    shadowColor: 'rgba(0,0,0,0.8)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.7,
    shadowRadius: 5,
  },
  editInfoText: {
    fontSize: RFValue(12),
    letterSpacing: 1,
    color: Colors.grayMedium,
    fontFamily: fonts['DMSans-Bold'],


  },
  cardPlaceHolder: {
    fontSize: RFValue(18),

    color: Colors.darkGrey,
    fontFamily: fonts['DMSans-Bold'],
  },
  verificationTag: {
    //width:'25%',
    height: 15,
    padding: 8,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  verificationTagFailed: {
    height: 15,
    padding: 8,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    backgroundColor: Colors.redTagColor
  },
  verificationTagText: {
    fontSize: RFValue(8),

    color: Colors.darkGrey,
    fontFamily: fonts['DMSans-Bold'],
  },
  verificationTagTextFailed: {
    fontSize: RFValue(8),
    color: Colors.white,
    fontFamily: fonts['DMSans-Bold'],
  },
  reasonHeaderText: {
    fontSize: RFValue(12),
    color: Colors.redTagColor,
    fontFamily: fonts['DMSans-Bold'],
  },
  reasonParaText: {
    fontSize: RFValue(12),
    color: Colors.darkGrey,
    fontFamily: fonts['DMSans-Bold'],
  },
  modalItemText: {
    fontFamily: fonts['DMSans-Bold'],
    fontSize: 14,
    paddingLeft: 10,
    color: Colors.white,
  },
  spinner: {
    alignSelf: 'center',
    position: 'absolute',
    // top: '36%',
    marginBottom: 20,

  },
  ImageSelect: {
    alignSelf: 'center',
    width: 100,
    height: 100,

    borderColor: Colors.orange,
    borderWidth: 1,
    marginTop: 10,
    // elevation: 10,
    // shadowColor: 'rgba(0,0,0,0.8)',
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.7,
    // shadowRadius: 5,
  },
  modalItem: {
    flexDirection: "row",
    marginHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomColor: Colors.black,
    borderBottomWidth: 1
  },

})

