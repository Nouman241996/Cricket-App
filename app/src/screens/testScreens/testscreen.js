import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../component/React Native Responsive Screen'
import TransactionModal from '../../component/modal/transactionModal'
import InputText from '../../component/widgets/inputText/inputText'
import { styles } from './style';
import { Colors } from '../../../res/style/color'
import { icons } from '../../../res/constants'
import EditBtn from '../../../res/images/svg/editBtn.svg'
import CloneBtn from '../../../res/images/svg/cloneBtn.svg'
import CrossSvg from '../../../res/images/svg/cross';
import Modal from 'react-native-modal';
import {fonts} from '../../../res/style/fonts';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const testscreen = (props) => {


  const [statusMatch, setStatusMatch] = useState([
    { id: '1', name: 'Contests' },
    { id: '2', name: 'My Contests' },
    { id: '3', name: 'My Teams' },
  ]);

  const [cricket_status, setCricketstatus] = useState([{ name: "Wicket Keeper", imgpath: icons.wicket, count: 0, is_count: false, pick: "1-4" },
  { name: "Batsman", imgpath: icons.bats, count: 0, is_count: false, pick: "3-6" },
  { name: "All Rounder", imgpath: icons.batball, count: 0, is_count: false, pick: "3-6" },
  { name: "Bowler", imgpath: icons.balls, count: 0, is_count: false, pick: "1-4" }]);

  const [tabID, setTabId] = useState(1);
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
                { backgroundColor: tabID == status.id ? Colors.orange : null },
              ]}>
              <View style={{ margin: 10 }}>
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

  function handlerButtonOnClick(id) {
    // console.log('tab is is:', id);

    setTabId(id);
    if (id === '1') {
      var Fixture = 'Fixture';
    } else if (id === '2') {
      var Live = 'Live';
    } else if (id === '3') {
      var Result = 'Result';
    }
  }

  const teamTags = () => {
    return (
      <View style={styles.teamContainer}>
        <View style={styles.teamNameAndBtnsView}>
          <Text>Team Basic</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity activeOpacity={0} >
              <EditBtn
                style={styles.editBtnstyle}
                height={15} width={15}
              ></EditBtn>


            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0} >
              <CloneBtn
              
                height={15} width={15}
              ></CloneBtn>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.teamCandVcImagesView}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={icons.shirt} style={{ height: 70, width: 70 }} />
            <View >
              <Text style={{paddingTop:10}}>Sangakara</Text>
              <Text>C</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={icons.shirt} style={{ height: 70, width: 70 }} />
            <View>
              <Text style={{paddingTop:10}}>I. khan</Text>
              <Text>VC</Text>
            </View>
          </View>

        </View>
        <View style={styles.cricketerMainView}>

          {cricket_status.map((status, index) => (

            <View key={index} style={styles.cricketerButtonView}>
              <View style={styles.cricketTagContianer}>
                <TouchableOpacity activeOpacity={0.9}  >
                  <View style={styles.cricketTags}>
                    <View>
                      <Image style={{ tintColor: 'black', height: 15, width: 15 }} source={status.imgpath} />
                    </View>

                  </View>
                </TouchableOpacity>
                <View style={styles.notSelectedTags}>
                  <Text style={{ color: Colors.white, fontSize: 8 }}>0</Text>
                </View>



              </View>
              <View>
                <Text style={styles.cricketerButtonText}>{status.name}</Text>
              </View>
            </View>

          ))}

        </View>
        <View  style={styles.teamNamesView}>
          <View style={{paddingRight:20}}>
            <Text>MI - 4</Text>
          </View>
          <View>
            <Text>CSK - 7</Text>
          </View>
        </View>
      </View>

    )

  }
  const closeModal = () => {
    setModalVisible(false);
  };
  const [modalVisible,setModalVisible]=useState(false)
  const [money, setMoney] =useState('');
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
     
      {tabBar()}
      <View style={{flexDirection:'row',justifyContent:'center'}}>
      {teamTags()}
      
      </View>
      <TouchableOpacity style={{backgroundColor:'orange'}}
      onPress={()=>{
        setModalVisible(!modalVisible)
      
      }}
      >
        <Text>i am modal</Text>

      </TouchableOpacity>
      {/* transection modal */}
      {modalVisible?
      <TransactionModal
      walleltSummery={10}
      contestfee={50}
      deposit={90}
      winnings={30}
      extracash={40}
      moneytoadded={50}
      modelVisible={modalVisible}
      closeModel={()=>{
        setModalVisible(false);
      }}
      joinPress={()=>{
        console.log("model pressed")
      }}
      />:null}
    
    </View>
  );
};
export default testscreen;

//team build test code

// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   Touchable,
//   ActivityIndicator,
//   Button,
//   FlatList,
//   Alert,
//   BackHandler,
//   Dimensions,
// } from 'react-native';
// import {icons, api_link} from '../../../res/constants';
// import SwipeUpDown from 'react-native-swipe-up-down';
// import LinearGradient from 'react-native-linear-gradient';
// import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
// import {styles} from './style';
// import {Colors} from '../../../res/style/color';
// import PlayersListTag from '../../component/playerList/playerList';
// import MobelOpenBtnSvg from '../../../res/images/svg/modelopenbtn.svg';
// import MobelCloseBtnSvg from '../../../res/images/svg/modelclosebtn.svg';
// import Modal from 'react-native-modal';
// import {ImageBackground} from 'react-native';
// import GroundViewPlayersList from '../../component/groundViewPlayersList/groundViewPlayersList';
// import {fonts} from '../../../res/style/fonts';
// import {Col, Toast} from 'native-base';
// import BatballSvg from '../../../res/images/svg/batball.svg';
// import BatsSvg from '../../../res/images/svg/bats.svg';
// import BallsSvg from '../../../res/images/svg/balls.svg';
// import WicketsSvg from '../../../res/images/svg/wicketkeepers.svg';
// import WicketWhiteSvg from '../../../res/images/svg/wicketswhite.svg';
// import BallsWhiteSvg from '../../../res/images/svg/ballswhite.svg';
// import BatsWhiteSvg from '../../../res/images/svg/batswhite.svg';
// import BatsBallWhiteSvg from '../../../res/images/svg/batballwhite.svg';
// import {set} from 'react-native-reanimated';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {connect} from 'react-redux';
// import {fetchHomeApi} from '../../redux/actions/homeAction';
// import {
//   widthPercentageToDP,
//   heightPercentageToDP,
// } from '../../component/React Native Responsive Screen';
// const {width} = Dimensions.get('window');
// import RBSheet from 'react-native-raw-bottom-sheet';
// var totalLength = 11;
// var wicketKeep;
// var editData;
// var teamData;
// var jsonData;
// var countTeam = 0;
// class Teambuild extends Component {
//   constructor(props) {
//     super(props);
//     const cricket_status = [
//       {
//         name: 'Wicket Keeper',
//         imgpath: <WicketsSvg />,
//         imgpath2: <WicketWhiteSvg />,
//         count: 0,
//         is_count: false,
//         pick: '1-4',
//       },
//       {
//         name: 'Batsman',
//         imgpath: <BatsSvg />,
//         imgpath2: <BatsWhiteSvg />,
//         count: 0,
//         is_count: false,
//         pick: '3-6',
//       },
//       {
//         name: 'All Rounder',
//         imgpath: <BatballSvg />,
//         imgpath2: <BatsBallWhiteSvg />,
//         count: 0,
//         is_count: false,
//         pick: '1-4',
//       },
//       {
//         name: 'Bowler',
//         imgpath: <BallsSvg />,
//         imgpath2: <BallsWhiteSvg />,
//         count: 0,
//         is_count: false,
//         pick: '3-6',
//       },
//     ];
//     this.state = {
//       setClick: false,
//       cricket_status,
//       ID: 0,
//       is_select: '',
//       status: '',
//       data: [],
//       editData:[],
//       batsman_data: [],
//       wicketkeeper_data: [],
//       allrounder_data: [],
//       bowlers_data: [],
//       isLoading: true,
//       selected_category: false,
//       count_wicket_keeper: 0,
//       count_allrouders: 0,
//       count_bowlers: 0,
//       count_batsman: 0,
//       is_team_selected: false,
//       set_team_click: false,
//       new_team_data: [],

//       teamOneLength: 0,
//       teamTwoLength: 0,
//       is_allowed: false,
//       total_player_selected: 0,
//       disabledButton: '',
//       credit_points: 0,
//       isModalVisible: false,
//       setModalVisible: false,
//       result: [],
//       teamOneUniqueData: [],
//       teamTwoUniqueData: [],
//       isModalNaviagtionVisible: false,
//       clicked: false,
//       editCapt: '',
//       editVCapt: '',
//       teamId: '',
//       elevenOut:'',
//       maxLimit:true,
//       maxLimitBallers:true,
//       maxLimitAr:true,
//       maxLimitWk:true,

//     };
//   }
//   _fetchdata = () => {
//     console.log(
//       'Team Build url is:',
//       api_link.teamapi +
//         'matchid=' +
//         this.props.route.params.matchid_1 +
//         '&designationid=0&user_id='+this.props.userSuccess.user_id+'',
//     );
//     fetch(
//       api_link.teamapi +
//         'matchid=' +
//         this.props.route.params.matchid_1 +
//         '&designationid=0&user_id='+this.props.userSuccess.user_id+'',
//     )
//       .then((response) => response.json())
//       .then((json) => {
//         if (json.team_list) {
//           let map = new Map();
//           for (const item of json.team_list) {
//             if (!map.has(item.teamid)) {
//               map.set(item.teamid, true); // set any value to Map
//               this.state.result.push({
//                 id: item.teamid,
//                 name: item.team_short_name,
//                 image: item.team_image,
//                 number:item.team_number
//               });
//             }
//           }
//           this.setState({editData:json.team_list})
//           this.setState({elevenOut:json.is_eleven_out})
//           this.setState({teamOneUniqueData: this.state.result[1]});
//           this.setState({teamTwoUniqueData: this.state.result[0]});

//           if (
//             this.props.route.params.status == 'edit' ||
//             this.props.route.params.status == 'clone' ||
//             this.props.route.params.status == 'editMyTeam' ||
//             this.props.route.params.status == 'cloneMyTeam' ||  this.props.route.params.status == 'editselMyTeam' ||
//             this.props.route.params.status == 'cloneselMyTeam'
//           ) {
//             countTeam = this.props.route.params.editData.players_list.length;
//             var num = 0;
//             editData = this.props.route.params.editData.players_list;
//             teamData = json.team_list;

//             var editdataObject = this.props.route.params.editData;

//             //tabs array count update

//             this.state.cricket_status[0].count = editdataObject.wicketLength;
//             this.state.cricket_status[1].count = editdataObject.batsman;
//             this.state.cricket_status[3].count = editdataObject.bowlerLength;
//             this.state.cricket_status[2].count =
//               editdataObject.allRounderLength;

//             this.setState({
//               editCapt: this.props.route.params.editData.captainId,
//               editVCapt: this.props.route.params.editData.vCaptainId,
//               teamId: this.props.route.params.editData.team,
//               count_batsman: editdataObject.batsman,
//               count_allrouders: editdataObject.allRounderLength,
//               count_bowlers: editdataObject.bowlerLength,
//               count_wicket_keeper: editdataObject.wicketLength,
//               new_team_data: this.props.route.params.editData.players_list,
//               total_player_selected: this.props.route.params.editData
//                 .players_list.length,
//             });

//             //filter Team1 Count
//             var team1Array = [];
//             var team2Array = [];

//             for (var t1 = 0; t1 < editData.length; t1++) {
//               if (editData[t1].teamid === this.state.result[1].id) {
//                 team1Array.push({id: editData[t1].teamid});
//               }
//               if (editData[t1].teamid === this.state.result[0].id) {
//                 team2Array.push({id: editData[t1].teamid});
//               }
//             }
//             this.setState({
//               teamOneLength: team1Array.length,
//               teamTwoLength: team2Array.length,
//             });
//             team1Array = [];
//             team2Array = [];
//             //filtering my Team Data from All Team Data for highlit selected player

//             for (var idx = 0; idx < editData.length; idx++) {
//               num = +num + +editData[idx].credit_points;

//               for (let item of teamData) {
//                 if (item.playerid == editData[idx].playerid) {
//                   item.is_select =
//                     item.is_select == null ? true : !item.is_select;
//                   break;
//                 }
//               }
//             }

//             this.setState({data: teamData});

//             this.setState({credit_points: num});
//           } else {
//             teamData = json.team_list;
//             this.setState({data: teamData});
//           }

