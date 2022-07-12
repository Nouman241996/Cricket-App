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
import { RFValue } from 'react-native-responsive-fontsize';
import { styles } from './style';

const inputText = ({ placeholderStyle,placeholderTextColor,placeholdertext, Typetext,onChangeText,value ,length,borderCol,aCapitalize,editable,onBlurFunction}) => {
    return (
     

        <View style={{padding:2}}>
        <TextInput
        editable={editable}
        style={[styles.inputTextStyle,{borderColor:borderCol},{fontSize:RFValue(12)}]}
        placeholder={placeholdertext}
        keyboardType={Typetext}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        placeholderStyle={placeholderStyle}
        value={value}
        maxLength={length} 
        onBlur={onBlurFunction}
       
      />
</View>






            // <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:color,width:widthButton}]}>
            //     <Text style={styles.buttonText}>{text}</Text>
            // </TouchableOpacity>

       
    )
}
export default inputText;