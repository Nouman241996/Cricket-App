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
const PointSystem = (props) => {
const drawerSwitcher=useSelector(
    (state)=> state.gameSwitcher.drawerSwitcherSuccess,
)

    function LoadingIndicatorView() {
       if(drawerSwitcher==1){
           console.log('i am parent drawer')
       }
       if(drawerSwitcher==2){
        console.log('i am child drawer')
    }
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
    const pointsWebView = () => {

        return (
            <WebView
                source={{  uri: 'https://t10cricket.live/points-system' }}
                renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
            />

        )
    }
    const pointsWebViewCricOne = () => {

        return (
            <WebView
                source={{  uri: 'https://t10cricket.live/home/points_system_cricone' }}
                renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
            />

        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <MainHeader
                navigation={props.navigation}
                screenName={"POINTS SYSTEM"}
            />
            {drawerSwitcher==2? pointsWebView():pointsWebViewCricOne()}
        </SafeAreaView>
    )

}
export default PointSystem