//           this.setState({
//             wicketkeeper_data: teamData.filter(
//               (x) => x.player_desigination == 'Wicket Keeper',
//             ),
//           });
//           this.setState({
//             allrounder_data: teamData.filter(
//               (x) => x.player_desigination == 'All Rounder',
//             ),
//           });
//           this.setState({
//             bowlers_data: teamData.filter(
//               (x) => x.player_desigination == 'Bowler',
//             ),
//           });
//           this.setState({
//             batsman_data: json.team_list.filter(
//               (x) => x.player_desigination == 'Batsman',
//             ),
//           });
//         }
//       })
//       .catch((error) => console.log(error))
//       .finally(() => {
//         this.setState({isLoading: false});
//       });
//   };
//   backAction = () => {
//     if (this.props.navigation.isFocused()) {
//       if (this.state.new_team_data.length > 0) {
//         this.RBSheet.open();
//       } else {
//         this.props.navigation.goBack();
//         this.clearAsyncStorage();
//       }
//       return true;
//     }
//   };
//   clearAsyncStorage = async () => {
//     await AsyncStorage.removeItem('@teamData');
//   };
//   navigateBack = () => {
//     this.props.navigation.goBack();
//     this.clearAsyncStorage();
//     this._reset_team_data();
//     this.clearAsyncStorage();
//   };
//   componentDidMount() {
//     this._fetchdata();
//     BackHandler.addEventListener('hardwareBackPress', this.backAction);
//   }
//   componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.backAction);
//   }

//   handlerButtonOnClick = (i) => {
//     const newstate = !this.state.setClick;

//     this.setState({
//       setClick: newstate,
//       is_select: i,
//       status:
//         'Pick' +
//         ' ' +
//         this.state.cricket_status[i].pick +
//         ' ' +
//         this.state.cricket_status[i].name,
//       ID: i,
//     });
//   };
//   selectTeamMaxLimits = (length, type) => {
//     let teamLength = totalLength - length;
//     totalLength = teamLength;
//   };
//   MaxLimitValidation(Role,selected) {
//     console.log("is selected",selected)
//     let BatCount = this.state.count_batsman;
//     let BowlCount = this.state.count_bowlers;
//     let WkCount = this.state.count_wicket_keeper;
//     let ArCount = this.state.count_allrouders;
    

//     if(selected){
//       console.log("unslected")

//     }else{

//     if( this.state.new_team_data.length != 11 )
//     {

   

    
//     if (Role == 'BAT') {
//       if (BatCount + BowlCount == 9) {
//         if (WkCount < 1) {
//           Toast.show({
//             style: {backgroundColor: Colors.orange},
//             text: 'You must select atleast 1 Wicket-keeper and 1 All-rounder',
//             duration: 3000,
//           });
//           this.setState({maxLimit:false}) 
//           return false;
//         } else if (ArCount < 1) {
//           Toast.show({
//             style: {backgroundColor: Colors.orange},
//             text: 'You must select atleast 1 All-Rounder',
//             duration: 3000,
//           });
//           this.setState({maxLimit:false}) 
//           return false;
//         } else {
//           this.setState({maxLimit:true}) 
//           return true;
//         }
//       } else if (BatCount + ArCount == 7) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 3 Bowlers and atleast 1 Wicket Keeper',
//           duration: 3000,
//         });
//         this.setState({maxLimit:false}) 
//         return false;
//       } else if (BatCount + WkCount == 7) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 1 All-Rounder and 3 Bowlers',
//           duration: 3000,
//         });
//         this.setState({maxLimit:false}) 
//         return false;
//       } else if (WkCount + ArCount + BatCount == 8) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 3 Bowlers',
//           duration: 3000,
//         });
//         this.setState({maxLimit:false}) 
//         return false;
//       } else if (ArCount + BowlCount + BatCount == 10) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 1 Wicket-Keeper',
//           duration: 3000,
//         });
//         this.setState({maxLimit:false}) 
//         return false;
//       } else if (WkCount + BowlCount + BatCount == 10) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 1 All-Rounder',
//           duration: 3000,
//         });
//         this.setState({maxLimit:false}) 
//         return false;
//       } else {
//         this.setState({maxLimit:true}) 
//         return true;
//       }

//     } 
//     if (Role == 'BOWL') {
//       if (BatCount + BowlCount == 9) {
//         if (WkCount < 1) {
//           Toast.show({
//             style: {backgroundColor: Colors.orange},
//             text: 'You must select atleast 1 Wicket-keeper and 1 All-rounder',
//             duration: 3000,
//           });
//           this.setState({maxLimitBallers:false}) 
//           return false;
//         } else if (ArCount < 1) {
//           Toast.show({
//             style: {backgroundColor: Colors.orange},
//             text: 'You must select atleast 1 All-Rounder',
//             duration: 3000,
//           });
//           this.setState({maxLimitBallers:false}) 
//           return false;
//         } else {
//           this.setState({maxLimitBallers:true}) 
//           return true;
//         }
//       } else if (BowlCount + ArCount == 7) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 3 Batsman and atleast 1 Wicket Keeper',
//           duration: 3000,
//         });
//         this.setState({maxLimitBallers:false}) 
//         return false;
//       } else if (BowlCount + WkCount == 7) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 1 All-Rounder and 3 Batsman',
//           duration: 3000,
//         });
//         this.setState({maxLimitBallers:false}) 
//         return false;
//       } else if (WkCount + ArCount + BowlCount == 8) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 3 Batsman',
//           duration: 3000,
//         });
//         this.setState({maxLimitBallers:false}) 
//         return false;
//       } else if (ArCount + BowlCount + BatCount == 10) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 1 Wicket-Keeper',
//           duration: 3000,
//         });
//         this.setState({maxLimitBallers:false}) 
//         return false;
//       } else if (WkCount + BowlCount + BatCount == 10) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 1 All-Rounder',
//           duration: 3000,
//         });
//         this.setState({maxLimitBallers:false}) 
//         return false;
//       } else {
//         this.setState({maxLimit:true}) 
//         return true;
//       }

//     }
//     else if (Role == 'AR') {
//        if (BatCount + ArCount + BowlCount == 10) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 1 Wicket Keeper',
//           duration: 3000,
//         });
//         this.setState({maxLimitAr:false}) 
//         return false;
//       } 
//       else if (WkCount + ArCount + BatCount == 8) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 3 Bowlers',
//           duration: 3000,
//         });
//         this.setState({maxLimitAr:false}) 
//         return false;
//       } else if (WkCount + ArCount + BowlCount == 8) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 3 Batsmen',
//           duration: 3000,
//         });
//         this.setState({maxLimitAr:false}) 
//         return false;
//       } 

