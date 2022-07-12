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
import Accordion from 'react-native-collapsible/Accordion';
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
import RedCrossSvg from '../../../../../res/images/svg/redcross.svg';
import RefreshSvg from '../../../../../res/images/svg/refresh.svg';


import SubHeader from '../../../../../src/component/subHeader/subHeader';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../../../component/React Native Responsive Screen';
import {color} from 'react-native-reanimated';
import ScoreCard from '../../../../component/scoreCardComponent/scorecard';
import BollerScoreCard from '../../../../component/scoreCardComponent/bollerScoreCard'
import StatsCard from '../../../../component/statsComponent/stats';
import MobelOpenBtnSvg from '../../../../../res/images/svg/modelopenbtn.svg';
import MobelCloseBtnSvg from '../../../../../res/images/svg/modelclosebtn.svg';
import ArrowupSvg from '../../../../../res/images/svg/arrowup.svg';
import {fonts} from '../../../../../res/style/fonts';
import ContestMyteam from '../../../../component/completedContestMyteam/completedContestMyteam';
import ContestMyContest from '../../../../component/completedMyContest/completedMyContest';
import Modal from 'react-native-modal';
import GroundViewPlayersList from '../../../../component/groundViewPlayersList/groundViewPlayersList';
import { useTranslation } from 'react-i18next';
// var paramName = 'Fixture';
const LiveJoinTeam = (props) => {
  const { t } = useTranslation();
  const [statusTypeData, setStatusTypeData] = useState([
    {id: '0', name: t('common:myContest')},
    {id: '1', name: t('common:myTeam')},
    {id: '2', name: t('common:scoreCards')},
    {id: '3', name: t('common:stats')},
  ]);
  const [setClick, isSetClick] = useState(false);
  const [isSelect, setIsSelect] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [secondTabId, setSecondTabId] = useState('MY CONTESTS');
  const [tabID, setTabId] = useState('0');
  const [arrow, setArrow] = useState(false);
  const [leaderLoader,setLeaderLoader]=useState(false)
  const [grounndLoader,setGroundLoader]=useState(false)

  const [activeSections,setactiveSections]=useState('')
  const [SECTIONS,setSection]=useState( []);
  const [teamaOver, setteamaOver] = useState([]);
  const [inningsNumber,setInnigsNumber]=useState('')
  const [dataTeam, setDataTeam] = useState([]);
  const [scoreArray, setScoreArray] = useState([]);
  const [colIndex,setColIndex]=useState(0)
  const [modalTabId, setmodalTab] = useState('');
  const [modaltabID, setmodalTabId] = useState('0');
 


  const [prizeState, setPrizeState] = useState([]);
  const [leaderdata,setleaderdata]=useState([]);

  const [teamOneName, setTeamOneName] = useState('');

  const [teamOneLength, setTeamOneLength] = useState('');
  const [teamTwoName, setTeamTwoName] = useState('');
  const [teamTwoLength, setTeamTwoLength] = useState('');
  const [capt, setCapt] = useState('');
  const [vCapt, setVCapt] = useState('');
  const [points,setPoints]=useState(0);
  const [teamName,setTeamName]=useState('')
  const [teamNo,setTeamNo]=useState(0);
  const [groundTeam, setgroundTeam] = useState([]);
  const [isGModalVisible, setIsGModalVisible] = useState(false);


  const [highlitId, setHighlightId] = useState(1);
  const [contestFull, setContestFull] = useState([])
  const [firstHeader, setfirstHeader] = useState('')
  const [livescoreHeader, setLivescoreHeader] = useState('')



  const [win, setWin] = useState('')




  const [isModalVisible, setisModalVisible] = useState(false);

const [statsArray,setStatsArray]=useState([])
const [extraRun,setExtraRun]=useState({
  "byes": 0,
  "legbyes": 0,
  "wides": 0,
  "noballs": 0,
  "penalty": "",
  "total": 9
  })

  const [total,setTotal]=useState({
   
      "runs": 0,
      "wickets": 0,
      "overs": "0",
      "bowlers_used": 0,
      "runrate": "0"
    })





  const [scoreStatus, setScoreStatus] = useState([
    {
      id: '1',
      scorer: 0.3,
      scoreb: 2,
      scores: 0.3,
      scoresa: 1.3,
      scoreSr: 2.3,
      status: 'C Imran khan',
      playerName: 'Babar Azam',
    },
    {
      id: '2',
      scorer: 0.3,
      scoreb: 2.3,
      scores: 0,
      scoresa: 0.3,
      scoreSr: 0.0,
      status: 'Imran',
      playerName: 'Babar Azam',
    },
    {
      id: '3',
      scorer: 0.3,
      scoreb: 2,
      scores: 0.3,
      scoresa: 3,
      scoreSr: 0.0,
      status: 'Imran',
      playerName: 'Babar Azam',
    },
    {
      id: '2',
      scorer: 0,
      scoreb: 2,
      scores: 0,
      scoresa: 0,
      scoreSr: 0.0,
      status: 'Imran',
      playerName: 'Babar Azam',
    },
    {
      id: '3',
      scorer: 0,
      scoreb: 2.3,
      scores: 0.3,
      scoresa: 6.3,
      scoreSr: 0.0,
      status: 'Imran',
      playerName: 'Babar Azam',
    },
  ]);
  const [statsData, setStatsData] = useState([
    {
      id: '1',
      scoreb: '.29%',
      scores: '5.47%',
      scoreSr: '5.47%',
      status: 'PAK-BAT',
      playerName: 'Babar Azam',
      highlight: false,
    },
    {
      id: '2',
      scoreb: '.29%',
      scores: '5.47%',
      scoreSr: '5.47%',
      status: 'PAK-BAT',
      playerName: 'Babar Azam',
      highlight: true,
    },
    {
      id: '3',
      scoreb: '.29%',
      scores: '5.47%',
      scoreSr: '5.47%',
      status: 'PAK-BAT',
      playerName: 'Babar Azam',
      highlight: false,
    },
    {
      id: '4',
      scoreb: '.29%',
      scores: '5.47%',
      scoreSr: '5.47%',
      status: 'PAK-BAT',
      playerName: 'Babar Azam',
      highlight: true,
    },
    {
      id: '5',
      scoreb: '.29%',
      scores: '5.47%',
      scoreSr: '5.47%',
      status: 'PAK-BAT',
      playerName: 'Babar Azam',
      highlight: false,
    },
    {
      id: '6',
      scoreb: '.29%',
      scores: '5.47%',
      scoreSr: '5.47%',
      status: 'PAK-BAT',
      playerName: 'Babar Azam',
      highlight: false,
    },
    {
      id: '7',
      scoreb: '.29%',
      scores: '5.47%',
      scoreSr: '5.47%',
      status: 'PAK-BAT',
      playerName: 'Babar Azam',
      highlight: true,
    },
    {
      id: '8',
      scoreb: '.29%',
      scores: '5.47%',
      scoreSr: '5.47%',
      status: 'PAK-BAT',
      playerName: 'Babar Azam',
      highlight: false,
    },
    {
      id: '9',
      scoreb: '.29%',
      scores: '5.47%',
      scoreSr: '5.47%',
      status: 'PAK-BAT',
      playerName: 'Babar Azam',
      highlight: false,
    },
    {
      id: '10',
      scoreb: '.29%',
      scores: '5.47%',
      scoreSr: '5.47%',
      status: 'PAK-BAT',
      playerName: 'Babar Azam',
      highlight: true,
    },
    {
      id: '11',
      scoreb: '.29%',
      scores: '5.47%',
      scoreSr: '5.47%',
      status: 'PAK-BAT',
      playerName: 'Babar Azam',
      highlight: false,
    },



    
  ]);

  const [myContestDummy, setMyContestDummy] = useState([
    {
      id: '1',
      type: 'spots 53,000',
      price1: '20',
      price2: '9000',
      winnerP: '50',
      prize: '100',

      Teams: [
        {
          id: '1',
          TeamName: 'A',
          winprice: '50',
          points: '483.5',
          totalprice: '31,500',
          win: false,
        },
        {
          id: '2',
          TeamName: 'A',
          winprice: '50',
          points: '483.5',
          totalprice: '31,500',
          win: true,
        },
        {
          id: '3',
          TeamName: 'A',
          winprice: '50',
          points: '483.5',
          totalprice: '31,500',
          win: false,
        },
      ],
    },

    {
      id: '2',
      type: 'spots 53,000',
      price1: '20',
      price2: '9000',
      winnerP: '50',
      prize: '100',

      Teams: [
        {
          id: '1',
          TeamName: 'A',
          winprice: '50',
          points: '483.5',
          totalprice: '31,500',
          win: false,
        },
        {
          id: '2',
          TeamName: 'A',
          winprice: '50',
          points: '483.5',
          totalprice: '31,500',
          win: true,
        },
      ],
    },

    {
      id: '3',
      type: 'spots 53,000',
      price1: '20',
      price2: '9000',
      winnerP: '50',
      prize: '100',

      Teams: [
        {
          id: '1',
          TeamName: 'A',
          winprice: '50',
          points: '483.5',
          totalprice: '31,500',
          win: false,
        },
        {
          id: '2',
          TeamName: 'A',
          winprice: '50',
          points: '483.5',
          totalprice: '31,500',
          win: true,
        },
      ],
    },

    {
      id: '4',
      type: 'spots 53,000',
      price1: '20',
      price2: '9000',
      winnerP: '50',
      prize: '100',

      Teams: [
        {
          id: '1',
          TeamName: 'A',
          winprice: '50',
          points: '483.5',
          totalprice: '31,500',
          win: false,
        },
        {
          id: '2',
          TeamName: 'A',
          winprice: '50',
          points: '483.5',
          totalprice: '31,500',
          win: true,
        },
      ],
    },
  ]);

  const [cricket_status, setCricketstatus] = useState([
    {
      TeamName: 'Basic Team',
      points: '321',
      CaptianName: 'sangrakha',
      vCaptianName: 'I.khan',
      Teams: [
        {
          name: 'Wicket Keeper',
          imgpath: icons.wicket,
          count: 0,
          is_count: false,
          pick: '1-4',
        },
        {
          name: 'Batsman',
          imgpath: icons.bats,
          count: 0,
          is_count: false,
          pick: '3-6',
        },
        {
          name: 'All Rounder',
          imgpath: icons.batball,
          count: 0,
          is_count: false,
          pick: '3-6',
        },
        {
          name: 'Bowler',
          imgpath: icons.balls,
          count: 0,
          is_count: false,
          pick: '1-4',
        },
      ],
    },

    {
      TeamName: 'New Team',
      points: '321',
      CaptianName: 'sangrakha',
      vCaptianName: 'I.khan',
      Teams: [
        {
          name: 'Wicket Keeper',
          imgpath: icons.wicket,
          count: 0,
          is_count: false,
          pick: '1-4',
        },
        {
          name: 'Batsman',
          imgpath: icons.bats,
          count: 0,
          is_count: false,
          pick: '3-6',
        },
        {
          name: 'All Rounder',
          imgpath: icons.batball,
          count: 0,
          is_count: false,
          pick: '3-6',
        },
        {
          name: 'Bowler',
          imgpath: icons.balls,
          count: 0,
          is_count: false,
          pick: '1-4',
        },
      ],
    },

    {
      TeamName: 'New Team',
      points: '321',
      CaptianName: 'sangrakha',
      vCaptianName: 'I.khan',
      Teams: [
        {
          name: 'Wicket Keeper',
          imgpath: icons.wicket,
          count: 0,
          is_count: false,
          pick: '1-4',
        },
        {
          name: 'Batsman',
          imgpath: icons.bats,
          count: 0,
          is_count: false,
          pick: '3-6',
        },
        {
          name: 'All Rounder',
          imgpath: icons.batball,
          count: 0,
          is_count: false,
          pick: '3-6',
        },
        {
          name: 'Bowler',
          imgpath: icons.balls,
          count: 0,
          is_count: false,
          pick: '1-4',
        },
      ],
    },

    {
      TeamName: 'New Team',
      points: '321',
      CaptianName: 'sangrakha',
      vCaptianName: 'I.khan',
      Teams: [
        {
          name: 'Wicket Keeper',
          imgpath: icons.wicket,
          count: 0,
          is_count: false,
          pick: '1-4',
        },
        {
          name: 'Batsman',
          imgpath: icons.bats,
          count: 0,
          is_count: false,
          pick: '3-6',
        },
        {
          name: 'All Rounder',
          imgpath: icons.batball,
          count: 0,
          is_count: false,
          pick: '3-6',
        },
        {
          name: 'Bowler',
          imgpath: icons.balls,
          count: 0,
          is_count: false,
          pick: '1-4',
        },
      ],
    },
  ]);

  const [modalTab, setModalTab] = useState([
    {id: '0', name: 'CONTEST 1'},
    {id: '1', name: 'CONTEST 2'},
    {id: '2', name: 'CONTEST 3'},
  ]);

  const [leaderBoard, setLeaderBoard] = useState([
    {
      rank: '#1',
      wins: '15',
      Teams: [
        {
          id: '1',
          name: 'Basic Team',
          Points: '5.47%',
          Rank: '5.47%',
          highlight: false,
        },
        {
          id: '2',
          name: 'Basic Team',
          Points: '5.47%',
          Rank: '5.47%',
          highlight: false,
        },
        {
          id: '3',
          name: 'Basic Team',
          Points: '5.47%',
          Rank: '5.47%',
          highlight: false,
        },
        {
          id: '4',
          name: 'Basic Team',
          Points: '5.47%',
          Rank: '5.47%',
          highlight: false,
        },
        {
          id: '5',
          name: 'Basic Team',
          Points: '5.47%',
          Rank: '5.47%',
          highlight: false,
        },
      ],

      LeaderBoard: [
        {id: '1', Points: '5.47%', Rank: '5.47%', highlight: false},
        {id: '2', Points: '5.47%', Rank: '5.47%', highlight: false},
        {id: '3', Points: '5.47%', Rank: '5.47%', highlight: false},
        {id: '4', Points: '5.47%', Rank: '5.47%', highlight: false},
        {id: '5', Points: '5.47%', Rank: '5.47%', highlight: false},
      ],
    },
  ]);


  const [status, setStatus] = useState([
    {id: '1', price: '₹9,000',rank:'5'},
    {id: '2', price: '₹9,000',rank:'7'},
    {id: '3', price: '₹9,000',rank:'8'},
    {id: '4', price: '₹9,000',rank:'3'},
    {id: '5', price: '₹9,000',rank:'2'},
  ]);



  const userData = useSelector(
    (state) => state.userR.userSuccess,
  );


//functionality start



  useEffect(() => {
    _fetchfirstHeaderLive()
    _fetchSecondHeaderLive();
   
    setIsLoading(true);

    _fetchMyContest()
   
  }, []);
  








  function clickSingleTeam(item,index){
   // console.log("clicked:",item.captainId,item.vCaptainId)
    
    

    setPoints(item.points)
    setTeamName(item.team_name)
    setTeamNo(index+2-1)
    setCapt(item.captainId);
    setVCapt(item.vCaptainId);
    setTeamOneName(item.teamOneName);
    setTeamOneLength(item.teamOneLength);
    setTeamTwoName(item.teamTwoName);
    setTeamTwoLength(item.teamTwoLength);
    setgroundTeam(item.players_list)
    setIsGModalVisible(true)
    
      }




      const fethPrize = (contest_id) => {
        // setdata([]);
        console.log('first tab result is:', contest_id)
        getApiSerive
          .getApiClass(api_link.prizeapi + 'contest_id=' +contest_id)
          .then((res) => {
            console.log('first tab result is:', res.winning_information)
            setPrizeState(res.winning_information)
            
          });
      };
      
      const fethLeaderBoard = (contest_id) => {
        setLeaderLoader(true)
        // setleaderdata([]);
        getApiSerive
          .getApiClass(
            api_link.leaderboardapi +'contest_id=' +contest_id +'&matches_id=' +props.route.params.match_id+'&user_id=' +userData.user_id
          )
          .then((res) => {
            // console.log('leaderboard is:', res.data.leaderboard)
            if (res.data.leaderboard) {
              setleaderdata(res.data.leaderboard);
              setLeaderLoader(false)
            
            }else{
                // console.log('leaderboard false:')
                setleaderdata([])
                setLeaderLoader(false)
              
            }
      
         
            //   setdata(res.winning_information)
          });
      };
      
      
      
      


    
    function toggleGModal(){
      setIsGModalVisible(false)
    }
    




  function secondTabBarOnClick(id, name) {
    //console.log("id is:",name)
    setTabId(id);
    setSecondTabId(name);
    if (id === '0') {
      setIsLoading(true);
      _fetchMyContest()
      // _fetchStatusTypeData(secondTabId);
    } else if (id === '1') {
      setIsLoading(true);
      // _fetchMyContest();
      _fetchMyTeam();
    } else if (id === '2') {
      setIsLoading(true);
      _fetchScorcard()
    }
    else if (id === '3') {
      setIsLoading(true);
      _fetchStats();
    }


  }

  function modalTabBarOnClick(id, name,win) {
    //console.log("id is:",name)
   
    setmodalTab(id);
    setmodalTabId(name);
    setWin(win)
    fethPrize(id)
fethLeaderBoard(id)



  }

  const toggleModal = () => {
    setisModalVisible(!isModalVisible);
  };



  const _fetchStats = () => {

  

    setIsLoading(true);
    // var user_id=9;
    // var matchId=953
  
    // props.route.params.match_id_c
    // https://snack.expo.io/EVuxUeQyD
    // https://thecodeprogram.com/react-native---create-your-own-accordion-object
    console.log("fetch myContest live:", api_link.statsApi +
    'match_id=' +
    props.route.params.match_id_c )
  
    getApiSerive
    .getApiClass(
  
      api_link.statsApi +
      'match_id=' +
      props.route.params.match_id_c
     
       
    )
    .then((res) => {
  
   console.log("stats Api called:",res.data)
   setStatsArray(res.data)
   setIsLoading(false)
  
         });
  
  
  };



const _fetchMyTeam = (typeId) => {
  // setIsLoading(true)
  var match_id = 953;
  var user_id = userData.user_id;

  console.log("my team link:", api_link.cricketapi +
  'my_team?' +
  'match_id=' +
  props.route.params.match_id_c +
  '&user_id=' +
  user_id)

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
     

      var myTeamArray = [];
      var result=[];
      var team1Array = [];
      var team2Array = [];
      var playerPoints=[]
      var numberp=0;


      var points=0;
      let map = new Map();
      for (var i = 0; i < res.team_data.team.length; i++) {




       // console.log("list first time:",playerPoints);
          var playerList = res.team_data.team[i].players_list;

         // [1, 2, 3, 4].reduce((a, b) => a + b, 0)



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
            playerPoints.push(playerList[t1].total_points)
            if (playerList[t1].teamid === result[1].id) {
              team1Array.push({id: playerList[t1].teamid});
            }
            if (playerList[t1].teamid === result[0].id) {
              team2Array.push({id: playerList[t1].teamid});
            }
          }
          
         





       
        //console.log(res.team_data.team[i]);
        // var playerList = res.team_data.team[i].players_list;
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

        
        // res.team_data.team[i].filter(o => o.players_list.some(({wicket}) => wicket.title === "Wicket Keeper"));
        var data = {
          team: res.team_data.team[i].team,
          team_name:res.team_data.team[i].team_name,
          captainImage: is_captain[0].image,
          captainName: is_captain[0].name,
          points:playerPoints.reduce((a, b)=>Number(a)+Number(b)),
          vcaptainImage: is_vicecaptain[0].image,
          vcaptainName: is_vicecaptain[0].name,
          wicketLength: wickets.length,
          allRounderLength: AllRounder.length,
          bowlerLength: Bowler.length,
          batsman: Batsman.length,
          players_list: res.team_data.team[i].players_list,
          captainId: is_captain[0].playerid,
          vCaptainId: is_vicecaptain[0].playerid,
          teamOneLength:team1Array.length,
          teamOneName:result[1].name,
          teamTwoLength:team2Array.length,
          teamTwoName: result[0].name

        };

        myTeamArray.push(data);
        playerPoints=[];
        team1Array = [];
        team2Array = [];
        
      }
      //console.log('wicket keeper is:', myTeamArray);
    
      
      setDataTeam(myTeamArray);
     
     

      setIsLoading(false);
    });
};



