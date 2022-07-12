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

const CustomButton = ({ text, icon, iconStyles, widthButton, color,textColor,onPress,type }) => {
  
    return (
     
            <TouchableOpacity onPress={onPress}
             style={[styles.buttonStyle,{backgroundColor:color,width:widthButton,borderRadius: type=='parent'? 14:50}]}>
               
                <View style={iconStyles}>{icon}</View>
                <Text style={[styles.buttonText,{color:textColor,letterSpacing: type=='parent'? 0.5:2}]}>{text}</Text>
            </TouchableOpacity>

       
    )
}
export default CustomButton;