//       else if (BowlCount + ArCount == 7) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 1 Wicket-keeper and 3 Batsman',
//           duration: 3000,
//         });
//         this.setState({maxLimitAr:false}) 
//         return false;
//       } else if (BatCount + ArCount == 7) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 1 Wicket-Keeper & atleast 3 Bowlers',
//           duration: 3000,
//         });
//         this.setState({maxLimitAr:false}) 
//         return false;
//       } else if (WkCount + ArCount == 5) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 3 Bowlers & atleast 3 Batsmen ',
//           duration: 3000,
//         });
//         this.setState({maxLimitAr:false}) 
//         return false;
//       } else {
//         this.setState({maxLimitAr:true}) 
//         return true;
//       }
//     } else if (Role == 'WK') {
//        if (BatCount + WkCount + BowlCount == 10) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 1 All Rounder',
//           duration: 3000,
//         });
//         this.setState({maxLimitWk:false}) 
//         return false;
//       } 
//       else if (WkCount + ArCount + BowlCount == 8 ) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 3 Batsmen',
//           duration: 3000,
//         });
//         this.setState({maxLimitWk:false}) 
//         return false;
//       } 
//       else if (WkCount + ArCount + BatCount == 8) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 3 Bowlers',
//           duration: 3000,
//         });
//         this.setState({maxLimitWk:false}) 
//         return false;
//       }
//       else if (BowlCount + WkCount == 7) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 1 All-Rounder and 3 Batsman',
//           duration: 3000,
//         });
//         this.setState({maxLimitWk:false}) 
//         return false;
//       } else if (BatCount + WkCount == 7) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 1 All-Rounder and 3 Bowlers',
//           duration: 3000,
//         });
//         this.setState({maxLimitWk:false}) 
//         return false;
//       } else if (WkCount + ArCount == 5) {
//         Toast.show({
//           style: {backgroundColor: Colors.orange},
//           text: 'You must select atleast 3 Bowlers & atleast 3 Batsmen',
//           duration: 3000,
//         });
//         this.setState({maxLimitWk:false}) 
//         return false;
//       } 
//       else {
//         this.setState({maxLimitWk:true}) 
//         return true;
//       }
//     } else {
//       return true;
//     }
 




//   }else{

//  Toast.show({
//           style: {backgroundColor: Colors.green},
//           text: '11 players selected, tap Next to proceed',
//           duration: 3000,
//         });



//   }




//   }
 
 
//   }

//   _selectteam = (item) => {
//     let length_of_both_array =
//       this.state.teamOneLength + this.state.teamTwoLength;
 

//     const newstate = !this.state.set_team_click;
//     this.setState({
//       set_team_click: newstate,
//       is_team_selected: newstate,
//     });

//     if (
//       this.state.teamOneLength > 6 &&
//       item.team_number == 1 &&
//       item.is_select == false
//     ) {
//       Toast.show({
//         style: {backgroundColor: Colors.orange},
//         text: 'Maximum 7 palyers can be selected from team 1',
//         duration: 3000,
//       });
//     } else if (
//       this.state.teamTwoLength > 6 &&
//       item.team_number == 2 &&
//       item.is_select == false
//     ) {
//       Toast.show({
//         style: {backgroundColor: Colors.orange},
//         text: 'Maximum 7 palyers can be selected from team 2',
//         duration: 3000,
//       });
//     }
//     if (
//       this.state.credit_points +
//         parseFloat(item.credit_points.replace(',', '.')) >
//         100 &&
//       item.is_select == false
//     ) {
//       Toast.show({
//         style: {backgroundColor: Colors.orange},
//         text: 'Credits points should not exceed 100',
//         duration: 3000,
//       });
//     }
//     //this.state.count_wicket_keeper <= 3
//     if (
//       this.state.count_wicket_keeper > 3 &&
//       item.is_select == false &&
//       item.player_desigination == 'Wicket Keeper'
//     ) {
//       Toast.show({
//         style: {backgroundColor: Colors.orange},
//         text: 'You can select only 4 Wicket-Keepers',
//         duration: 3000,
//       });
//     } else if (
//       this.state.count_batsman > 5 &&
//       item.is_select == false &&
//       item.player_desigination == 'Batsman'
//     ) {
//       Toast.show({
//         style: {backgroundColor: Colors.orange},
//         text: 'You can select only 6 Batsmen',
//         duration: 3000,
//       });
//     } else if (
//       this.state.count_allrouders > 3 &&
//       item.is_select == false &&
//       item.player_desigination == 'All Rounder'
//     ) {
//       Toast.show({
//         style: {backgroundColor: Colors.orange},
//         text: 'You can select only 4 All-Rounders',
//         duration: 3000,
//       });
//     } else if (
//       this.state.count_bowlers > 5 &&
//       item.is_select == false &&
//       item.player_desigination == 'Bowler'
//     ) {
//       Toast.show({
//         style: {backgroundColor: Colors.orange},
//         text: 'You can select only 6 Bowlers',
//         duration: 3000,
//       });
//     }
//     else if (
//       this.state.new_team_data.length == 11 &&   item.is_select==false 
//       //&&
//       // this.props.route.params.status != 'edit' &&
//       // this.props.route.params.status != 'clone'
//     ) {
//       Toast.show({
//         style: {backgroundColor: Colors.green},
//         text: "11 players selected, tap 'Continue' to proceed",
//         duration: 2500,
//       });
//     }

//     if (
//       this.state.credit_points +
//         parseFloat(item.credit_points.replace(',', '.')) <=
//         100 && 
//       ((this.state.count_wicket_keeper <= 3 &&
//         item.player_desigination == 'Wicket Keeper' &&
//         this.MaxLimitValidation('WK', item.is_select)) ||
//         (this.state.count_batsman <= 5 &&
//           item.player_desigination == 'Batsman' &&
//           this.MaxLimitValidation('BAT', item.is_select)) ||
//         (this.state.count_bowlers <= 5 &&
//           item.player_desigination == 'Bowler' &&
//           this.MaxLimitValidation('BOWL', item.is_select)) ||
//         (this.state.count_allrouders <= 3 &&
//           item.player_desigination == 'All Rounder' &&
//           this.MaxLimitValidation('AR', item.is_select))) &&
//       !item.is_select &&
//       ((this.state.teamOneLength <= 6 && item.team_number == 1) ||
//         (this.state.teamTwoLength <= 6 && item.team_number == 2)) &&
//       length_of_both_array <= 10
//     ) {
//       item.is_select = !item.is_select;
//       if (item.team_number == this.state.teamOneUniqueData.number) {
//         ++this.state.teamOneLength;
//       } else if (item.team_number == this.state.teamTwoUniqueData.number) {
//         ++this.state.teamTwoLength;
//       }
//       this.state.new_team_data.push(item);