const _fetchMyContest = () => {

  

  setIsLoading(true);
  var user_id=userData.user_id;
  var matchId=953

  // props.route.params.match_id_c
  // https://snack.expo.io/EVuxUeQyD
  // https://thecodeprogram.com/react-native---create-your-own-accordion-object
  console.log("fetch myContest live:", api_link.my_join_contest_list_live +
  'match_id=' +
  props.route.params.match_id_c
  +
    '&' +
    'user_id=' +
    user_id )

  getApiSerive
  .getApiClass(

    api_link.my_join_contest_list_live +
    'match_id=' +
    props.route.params.match_id_c
    +
      '&' +
      'user_id=' +
      user_id 
     
  )
  .then((res) => {

//  console.log("my join contest list live:",res.data.contest_data)
setmodalTab(res.my_contest_data[0].contest_id)
setContestFull(res.my_contest_data)
setIsLoading(false);
fethPrize(res.my_contest_data[0].contest_id)
fethLeaderBoard(res.my_contest_data[0].contest_id)
setWin(res.my_contest_data[0].firstprize)

       });


};



const _fetchSecondHeaderLive=()=>{

  console.log("second header url",api_link.matchInfo+''+props.route.params.uniqueId+'/live?token=78f6340b0ddaa71377ea9ed3ae0d8015');

  getApiSerive
  .getApiClass(
    api_link.matchInfo+''+props.route.params.uniqueId+'/live?token=78f6340b0ddaa71377ea9ed3ae0d8015'
  )
  .then((res) => {
setLivescoreHeader(res.response)
console.log("second header data",res.response);

var num = res.response.live_inning.recent_scores.replace(/,/g, '')
var myArr = String(num).split("").map((num)=>{
  return num
})
 
if(myArr){
  setScoreArray(myArr)
}else{
  setScoreArray([])
}



// console.log("second header array",myArr);



  });


}



