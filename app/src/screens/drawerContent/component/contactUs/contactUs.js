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

const ContacUs = (props) => {
    function LoadingIndicatorView() {

        return <ActivityIndicator
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center'
            }}
            color={Colors.orange} size='large' />

    }
    const LoadWebView = () => {

        return (
            <WebView
                source={{ uri: 'https://t10cricket.live/home/contact_us' }}
                renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
            />

        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <MainHeader
                navigation={props.navigation}
                screenName={"CONTACT US"}
            />
            {LoadWebView()}
        </SafeAreaView>
    )

}
export default ContacUs