//       //count wicketkeeper
//       if (item.player_desigination == 'Wicket Keeper') {
//         ++this.state.count_wicket_keeper;
//         this.state.cricket_status[0].count = this.state.count_wicket_keeper;
//       } else if (item.player_desigination == 'Batsman') {
//         //for batsman
//         ++this.state.count_batsman;
//         this.state.cricket_status[1].count = this.state.count_batsman;
//       } else if (item.player_desigination == 'Bowler') {
//         //for bowlers
//         ++this.state.count_bowlers;
//         this.state.cricket_status[3].count = this.state.count_bowlers;
//       } else if (item.player_desigination == 'All Rounder') {
//         //for all rounders
//         ++this.state.count_allrouders;
//         this.state.cricket_status[2].count = this.state.count_allrouders;
//       }

//       //credit_points
//       var value = parseFloat(item.credit_points.replace(',', '.'));

//       this.state.credit_points += value;
//     } else if (item.is_select) {
//       item.is_select = false;
      
     
//       this.state.new_team_data = this.state.new_team_data.filter(
//         (x) => x.playerid !== item.playerid,
//       );
//       if (item.team_number == this.state.teamOneUniqueData.number) {
//         --this.state.teamOneLength;
//       } else if (item.team_number == this.state.teamTwoUniqueData.number) {
//         --this.state.teamTwoLength;
//       }
//       if (item.player_desigination == 'Wicket Keeper') {
//         this.setState({maxLimitWk:true}) 
//         --this.state.count_wicket_keeper;
//         this.state.cricket_status[0].count = this.state.count_wicket_keeper;
//       } else if (item.player_desigination == 'Batsman') {
//         //for batsman
//         this.setState({maxLimit:true})
//         --this.state.count_batsman;
//         this.state.cricket_status[1].count = this.state.count_batsman;
//       } else if (item.player_desigination == 'Bowler') {
//         //for bowlers
//         this.setState({maxLimitBallers:true})
//         --this.state.count_bowlers;
//         this.state.cricket_status[3].count = this.state.count_bowlers;
//       } else if (item.player_desigination == 'All Rounder') {
//         //for all rounders
//         this.setState({maxLimitAr:true}) 
//         --this.state.count_allrouders;
//         this.state.cricket_status[2].count = this.state.count_allrouders;
//       }
//       var value = parseFloat(item.credit_points.replace(',', '.'));
//       this.state.credit_points -= value;
//     }
//   };
//   toggleModal = () => {
//     Toast.hide();
//     this.setState({isModalVisible: !this.state.isModalVisible});
//   };
//   toggleNavigationModal = () => {
//     this.setState({
//       isModalNaviagtionVisible: !this.state.isModalNaviagtionVisible,
//     });
//   };
//   itemselection = (data) => {};
//   _reset_team_data = (i) => {
//     this.state.new_team_data.map((status, index) => (status.is_select = false));
//     this.state.cricket_status.map((status, index) => (status.count = 0));

//     this.state.wicketkeeper_data.map((status, index) => (status.is_select = false));
//     this.state.allrounder_data.map((status, index) => (status.is_select = false));
//     this.state.bowlers_data.map((status, index) => (status.is_select = false));
//     this.state.batsman_data.map((status, index) => (status.is_select = false));
//     this.setState({maxLimitWk:true,maxLimitAr:true,maxLimitBallers:true,maxLimit:true}) 

//     this.setState({
//       count_batsman: 0,
//       count_allrouders: 0,
//       count_bowlers: 0,
//       count_wicket_keeper: 0,
//       new_team_data: [],
//       teamOneLength: 0,
//       teamTwoLength: 0,
//       credit_points: 0,
//       total_player_selected: 0,
//     });


//   };

//   render() {
//     const {setClick} = this.state;
//     const {ID} = this.state;
//     const {is_select} = this.state;

//     if (this.state.status == '') {
//       this.state.status = 'Pick 1-4 ' + 'Wicket Keeper';
//     }
    

//     //total team number count

//     let x = this.state.teamOneLength + this.state.teamTwoLength;

//     this.state.total_player_selected = x;

//     return (
//       // view of screen
//       <SafeAreaView style={{flex: 1, backgroundColor: Colors.mainbackground}}>
//         <View style={{flex: 1, backgroundColor: Colors.mainbackground}}>
//           {/* hedaer start */}
//           <LinearGradient
//             start={{x: 0, y: 0.9}}
//             end={{x: 0.9, y: 1}}
//             colors={[Colors.headerBackground1, Colors.headerBackground2]}>
//             {/* top header Start*/}
//             <View style={styles.mainHeader}>
//               <TouchableOpacity onPress={() => this.backAction()}>
//                 <Image source={icons.arrowback} style={styles.barImage} />
//               </TouchableOpacity>
//               <View style={{justifyContent: 'center', marginLeft: 17}}>
//                 {this.props.route.params.type == 'jointag' ? (
//                   <Text style={styles.mainHeaderHeading}>
//                     {this.props.route.params.status == 'edit' ||
//                     this.props.route.params.status == 'clone' ||
//                     this.props.route.params.status == 'editMyTeam' ||
//                     this.props.route.params.status == 'cloneMyTeam' ||  this.props.route.params.status == 'editselMyTeam' ||
//                     this.props.route.params.status == 'cloneselMyTeam'
//                       ? null
//                       : this.props.route.params.contesttag.toUpperCase()}
//                   </Text>
//                 ) : (
//                   <View>
//                     {this.props.route.params.type == 'bottomtabs' ? (
//                       <Text style={styles.mainHeaderHeading}>
//                         {this.props.route.params.team1shortname1.toUpperCase()}{' '}
//                         VS{' '}
//                         {this.props.route.params.team2shortname2.toUpperCase()}
//                       </Text>
//                     ) : null}
//                   </View>
//                 )}
//               </View>