const _fetchfirstHeaderLive=()=>{


  // '+props.route.params.uniqueId+'

  console.log("Header url:", api_link.matchInfo+''+props.route.params.uniqueId+'/info?token=78f6340b0ddaa71377ea9ed3ae0d8015')

  getApiSerive
  .getApiClass(
     api_link.matchInfo+''+props.route.params.uniqueId+'/info?token=78f6340b0ddaa71377ea9ed3ae0d8015'
  )
  .then((res) => {
//console.log("first header data:",res.response)
setfirstHeader(res.response)

  });


}

//scorcard api fetch
const _fetchScorcard=()=>{
  console.log('i am here:', api_link.matchInfo+''+props.route.params.uniqueId+'/scorecard?token=78f6340b0ddaa71377ea9ed3ae0d8015')
    getApiSerive
    .getApiClass(
       api_link.matchInfo+''+props.route.params.uniqueId+'/scorecard?token=78f6340b0ddaa71377ea9ed3ae0d8015'
    )
    .then((res) => {
  //console.log(" completed:",res.response.innings.extra_runs)
  if(res.response.innings){
  setExtraRun(res.response.innings[0].extra_runs)
  setTotal(res.response.innings[0].equations)
  setSection(res.response.innings)
 // console.log('scorcard data is',res.response.innings)
  
  setteamaOver([res.response.teama.overs,res.response.teamb.overs])
  setInnigsNumber(res.response.latest_inning_number)
 
  setIsLoading(false)
  //console.log('latest innigs number data is',res.response.latest_inning_number)
  }else{

    setIsLoading(false)

  }



    });
  
  
  }


