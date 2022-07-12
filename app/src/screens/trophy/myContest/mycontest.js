import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {styles} from './style';
import Maintopbar from '../../../component/mainHeaderComponent/Mainheader';
import {useDispatch, useSelector} from 'react-redux';
import CarouselCardItem from '../../../component/crouselCarditem/CarouselCardItem';
import {Colors} from '../../../../res/style/color';
import CountDown from '../../../component/countComponent/countdown';
import {icons, api_link} from '../../../../res/constants';
import {fetchMyContestApi} from '../../../redux/actions/myContestAction';
import {globalStyles} from '../../../../res/style/appStyle';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../../component/React Native Responsive Screen';
import {Toast, Root} from 'native-base';
import {fonts} from '../../../../res/style/fonts';
import { useIsFocused } from '@react-navigation/native';
import { getApiSerive } from "../../../utills/getDataService";
 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
var paramName = 'Fixture';
const myContest = (props) => {
  const { t } = useTranslation();

  

  const isFocused = useIsFocused();
  const [myContest, setMyContest] = useState([
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
  ]);
  const [statusMatch, setStatusMatch] = useState([
    {id: '1', name: t('homePage:upcomming')},
    {id: '2', name: t('homePage:live')},
    {id: '3', name: t('homePage:completed')},
  ]);
  const [tabID, setTabId] = useState(1);



  const [contestType, setContestType] = useState('upcoming');

  const [dataState, setDataState] = useState([]);
  const [load, setload] = useState(false);

  const userData = useSelector(
    (state) => state.userR.userSuccess,
  );

  const myContestRequest = useSelector(
    (state) => state.myContestR.myContestRequest,
  );
  const myContestData = useSelector(
    (state) => state.myContestR.myContestSuccess,
  );



  const dispatch = useDispatch();
  useEffect(() => {
    setStatusMatch([
      {id: '1', name: t('homePage:upcomming')},
      {id: '2', name: t('homePage:live')},
      {id: '3', name: t('homePage:completed')},
    ])
    if(props.route.params.type==='tab'){
      setTabId(1)
      setContestType('upcoming');
      fetchMyContest(paramName);
    }else{
      
      // console.log("params type is:",props.route.params.contestname)   
      if (props.route.params.contestname==='Fixture') {
        setTabId(1);
      } else if (props.route.params.contestname==='Live') {
        setTabId(2);
      } else if (props.route.params.contestname==='Result') {
        setTabId(3);
      }
      setContestType(props.route.params.contestname==='Fixture'?'upcoming':props.route.params.contestname==='Live'?'live':'completed');
      fetchMyContest(props.route.params.contestname);

    }





   
  }, [isFocused,t]);

  // functionality function start  //

  function fetchMyContest(params) {
    //console.log("params is:",params)
    console.log(
      'My Contest Url:',
      api_link.cricketapi + 'mymatch_record?status=' + params + '&user_id='+userData.user_id+'',
    );
    // dispatch(
    //   fetchMyContestApi(
    //     api_link.cricketapi + 'mymatch_record?status=' + params + '&user_id=9',
    //   ),
    // );
    var url= api_link.cricketapi + 'mymatch_record?status=' + params + '&user_id='+userData.user_id+'';

    setload(true)

    getApiSerive.getApiClass(url).then((res)=>{
      setDataState(res)
      setload(false)
  })


  }

  function handlerButtonOnClick(id) {
    //console.log("tab is is:",id)

    setTabId(id);
    if (id === '1') {
      setDataState([])
      setContestType('upcoming');
      var Fixture = 'Fixture';
      fetchMyContest(Fixture);
    } else if (id === '2') {
      setDataState([])
      setContestType('live');
      var Live = 'Live';
      fetchMyContest(Live);
    } else if (id === '3') {
      setDataState([])
      setContestType('completed');
      var Result = 'Result';
      fetchMyContest(Result);
    }
  }

  // functionality function end  //

  //     Design Component Start       //

  const myContestCards = (data) => {
    return (
      
      <View style={styles.myContestMain}>
        <FlatList
          vertical={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 700, }}
          
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  // console.log('i am pressed', contestType);

                  if (contestType === 'upcoming') {
                    props.navigation.navigate('upcommingcontest', {
                      match_id_c: item.match_id,
                      item:item,
                      tabSelect:0,
                      teamname1: item.team_short_name1,
                      teamname2: item.team_short_name2,
                      status:'home'
                    });
                  } else if (contestType === 'live') {
                    // console.log("unique id is:",item.unique_id)
                    props.navigation.navigate('LiveJoinTeam', {
                      match_id_c: item.match_id,
                      item:item,
                      uniqueId:item.unique_id,
                      teamname1: item.team_short_name1,
                      teamname2: item.team_short_name2,
                    });
                    // console.log('team name is',item.team_short_name1)
                  } else if (contestType === 'completed') {
                    props.navigation.navigate('completedContest', {
                      match_id_c: item.match_id,
                      uniqueId:item.unique_id,
                      teamname1: item.team_short_name1,
                      teamname2: item.team_short_name2,
                    });
                    // console.log('team name is',item.team_short_name1,item.team_short_name2)
                  }
                }}
                activeOpacity={0.6}>
                <CarouselCardItem item={item} type={'tropy'} tabstatus={contestType} />
              </TouchableOpacity>
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
              <Text style={globalStyles.stauts}>{t('common:emptyMessage1')}</Text>
              <Text style={globalStyles.stautsNext}>
                {t('common:emptyMessage2')}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  const tabBar = () => {
    return (
      <View style={styles.tabbarView}>
        {statusMatch.map((status, index) => (
          <TouchableOpacity
          disabled={load}
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

  //     Design Component end       //

  return (
    <SafeAreaView
    style={{ flex: 1, backgroundColor: Colors.white,}}
  >
    <View style={styles.container}>
      <Maintopbar navigation={props.navigation} />
      {tabBar()}

      {load ? (
        <View style={styles.loader_style}>
          <ActivityIndicator color={Colors.orange} />
        </View>
      ) : (
        <View>{myContestCards(dataState.matches)}</View>
      )}
    </View>
    </SafeAreaView>
  );
};
export default myContest;