//               <View style={{justifyContent: 'center', marginRight: 15}}>
//                 <TouchableOpacity
//                   disabled={
//                     this.state.total_player_selected == 11 ? false : true
//                   }
//                   onPress={() => {
//                     this.setState({clicked: true});
//                     Toast.hide();
//                     if (this.props.route.params.type == 'bottomtabs') {
//                       this.props.navigation.navigate('Captians', {
//                         matchglobalid: this.props.route.params.matchid_1,
//                         newteam: this.state.new_team_data,
//                         CR: this.state.credit_points,
//                         type: this.props.route.params.type,
//                         contestdataCap: this.props.route.params.contestdata,
//                         totalplayers: this.state.total_player_selected,
//                         status: this.props.route.params.status,
//                         headertext:
//                           this.props.route.params.team1shortname1 +
//                           ' VS ' +
//                           this.props.route.params.team2shortname2,
//                       });
//                       this.setState({clicked: false});
//                     } else if (this.props.route.params.type == 'jointag') {
//                       this.props.navigation.navigate('Captians', {
//                         newteam: this.state.new_team_data,
//                         CR: this.state.credit_points,
//                         type: this.props.route.params.type,
//                         contestdataCap: this.props.route.params.contestdata,
//                         totalplayers: this.state.total_player_selected,
//                         headertext: this.props.route.params.contesttag,
//                         matchglobalid: this.props.route.params.matchid_1,
//                         rawDatapost: this.props.route.params.rawData,
//                         status: this.props.route.params.status,
//                         capt: this.state.editCapt,
//                         vCapt: this.state.editVCapt,
//                         teamid: this.state.teamId,
//                       });
//                       this.setState({clicked: false});
//                     }
//                   }}
//                   style={
//                     this.state.total_player_selected == 11
//                       ? styles.nextButtonSelected
//                       : styles.nextButton
//                   }>
//                   {this.state.clicked ? (
//                     <ActivityIndicator
//                       color={Colors.white}
//                       style={{height: '10%', width: 20}}
//                     />
//                   ) : (
//                     <Text
//                       style={{
//                         color: Colors.white,
//                         fontSize: RFValue(12),
//                         fontFamily: fonts['DMSans-Medium'],
//                         fontWeight: '500',
//                       }}>
//                       NEXT
//                     </Text>
//                   )}
//                 </TouchableOpacity>
//               </View>
//             </View>
//             {/* Top Header End */}

//             {/* progress Bar Start */}
//             <View style={{flex: 1, marginTop: 17}}>
//               <View style={styles.progressBar1}>
//                 <Text style={styles.circleSelected}>.</Text>
//                 <Text style={styles.bar}>.</Text>
//                 <Text style={styles.circleSelected}>.</Text>

//                 <Text style={styles.progressBar2}>.</Text>

//                 <Text style={styles.barwhite}>.</Text>
//                 <Text style={styles.circleUnSelected}>.</Text>
//               </View>
//             </View>
//             <View style={{marginTop: 5}}>
//               <View style={styles.progressBarTextView}>
//                 <Text
//                   style={{
//                     fontSize: RFValue(7.5, 580),
//                     color: Colors.darkGrey,
//                     fontFamily: fonts['DMSans-Medium'],
//                   }}>
//                   Select Match
//                 </Text>
//                 <Text
//                   style={{
//                     fontSize: RFValue(7.5, 580),
//                     color: Colors.darkGrey,
//                     fontFamily: fonts['DMSans-Medium'],
//                   }}>
//                   Select Contest
//                 </Text>
//                 <Text
//                   style={{
//                     fontSize: RFValue(7.5, 580),
//                     color: Colors.darkGrey,
//                     fontFamily: fonts['DMSans-Medium'],
//                   }}>
//                   Create Team
//                 </Text>
//               </View>
//             </View>
//             {/* Progress Bar End */}
//             {/* build Team Headung statrt */}
//             <View style={styles.buildTeamHeadingView}>
//               <View>
//                 <Text style={styles.buildTeamText}>Build Your Team</Text>
//               </View>
//               <View>
//                 <Text style={styles.buildTeamTextCR}>
//                   CR {this.state.credit_points} | 100
//                 </Text>
//               </View>
//             </View>
//             {/* build Team Headung End */}
//             {/* Max limit text Start */}
//             {/* <View style={styles.maxSelectedTeam}>
//                             <Text style={{fontSize:RFValue(14),color:Colors.darkGrey}}>Max 7 Players can be selected</Text>
//                         </View> */}
//             {/* Max limit text end */}
//             {/* selected and Reset view start */}
//             <View style={styles.selectedResetMainView}>
//               <View>
//                 <Text style={styles.SelectedplayerTextHeading}>
//                   {this.state.total_player_selected} / 11
//                 </Text>
//                 <Text style={styles.SelectedplayerText}>PLAYERS</Text>
//               </View>

//               <View>
//                 {this.state.result == [] ? null : (
//                   <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                     <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                       <View style={{marginRight: 5}}>
//                         <Text style={styles.countryVsCountryText}>
//                           {this.state.teamOneUniqueData.name}
//                         </Text>
//                         {this.state.teamOneLength <= 0 ? null : (
//                           <Text>{this.state.teamOneLength}</Text>
//                         )}
//                       </View>
//                       <Image
//                         resizeMode="contain"
//                         style={{height: 30, width: 30}}
//                         source={{uri: this.state.teamOneUniqueData.image}}
//                       />
//                     </View>
//                     <View style={styles.vsView}>
//                       <Text style={styles.countryVsCountryTextVS}>VS</Text>
//                     </View>
//                     <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                       <Image
//                         resizeMode="contain"
//                         style={{height: 30, width: 30}}
//                         source={{uri: this.state.teamTwoUniqueData.image}}
//                       />
//                       <View style={{marginLeft: 5}}>
//                         <Text style={styles.countryVsCountryText}>
//                           {this.state.teamTwoUniqueData.name}
//                         </Text>