//collapse functions
const _renderHeader = (section,index) => {
  return (
   
    <View style={{flexDirection:'row',backgroundColor:index==colIndex? Colors.orange:null,borderRadius:index==colIndex? 20:null,justifyContent:'space-between',marginLeft:7,marginRight:7,padding:index===1?10:10}}>
    <View style={{marginTop:3,flexDirection:'row'}}>
    {index==colIndex ? (
                      <MobelOpenBtnSvg
                      style={{marginTop:3}}
                      height={15}
                      width={15}
                      ></MobelOpenBtnSvg>
                    ) : (
                      <MobelCloseBtnSvg
                      style={{marginTop:3}}
                      height={15}
                      width={15}
                      ></MobelCloseBtnSvg>
                    )}
      <Text style={[styles.topHeading,{marginLeft:10,color:index==colIndex?Colors.white:Colors.darkGrey }]}>{section.short_name}</Text>
    {index===1?(<View style={{marginLeft:15}}> 
      <LinearGradient start={{ x: 0, y: 0.9 }} end={{ x: 0.9, y: 1 }} style={styles.confirmtag} colors={[index==colIndex?Colors.crickettagcolor1:Colors.headerBackground1,index==colIndex? Colors.mainbackground:Colors.headerBackground2]}>
         <Text style={[styles.textColor, {fontSize: RFValue(8, 580),color:Colors.darkGrey}]}>
         {t('common:batting')}
          </Text>
        </LinearGradient>
      </View>  ):null}
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:5}}>
    <View style={{marginTop:2}}><Text style={[styles.topHeading,{color:index==colIndex?Colors.white:Colors.darkGrey}]}>{section.scores_full}</Text></View>
    {/* <View style={{marginTop:12,marginRight:6}}><Text style={styles.listHeadingscore}>  ({teamaOver[index]})</Text></View> */}
    </View>
  </View>
    /* <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',padding:10,marginLeft:5}}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={styles.topHeading}>{section.team1}</Text>
     <View style={{marginLeft:12,marginTop:-3}}>
        <LinearGradient start={{ x: 0, y: 0.9 }} end={{ x: 0.9, y: 1 }} style={styles.confirmtag} colors={[Colors.headerBackground1, Colors.headerBackground2]}>
           <Text style={[styles.textColor, {fontSize: RFValue(9, 580),color:Colors.darkGrey}]}>
           Batting
            </Text>
          </LinearGradient>
          </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:5}}>
      <View style={{marginTop:3,marginRight:6}}><Text style={styles.listHeadingscore}>({section.score1})</Text></View>
      <Text style={styles.topHeading}>{section.totalscore}</Text>
      </View>
    </TouchableOpacity> */
   

  );
};

const _renderContent = (section,index) => {
  // console.log('index is',index)
  return (
    <View>
      <View style={styles.mainView}>
           <View>
           <Text style={styles.listHeadingscore}>{t('common:capBatsman')}</Text>
           </View>

           <View style={{flexDirection:'row',justifyContent:'space-between', marginLeft: 15,paddingRight:10, width: 189}}>
           
           <Text style={styles.listHeadingscore}>R</Text>
          

           <Text style={styles.listHeadingscore}>B</Text>
          


          
           <Text style={styles.listHeadingscore}>4s</Text>
          
          
           <Text style={styles.listHeadingscore}>6s</Text>
          
           <Text style={styles.listHeadingscore}>S/R</Text>
          



           </View>
         
         
       </View>


       <View
  style={{
    height:1,
    borderWidth:0.2,
    borderColor:Colors.seperatorColor,
      margin:12,
    width:widthPercentageToDP(87),
    backgroundColor: Colors.seperatorColor,
    alignSelf:'center'
  }}
/>


<FlatList
            vertical={true}
            showsHorizontalScrollIndicator={false}
           // data={colIndex==0?SECTIONS[0].batsmen:SECTIONS[1].batsmen}
            data={colIndex==0?SECTIONS[0].batsmen:colIndex==1 && SECTIONS.length>1 ?SECTIONS[1].batsmen:[]}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 700, }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity>
                <ScoreCard
                data={item}
                type={'live'}
                ></ScoreCard>

</TouchableOpacity>
          

                );
              }}
              ListEmptyComponent={() =>
                  <View
                      activeOpacity={10}>
                      {/* <Text style={styles.stauts}>No Detail Record Found!</Text>
                      <Text style={styles.stautsNext}>There is no Detail Record Found.</Text> */}
                  </View>
        
              }
              enableEmptySections={true}
              ItemSeparatorComponent={renderScoreSeparator}  
              keyExtractor={(item, index) => index.toString()}
            />
 <View
  style={{
    height:1,
    borderWidth:0.2,
    borderColor:Colors.seperatorColor,
      margin:12,
    width:widthPercentageToDP(87),
    backgroundColor: Colors.seperatorColor,
    alignSelf:'center'
  }}
