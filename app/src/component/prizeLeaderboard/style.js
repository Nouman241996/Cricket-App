
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../res/style/color'




export const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 24,

    },
    stauts: {
        marginTop: '25%',
        // fontFamily: fonts['Gotham-Bold'],
        fontSize: RFValue(16),
        letterSpacing: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        color: Colors.darkGrey,
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
        color: Colors.grayMedium,
        textAlign: 'center',
        lineHeight: 20
    },


});

