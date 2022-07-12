import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {styles} from './style';
import Maintopbar from '../../../../component/trophyHeaderComponent/trophyHeader';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../../../../res/style/color';
import ClockSvg from '../../../../../res/images/svg/clock.svg';
import GetApiService, {getApiSerive} from '../../../../utills/getDataService';
import {icons, api_link} from '../../../../../res/constants';
import JoinListTag from '../../../../component/joinList/joinList';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

import {fetchMyContestApi} from '../../../../redux/actions/myContestAction';
import SectionListTag from '../../../../component/sectionList/sectionList';
import {globalStyles} from '../../../../../res/style/appStyle';
import EditBtnSvg from '../../../../../res/images/svg/editBtn.svg';
import CloneBtnSvg from '../../../../../res/images/svg/cloneBtn.svg';
import EditSvg from '../../../../../res/images/svg/editcolor.svg';
import SwitchSvg from '../../../../../res/images/svg/switch.svg';
import ArrowDownSvg from '../../../../../res/images/svg/arrowdown.svg';
import {fonts} from '../../../../../res/style/fonts';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import PeopleSvg from '../../../../../res/images/svg/peoplesvg';
import StarSvg from '../../../../../res/images/svg/starsvg';
import WinnerSvg from '../../../../../res/images/svg/winnersvg';
import RedCrossSvg from '../../../../../res/images/svg/redcross.svg';

import Tooltip from 'react-native-walkthrough-tooltip';
import Modal from 'react-native-modal';
import MobelOpenBtnSvg from '../../../../../res/images/svg/modelopenbtn.svg';
import MobelCloseBtnSvg from '../../../../../res/images/svg/modelclosebtn.svg';
import GroundViewPlayersList from '../../../../component/groundViewPlayersList/groundViewPlayersList';
import { useTranslation } from 'react-i18next';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../../../component/React Native Responsive Screen';
import {color} from 'react-native-reanimated';