/>

<View style={styles.mainView}>
           <View>
           <Text style={styles.listHeadingscore}>{t('common:capBowler')}</Text>
           </View>

           <View style={{flexDirection:'row',justifyContent:'space-between', marginLeft: 15,paddingRight:10, width: 189}}>
           
           <Text style={styles.listHeadingscore}>O</Text>
          

           <Text style={styles.listHeadingscore}>R</Text>
          


          
           <Text style={styles.listHeadingscore}>W</Text>
          
          
           <Text style={styles.listHeadingscore}>M</Text>
          
           <Text style={styles.listHeadingscore}>E</Text>
          



           </View>
         
         
       </View>


       <View
  style={{
    height:1,
    borderWidth:0.2,
    borderColor:Colors.seperatorColor,
      margin:12,
    width:widthPercentageToDP(87),
    backgroundColor: Colors.seperatorColor,
    alignSelf:'center'
  }}
/>


<FlatList
            vertical={true}
            showsHorizontalScrollIndicator={false}
           // data={colIndex==0?SECTIONS[1].bowlers:SECTIONS[0].bowlers}
           data={colIndex==0 && SECTIONS.length>1 ?SECTIONS[1].bowlers:colIndex==1 && SECTIONS.length>1 ?SECTIONS[0].bowlers:[]}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 700, }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity>
                <BollerScoreCard
                data={item}
                type={'live'}
                ></BollerScoreCard>

</TouchableOpacity>
          

                );
              }}
              ListEmptyComponent={() =>
                  <View
                      activeOpacity={10}>
                      {/* <Text style={styles.stauts}>No Detail Record Found!</Text>
                      <Text style={styles.stautsNext}>There is no Detail Record Found.</Text> */}
                  </View>
        
              }
              enableEmptySections={true}
              ItemSeparatorComponent={renderScoreSeparator}  
              keyExtractor={(item, index) => index.toString()}
            />




<View style={{marginBottom:70}}>
  <View style={{padding:14}}><Text style={[styles.topHeading,{color:Colors.grayMedium}]}>{t('common:extra')}</Text></View>
     <View style={{paddingLeft:14}}><Text style={{color: Colors.darkGrey, fontSize: RFValue(10),fontFamily: fonts['DMSans-Bold'],fontStyle: 'normal'}}>(nb {section.extra_runs.noballs}, wd {section.extra_runs.wides}, b {section.extra_runs.byes} , lb {section.extra_runs.legbyes} , pen {section.extra_runs.penalty})</Text></View>

     <View style={{padding:14}}><Text style={[styles.topHeading,{color:Colors.grayMedium}]}>{t('common:totalScore')}</Text></View>
     <View  style={{paddingLeft:14}}><Text style={{color: Colors.darkGrey, fontSize: RFValue(10),fontFamily: fonts['DMSans-Bold'],fontStyle: 'normal'}}>({section.equations.wickets } {t('common:weickets')}, {section.equations.overs} {t('common:overs')} )</Text></View>

     </View>


          </View> 
         
  );



 

};


const _updateSections = (activeSections) => {
  setColIndex(activeSections[0])
  setactiveSections(activeSections)
 
  
  
};


const _renderSectionTitle = (section) => {
  return (
    <View >
      <Text>{section.content}</Text>
    </View>
  );
};










