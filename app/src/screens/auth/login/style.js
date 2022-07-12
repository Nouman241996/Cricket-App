import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../../res/style/color';
import {fonts} from '../../../../res/style/fonts';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../../../src/component/React Native Responsive Screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: "center",
    alignItems: 'center',
  },
  

  loginLogo: {
    marginTop: 30,
  },
  cricketoneText: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    fontFamily: fonts['DMSans-Bold'],
    color: Colors.bluedark,
    letterSpacing: 4,
    marginTop: 10,
  },
  buttonView: {
    justifyContent: 'center',
    marginTop: 50,
  },

  lineView: {flexDirection: 'row', alignItems: 'center', marginTop: 20},
  lineStyle: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.logBackgraound,
  },
  lineText: {
    width: 50,
    textAlign: 'center',
    color: Colors.logBackgraound,
    fontFamily: fonts['DMSans-Bold'],
    fontStyle: 'normal',
    fontWeight: 'bold',
  },

  TextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: fonts['DMSans-Bold'],
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
    marginBottom: 30,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 43,
    borderWidth: 1,
    borderColor: Colors.logBack,
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginTop: 10,
  },
  inputTextStyle: {
    //height: 43,
    backgroundColor: Colors.white,
    width: widthPercentageToDP(57),
    // padding:12,

    borderColor: Colors.logBack,
    borderRadius: 15,
    alignSelf: 'center',
  },
  errorStyle:{
    width:widthPercentageToDP(75),
  },
  inputTextStylePassword: {
    //height: 43,
    backgroundColor: Colors.white,
    width:widthPercentageToDP(57),
    padding: 12,

    borderColor: Colors.logBack,
    borderRadius: 15,
    alignSelf: 'center',
  },
  passwordSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 43,
    borderWidth: 1,
    borderColor: Colors.logBack,
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: Colors.white,
  },

  loaderStyle:{
  flex:1,
  alignItems:'center',
    justifyContent:'center'
  },
  ViewBackground: {
    // alignSelf: 'center',
    flex:1,
    padding: 10,
    width: widthPercentageToDP(100),
    // justifyContent: 'center',
    backgroundColor: Colors.mainbackground,
    borderRadius: 1,
    elevation: 2,
    shadowColor: 'rgba(0,0,0,0.8)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.7,
    shadowRadius: 5,
  },
  header:{
    // justifyContent:'center',
    alignItems:'center',
   
  },
  maintenance:{
      justifyContent:'center',
     alignItems:'center',
     marginTop:-18,
    
     flex:1
  },
  stautsNextList: {
    width: 300,
  
    fontFamily: fonts['DMSans-Medium'],
    fontStyle:'normal',
    fontSize: RFValue(12),
    letterSpacing: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    color: Colors.lightgray,
    textAlign: 'center',
    lineHeight: 20
  },
});