var paramName = 'Fixture';
const upcommingContest = (props) => {
  const { t } = useTranslation();
  const [statusMatch, setStatusMatch] = useState([
    {id: '1', name:  t('common:contest')},
    {id: '2', name: t('common:myContest')},
    {id: '3', name: t('common:myTeam')},
  ]);
  const [Teams, setTeams] = useState([
    {
      id: '1',
      TeamName: 'A',
    },
    {
      id: '2',
      TeamName: 'B',
    },

    {
      id: '3',
      TeamName: 'c',
    },
  ]);

  const [contestFull, setContestFull] = useState([]);
  const [ind, setInd] = useState(2);
  const [collapsed, setCollapsed] = useState(true);
  const [totalTeam, setTotalTeam] = useState(2);
  const [selectedID, setSelectedID] = useState('');

 
  const [constValue, setConstValue] = useState(2);
  const [groundTeam, setgroundTeam] = useState([]);
  const [toolTipVisible, setToolTipVisible] = useState(false); 
  const [toolTipId, setToolTipId] = useState('');

  const [teamOneName, setTeamOneName] = useState('');
  const [teamOneLength, setTeamOneLength] = useState('');
  const [teamTwoName, setTeamTwoName] = useState('');
  const [teamTwoLength, setTeamTwoLength] = useState('');
  const [capt, setCapt] = useState('');
  const [vCapt, setVCapt] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);


  const [contestFulldummy, setContestFullDummy] = useState([
    {
      id: '1',
      type: 'MEGA',
      price1: '20',
      price2: '4500',
      price3: '9000',
      join_team: 4,
      total_team: 10,
      tag: 'confirmed',
      status: 'contest full',
      remaining_team: 6,
      prize: '100',
      winnerP: '50',
      Teams: [
        {
          id: '1',
          TeamName: 'A',
        },
        {
          id: '2',
          TeamName: 'B',
        },

        {
          id: '3',
          TeamName: 'c',
        },
      ],
    },

    {
      id: '2',
      type: '1 ON 1',
      price1: '20',
      price2: '4500',
      price3: '9000',
      join_team: 4,
      total_team: 10,
      remaining_team: 6,
      status: 'contest full',
      tag: 'unconfirmed',
      prize: '100',
      winnerP: '50',
      Teams: [
        {
          id: '1',
          TeamName: 'A',
        },
      ],
    },
  ]);

  const [tabID, setTabId] = useState('1');
  const [allTabId, setAllTabId] = useState('All');
  const [secondTabId, setSecondTabId] = useState('All');
  const [is_selection_list, setIs_selection_list] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataTeam, setDataTeam] = useState([]);
  const [total_team, settotal_team] = useState('');
  const [status_type_data, setStatus_type_data] = useState([
    {name: 'All', id: 'All'},
  ]);

  const userData = useSelector(
    (state) => state.userR.userSuccess,
  );

  const dispatch = useDispatch();

  useEffect(() => {

    setStatusMatch([
      {id: '1', name:  t('common:contest')},
      {id: '2', name: t('common:myContest')},
      {id: '3', name: t('common:myTeam')},
    ])
    console.log("team names in upcomming screen:",   "team1shortname1",props.route.params.teamname1,
    "team2shortname2", props.route.params.teamname2,)
    if(props.route.params.tabSelect==1){
      setTabId('2')
    }

    setIsLoading(true);

    // props.route.params.match_id_c

    getApiSerive
      .getApiClass(
        api_link.status_type + 'match_id=' + props.route.params.match_id_c,
      )
      .then((res) => {
        setStatus_type_data([
          {name: 'All', id: 'All'},
          ...res.contest_categories,
        ]);
      });

    _fetchStatusTypeData(secondTabId);


   const focusListener = props.navigation.addListener('focus', () => {
    console.log("I am focused")
      setIsLoading(true);
      _fetchMyTeam();
      _fetchMyContest();
     
    });


  }, [t]);

  // functionality function start  //

  const _fetchStatusTypeData = (typeId) => {
    console.log(
      'mega data is:',
      api_link.contest +
        'type=' +
        typeId +
        '&' +
        'match_id=' +
        props.route.params.match_id_c+'&'+'user_id='+userData.user_id,
    );

    getApiSerive
      .getApiClass(
        api_link.contest +
          'type=' +
          typeId +
          '&' +
          'match_id=' +
          props.route.params.match_id_c+'&'+'user_id='+userData.user_id,
      )
      .then((res) => {
        if (typeId == 'All') {
          if (res.contests_data.category != null) {
            let modifiedData = [];

            for (let i = 0; i < res.contests_data.category.length; i++) {
              let title = res.contests_data.category[i].title;
              let data = res.contests_data.category[i].contests;
              modifiedData.push({title: title, data: data});
            }
            setIs_selection_list(true);
            setData(modifiedData);
            setIsLoading(false);
            // console.log('i am called before', modifiedData);
          } else {
            setIsLoading(false);
            //console.log('else part');
          }
        } else {
          setData(res.contests);

          setIsLoading(false);
          setIs_selection_list(false);
        }
      });
  };

  const _fetchMyTeam = (typeId) => {
    var match_id = 953;
    var user_id =  userData.user_id;

    console.log(
      'my team link:',
      api_link.cricketapi +
        'my_team?' +
        'match_id=' +
        props.route.params.match_id_c +
        '&user_id=' +
        user_id,
    );

    getApiSerive
      .getApiClass(
        api_link.cricketapi +
          'my_team?' +
          'match_id=' +
          props.route.params.match_id_c +
          '&user_id=' +
          user_id,
      )
      .then((res) => {
      
          var type='myteam'
          teamDataEdit(res.team_data.team,type)
          console.log(res.team_data.team)
       
      
      });
  };

  const _fetchMyContest = () => {
    setIsLoading(true);
    var user_id =  userData.user_id;
    var matchId = 953;
    var randomnumber = Math.floor(Math.random() * (30000 - 1000 + 1)) + 1000;
    // console.log("matchId:", props.route.params.match_id_c)

    console.log(
      'upcoming my contest url:',
      api_link.my_join_contest_list_live +
        'match_id=' +
        props.route.params.match_id_c +
        '&' +
        'user_id=' +
        user_id+ '&v='+randomnumber
    );

    // props.route.params.match_id_c
    // https://snack.expo.io/EVuxUeQyD
    // https://thecodeprogram.com/react-native---create-your-own-accordion-object

    getApiSerive
      .getApiClass(
        api_link.my_join_contest_list_live +
          'match_id=' +
          props.route.params.match_id_c +
          '&' +
          'user_id=' +
          user_id + '&v='+randomnumber
      )
      .then((res) => {
        // console.log("my join contest list live:",res.data.contest_data)
        settotal_team(res.total_team)
        setContestFull(res.my_contest_data);
        setIsLoading(false);
      });
  };

  function handlerButtonOnClick(id) {
    //console.log('tab is is:', id);

    setTabId(id);
    if (id === '1') {
      setIsLoading(true);
      _fetchStatusTypeData(secondTabId);
    } else if (id === '2') {
      setIsLoading(true);
      _fetchMyContest();
    } else if (id === '3') {
      setIsLoading(true);
      _fetchMyTeam();
    }
  }

  function secondTabBarOnClick(id, name) {
    // console.log('id is:', id, name);
    setIsLoading(true);
    // setSecondTabId(name);
    setSecondTabId(id);
    setIs_selection_list(false);
    _fetchStatusTypeData(id);
  }




  function clickSingleTeam(item){
//  console.log("clicked:",item)



setCapt(item.captainId);
setVCapt(item.vCaptainId);
setTeamOneName(item.teamOneName);
setTeamOneLength(item.teamOneLength);
setTeamTwoName(item.teamTwoName);
setTeamTwoLength(item.teamTwoLength);
setgroundTeam(item.players_list)
setIsModalVisible(true)

  }