// functionality end











  const liveScoreTabBar = (data) => {
       console.log("batman and bowler length:",data.batsmen,data.bowlers,)
    if(data !='Data unavailable'){
      if([data].length>0){
    return (
      <View style={styles.liveScoreTabScore}>
        {data.batsmen?
        <View>
        {data.batsmen.length>=1 && data.bowlers.length>=1?
        <View style={styles.livescoreTabRow}>
          <Text style={styles.liveScoreText}>{data.batsmen[0].name.slice(0,9)}*</Text>

          <Text style={styles.liveScoreText}>{data.batsmen[0].runs} ({data.batsmen[0].balls_faced})</Text>

          <Text style={styles.liveScoreText}>{data.bowlers[0].name.slice(0,9)}</Text>

          <View style={{alignSelf: 'center'}}>
            <Text style={styles.liveScoreText}>{data.bowlers[0].runs_conceded}/{data.bowlers[0].wickets} ({data.bowlers[0].overs})</Text>
          </View>
        </View>
        :
        null}
        </View>
        :null}


  {data.batsmen?
<View>
  
{data.batsmen.length==2 && data.bowlers.length==2?
        <View style={styles.livescoreTabRow}>
          <Text style={styles.liveScoreText}>{data.batsmen[1].name.slice(0,9)}*</Text>

          <Text style={styles.liveScoreText}>{data.batsmen[1].runs} ({data.batsmen[1].balls_faced})</Text>

          <Text style={styles.liveScoreText}>{data.bowlers[1].name.slice(0,10)}</Text>

          <View style={{alignSelf: 'center'}}>
            <Text style={styles.liveScoreText}>{data.bowlers[1].runs_conceded}/{data.bowlers[1].wickets} ({data.bowlers[1].overs})</Text>
          </View>
        </View>
        :
       null}
</View>
:null}


        <View style={styles.livescoreRow}>

          <View style={{width: '44%'}}>


          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={scoreArray}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 1}}
          renderItem={({item, index}) => {
            return (
              
              <View>
              <View style={[styles.notSelectedTags,{backgroundColor:item==='w'?Colors.red:item==='4'?Colors.green:item==='6'?Colors.orange:Colors.darkGrey}]}>
                <Text style={styles.roundScoreText}>{item}</Text>
              </View>
              </View>
           
            );
          }}
          ListEmptyComponent={() => (
            <View activeOpacity={10}>
              <Text style={styles.stautsNext}>
              
              </Text>
            </View>
          )}
          enableEmptySections={true}
          keyExtractor={(item, index) => index.toString()}
        />
          </View>
        </View>
      </View>
    );
          }else{

return(
  <View></View>
)

          }
        }

  };
  const tabBarScroller = () => {
    return (
      <View style={{flexDirection: 'column', padding: 10}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          horizontal={true}>
          {statusTypeData.map((status, index) => (
            <TouchableOpacity
              disabled={status.name == '' ? true : false}
              activeOpacity={0.9}
              key={index}
              onPress={() => secondTabBarOnClick(status.id, status.name)}>
              <View
                style={[
                  styles.selectedTab,
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
                    {status.name.toUpperCase()}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };
  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          borderWidth: 0.2,
          borderColor: Colors.seperatorColor,
          //   margin: 12,
          marginLeft: 12,
          marginRight: 12,
          width: widthPercentageToDP(87),
          backgroundColor: Colors.seperatorColor,
          alignSelf: 'center',
        }}
      />
    );
  };

  const renderScoreSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          borderWidth: 0.2,
          borderColor: Colors.seperatorColor,
          // margin: 12,
          marginTop:5,
          marginLeft:12,
          marginRight:12,
          marginBottom:12,
          width: widthPercentageToDP(87),
          backgroundColor: Colors.seperatorColor,
          alignSelf: 'center',
        }}
      />
    );
  };

  const scoreView = () => {
    return (
      <View>
        <View style={styles.mainView}>
          <View style={{flexDirection: 'row', padding: 8}}>
            <Text style={styles.topHeading}>MI</Text>
            <View style={{marginLeft: 10}}>
              <LinearGradient
                start={{x: 0, y: 0.9}}
                end={{x: 0.9, y: 1}}
                style={styles.confirmtag}
                colors={[Colors.headerBackground1, Colors.headerBackground2]}>
                <Text
                  style={[
                    styles.textColor,
                    {fontSize: RFValue(9, 580), color: Colors.darkGrey},
                  ]}>
                  Batting
                </Text>
              </LinearGradient>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
              marginRight: 10,
              padding: 8,
            }}>
            <View style={{marginLeft: 20, marginTop: 5}}>
              <Text style={styles.listHeadingscore}>(1.3)</Text>
            </View>

            <View style={{marginLeft: 5, marginRight: 20}}>
              <Text style={styles.topHeading}>12/1</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainView}>
          <View>
            <Text style={styles.listHeadingscore}>BATSMAN</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 15,
              paddingRight: 10,
              width: 189,
            }}>
            <Text style={styles.listHeadingscore}>R</Text>

            <Text style={styles.listHeadingscore}>B</Text>

            <Text style={styles.listHeadingscore}>4s</Text>

            <Text style={styles.listHeadingscore}>6s</Text>

            <Text style={styles.listHeadingscore}>S/R</Text>
          </View>
        </View>

        <View
          style={{
            height: 1,
            borderWidth: 0.2,
            borderColor: Colors.seperatorColor,
            margin: 12,
            width: widthPercentageToDP(87),
            backgroundColor: Colors.seperatorColor,
            alignSelf: 'center',
          }}
        />

        <FlatList
          vertical={true}
          showsHorizontalScrollIndicator={false}
          data={scoreStatus}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 700}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity>
                <ScoreCard data={item}></ScoreCard>
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={() => (
            <View activeOpacity={10}>
              <Text style={styles.stauts}>No Detail Record Found!</Text>
              <Text style={styles.stautsNext}>
                There is no Detail Record Found.
              </Text>
            </View>
          )}
          enableEmptySections={true}
          ItemSeparatorComponent={renderScoreSeparator}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  const statsView = () => {
    return (
      <View>
        <View style={styles.mainView}>
          <View style={{marginLeft: 10}}>
            <Text style={styles.listHeading}>{t('common:players')}</Text>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 5}}>
            <View style={{marginLeft: 15, marginRight: 15}}>
              <Text style={styles.listHeading}>% EL {t('common:by')}</Text>
            </View>

            <View style={{marginLeft: 15, marginRight: 15}}>
              <Text style={styles.listHeading}>% C {t('common:by')}</Text>
            </View>

            <View style={{marginLeft: 15, marginRight: 15}}>
              <Text style={styles.listHeading}>% VC {t('common:by')}</Text>
            </View>
          </View>
        </View>

        <FlatList
          vertical={true}
          showsHorizontalScrollIndicator={false}
          data={statsArray}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 500}}
          renderItem={({item, index}) => {
            return (
              <LinearGradient
                start={{x: 0, y: 0.9}}
                end={{x: 0.9, y: 1}}
                colors={
                  index%2==0
                    ? [Colors.headerBackground1, Colors.headerBackground2]
                    : [Colors.white, Colors.white]
                }>
                <View
                  // onPress={() => {
                  //   setHighlightId(item.id);
                  //  // console.log('i am clicked');
                  // }}
                  >
                  <StatsCard data={item}></StatsCard>
                </View>
              </LinearGradient>
            );
          }}
          ListEmptyComponent={() => (
            <View activeOpacity={10}>
              <Text style={styles.stauts}>{t('common:contestEmptyMessg1')}</Text>
              <Text style={styles.stautsNext}>
              {t('common:contestEmptyMessg2')}
              </Text>
            </View>
          )}
          enableEmptySections={true}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  const MyContestView = () => {
    return (
      <View>
        <FlatList
          vertical={true}
          showsHorizontalScrollIndicator={false}
          data={contestFull}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 350}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity>
                <View>
                  <ContestMyContest data={item}
                  index={index}    
                  ></ContestMyContest>
                </View>
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={() => (
            <View activeOpacity={10}>
              <Text style={styles.stauts}> {t('common:contestEmptyMessg1')}</Text>
              <Text style={styles.stautsNext}>
              {t('common:contestEmptyMessg2')}
              </Text>
            </View>
          )}
          enableEmptySections={true}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  const MyTeamView = () => {
    return (
      <View>
        <FlatList
          vertical={true}
          showsHorizontalScrollIndicator={false}
          data={dataTeam}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 350}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
              onPress={()=>{
                clickSingleTeam(item,index)
              }}
              >
                <View style={styles.myTeamView}>
                  <ContestMyteam 
                  data={item}
                  index={index}
                  ></ContestMyteam>
                </View>
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={() => (
            <View activeOpacity={10}>
              <Text style={styles.stauts}>{t('common:contestEmptyMessg1')}</Text>
              <Text style={styles.stautsNext}>
              {t('common:contestEmptyMessg2')}
              </Text>
            </View>
          )}
          enableEmptySections={true}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  const tabBarModal = () => {
    return (
      <View style={{flexDirection: 'column', padding: 10}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          horizontal={true}>
          {contestFull.map((status, index) => (
            <View>
            {status.activate_status==1?
            <TouchableOpacity
              disabled={status.name == '' ? true : false}
              activeOpacity={0.9}
              key={index}
              onPress={() => {
               
                modalTabBarOnClick(status.contest_id, status.name,status.firstprize)}}>
              <View
                style={[
                  styles.selectedTab,
                  {
                    backgroundColor:
                      modalTabId == status.contest_id ? Colors.orange : null,
                  },
                ]}>
                <View>
                  <Text
                    style={[
                      styles.matchstatusbartext,
                      {
                        color:
                          modalTabId == status.contest_id
                            ? Colors.white
                            : Colors.grayMedium,
                      },
                    ]}>
                    {status.contest_name.toUpperCase()}
                  </Text>
                </View>
              </View>
           
            </TouchableOpacity>
            :null}
            </View>
            
         
         
         ))}
        </ScrollView>
      </View>
    );
  };


  const groundModal=()=>{
    return(
  
  <Modal
                testID={'modal'}
                isVisible={isGModalVisible}
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
                      <View
                       style={{marginLeft:20,marginTop:10,flexDirection:'row',justifyContent:'space-between'}}
                      >
                    <TouchableOpacity
                        style={{flexDirection:'row',justifyContent:'space-between'}}
                        onPress={() => toggleGModal()}>
                        <RedCrossSvg />
                        <View style={{marginLeft:20,marginTop:8}}>
                        {/* <Text style={styles.groundText}>{t('common:teamShort')} {teamNo}</Text>
                         */}
                        <Text style={styles.groundText}>{teamName?teamName:t('common:teamShort')+teamNo} <Text style={{fontSize:RFValue(6)}}>{teamName? t('common:teamShort') +teamNo:null}</Text></Text>

                        <Text style={styles.groundText}>{points} {t('common:pts')}</Text>
                      
                        </View>
                       
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{marginRight:40,marginTop:5}}
                        onPress={()=>{
                          setGroundLoader(true);
                          setTimeout(() => {
                            setGroundLoader(false);
                          }, 1000);
                        }}
                        >
                      <RefreshSvg
                      height={20}
                      width={20}
                      />
                      </TouchableOpacity>
                      
                      </View>
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
                           {t('common:groundEmptyMesssage')}
                          </Text>
                        </View>
                      ) : (
                        <>
                        {grounndLoader ? (
            <View style={styles.loader_style}>
              <ActivityIndicator color={Colors.white} />
            </View>
          ) : (
                          <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{marginTop: 15}}>
                            <GroundViewPlayersList
                              playertype="KEEPER"
                              screenType="captains"
                              pointType="point"
                          
                              data={groundTeam.filter((x) =>
                                (x.player_desigination == 'Wicket Keeper')
                              )}
                              captainId={capt}
                              viceCaptainId={vCapt}
                            />
                            <GroundViewPlayersList
                              playertype="BATSMAN"
                              pointType="point"
                              screenType="captains"
                              data={groundTeam.filter(
                                (x) => x.player_desigination == 'Batsman',
                              )}
                              captainId={capt}
                              viceCaptainId={vCapt}
                            />
                            <GroundViewPlayersList
                              playertype="ALL ROUNDER"
                              pointType="point"
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
                              pointType="point"
                              data={groundTeam.filter(
                                (x) => x.player_desigination == 'Bowler',
                              )}
                              captainId={capt}
                              viceCaptainId={vCapt}
                            />
                          </ScrollView>
          )}
    </>
                      )}
  
  
  {grounndLoader ? (
           <View></View>
          ) : (
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

          )}

                 
                    </ImageBackground>
                  
                 
                 
                  </View>
                </SafeAreaView>
              </Modal>
  
  
    )
  }




  const statsModalView = () => {
    return (
      <View>
      


     {arrow?
          <View style={{ flex: 1, backgroundColor: Colors.white, borderRadius: 10 }}>
           
              
              <View>
           
        

   
              {leaderLoader ? (
            <View style={styles.loader_style}>
              <ActivityIndicator color={Colors.orange} />
            </View>
          ) :(

              <FlatList
          vertical={true}
          showsHorizontalScrollIndicator={false}
          data={prizeState}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
          renderItem={({item, index}) => {
            return (
             
              <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding:20
                }}>
                <View>
                  <Text
                    style={{
                      color:Colors.darkGrey,
                      fontSize: RFValue(12),
                      fontFamily: fonts['DMSans-Medium'],
                    }}>
                    {item.from_rank==item.to_rank?item.to_rank:item.from_rank+'-'+item.to_rank}
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      color:Colors.darkGrey,
                      fontSize: RFValue(12),
                      fontFamily: fonts['DMSans-Medium'],
                    }}>
                   {'₹' + item.price}
                  </Text>
                </View>
              </View>

            </View>



            );
          }}
          ListEmptyComponent={() => (
            <View activeOpacity={10}>
              <Text style={styles.stauts}>{t('common:contestEmptyMessg1')}</Text>
              <Text style={styles.stautsNext}>
              {t('common:contestEmptyMessg2')}
              </Text>
            </View>
          )}
          enableEmptySections={true}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={(item, index) => index.toString()}
        />
     
        )
      }

