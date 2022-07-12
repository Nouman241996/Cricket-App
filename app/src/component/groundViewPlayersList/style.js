
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { color } from 'react-native-reanimated';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../res/style/color'
import {fonts} from '../../../res/style/fonts'


export const styles = StyleSheet.create({

    cricketerNameText:{ 
        top:5,
        color:Colors.white,
        fontSize:RFValue(12),
        fontFamily: fonts['DMSans-Medium'],
        fontWeight:'700',
        letterSpacing:2,
    },
    });

