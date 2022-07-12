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
import { Colors } from '../../../../res/style/color'
import {fonts} from '../../../../res/style/fonts'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const addButton = ({onPress }) => {
    return (
     
            <TouchableOpacity onPress={onPress}
           >
               
               <View style={styles.buttonStyle}>
                <Text style={styles.buttonText}>+</Text>
              </View>
            </TouchableOpacity>

       
    )
}
export default addButton;