{renderSeparator()}

        </View>
            <View style={{  alignSelf: 'center',padding:20 }}>
              <Text style={{fontSize:RFValue(14),color:Colors.grayMedium,}}>
              <Text style={{fontSize:RFValue(14),color:Colors.grayMedium,fontWeight:'bold'}}>{t('common:note')} : </Text>
              <Text style={{fontSize:RFValue(14),color:Colors.grayMedium}}> {t('common:modelDes1')}{'\n'} {t('common:modelDes2')}{'\n'}{t('common:modelDes3')}{'\n'}{t('common:modelDes4')}{'\n'}{t('common:modelDes5')}</Text>
              </Text>
              
              </View>
       
          </View>
        :null}



      <View style={styles.mainView}>
          <View style={{marginLeft: 10}}>
            <Text style={styles.listHeading}>{t('common:all')}  {t('common:teams')}</Text>
          </View>

          <View style={{  flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 15,
              paddingRight: 30,
              width: 140,}}>

            <View >
              <Text style={styles.listHeading}>{t('common:points')}</Text>
            </View>

            <View >
              <Text style={styles.listHeading}>{t('common:ranks')}</Text>
            </View>
          </View>
        </View>


<View>

{leaderLoader ? (
            <View style={styles.loader_style}>
              <ActivityIndicator color={Colors.orange} />
            </View>
          ) : (
        <FlatList
          vertical={true}
          showsHorizontalScrollIndicator={false}
          data={leaderdata}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
          renderItem={({item, index}) => {
            return (
              <LinearGradient
                start={{x: 0, y: 0.9}}
                end={{x: 0.9, y: 1}}
                colors={
                  highlitId == item.id
                    ? [Colors.headerBackground1, Colors.headerBackground2]
                    : [Colors.white, Colors.white]
                }>
                <TouchableOpacity
                  onPress={() => {
                    setHighlightId(item.id);
                  //  console.log('i am clicked');
                  }}>
                

                <View>
              <View style={styles.mainBody}>
             
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginTop: -5}}>
                    <Image
                      source={{
                        uri:item.image,
                      }}
                      style={{width: 40, height: 40, borderRadius: 30}}
                    />
                  </View>

                  <View style={{width: 80, marginLeft: 10,marginTop:10}}>
                    <Text numberOfLines={1} style={styles.listBody}>
                    {item.team_name?item.team_name:t('common:teamShort')} {item.team_name?<Text style={{fontSize:RFValue(6)}}>{t('common:teamShort')} {item.TeamName}</Text>:item.TeamName}
                    </Text>
                    {/* <Text
                      numberOfLines={1}
                      style={[styles.listBody, {color: Colors.grayMedium}]}>
                      {item.status}
                    </Text> */}
                  </View>
                </View>

                <View style={{flexDirection: 'row',justifyContent:'space-between', marginLeft: 24, width: 120,paddingRight:20,marginTop:10}}>
                 
                    <Text style={styles.listBody}>{item.points}</Text>
                    <Text style={styles.listBody}>{item.rank}</Text>
                
                </View>
              </View>
            </View>
        





                </TouchableOpacity>
              </LinearGradient>
            );
          }}
          ListEmptyComponent={() => (
            <View activeOpacity={10}>
              <Text style={styles.stauts}>{t('common:contestEmptyMessg1')}</Text>
              <Text style={styles.stautsNext}>
              {t('common:contestEmptyMessg2')}
              </Text>
            </View>
          )}
          enableEmptySections={true}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={(item, index) => index.toString()}
        />
     
          )
  }

     </View>


     {/* <View style={styles.modalButtonView}>
            <TouchableOpacity
              onPress={() =>
               {
                // console.log("load more")
               }
              }
              style={styles.buildteamtag}>
              <Text style={styles.buildteamtagtext}>Load More</Text>
            </TouchableOpacity>
          </View> */}

      </View>
    );
  };




  return (
    <SafeAreaView
    style={{ flex: 1, }}
  >
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0.9}}
        end={{x: 0.9, y: 1}}
        colors={[Colors.headerBackground1, Colors.headerBackground2]}>
        <Maintopbar
          title={props.route.params.teamname1 + ' VS ' + props.route.params.teamname2}
          counterValue={'70'}
          icon={
            <ClockSvg
              style={{marginRight: 5}}
              height={12}
              width={12}></ClockSvg>
          }
          type="livejointeam"
          navigation={props.navigation}
        />

        {firstHeader?
        <SubHeader
        data={firstHeader}
        
        />
        :null
}

