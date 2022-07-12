import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Image,
    ActivityIndicator,
} from 'react-native';
import { styles } from './style';

const loginInputText = ({ placeholdertext, Typetext,onChangeText,value,placeholdertextcolor }) => {
    return (
     

       
        <TextInput
        style={styles.inputTextStyle}
        placeholder={placeholdertext}
        placeholderTextColor={placeholdertextcolor}
        keyboardType={Typetext}
        onChangeText={onChangeText}
        value={value}
        
      />







            // <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:color,width:widthButton}]}>
            //     <Text style={styles.buttonText}>{text}</Text>
            // </TouchableOpacity>

       
    )
}
export default loginInputText;