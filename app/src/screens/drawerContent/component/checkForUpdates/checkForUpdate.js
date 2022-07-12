import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Image,
    ActivityIndicator,
    RefreshControl,
    TextInput
} from 'react-native';

import { styles } from './style';
import { SafeAreaView } from 'react-native';
import MainHeader from '../header/header'
import { Colors } from '../../../../../res/style/color'
import { WebView } from 'react-native-webview';
import TermsAndPolicy from '../termsAndPolicy/termsAndPolicy';

const CheckForUpdate = (props) => {
   

    return (
        <SafeAreaView style={styles.container}>
            <MainHeader
                navigation={props.navigation}
                screenName={"CHECK FOR UPDATE"}
            />
           <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.updateText}>
                   You are using latest version
                </Text>
                <Text style={styles.subUpdateText}>
                    Your App is Up to Date
                </Text>
           </View>
        </SafeAreaView>
    )

}
export default CheckForUpdate