{livescoreHeader?
  liveScoreTabBar(livescoreHeader)
:null
}


      
        {tabBarScroller()}
      </LinearGradient>

      {tabID === '0' ? (
        <View>
          {isLoading ? (
            <View style={styles.loader_style}>
              <ActivityIndicator color={Colors.orange} />
            </View>
          ) : (
            <View>{MyContestView()}</View>
          )}
        </View>
      ) : null}

      {tabID === '1' ? (
        <View>
          {isLoading ? (
            <View style={styles.loader_style}>
              <ActivityIndicator color={Colors.orange} />
            </View>
          ) : (
            <View>{MyTeamView()}</View>
          )}
        </View>
      ) : null}

      {tabID === '2' ? (
          <View style={{flex:1}}>
          {isLoading ? (
            <View style={styles.loader_style}>
              <ActivityIndicator color={Colors.orange} />
            </View>
          ) : (
            // <View>{scoreView()}</View>
            <ScrollView>
       <Accordion
       sections={SECTIONS}
       activeSections={activeSections}
       renderSectionTitle={_renderSectionTitle}
       renderHeader={_renderHeader}
       renderContent={_renderContent}
       onChange={_updateSections}
       underlayColor={Colors.smokeWhite}
       renderAsFlatList={true}
       containerStyle={{paddingBottom:66}}
       
      //  expandFromBottom={'top'}
     />
     {/* <View style={{marginBottom:70}}>
       <View style={{padding:14}}><Text style={[styles.topHeading,{color:Colors.grayMedium}]}>EXTRA</Text></View>
          <View style={{paddingLeft:14}}><Text style={{color: Colors.darkGrey, fontSize: RFValue(10),fontFamily: fonts['DMSans-Bold'],fontStyle: 'normal'}}>(nb {extraRun.noballs}, wd {extraRun.wides}, b {extraRun.byes} , lb {extraRun.legbyes} , pen {extraRun.penalty})</Text></View>

          <View style={{padding:14}}><Text style={[styles.topHeading,{color:Colors.grayMedium}]}>TOTAL SCORE</Text></View>
          <View  style={{paddingLeft:14}}><Text style={{color: Colors.darkGrey, fontSize: RFValue(10),fontFamily: fonts['DMSans-Bold'],fontStyle: 'normal'}}>({total.wickets } wickets, {total.overs} overs )</Text></View>

          </View> */}
</ScrollView> 
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
            <View>{statsView()}</View>
          )}
        </View>
      ) : null}


{/* {tabID==='2' || tabID==='3'  || tabID==='0'? */}

      <TouchableOpacity style={styles.footer} onPress={toggleModal}>
        <TouchableOpacity style={{position: 'absolute', top: -6}}>
          <MobelOpenBtnSvg />
        </TouchableOpacity>
        <View style={{position: 'absolute', top: 15}}>
          <Text
            style={{
              fontSize: RFValue(12),
              fontFamily: fonts['DMSans-Medium'],
              fontWeight: '700',
              color: Colors.darkGrey,
              letterSpacing: 2,
            }}>
          {t('common:leaderboard')}
          </Text>
        </View>
      </TouchableOpacity>
      {/* :null
} */}

      <View>
        <Modal
          testID={'modal'}
          isVisible={isModalVisible}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            margin: 0,
            marginTop: 70,
            borderRadius: 25,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              backgroundColor: 'white',
              borderRadius: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                borderRadius: 25,
              }}></View>
            <TouchableOpacity
              onPress={() => toggleModal()}
              style={styles.swipeUpDownOpened}>
              <View
                style={{flexDirection: 'row', position: 'absolute', top: -12}}>
                <TouchableOpacity
                  style={{marginRight: 5, marginTop: 5}}
                  onPress={() => toggleModal()}>
                  <MobelCloseBtnSvg />
                </TouchableOpacity>
              </View>
              <View
                style={{flexDirection: 'row', position: 'absolute', top: 15}}>
                <Text
                  style={{
                    fontSize: RFValue(12),
                    letterSpacing: 2,
                    fontFamily: fonts['DMSans-Medium'],
                    fontWeight: '700',
                    color: Colors.darkGrey,
                  }}>
                 {t('common:leaderboard')}
                </Text>
              </View>
            </TouchableOpacity>

            <View style={{flex: 1}}>
              {tabBarModal()}

              <View style={styles.mainView}>
                <View style={{flexDirection: 'row', padding: 8}}>
                  <Text style={styles.topHeadingModal}>{t('common:winningBreakDown')}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 6,
                  }}>
                  <View style={{marginLeft: 20, marginTop: 3}}>
                    <LinearGradient
                      start={{x: 0, y: 0.9}}
                      end={{x: 0.9, y: 1}}
                      style={styles.modaltag}
                      colors={[
                        Colors.headerBackground1,
                        Colors.headerBackground2,
                      ]}>
                      <Text
                        style={[
                          styles.textColor,
                          {fontSize: RFValue(9, 580), color: Colors.darkGrey},
                        ]}>
                        {t('common:rank')} #1 {t('common:wins')} ₹ {win}
                      </Text>
                    </LinearGradient>
                  </View>

                  <View style={{marginRight: 15,marginLeft:10, marginTop: 9}}>
                    <TouchableOpacity
                      onPress={() => {
                        setArrow(!arrow);
                      }}>
                      {arrow ? (
                        <MobelOpenBtnSvg></MobelOpenBtnSvg>
                      ) : (
                        <MobelCloseBtnSvg></MobelCloseBtnSvg>
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <ScrollView>
{statsModalView()}
</ScrollView>
            






            </View>
          </View>
        </Modal>
      </View>




      <View>
{groundModal()}
</View>




    </View>
  </SafeAreaView>
  );
};
export default LiveJoinTeam;