function toggleModal(){
  setIsModalVisible(false)
}


function teamDataEdit(res,type){
  // var type='myteam'
  // var type='mycontest'
  // console.log("teamDataEdit",res)


  var myTeamArray = [];
        var result=[];
        var team1Array = [];
        var team2Array = [];
        let map = new Map();
        for (var i = 0; i < res.length; i++) {
          //console.log(res.team[i]);
          var playerList = res[i].players_list;



          for (const item of playerList) {
            if (!map.has(item.teamid)) {
              map.set(item.teamid, true); // set any value to Map
              result.push({
                id: item.teamid,
                name: item.team_short_name,
              });
            }
          }

          // console.log('result',result)

          for (var t1 = 0; t1 < playerList.length; t1++) {
            if (playerList[t1].teamid === result[1].id) {
              team1Array.push({id: playerList[t1].teamid});
            }
            if (playerList[t1].teamid === result[0].id) {
              team2Array.push({id: playerList[t1].teamid});
            }
          }
          // console.log("team one", result[0].name,"team 2:",result[1].name)
         




          var wickets = playerList.filter(
            (item) => item.player_desigination === 'Wicket Keeper',
          );
          var AllRounder = playerList.filter(
            (item) => item.player_desigination === 'All Rounder',
          );
          var Bowler = playerList.filter((item) => item.player_desigination === 'Bowler');
          var Batsman = playerList.filter((item) => item.player_desigination === 'Batsman');

          var is_captain = playerList.filter((item) => item.is_captain == 1);
          var is_vicecaptain = playerList.filter(
            (item) => item.is_vicecaptain == 1,
          );

          // console.log("captionID:",is_vicecaptain[0].playerid)
          // res.team[i].filter(o => o.players_list.some(({wicket}) => wicket.title === "Wicket Keeper"));
          var data = {
            team: res[i].team,
            entry: res[i].entry,
            firstprize: res[i].firstprize,
            contest_id: res[i].contest_id,
            match_id:res[i].match_id,
            captainImage: is_captain[0].image,
            captainName: is_captain[0].name,
            vcaptainImage: is_vicecaptain[0].image,
            vcaptainName: is_vicecaptain[0].name,
            captainId: is_captain[0].playerid,
            vCaptainId: is_vicecaptain[0].playerid,
            wicketLength: wickets.length,
            allRounderLength: AllRounder.length,
            bowlerLength: Bowler.length,
            batsman: Batsman.length,
            players_list: res[i].players_list,
            teamOneLength:team1Array.length,
            teamOneName:result[1].name,
            teamTwoLength:team2Array.length,
            teamTwoName: result[0].name,
            team_name:res[i].team_name,

          };

          if(type=='myteam'){
            myTeamArray.push(data);
          }
         
         
          team1Array = [];
          team2Array = [];
          // result=[];
        }
        //  console.log('wicket keeper is:', data);
        // setDataTeam(myTeamArray);

        if(type=='myteam'){
          setDataTeam(myTeamArray);
          setIsLoading(false);
        }else{

          props.navigation.navigate('Teambuild', {
            matchid_1: props.route.params.match_id_c,
            contestid: props.route.params.item.contest_id,
            contestdata: props.route.params.item,
            contesttag: props.route.params.item.contest_tag,
            rawData: '',
            type: 'jointag',
            editData: data,
            status: 'edit',
          });

        }
       
       


}

  // functionality function end  //

  //     Design Component Start       //

  const tabBar = () => {
    return (
      <View style={styles.tabbarView}>
        {statusMatch.map((status, index) => (
          <TouchableOpacity
            activeOpacity={0.9}
            key={index}
            onPress={() => handlerButtonOnClick(status.id)}>
            <View
              style={[
                styles.tabbarStyle,
                {backgroundColor: tabID == status.id ? Colors.orange : null},
              ]}>
              <View>
                <Text
                  style={[
                    styles.matchstatusbartext,
                    {
                      color:
                        tabID == status.id ? Colors.white : Colors.grayMedium,
                    },
                  ]}>
                  {status.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const secondTabbar = () => {
    return (
      <View style={{alignSelf: 'stretch', padding: 5}}>
        <View style={{flexDirection: 'row'}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            horizontal={true}>
            {status_type_data.map((status, index) => (
              <TouchableOpacity
                disabled={status.name == '' ? true : false}
                activeOpacity={0.9}
                key={index}
                onPress={() => {
                  secondTabBarOnClick(status.id, status.name);
                }}>
                <View style={{margin: 10}}>
                  <Text
                    style={[
                      styles.Allstatusbartext,
                      {
                        color:
                          secondTabId == status.id
                            ? Colors.orange
                            : Colors.grayMedium,
                      },
                    ]}>
                    {status.name.toUpperCase()}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };

  const teamTags = () => {
    return (
      <FlatList
        vertical={true}
        showsHorizontalScrollIndicator={false}
        data={dataTeam}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 300}}
        renderItem={({item, index}) => {
          return (
            <View style={styles.viewCenter}>
              <TouchableOpacity
              onPress={()=>{
clickSingleTeam(item)
              }}
              
              style={styles.teamContainer}>
                <View style={styles.teamNameAndBtnsView}>
                  <Text
                    style={[styles.teamTagsText, {fontSize: RFValue(10, 580)}]}>
                 
                       {item.team_name?item.team_name:t('common:teamShort')}{item.team_name?<Text style={{fontSize:RFValue(6)}}>{t('common:teamShort')} {index+2-1}</Text>:index+2-1}
                 </Text>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('Teambuild', {
                          matchid_1: props.route.params.match_id_c,
                          contestid: props.route.params.item.contest_id,
                          // contestdata: props.route.params.item,
                          contestdata:item,
                          contesttag: props.route.params.item.contest_tag,
                          rawData: '',
                          type: 'jointag',
                          editData: item,
                          status: 'edit',
                        });
                      }}
                      activeOpacity={0}>
                      <EditBtnSvg
                        style={styles.editBtnstyle}
                        height={15}
                        width={15}></EditBtnSvg>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('Teambuild', {
                          matchid_1: props.route.params.match_id_c,
                          contestid: props.route.params.item.contest_id,
                          // contestdata: props.route.params.item,
                          contestdata:item,
                          // contesttag: props.route.params.item.contest_tag,
                          rawData: '',
                          type: 'jointag',
                          editData: item,
                          status: 'clone',
                        });
                      }}
                      activeOpacity={0}>
                      <CloneBtnSvg height={15} width={15}></CloneBtnSvg>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.teamCandVcImagesView}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={{uri: item.captainImage}}
                      style={{height: '120%', width: 70, resizeMode: 'contain'}}
                    />
                    <View>
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.teamTagsText,
                          {fontSize: RFValue(8, 580), paddingTop: 10, fontWeight:'bold',},
                        ]}>
                        {item.captainName}
                      </Text>
                      <Text
                        style={[
                          styles.teamTagsText,
                          {
                            fontSize: RFValue(12, 580),
                            fontFamily: fonts['DMSans-Bold'],
                          },
                        ]}>
                        {t('common:captainTag')}
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={{uri: item.vcaptainImage}}
                      style={{height: '120%', width: 70, resizeMode: 'contain'}}
                    />
                    <View>
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.teamTagsText,
                          {fontSize: RFValue(8, 580), paddingTop: 10,fontWeight:'bold'},
                        ]}>
                        {item.vcaptainName}
                      </Text>
                      <Text
                        style={[
                          styles.teamTagsText,
                          {
                            fontSize: RFValue(12, 580),
                            fontFamily: fonts['DMSans-Bold'],
                          },
                        ]}>
                        {t('common:vCaptainTag')}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.cricketerMainView}>
                  <View style={styles.cricketerButtonView}>
                    <View style={styles.cricketTagContianer}>
                      <TouchableOpacity activeOpacity={0.9}>
                        <LinearGradient
                          style={styles.cricketTags}
                          colors={[
                            Colors.crickettagcolor1,
                            Colors.crickettagcolor2,
                            Colors.crickettagcolor3,
                          ]}>
                          <View>
                            <Image
                              style={{
                                tintColor: 'black',
                                height: 15,
                                width: 15,
                              }}
                              source={icons.wicket}
                            />
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>

                      <View style={styles.notSelectedTags}>
                        <Text
                          style={{
                            color: Colors.white,
                            fontSize: 8,
                            fontFamily: fonts['DMSans-Medium'],
                          }}>
                          {item.wicketLength}
                        </Text>
                      </View>
                    </View>

                    <View>
                      <Text style={styles.cricketerButtonText}>
                      {t('common:wicketKeeper')}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.cricketerButtonView}>
                    <View style={styles.cricketTagContianer}>
                      <TouchableOpacity activeOpacity={0.9}>
                        <LinearGradient
                          style={styles.cricketTags}
                          colors={[
                            Colors.crickettagcolor1,
                            Colors.crickettagcolor2,
                            Colors.crickettagcolor3,
                          ]}>
                          <View>
                            <Image
                              style={{
                                tintColor: 'black',
                                height: 15,
                                width: 15,
                              }}
                              source={icons.bats}
                            />
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                      <View style={styles.notSelectedTags}>
                        <Text
                          style={{
                            color: Colors.white,
                            fontSize: 8,
                            fontFamily: fonts['DMSans-Medium'],
                          }}>
                          {item.batsman}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.cricketerButtonText}>{t('common:Batsman')}</Text>
                    </View>
                  </View>

                  <View style={styles.cricketerButtonView}>
                    <View style={styles.cricketTagContianer}>
                      <TouchableOpacity activeOpacity={0.9}>
                        <LinearGradient
                          style={styles.cricketTags}
                          colors={[
                            Colors.crickettagcolor1,
                            Colors.crickettagcolor2,
                            Colors.crickettagcolor3,
                          ]}>
                          <View>
                            <Image
                              style={{
                                tintColor: 'black',
                                height: 15,
                                width: 15,
                              }}
                              source={icons.batball}
                            />
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                      <View style={styles.notSelectedTags}>
                        <Text style={{color: Colors.white, fontSize: 8}}>
                          {item.allRounderLength}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.cricketerButtonText}>
                      {t('common:allRounder')}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.cricketerButtonView}>
                    <View style={styles.cricketTagContianer}>
                      <TouchableOpacity activeOpacity={0.9}>
                        <LinearGradient
                          style={styles.cricketTags}
                          colors={[
                            Colors.crickettagcolor1,
                            Colors.crickettagcolor2,
                            Colors.crickettagcolor3,
                          ]}>
                          <View>
                            <Image
                              style={{
                                tintColor: 'black',
                                height: 15,
                                width: 15,
                              }}
                              source={icons.balls}
                            />
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                      <View style={styles.notSelectedTags}>
                        <Text style={{color: Colors.white, fontSize: 8}}>
                          {item.bowlerLength}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.cricketerButtonText}>{t('common:Bowler')}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.teamNamesView}>
                  <View style={{paddingRight: 20}}>
                    <Text
                      style={[
                        styles.teamTagsText,
                        {
                          fontSize: RFValue(12, 580),
                          fontFamily: fonts['DMSans-Bold'],
                        },
                      ]}>
                      {item.teamOneName} - {item.teamOneLength}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.teamTagsText,
                        {
                          fontSize: RFValue(12, 580),
                          fontFamily: fonts['DMSans-Bold'],
                        },
                      ]}>
                     {item.teamTwoName} - {item.teamTwoLength}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        enableEmptySections={true}
        ListEmptyComponent={() => (
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              height: heightPercentageToDP(50),
            }}
            activeOpacity={10}>
            <Text style={globalStyles.stauts}>{t('common:teamEmptyMessage1')}</Text>
            <Text style={globalStyles.stautsNext}>
            {t('common:teamEmptyMessage2')}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  const myContestTab = () => {
    return (
      <FlatList
        vertical={true}
        showsHorizontalScrollIndicator={false}
        data={contestFull}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 300}}
        renderItem={({item, index}) => {
          return (
            <View style={styles.viewCenter}>
              <View style={styles.teamContainer}>
                <View
                  style={[
                    styles.contestFullHeader,
                    {backgroundColor: Colors.mainbackground},
                  ]}>
                  <View style={styles.prizePoolView}>
                    <View style={{flexDirection:'row'}}>
                    <Text
                      style={[
                        styles.textColor,
                        {fontSize: RFValue(12, 580), color: Colors.darkGrey},
                      ]}>
                      {t('common:prizePool')}
                    </Text>
                    <View style={{marginLeft: 10}}>
                      <Text
                        style={[
                          styles.textPrice,
                          {
                            fontSize: RFValue(16),
                            fontFamily: fonts['DMSans-Bold'],
                            color: Colors.orange,
                          },
                        ]}>
                        ₹ {item.prize_pool}
                      </Text>
                  
                    </View>
                    </View>



                    <View style={{flexDirection: 'row', alignItems: 'center'}}>



{(item.total_team - item.join_team) <= 0 || item.remain_to_join<=0 || item.firstprize<=0 ? 

<View style={[styles.jointag,{backgroundColor:'transparent'}]}>
  </View>

:
  <TouchableOpacity
     onPress={() =>{
        props.navigation.navigate('Teambuild', {
        matchid_1:props.route.params.match_id_c,
        contestid: item.contest_id,
        contestdata: item,
        contesttag: item.contest_tag,
        rawData:'',
        type: "jointag",
        status:'upcomingPost',
      })

     }}
    style={styles.jointag}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={{ color: Colors.white, fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Medium'], fontWeight: '500' }}>{t('common:join')} </Text>
        <Text style={{ color: Colors.white,fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Bold'], }}>₹{item.entry}</Text>
      </View>
  </TouchableOpacity>



  }
</View>



                  </View>
                  {/* progress bar Text*/}

                  <View style={styles.poolBarView}>
                    <View style={{marginLeft: 10}}>
                      <Text
                        style={{
                          fontSize: RFValue(10, 580),
                          color: Colors.darkGrey,
                          fontFamily: fonts['DMSans-Medium'],
                        }}>
                        {item.total_team - item.join_team} {t('common:spotLeft')}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignContent: 'center',
                        marginRight: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(10, 580),
                          color: Colors.grayMedium,
                          fontFamily: fonts['DMSans-Medium'],
                        }}>
                        {' '}
                        {item.total_team} {t('common:spots')}{' '}
                      </Text>
                    </View>
                  </View>
                  {/* progress bar view */}
                  <View style={styles.barView}>
                    <Text
                      style={[
                        styles.bar,
                        {
                          width:
                            parseFloat(
                              (item.join_team / item.total_team) * 100,
                            ) > 100
                              ? '100%'
                              : parseFloat(
                                  (item.join_team / item.total_team) * 100,
                                ) + '%',
                        },
                      ]}>
                      .
                    </Text>
                  </View>
                </View>
                {/* stars */}
                <View style={styles.imagesView}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <PeopleSvg />
                    <Text
                      style={{
                        marginLeft: 3,
                        fontSize: RFValue(8, 580),
                        color: Colors.darkGrey,
                        fontFamily: fonts['DMSans-Medium'],
                      }}>
                      {item.max_team == 1
                        ? 'Single Entry'
                        : t('common:upTo') +' '+  item.max_team  +' '+ t('common:teams')}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <StarSvg />
                    <Text
                      style={{
                        marginLeft: 3,
                        fontSize: RFValue(8, 580),
                        color: Colors.darkGrey,
                        fontFamily: fonts['DMSans-Medium'],
                      }}>
                      ₹{item.firstprize == null ? 0 : item.firstprize} {t('common:topPrize')}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <WinnerSvg />
                    <Text
                      style={{
                        marginLeft: 3,
                        fontSize: RFValue(8, 580),
                        color: Colors.darkGrey,
                        fontFamily: fonts['DMSans-Medium'],
                      }}>
                      {item.win + '% '+t('common:winners')}
                    </Text>
                  </View>
                  {item.contest_type == 'confirm' ? (
                    <View style={{flexDirection: 'row'}}>
                      <Tooltip
                        contentStyle={{backgroundColor: Colors.darkGrey}}
                        isVisible={
                          toolTipId == item.contest_id ? toolTipVisible : false
                        }
                        content={
                          <Text
                            style={{
                              color: Colors.white,
                              fontFamily: fonts['DMSans-Medium'],
                            }}>
                            {item.contest_type == 'confirm'
                              ? t('common:cToolTipText')
                              :  t('common:ucToolTipText')}
                          </Text>
                        }
                        placement="top"
                        onClose={() => {
                          setToolTipVisible(false);
                        }}>
                        <TouchableOpacity
                          onPress={() =>
                            // this.setState({toolTipId:item.contest_id,toolTipVisible:!toolTipVisible })
                            {
                              // console.log("contest:",item.contest_id)
                              setToolTipId(item.contest_id),
                                setToolTipVisible(!toolTipVisible);
                            }
                          }
                          style={{
                            alignItems: 'center',
                            backgroundColor: Colors.confirmLight,
                            borderRadius: 50,
                            height: 20,
                            width: 20,
                            justifyContent: 'center',
                            alignContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: RFValue(8, 580),
                              color: Colors.darkGrey,
                              fontFamily: fonts['DMSans-Medium'],
                            }}>
                           {t('common:confirmTag')}
                          </Text>
                        </TouchableOpacity>
                      </Tooltip>
                    </View>
                  ) : (
                    <View style={{flexDirection: 'row'}}>
                      <Tooltip
                        contentStyle={{backgroundColor: Colors.darkGrey}}
                        isVisible={
                          toolTipId == item.contest_id ? toolTipVisible : false
                        }
                        content={
                          <Text
                            style={{
                              color: Colors.white,
                              fontFamily: fonts['DMSans-Medium'],
                            }}>
                            {item.contest_type == 'confirm'
                              ? t('common:cToolTipText')
                              :  t('common:ucToolTipText')}
                          </Text>
                        }
                        placement="top"
                        onClose={() => {
                          setToolTipVisible(false);
                        }}>
                        <TouchableOpacity
                          onPress={() =>
                            // this.setState({toolTipId:item.contest_id,toolTipVisible:!toolTipVisible })
                            {
                              setToolTipId(item.contest_id),
                              setToolTipVisible(!toolTipVisible);
                            }
                          }
                          style={{
                            alignItems: 'center',
                            backgroundColor: Colors.confirmLight,
                            borderRadius: 50,
                            height: 20,
                            width: 20,
                            justifyContent: 'center',
                            alignContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: RFValue(8, 580),
                              color: Colors.darkGrey,
                              fontFamily: fonts['DMSans-Medium'],
                            }}>
                             {t('common:unConfirmTag')}
                          </Text>
                        </TouchableOpacity>
                      </Tooltip>
                    </View>
                  )}
                </View>

                <View style={styles.contestFullBody}>
                  <Text
                    style={[
                      styles.textgrayColor,
                      {fontSize: RFValue(10, 580)},
                    ]}>
                    {t('common:yourTeams')}
                  </Text>
                </View>

                {/* Team in Rows */}
                {item.team
                  .slice(0, item.my_team_id == selectedID ? ind : constValue)
                  .map((res, index, arr) => (
                    <View key={index}>
                      <View style={styles.teamRow}>
                        <View style={styles.teamBodylist}>
                          <Text
                            style={[
                              styles.textgrayColor,
                              {
                                fontSize: RFValue(10, 580),
                                fontFamily: fonts['DMSans-Bold'],
                              },
                            ]}>
                             {res.team_name?res.team_name:t('common:teamShort')} {res.team_name?<Text style={{fontSize:RFValue(6)}}>{t('common:teamShort')} {index+2-1}</Text>:index+2-1} 
                          </Text>
                          <View style={{flexDirection: 'row'}}>
                            {/* <View style={{flexDirection: 'row'}}>
                              <TouchableOpacity activeOpacity={0}>
                                <SwitchSvg
                                  style={styles.editBtnstyle}
                                  height={15}
                                  width={15}></SwitchSvg>
                              </TouchableOpacity>
                              <Text
                                style={[
                                  styles.textgrayColor,
                                  {fontSize: RFValue(10, 580)},
                                ]}>
                                Switch
                              </Text>
                            </View> */}

                            <View style={{flexDirection: 'row'}}>
                              <TouchableOpacity
                              onPress={()=>{
                                // console.log("team called:")
                                var type='mycontest'
                                teamDataEdit(item.team,type)
                              }}
                              
                              activeOpacity={0}>
                                <EditSvg
                                  style={styles.editBtnstyle}
                                  height={15}
                                  width={15}></EditSvg>
                              </TouchableOpacity>
                              <Text
                               onPress={()=>{
                                // console.log("team called:")
                                var type='mycontest'
                                teamDataEdit(item.team,type)
                              }}
                                style={[
                                  styles.textgrayColor,
                                  {fontSize: RFValue(10, 580)},
                                ]}>
                                 {t('common:edit')}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>

                      {arr.length - 1 === index ? null : (
                        <View style={[styles.horizonalLine, {marginTop: 15}]} />
                      )}
                    </View>
                  ))}

                {item.team.length > 2 ? (
                  <TouchableOpacity
                    onPress={() => {
                      setCollapsed(!collapsed);
                      setSelectedID(item.my_team_id);

                      if (collapsed) {
                        setInd(item.team.length);
                        // totalTeam
                        setTotalTeam(item.team.length)
                      } else {
                        setInd(2);
                        setTotalTeam(2)
                      }
                    }}>
                    <View style={styles.bottomItems}>
                      <ArrowDownSvg
                        style={styles.editBtnstyle}
                        height={6}
                        width={6}></ArrowDownSvg>
                      <Text
                        style={{
                          color: Colors.grayMedium,
                          fontFamily: fonts['DMSans-Medium'],
                        }}>
                        {item.my_team_id == selectedID? +item.team.length - totalTeam:+item.team.length - 2} {t('common:teams')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <View style={{margin: 10}}></View>
                )}
              </View>
            </View>
          );
        }}
        enableEmptySections={true}
        ListEmptyComponent={() => (
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              height: heightPercentageToDP(50),
            }}
            activeOpacity={10}>
            <Text style={globalStyles.stauts}>No Contests Record Found!</Text>
            <Text style={globalStyles.stautsNext}>
              There is no Contests Record Found.
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };


const groundModal=()=>{
  return(

<Modal
              testID={'modal'}
              isVisible={isModalVisible}
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                margin: 0,
                // marginTop: 25,
                borderRadius: 25,
              }}>
              <SafeAreaView
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  backgroundColor: 'white',
                  borderRadius: 25,
                }}>
               
                <View style={{flex: 1}}>

                  <ImageBackground source={icons.groundImage} style={{flex: 1}}>
                  <TouchableOpacity
                      style={{marginLeft:20,marginTop:10}}
                      onPress={() => toggleModal()}>
                      <RedCrossSvg />
                    </TouchableOpacity>
                    {groundTeam.length <= 0 ? (
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontWeight: '700',
                            color: Colors.darkGrey,
                            fontSize: RFValue(14),
                            fontFamily: fonts['DMSans-Medium'],
                            letterSpacing: 2,
                          }}>
                          No player selected yet
                        </Text>
                      </View>
                    ) : (
                      <>
                        <ScrollView
                          showsVerticalScrollIndicator={false}
                          style={{marginTop: 15}}>
                          <GroundViewPlayersList
                            playertype="KEEPER"
                            screenType="captains"
                            pointType=""
                        
                            data={groundTeam.filter((x) =>
                              (x.player_desigination == 'Wicket Keeper')
                            )}
                            captainId={capt}
                            viceCaptainId={vCapt}
                          />
                          <GroundViewPlayersList
                            playertype="BATSMAN"
                            pointType=""
                            screenType="captains"
                            data={groundTeam.filter(
                              (x) => x.player_desigination == 'Batsman',
                            )}
                            captainId={capt}
                            viceCaptainId={vCapt}
                          />
                          <GroundViewPlayersList
                            playertype="ALL ROUNDER"
                            pointType=""
                            screenType="captains"
                            data={groundTeam.filter(
                              (x) => x.player_desigination == 'All Rounder',
                            )}
                            captainId={capt}
                            viceCaptainId={vCapt}
                          />
                          <GroundViewPlayersList
                            playertype="BOWLER"
                            screenType="captains"
                            pointType=""
                            data={groundTeam.filter(
                              (x) => x.player_desigination == 'Bowler',
                            )}
                            captainId={capt}
                            viceCaptainId={vCapt}
                          />
                        </ScrollView>
  </>
                    )}



