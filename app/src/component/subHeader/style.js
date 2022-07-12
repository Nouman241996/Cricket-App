
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../res/style/color'
import { widthPercentageToDP, heightPercentageToDP } from '../../../src/component/React Native Responsive Screen'
import {fonts} from '../../../res/style/fonts'


export const styles = StyleSheet.create({

   mainView:{
       backgroundColor: Colors.mainbackground,
       height: heightPercentageToDP(12),
    },
    MIdcview:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: Colors.mainbackground,
        marginLeft:13,
        marginRight:15 
    },
    teamnameText:{
        fontSize:RFValue(13),
        color: Colors.darkGrey,
        fontFamily:fonts['DMSans-Bold']
    },
    teamScoreText:{
        fontSize:RFValue(14),
        fontFamily:fonts['DMSans-Bold'],
        color: Colors.darkGrey,
    },
    completeButon:{
       
        // padding:7,
        height:25,
        // justifyContent:'center',
        // marginTop:6


        borderRadius:22,
        // padding:10,
        paddingLeft:15,
        paddingRight:15,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',

    },
    subText:{
        fontSize:RFValue(10),
        color:Colors.darkGrey,
        fontFamily:fonts['DMSans-Medium']
    }
});

