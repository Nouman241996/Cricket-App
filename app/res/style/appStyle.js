import {StyleSheet} from 'react-native';
import {Colors} from "./color";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {fonts} from '../style/fonts'
//common style for app global heading and bold heading
export const globalStyles = {
  dateTouch: {
    width: 142
  },
  dateTouchBody: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateIcon: {
    width: 32,
    height: 32,
    marginLeft: 5,
    marginRight: 5
  },
  dateInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateText: {
    color: '#333'
  },
  placeholderText: {
    color: '#c9c9c9'
  },
  datePickerMask: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#00000077'
  },
  datePickerCon: {
    backgroundColor: '#fff',
    height: 0,
    overflow: 'hidden'
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 42,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTextText: {
    fontSize: 16,
    color: '#46cf98'
  },
  btnTextCancel: {
    color: '#666'
  },
  btnCancel: {
    left: 0
  },
  btnConfirm: {
    right: 0
  },
  datePicker: {
    marginTop: 42,
    borderTopColor: '#ccc',
    borderTopWidth: 1
  },
  disabled: {
    backgroundColor: '#eee'
  },
  ToolBarText: {
    color: Colors.black,
  },
  stauts: {
    marginTop: 20,
    //fontFamily: fonts['DMSans-Regular'],
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
  //matchList "no record found" style
  stautsLiist: {
    marginTop: -50,
    fontFamily: fonts['DMSans-Bold'],
    fontStyle:'normal',
    fontSize: RFValue(12),
    letterSpacing: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    color: Colors.NewBackgroundColor,
    // lineHeight: 12
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
}