//                         {this.state.teamTwoLength <= 0 ? null : (
//                           <Text>{this.state.teamTwoLength}</Text>
//                         )}
//                       </View>
//                     </View>
//                   </View>
//                 )}
//               </View>
//               <TouchableOpacity
//                 onPress={() => this._reset_team_data('OK working')}>
//                 <View>
//                   <Text style={styles.resetText}>RESET</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//             {/* selected and Reset view End */}
//             {/* cricketer Buttons view start */}
//             <View style={styles.cricketerMainView}>
//               {this.state.cricket_status.map((status, index) => (
//                 <View key={index} style={styles.cricketerButtonView}>
//                   <View style={styles.cricketTagContianer}>
//                     <TouchableOpacity
//                       onPress={() => this.handlerButtonOnClick(index)}>
//                       {is_select == index ? (
//                         <View style={styles.cricketTagsSelected}>
//                           <View>
//                             <Text>{status.imgpath2}</Text>
//                             {/* <Image style={{ tintColor: is_select == index ? Colors.white : Colors.black, height: 25, width: 25 }} source={status.imgpath} /> */}
//                           </View>
//                         </View>
//                       ) : (
//                         <LinearGradient
//                           start={{x: 0.5, y: 0.5}}
//                           end={{x: 0.9, y: 1}}
//                           style={styles.cricketTags}
//                           colors={[
//                             Colors.crickettagcolor2,
//                             Colors.crickettagcolor3,
//                           ]}>
//                           <View>
//                             {/* <Image style={{ tintColor: is_select == index ? Colors.white : Colors.black, height: 25, width: 25 }} source={status.imgpath} /> */}
//                             <Text>{status.imgpath}</Text>
//                           </View>
//                         </LinearGradient>
//                       )}
//                     </TouchableOpacity>
//                     {status.count <= 0 ? null : (
//                       <View style={styles.notSelectedTags}>
//                         <Text style={{color: Colors.white}}>
//                           {status.count}
//                         </Text>
//                       </View>
//                     )}
//                   </View>
//                   <View style={{marginTop: 5}}>
//                     <Text style={styles.cricketerButtonText}>
//                       {status.name.toUpperCase()}
//                     </Text>
//                   </View>
//                 </View>
//               ))}
//             </View>
//             {/* cricketer Buttons view end */}
//           </LinearGradient>
//           {/* header end */}

//           {this.state.isLoading ? (
//             <View style={styles.loaderViewStyle}>
//               <ActivityIndicator
//                 color={Colors.orange}
//                 style={styles.loaderStyle}
//               />
//             </View>
//           ) : (
//             // list View start
//             <View style={styles.listMainView}>
//               <View style={styles.pickCricketerLimitView}>
//                 <View style={{flexDirection: 'row', width: '25%'}}>
//                   <Text style={styles.seperatorStyle}>.</Text>
//                 </View>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     width: '50%',
//                     justifyContent: 'center',
//                   }}>
//                   <Text
//                     style={{
//                       fontSize: RFValue(10),
//                       color: Colors.darkGrey,
//                       fontFamily: fonts['DMSans-Medium'],
//                       fontWeight: '700',
//                       letterSpacing: 2,
//                     }}>
//                     {this.state.status}
//                   </Text>
//                 </View>
//                 <View style={{flexDirection: 'row', width: '25%'}}>
//                   <Text style={styles.seperatorStyle}>.</Text>
//                 </View>
//               </View>

//               {ID != 0 ? (
//                 <View></View>
//               ) : (
//                 <PlayersListTag
//                   {...this.props}
//                   callback={this._selectteam.bind(this)}
//                   data={this.state.wicketkeeper_data}
//                   isOut={this.state.elevenOut}
//                   teamLength={this.state.teamOneLength + this.state.teamTwoLength}
//                   maxLimit={this.state.maxLimitWk}
//                   count={this.state.count_wicket_keeper}
//                 />
//               )}

//               {ID != 1 ? (
//                 <View></View>
//               ) : (
//                 <PlayersListTag
//                   {...this.props}
//                   callback={this._selectteam.bind(this)}
//                   data={this.state.batsman_data}
//                   isOut={this.state.elevenOut}
//                   teamLength={this.state.teamOneLength + this.state.teamTwoLength}
//                   maxLimit={this.state.maxLimit}
//                   count={this.state.count_batsman}
//                 />
//               )}

//               {ID != 2 ? (
//                 <View></View>
//               ) : (
//                 <PlayersListTag
//                   {...this.props}
//                   callback={this._selectteam.bind(this)}
//                   data={this.state.allrounder_data}
//                   isOut={this.state.elevenOut}
//                   teamLength={this.state.teamOneLength + this.state.teamTwoLength}
//                   maxLimit={this.state.maxLimitAr}
//                   count={this.state.count_allrouders}
//                 />
//               )}

//               {ID != 3 ? (
//                 <View></View>
//               ) : (
//                 <PlayersListTag
//                   {...this.props}
//                   callback={this._selectteam.bind(this)}
//                   data={this.state.bowlers_data}
//                   isOut={this.state.elevenOut}
//                   teamLength={this.state.teamOneLength + this.state.teamTwoLength}
//                   maxLimit={this.state.maxLimitBallers}
//                   count={this.state.count_bowlers}
//                 />
//               )}
//             </View>
//           )}

//           <TouchableOpacity
//             style={styles.swipeUpDownMainView}
//             onPress={() => this.toggleModal()}>
//             <TouchableOpacity
//               style={{position: 'absolute', top: -6}}
//               onPress={() => this.toggleModal()}>
//               <MobelOpenBtnSvg />
//             </TouchableOpacity>
//             <View style={{position: 'absolute', top: 15}}>
//               <Text
//                 style={{
//                   fontSize: RFValue(12),
//                   fontFamily: fonts['DMSans-Medium'],
//                   fontWeight: '700',
//                   color: Colors.darkGrey,
//                   letterSpacing: 2,
//                 }}>
//                 YOUR TEAM
//               </Text>
//             </View>
//           </TouchableOpacity>

//           <View>
//             <Modal
//               testID={'modal'}
//               isVisible={this.state.isModalVisible}
//               style={{
//                 flex: 1,
//                 justifyContent: 'flex-end',
//                 margin: 0,
//                 marginTop: 25,
//                 borderRadius: 25,
//               }}>
//               <SafeAreaView
//                 style={{
//                   flex: 1,
//                   flexDirection: 'column',
//                   backgroundColor: 'white',
//                   borderRadius: 25,
//                 }}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'flex-end',
//                     borderRadius: 25,
//                   }}></View>
//                 <TouchableOpacity
//                   onPress={() => this.toggleModal()}
//                   style={styles.swipeUpDownOpened}>
//                   <View
//                     style={{
//                       flexDirection: 'row',
//                       position: 'absolute',
//                       top: -12,
//                     }}>
//                     <TouchableOpacity
//                       style={{marginRight: 5, marginTop: 5}}
//                       onPress={() => this.toggleModal()}>
//                       <MobelCloseBtnSvg />
//                     </TouchableOpacity>
//                   </View>
//                   <View
//                     style={{
//                       flexDirection: 'row',
//                       position: 'absolute',
//                       top: 15,
//                     }}>
//                     <Text
//                       style={{
//                         fontSize: RFValue(12),
//                         letterSpacing: 2,
//                         fontFamily: fonts['DMSans-Medium'],
//                         fontWeight: '700',
//                         color: Colors.darkGrey,
//                       }}>
//                       YOUR TEAM
//                     </Text>
//                   </View>
//                 </TouchableOpacity>

