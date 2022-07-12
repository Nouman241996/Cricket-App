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
    backgroundColor: Colors.white,
    // alignItems: 'center',
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
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 43,
    borderWidth: 1,
    borderColor: Colors.logBack,
    borderRadius: 15,
    marginTop: 10 
},
phoneView: {
   
  flexDirection: 'row',
  alignItems: 'center',
  height: 43,
  borderWidth: 1,
  borderColor:Colors.logBack,
  borderRadius: 15,
  backgroundColor:Colors.white,
  marginTop: 10 
},
phonenumber: { 
  //height: 43,
  backgroundColor:Colors.white,
  width:widthPercentageToDP(57),
  // padding:12,
 
  borderColor:Colors.logBack,
  borderRadius: 15,
  alignSelf:'center'
},

  input: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },

  inputTextStyle: {
    //height: 43,
    backgroundColor:Colors.white,
    width:widthPercentageToDP(60),
    padding:12,
   
    borderColor:Colors.logBack,
    borderRadius: 15,
    alignSelf: 'center',
  },

  passwordText: {
    fontSize: RFValue(10),
    color: Colors.basicBlue,
    fontFamily: fonts['DMSans-Bold'],
    textAlign: 'center',
  },
  registerText: {
    fontSize: RFValue(12),
    color: Colors.basicBlue,
    fontFamily: fonts['DMSans-Bold'],
    textAlign: 'center',
  },
  bottomButtonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 50,
  },
});
