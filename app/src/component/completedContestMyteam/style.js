import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../res/style/color'
import { fonts } from '../../../res/style/fonts'
import { heightPercentageToDP } from '../../component/React Native Responsive Screen';


export const styles = StyleSheet.create({


  myteamContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.mainbackground,

    marginTop: 3,
    borderRadius: 25,
    width: '92%',
    height: '107%'

  },

  teamNameAndBtnsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15
  },
  teamBasicText: {
    fontFamily: fonts['DMSans-Medium'],
    fontSize: RFValue(14),
    color: Colors.darkGrey
  },
  pointsText: {
    fontFamily: fonts['DMSans-Bold'],
    fontSize: RFValue(10),
    color: Colors.grayMedium
  },
  points: {
    fontFamily: fonts['DMSans-Bold'],
    fontSize: RFValue(18),
    color: Colors.darkGrey
  },
  TeamText: {
    paddingTop: 10,
    fontFamily: fonts['DMSans-Medium'],
    fontSize: RFValue(10),
    color: Colors.black
  },
  TeamCodeText: {
    fontFamily: fonts['DMSans-Medium'],
    fontSize: RFValue(12),
    color: Colors.black
  },
  notSelectedTagsText: {
    color: Colors.white,
    fontFamily: fonts['DMSans-Medium'],
    fontSize: RFValue(10)
  },
  teamCandVcImagesView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginRight:5,
    marginLeft:5,
    marginTop: 15
  },

  cricketerMainView: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
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

  cricketTagContianer:
  {

    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row'
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

  notSelectedTags:
  {
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: Colors.darkGrey,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: -10,


  },

  cricketerButtonText: {
    fontSize: RFValue(10),
    fontFamily: fonts['DMSans-Medium'],
    color: Colors.darkGrey
  },

  teamNamesView:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
    marginTop: '5%'
  },
  teamTagsText: {
    color: Colors.darkGrey,
    fontFamily: fonts['DMSans-Medium'],
  },

});

