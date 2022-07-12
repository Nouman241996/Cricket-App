import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../../res/style/color';
import {fonts} from '../../../../res/style/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: "center",
    backgroundColor: Colors.white,
    // alignItems: 'center',
  },
  centerView: {
    alignItems: 'center',
  },
  buttonView: {
    justifyContent: 'center',
    marginTop: 50,
  },
  TextStyle: {
    fontWeight: 'bold',
    fontFamily: fonts['DMSans-Bold'],
    color: Colors.orange,
    //line-through is the trick
  },
  TextBasicStyle: {
    fontFamily: fonts['DMSans-Bold'],
    fontSize: 12,
    color: Colors.orange,
    //line-through is the trick
  },
  footer: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    // marginBottom:30,
  },
  image: {
    flex: 1,
    //    width:'90%',
    //    height:300,
    // // resizeMode: "cover",
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
    lineHeight: 16,
  },
  code: {
    fontFamily: fonts['DMSans-Medium'],
    fontSize: 18,
    color: Colors.Courseborder,
  },
  placeholderText: {
    fontFamily: fonts['DMSans-Regular'],
    color: Colors.ColorWhite,
    fontSize: 14,
    fontWeight: 'normal',
},
text1: {
    fontFamily: fonts['DMSans-Regular'],
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 30,
    color: 'rgb(233,40,40)',
},
});
