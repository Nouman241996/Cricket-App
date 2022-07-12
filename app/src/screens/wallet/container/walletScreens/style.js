import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../../res/style/color'
import { widthPercentageToDP, heightPercentageToDP } from '../../../../component/React Native Responsive Screen'
import {fonts} from '../../../../../res/style/fonts'

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
    recentTransactionContainer: {
      flexDirection:'column',
      marginLeft:15,
      marginRight:15,
      borderRadius:15,
      marginTop:10,
      backgroundColor:Colors.white,
      borderColor:Colors.darkGrey,
      borderWidth:1,
     

    },
    transactionText:
    {
      fontSize:RFValue(11),
      color:Colors.darkGrey,
      letterSpacing:1,
      fontFamily:fonts['DMSans-Bold']
    },
})

