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
import { getApiSerive } from '../../../../utills/getDataService'

import { styles } from './style';
import { SafeAreaView } from 'react-native';
import MainHeader from '../header/header'
import { api_link } from '../../../../../res/constants'
import { Colors } from '../../../../../res/style/color'
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
const MyStats = (props) => {

    const userData = useSelector(
        (state) => state.userR.userSuccess,
    );
    const [wins, setWins] = useState('')
    const [totalPrice, setTotalprice] = useState('')
    const [series, setSeries] = useState('')
    const [contest, setContest] = useState('')
    const [matches, setMatches] = useState('')
    const [loader, setLoader] = useState(true)

    const getStatsDataFromApi = () => {
        getApiSerive
            .getApiClass(
                api_link.myStatsApi + userData.user_id,
            )
            .then((res) => {

                setWins(res.data.wins)
                setSeries(res.data.series)
                setTotalprice(res.data.total_prize)
                setContest(res.data.contest)
                setMatches(res.data.matches)
                setLoader(false)



            });
    }
    useEffect(
        () => {

            getStatsDataFromApi()

            //setIsLoading(true);

            // props.route.params.match_id_c




        }, []);
    const totalBalance = () => {

        return (
            <LinearGradient style={styles.linearcontainer} start={{ x: 0, y: 0.9 }} end={{ x: 0.9, y: 1 }} colors={[Colors.headerBackground1, Colors.headerBackground2]} >
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                    <Text style={styles.totalBalanceText}>Total Winnings</Text>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 2, marginBottom: 25 }}>
                    {loader ? <ActivityIndicator
                        color={Colors.orange}
                        style={{ height: '10%', width: 50, marginTop: 10 }}
                    /> :
                        <Text style={styles.totalBalancePriceText}>₹{totalPrice}</Text>
                    }
                </View>
            </LinearGradient>

        )
    }
    const stats = (leftHeading, leftAmount, rightHeading, rightAmount) => {

        return (
            <>
                <View style={styles.statsView} >
                    <View style={{ flexDirection: 'row', height: 90, }}>
                        <View style={styles.containerLeft}>
                            <View>
                                <Text style={styles.headingText}>{leftHeading}</Text>
                            </View>
                            <View>
                                {loader ? <ActivityIndicator
                                    color={Colors.orange}
                                    style={{ height: '10%', width: 50, marginTop: 10 }}
                                /> :
                                    <Text style={styles.subHeadingText}>{leftAmount}</Text>}
                            </View>
                        </View>
                        <View style={styles.containerRight}>
                            <View>
                                <Text style={styles.headingText}>{rightHeading}</Text>
                            </View>
                            <View>
                                {loader ? <ActivityIndicator
                                    color={Colors.orange}
                                    style={{ height: '10%', width: 50, marginTop: 10 }}
                                /> :
                                    <Text style={styles.subHeadingText}>{rightAmount}</Text>
                                }</View>
                        </View>

                    </View>

                </View>

            </>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <MainHeader
                navigation={props.navigation}
                screenName={"My Stats"}
            />
            {totalBalance()}
            {stats("CONTESTS", contest, "TEAMS CREATED", matches)}
            {stats("SERIES JOINED", series, "WINS", wins)}
        </SafeAreaView>
    )

}
export default MyStats
