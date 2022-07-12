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
import {useDispatch, useSelector} from 'react-redux';
const HowToPlay = (props) => {
    const drawerSwitcher=useSelector(
        (state)=> state.gameSwitcher.drawerSwitcherSuccess,
    )
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
                source={{ uri: 'https://t10cricket.live/home/how_to_play' }}
                renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
            />

        )
    }
    const LoadWebViewCricOne = () => {

        return (
            <WebView
                source={{ uri: 'https://t10cricket.live/home/how_to_play_cricone' }}
                renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
            />

        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <MainHeader
                navigation={props.navigation}
                screenName={"HOW TO PLAY"}
            />
             {drawerSwitcher==2? LoadWebView():LoadWebViewCricOne()}
        
           
        </SafeAreaView>
    )

}
export default HowToPlay