//                 <View style={{flex: 1}}>
//                   <ImageBackground source={icons.groundImage} style={{flex: 1}}>
//                     {this.state.new_team_data.length <= 0 ? (
//                       <View
//                         style={{
//                           flex: 1,
//                           justifyContent: 'center',
//                           alignItems: 'center',
//                         }}>
//                         <Text
//                           style={{
//                             fontWeight: '700',
//                             color: Colors.darkGrey,
//                             fontSize: RFValue(14),
//                             fontFamily: fonts['DMSans-Medium'],
//                             letterSpacing: 2,
//                           }}>
//                           No player selected yet
//                         </Text>
//                       </View>
//                     ) : (
//                       <>
//                         <ScrollView
//                           showsVerticalScrollIndicator={false}
//                           style={{marginTop: 15}}>
//                           <GroundViewPlayersList
//                             playertype="KEEPER"
//                             screenType="teambuild"
//                             pointType=""
//                             data={this.state.new_team_data.filter((x) =>
//                               (x.player_desigination == 'Wicket Keeper')
//                             )}
//                           />
//                           <GroundViewPlayersList
//                             playertype="BATSMAN"
//                             screenType="teambuild"
//                             pointType=""
//                             data={this.state.new_team_data.filter(
//                               (x) => x.player_desigination == 'Batsman',
//                             )}
//                           />
//                           <GroundViewPlayersList
//                             playertype="ALL ROUNDER"
//                             screenType="teambuild"
//                             pointType=""
//                             data={this.state.new_team_data.filter(
//                               (x) => x.player_desigination == 'All Rounder',
//                             )}
//                           />
//                           <GroundViewPlayersList
//                             playertype="BOWLER"
//                             screenType="teambuild"
//                             pointType=""
//                             data={this.state.new_team_data.filter(
//                               (x) => x.player_desigination == 'Bowler',
//                             )}
//                           />
//                         </ScrollView>
//                         <View
//                           style={{
//                             flexDirection: 'row',
//                             justifyContent: 'space-between',
//                             marginLeft: 18,
//                             marginRight: 18,
//                             marginBottom: 12,
//                           }}>
//                           <View>
//                             <Text
//                               style={{
//                                 fontWeight: '400',
//                                 color: Colors.darkGrey,
//                                 fontSize: RFValue(10),
//                                 fontFamily: fonts['DMSans-Medium'],
//                               }}>
//                               {this.state.teamOneUniqueData.name} (
//                               {this.state.teamOneLength})
//                             </Text>
//                           </View>
//                           <View>
//                             <Text
//                               style={{
//                                 fontWeight: '400',
//                                 color: Colors.darkGrey,
//                                 fontSize: RFValue(10),
//                                 fontFamily: fonts['DMSans-Medium'],
//                               }}>
//                               {this.state.teamTwoUniqueData.name} (
//                               {this.state.teamTwoLength})
//                             </Text>
//                           </View>
//                         </View>
//                       </>
//                     )}
//                   </ImageBackground>
//                   <View
//                     style={{
//                       flexDirection: 'row',
//                       justifyContent: 'space-evenly',
//                       backgroundColor: '#262C46',
//                       height: 50,
//                       width: '100%',
//                       alignContent: 'center',
//                       alignItems: 'center',
//                       position: 'relative',
//                     }}>
//                     <View
//                       style={{
//                         flexDirection: 'row',
//                         alignContent: 'center',
//                         alignItems: 'center',
//                       }}>
//                       <Text
//                         style={{
//                           fontSize: RFValue(10, 580),
//                           fontFamily: fonts['DMSans-Medium'],
//                           fontWeight: '400',
//                           color: Colors.highLight,
//                         }}>
//                         Available credit
//                       </Text>
//                       <Text
//                         style={{
//                           color: Colors.white,
//                           fontSize: RFValue(12, 580),
//                           fontFamily: fonts['DMSans-Medium'],
//                           fontWeight: '500',
//                         }}>
//                         {' '}
//                         CR {100 - this.state.credit_points}
//                       </Text>
//                     </View>
//                     <Text
//                       style={{
//                         color: Colors.white,
//                         fontSize: RFValue(10, 580),
//                         fontFamily: fonts['DMSans-Medium'],
//                         fontWeight: '700',
//                       }}>
//                       {this.state.total_player_selected} / 11 PLAYERS SELECTED
//                     </Text>
//                   </View>
//                 </View>
//               </SafeAreaView>
//             </Modal>
//             <RBSheet
//               ref={(ref) => {
//                 this.RBSheet = ref;
//               }}
//               height={250}
//               openDuration={250}
//               customStyles={{
//                 container: {
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderTopLeftRadius: 20,
//                   borderTopRightRadius: 20,
//                 },
//               }}>
//               <View style={{flex: 1}}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                     marginTop: 20,
//                   }}>
//                   <Text style={styles.backModalGobacktext}>GO BACK ?</Text>
//                 </View>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                     marginTop: 10,
//                   }}>
//                   <Image
//                     source={icons.alertlogo}
//                     style={{height: 50, width: 60, resizeMode: 'contain'}}
//                   />
//                 </View>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                     marginTop: 15,
//                     marginLeft: 15,
//                     marginRight: 15,
//                   }}>
//                   <TouchableOpacity
//                     style={styles.backModaltextView}
//                     onPress={() => this.navigateBack()}>
//                     <Text style={styles.backModaltext}>DISCARD TEAM </Text>
//                   </TouchableOpacity>
//                 </View>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                     marginTop: 15,
//                     marginLeft: 15,
//                     marginRight: 15,
//                   }}>
//                   <TouchableOpacity
//                     onPress={() => this.RBSheet.close()}
//                     style={[
//                       styles.backModaltextView,
//                       {
//                         backgroundColor: Colors.white,
//                         borderWidth: 2,
//                         borderColor: Colors.darkGrey,
//                       },
//                     ]}>
//                     <Text
//                       style={[styles.backModaltext, {color: Colors.darkGrey}]}>
//                       CONTINUE EDITING
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </RBSheet>
//           </View>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   userSuccess:state.userR.userSuccess,
// });

// const mapDispatchToProps = {
 
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Teambuild);
