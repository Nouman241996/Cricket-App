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
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import { styles } from './style';
import { Colors } from '../../../../res/style/color'
const label = ({text,textColor }) => {
    if(textColor==null || textColor=='')
    {
        textColor=Colors.darkGrey
    }
    return (
     

        <View style={{paddingLeft:12}}>
        <Text style={[styles.labelText,{color:textColor}]}>{text}</Text>
        
        </View>






            // <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:color,width:widthButton}]}>
            //     <Text style={styles.buttonText}>{text}</Text>
            // </TouchableOpacity>

       
    )
}
export default label;