<View
                    style={{
                      flexDirection: 'row',
                       justifyContent: 'space-evenly',
                      backgroundColor: Colors.white,
                      opacity:0.4,
                      height: 50,
                      width: '100%',
                      alignContent: 'center',
                      alignItems: 'center',
                      position: 'relative',
                      // marginLeft:30
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                     <View 
                     style={{backgroundColor:Colors.white,height:15,width:15,borderRadius:15}}
                     >
                     </View>
                      <Text
                        style={{
                          color: Colors.darkBlue,
                          fontSize: RFValue(12, 580),
                          marginLeft:5,
                          fontFamily: fonts['DMSans-Medium'],
                          fontWeight: '500',
                        }}>
                        {' '}
                        {teamOneName}    {teamOneLength} 
                      </Text>
                    </View>
            



                    <View
                      style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                        marginLeft:30
                      }}>
                     <View 
                     style={{backgroundColor:Colors.darkGrey,height:15,width:15,borderRadius:15}}
                     >

                     </View>
                      <Text
                        style={{
                          color: Colors.darkBlue,
                          fontSize: RFValue(12, 580),
                          marginLeft:5,
                          fontFamily: fonts['DMSans-Medium'],
                          fontWeight: '500',
                        }}>
                        {teamTwoName}   {teamTwoLength}
                      </Text>
                    </View>







                  </View>
               
                  </ImageBackground>
                
               
               
                </View>
              </SafeAreaView>
            </Modal>


  )
}



  //     Design Component end       //

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Maintopbar
          title={
            props.route.params.teamname1 +' '+t('homePage:vs')+' '+ props.route.params.teamname2
          }
          counterValue={props.route.params.item.time}
          icon={
            <ClockSvg
              style={{marginRight: 5}}
              height={12}
              width={12}></ClockSvg>
          }
          navigation={props.navigation}
        />
        {tabBar()}
        {tabID === '1' ? (
          <View style={{flex: 1}}>
            {secondTabbar()}
            <View style={{flex: 1}}>
              {isLoading ? (
                <View style={styles.loader_style}>
                  <ActivityIndicator color={Colors.orange} />
                </View>
              ) : (
                <View>
                  {is_selection_list ? (
                    <SectionListTag
                      {...props}
                      data={data}
                      team1shortname={props.route.params.teamname1}
                      team2shortname={props.route.params.teamname2}
                      jointype="home"
                      matchid_c={props.route.params.match_id_c}
                    />
                  ) : (
                    <JoinListTag
                      {...props}
                      data={data}
                      team1shortname={props.route.params.teamname1}
                      team2shortname={props.route.params.teamname2}
                      jointype="home"
                      matchid_c={props.route.params.match_id_c}
                    />
                  )}
                </View>
              )}
            </View>
          </View>
        ) : null}

        {tabID === '2' ? (
          <View>
            {isLoading ? (
              <View style={styles.loader_style}>
                <ActivityIndicator color={Colors.orange} />
              </View>
            ) : (
              <View>
                {myContestTab()}
                </View>
            )}
          </View>
        ) : null}

        {tabID === '3' ? (
          <View>
            {isLoading ? (
              <View style={styles.loader_style}>
                <ActivityIndicator color={Colors.orange} />
              </View>
            ) : (
              <View>{teamTags()}</View>
            )}
          </View>
        ) : null}


<View>
{groundModal()}
</View>

{isLoading?
null
:
<View style={styles.bottomButtonView}>
 
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('Teambuild', {
                    matchid_1: props.route.params.match_id_c,
                    team1shortname1: props.route.params.teamname1,
                    team2shortname2: props.route.params.teamname2,
                    contestdata: props.route.params.item,
                    matchid_1: props.route.params.item.match_id,
                    jointype: 'home',
                    type: 'bottomtabs',
                    status: 'post',
                    
                  })
                }
                style={styles.buildteamtag}>
                <Text style={styles.buildteamtagtext}>{ t('common:newTeam')}</Text>
              </TouchableOpacity>

            </View>
}

      </View>
    </SafeAreaView>
  );
};
export default upcommingContest;
