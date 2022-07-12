import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Touchable,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  TabHeading,
  Icon,
} from 'native-base';
import Modal from 'react-native-modal';
import { icons, api_link } from '../../../../../res/constants';
// import CountDown from '../../../component/countComponent/countdown'
// import LinearGradient from 'react-native-linear-gradient';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './style';
import { Colors } from '../../../../../res/style/color';
import { fonts } from '../../../../../res/style/fonts';
import CoinSvg from '../../../../../res/images/svg/coinimage.svg';
import BoardBlackSvg from '../../../../../res/images/svg/boardblack.svg';
import BoardGraySvg from '../../../../../res/images/svg/boardgray.svg';
import TrophyBlackSvg from '../../../../../res/images/svg/trophyblack.svg';
import TrophyGraySvg from '../../../../../res/images/svg/trophygray.svg';

import PriceArrowSvg from '../../../../../res/images/svg/priceArrow.svg';
import PrizeLeaderboard from '../../../../component/prizeLeaderboard/prizeLeaderboard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GetApiService, { getApiSerive } from '../../../../utills/getDataService';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

var raw;

const contestDetails = (props) => {
  const { t } = useTranslation();
  const {
    team1shortname1,
    team2shortname2,
    contestdata,
    matchid_c,
  } = props.route.params;
  const [currentTab, setCurrentTab] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setdata] = useState([]);
  const [leaderdata, setleaderdata] = useState([]);

  const [leaderLoader, setleaderLoader] = useState(true);

  const [prizeLoader, setprizeLoader] = useState(true);

  const [activeState, setActiveState] = useState(0);


  const userData = useSelector(
    (state) => state.userR.userSuccess,
  );



  useEffect(() => {
    // console.log("sdgajdgj",contestdata)

    fethPrize();
    // fethLeaderBoard()
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const fethPrize = () => {
    setdata([]);
    getApiSerive
      .getApiClass(api_link.prizeapi + 'contest_id=' + contestdata.contest_id)
      .then((res) => {
        //console.log('first tab result is:', res.winning_information)
        raw = {
          "prizeBreakup": res.winning_information,
          "contestData": contestdata

        }

        setdata(res.winning_information);
        setprizeLoader(false);
      });
  };

  const fethLeaderBoard = () => {





    console.log("leaderboard url is:", api_link.leaderboardapi + 'contest_id=' + contestdata.contest_id + '&matches_id=' + contestdata.match_id + '&user_id=' + userData.user_id)



    // console.log("leaderboard url is:",api_link.leaderboardapi +
    // 'contest_id=' +
    // contestdata.contest_id +
    // 'user_id' +
    // contestdata.match_id,)

    setleaderdata([]);
    getApiSerive
      .getApiClass(
        api_link.leaderboardapi + 'contest_id=' + contestdata.contest_id + '&matches_id=' + contestdata.match_id + '&user_id=' + userData.user_id
      )
      .then((res) => {
        // console.log('leaderboard is:', res.data.leaderboard)
        if (res.data.leaderboard) {
          setleaderdata(res.data.leaderboard);
          setleaderLoader(false);
        } else {
          // console.log('leaderboard false:')
          setleaderdata([])
          setleaderLoader(false);
        }


        //   setdata(res.winning_information)
      });
  };

  const mainheader = () => {
    return (
      <View style={styles.mainheader}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image source={icons.arrowback} style={styles.barimage} />
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: RFValue(12),
              color: Colors.darkGrey,
              fontFamily: fonts['DMSans-Bold'],
            }}>
            {team1shortname1} {t('homePage:vs')} {team2shortname2}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 15,
          }}>
          <Text
            style={{
              fontSize: RFValue(18, 580),
              fontFamily: fonts['DMSans-Bold'],
              color: Colors.darkGrey,
            }}></Text>
        </View>
      </View>
    );
  };

  const contestContainer = () => {
    return (
      <View style={styles.contestContainerView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 15,
            marginRight: 15,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.typetag}>
            <Text
              style={{
                color: Colors.darkGrey,
                fontSize: RFValue(10, 580),
                fontFamily: fonts['DMSans-Medium'],
                textTransform: 'uppercase',
              }}>
              {contestdata.contest_tag}
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* {contestdata.join_team!=0?<CoinSvg />:null} */}
            <Text
              style={{
                fontSize: RFValue(14, 580),
                fontFamily: fonts['DMSans-Bold'],
                color: Colors.darkGrey,
              }}>
              {' '}
              ₹{contestdata.entry}
            </Text>
            <TouchableOpacity
              disabled={
                contestdata.total_team - contestdata.join_team <= 0 || contestdata.remain_to_join <= 4
                  ? true
                  : false
              }
              onPress={() => {


                if (contestdata.contest_type == 'not_confirm') {
                  props.navigation.navigate('Teambuild', {
                    matchid_1: matchid_c,
                    contestid: contestdata.contest_id,
                    contestdata: contestdata,
                    contesttag: contestdata.contest_tag,
                    type: 'jointag',

                  });
                } else if (contestdata.contest_type == 'confirm') {
                  props.navigation.navigate('Teambuild', {
                    matchid_1: matchid_c,
                    contestid: contestdata.contest_id,
                    contesttag: contestdata.contest_tag,
                    rawData: raw,
                    type: 'jointag',
                    status: 'post'
                  });
                }
              }}
              style={[styles.jointag, {
                backgroundColor: contestdata.total_team - contestdata.join_team <= 0 || contestdata.remain_to_join <= 0 || contestdata.firstprize <= 0
                  ? Colors.grey : Colors.orange
              }]}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: RFValue(10, 580),
                  fontFamily: fonts['DMSans-Medium'],
                }}>
                {t('common:join')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* {contestdata.join_team!=0? <View style={{flexDirection:'row',  marginLeft: 15,marginTop:10 }}>
                <Text style={{ color: Colors.darkGrey, fontSize: RFValue(12, 580) }}>CONTEST TYPE LABEL</Text>
                </View>:null} */}
      </View>
    );
  };
  const prizePoolView = () => {
    return (
      <View style={styles.prizePoolView}>
        <View>
          <Text
            style={{
              fontSize: RFValue(10, 580),
              color: Colors.darkGrey,
              fontFamily: fonts['DMSans-Bold'],
            }}>
           {t('common:prizePool')}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={toggleModal}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <PriceArrowSvg height={9} width={9} />


            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: RFValue(10, 580),
              color: Colors.orange,
              fontFamily: fonts['DMSans-Medium'],
            }}>
            {' '}
            ₹{contestdata.prize_pool}
          </Text>
        </View>
      </View>
    );
  };
  const barView = () => {
    return (
      <View style={styles.barView}>
        <Text
          style={[
            styles.bar,
            {
              width:
                parseFloat(
                  (contestdata.join_team / contestdata.total_team) * 100,
                ) > 100
                  ? '100%'
                  : parseFloat(
                    (contestdata.join_team / contestdata.total_team) * 100,
                  ) + '%',
            },
          ]}>
          .
        </Text>
      </View>
    );
  };
  const imageView = () => {
    return (
      <View style={styles.imagesView}>
        <Text></Text>
        <Text></Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              marginRight: 5,
              fontSize: RFValue(10, 580),
              color: Colors.grayMedium,
              fontFamily: fonts[' DMSans-Medium'],
            }}>
            {contestdata.total_team - contestdata.join_team} {t('common:spotLeft')}{' '}
          </Text>
          <Text
            style={{
              marginRight: 5,
              fontSize: RFValue(10, 580),
              color: Colors.darkGrey,
              fontFamily: fonts[' DMSans-Medium'],
            }}>
            {contestdata.join_team} / {contestdata.total_team}{' '}
          </Text>

          {/* circle image view hide */}

          {/* {contestdata.join_team!=0? <View style={{flexDirection:'row'}}>
                <Image source={icons.profile} style={{ marginRight: -8, height: 20, width: 20, borderColor: Colors.white, borderWidth: 2, borderRadius: 50 }} />
                <Image source={icons.profile} style={{ marginRight: -8, height: 20, width: 20, borderColor: Colors.white, borderWidth: 2, borderRadius: 50 }} />
                <Image source={icons.profile} style={{ height: 20, width: 20, borderColor: Colors.white, borderWidth: 2, borderRadius: 50 }} />
                </View>
            :null  } */}
        </View>
      </View>
    );
  };

  const prizeTab = () => {
    return (
      <View>
        <PrizeLeaderboard data={data} type={'prize'}></PrizeLeaderboard>
      </View>
    );
  };

  const leaderTab = () => {
    return (
      <View>
        <PrizeLeaderboard type={'leader'} data={leaderdata}></PrizeLeaderboard>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, }}
    >
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        {mainheader()}
        {contestContainer()}
        {prizePoolView()}
        {barView()}
        {imageView()}

        <Tabs
          tabBarUnderlineStyle={{ borderBottomWidth: 4 }}
          tabBarUnderlineStyle={{
            backgroundColor: activeState ? Colors.orange : Colors.black,
          }}
          onChangeTab={({ i }) => {
            setActiveState(i);
            if (i === 1) {
              fethLeaderBoard();
            }

            setCurrentTab(i);
          }}>
          <Tab
            heading={
              <TabHeading
                style={
                  currentTab === 0 ? styles.activeTabStyle : styles.tabStyling
                }>
                {currentTab === 0 ?
                  <TrophyBlackSvg
                    height={14}
                    width={14}
                    style={{ marginRight: 5 }}
                  ></TrophyBlackSvg>
                  : <TrophyGraySvg
                    height={14}
                    width={14}
                    style={{ marginRight: 5 }}
                  ></TrophyGraySvg>

                }


                <Text
                  style={
                    currentTab === 0
                      ? styles.activeTabTextStyle
                      : styles.tabTextStyle
                  }>
                  {t('common:prizeBreakUp')}
                </Text>
              </TabHeading>
            }
            tabStyle={styles.tabStyling}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.tabTextStyle}
            activeTextStyle={styles.activeTabTextStyle}>
            {prizeLoader ? (
              <View style={styles.loader_style}>
                <ActivityIndicator color={Colors.orange} />
              </View>
            ) : (
              <View style={{ flex: 1, backgroundColor: Colors.mainbackground }}>
                <PrizeLeaderboard data={data} type={'prize'}></PrizeLeaderboard>
              </View>
            )}
          </Tab>

          <Tab
            heading={
              <TabHeading
                style={
                  currentTab === 0 ? styles.activeTabStyle : styles.tabStyling
                }>
                {currentTab === 1 ?
                  <BoardBlackSvg
                    height={14}
                    width={14}
                    style={{ marginRight: 10 }}
                  ></BoardBlackSvg>
                  : <BoardGraySvg
                    height={14}
                    width={14}
                    style={{ marginRight: 10 }}
                  ></BoardGraySvg>

                }
                <Text
                  style={
                    currentTab === 1
                      ? styles.activeTabTextStyle
                      : styles.tabTextStyle
                  }>
                  {t('common:leaderboard')}
                </Text>
              </TabHeading>
            }
            tabStyle={styles.tabStyling}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.tabTextStyle}
            activeTextStyle={styles.activeTabTextStyle}>
            {leaderLoader ? (
              <View style={styles.loader_style}>
                <ActivityIndicator color={Colors.orange} />
              </View>
            ) : (
              <View style={{ flex: 1, backgroundColor: Colors.darkGrey }}>
                <PrizeLeaderboard type={'leader'} data={leaderdata}></PrizeLeaderboard>
              </View>
            )}
          </Tab>
        </Tabs>

        <Modal
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            margin: 0,
          }}
          onBackButtonPress={() => setModalVisible(false)}
          onBackdropPress={() => setModalVisible(false)}
          visible={isModalVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
          hardwareAccelerated
        >

          <View style={styles.ViewBackground}>


            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View style={{ padding: 15, alignSelf: 'center' }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: RFValue(22),
                    fontWeight: 'bold',
                  }}>
                  {t('common:winningBreakDown')}
                </Text>
              </View>

              <PrizeLeaderboard data={data} type={'winning'}></PrizeLeaderboard>
              <View style={{ alignSelf: 'center', padding: 20 }}>
                <Text style={{ fontSize: RFValue(14), color: Colors.grayMedium }}>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      color: Colors.grayMedium,
                      fontWeight: 'bold',
                    }}>
                    {t('common:note')}:{' '}
                  </Text>
                  <Text
                    style={{ fontSize: RFValue(14), color: Colors.grayMedium,textAlign:'auto' }}>
                   {t('common:modelDes1')} {t('common:modelDes2')} {t('common:modelDes3')} {t('common:modelDes4')} {t('common:modelDes5')}
                  </Text>
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  borderRadius: 22,
                  backgroundColor: Colors.orange,
                  padding: 10,
                  width: 80,
                  alignSelf: 'center',
                  marginBottom: 15,
                }}
                title="Hide modal"
                onPress={toggleModal}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: RFValue(12),
                    color: Colors.white,
                  }}>
                  {t('common:gotIt')}
                </Text>
              </TouchableOpacity>
            </ScrollView>


          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
export default contestDetails;
