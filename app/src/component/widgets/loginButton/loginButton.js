import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Image,
    ActivityIndicator,
} from 'react-native';
import { styles } from './style';

const LoginButton = ({ text, icon, iconStyles, textStyle,textspace, buttonColor,onPress,style }) => {
    return (
     
            <TouchableOpacity onPress={onPress}
             style={[styles.buttonStyle,{backgroundColor:buttonColor,...style}]}>
               
                <View style={iconStyles}>{icon}</View>
                <Text style={[styles.buttonText,{marginLeft:textspace}]}>{text}</Text>
            </TouchableOpacity>

       
    )
}
export default LoginButton;