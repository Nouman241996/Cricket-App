import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../../res/style/color';
import {fonts} from '../../../../res/style/fonts';
import { widthPercentageToDP } from '../../../component/React Native Responsive Screen';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: "center",
    backgroundColor:Colors.white,
    // alignItems: 'center',
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
  centerView:{
 alignItems: 'center',
  },
  buttonView: {
    justifyContent: 'center',
    marginTop: 50,
  },
  TextStyle: {
    fontWeight: 'bold',
    fontFamily: fonts['DMSans-Bold'],
    color:Colors.orange
    //line-through is the trick
},
EmailTextStyle: {
    fontWeight: 'bold',
    fontFamily: fonts['DMSans-Medium'],
    color:Colors.orange
    //line-through is the trick
},
mainheader:
      {
        flexDirection:'row', 
        height:50, 
        backgroundColor:Colors.mainbackground, 
        alignItems: 'center',
         justifyContent: 'space-between'
      },
      backBtn:
      {
      //  marginTop:19,
        //width: 30,
        //height: 20,
        marginLeft:12   
      },
      headerTitle:{

        fontSize: RFValue(12),
     
        color:Colors.darkGrey,
      //  marginTop:18,
        textAlign:'center',
         marginRight:'8%',
         fontFamily: fonts['DMSans-Bold'],

      },
    
footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    // marginBottom:30,
  },
  image: {
    flex: 1,
    //    width:'90%',
    //    height:300,
    // // resizeMode: "cover",
  },  

});
