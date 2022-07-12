import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  BackHandler,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {styles} from './style';
import Maintopbar from '../../component/trophyHeaderComponent/trophyHeader';

import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../../res/style/color';
import ClockSvg from '../../../res/images/svg/clock.svg';
import GetApiService, {getApiSerive} from '../../utills/getDataService';
import {icons, api_link} from '../../../res/constants';
import JoinListTag from '../../component/joinList/joinList';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

import {fetchMyContestApi} from '../../redux/actions/myContestAction';
import SectionListTag from '../../component/sectionList/sectionList';
import {globalStyles} from '../../../res/style/appStyle';
import EditBtnSvg from '../../../res/images/svg/editBtn.svg';
import CloneBtnSvg from '../../../res/images/svg/cloneBtn.svg';
import EditSvg from '../../../res/images/svg/editcolor.svg';
import SwitchSvg from '../../../res/images/svg/switch.svg';
import ArrowDownSvg from '../../../res/images/svg/arrowdown.svg';
import {fonts} from '../../../res/style/fonts';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import PeopleSvg from '../../../res/images/svg/peoplesvg';
import StarSvg from '../../../res/images/svg/starsvg';
import WinnerSvg from '../../../res/images/svg/winnersvg';
import RedCrossSvg from '../../../res/images/svg/redcross.svg';

import Tooltip from 'react-native-walkthrough-tooltip';
import Modal from 'react-native-modal';
import MobelOpenBtnSvg from '../../../res/images/svg/modelopenbtn.svg';
import MobelCloseBtnSvg from '../../../res/images/svg/modelclosebtn.svg';
import GroundViewPlayersList from '../../component/groundViewPlayersList/groundViewPlayersList';
import { useTranslation } from 'react-i18next';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../component/React Native Responsive Screen';
import {color} from 'react-native-reanimated';

var paramName = 'Fixture';
const myTeams = (props) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataTeam, setDataTeam] = useState([]);
const[walletSummry,setWalletSummry]=useState('')
const[bonousAmount,setBonousAmount]=useState('')
const [isModalVisible, setIsModalVisible] = useState(false);
const [groundTeam, setgroundTeam] = useState([]);
const [teamOneName, setTeamOneName] = useState('');
const [teamOneLength, setTeamOneLength] = useState('');
const [teamTwoName, setTeamTwoName] = useState('');
const [teamTwoLength, setTeamTwoLength] = useState('');

const [capt, setCapt] = useState('');
const [vCapt, setVCapt] = useState('');





  const userData = useSelector(
    (state) => state.userR.userSuccess,
  );


  const _fetchMyTeam = (typeId) => {
    setIsLoading(true)
    var match_id = props.route.params.match_id_c;
    // var user_id = 77 
    var user_id= userData.user_id;

    console.log(
      'my team link:',
      api_link.myTeam +
       
        'match_id=' +
        match_id +
        '&user_id=' +
        user_id,
    );

    getApiSerive
      .getApiClass(
        api_link.myTeam +
         
          'match_id=' +
          match_id +
          '&user_id=' +
          user_id,
      )
      .then((res) => {
      console.log('my team data is ',res)
          var type='myteam'
          if(res.team_data.team){
          teamDataEdit(res.team_data.team,type)
          }
          else{
            setIsLoading(false)
          }
       
      
      });
  };



  function teamDataEdit(res,type){
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
              //entry: res[i].entry,
              //firstprize: res[i].firstprize,
              //contest_id: res[i].contest_id,
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
              teamTwoName: result[0].name
  
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
              // contestid: props.route.params.item.contest_id,
              contestdata: props.route.params.item,
              // contesttag: props.route.params.item.contest_tag,
              rawData: '',
              type: 'jointag',
              editData: data,
              status: 'edit',
            });
  
          }
         
         
  
  
  }

  const myAccount = () => {
    //here we check payment check //
    console.log('myCash info:', api_link.my_accountapi + 'user_id='+userData.user_id+'');
    getApiSerive
      .getApiClass(api_link.my_accountapi + 'user_id='+userData.user_id+'')
      .then((res) => {
        //("fetch cash info:",res)
        // match_id
//console.log("my balance is:", res.data.total_amount)
        setWalletSummry(res.data.total_amount)
        setBonousAmount(res.data.bonous_amount)
       
      });
  };

  useEffect(() => {

   
   


    const focusListener = props.navigation.addListener('focus', () => {
     
      myAccount()
      _fetchMyTeam();
       
      });

      myAccount()
      _fetchMyTeam();


     
   const backAction = () => {
   
    if(props.route.params.status==='backMyTeam'){
      props.navigation.navigate('Home')
    }else{
      props.navigation.goBack()
    }
    return true;
   
       
  };

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );

  return () => backHandler.remove();
  

  }, []);



  function clickSingleTeam(item){
    // console.log("clicked:",item.captainId,item.vCaptainId)
    
    
    
    setCapt(item.captainId);
    setVCapt(item.vCaptainId);
    setTeamOneName(item.teamOneName);
    setTeamOneLength(item.teamOneLength);
    setTeamTwoName(item.teamTwoName);
    setTeamTwoLength(item.teamTwoLength);
    setgroundTeam(item.players_list)
    setIsModalVisible(true)
    
      }

     
const joinContest=(match_id,team)=>{
  var data={"match_id":match_id,"id":team}
  props.navigation.navigate('contest', {
    jointype: 'letsplay',
    joinTeamData: data,
    Wallet: walletSummry,
    match_id_c: match_id,
  });
}


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
                    style={[styles.teamTagsText, {fontSize: RFValue(12, 580)}]}>
                 {item.team_name?item.team_name:t('common:teamShort')}{item.team_name?<Text style={{fontSize:RFValue(6)}}>{t('common:teamShort')} {index+2-1}</Text>:index+2-1}
                 
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                    style={{marginTop:5}}
                      onPress={() => {
                        props.navigation.navigate('Teambuild', {
                          matchid_1: props.route.params.match_id_c,
                          contestid: props.route.params.item.contest_id,
                          contestdata: props.route.params.item,
                          contestdata:item,
                          contesttag: props.route.params.item.contest_tag,
                          rawData: '',
                          type: 'jointag',
                          editData: item,
                          status: 'editMyTeam',
                        });
                      }}
                      activeOpacity={0}>
                      <EditBtnSvg
                        style={styles.editBtnstyle}
                        height={15}
                        width={15}></EditBtnSvg>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{marginTop:5}}
                      onPress={() => {
                        props.navigation.navigate('Teambuild', {
                          matchid_1: props.route.params.match_id_c,
                          contestid: props.route.params.item.contest_id,
                          contestdata: props.route.params.item,
                          contestdata:item,
                          contesttag: props.route.params.item.contest_tag,
                          rawData: '',
                          type: 'jointag',
                          editData: item,
                          status: 'cloneMyTeam',
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

const newTeam=()=>{
  props.navigation.navigate('Teambuild', {
    matchid_1: props.route.params.match_id_c,
    team1shortname1: props.route.params.teamname1,
    team2shortname2: props.route.params.teamname2,
    contestdata:{"match_id":props.route.params.match_id_c},
    matchid_1: props.route.params.item.match_id,
    jointype: 'home',
    type: 'bottomtabs',
    status: 'post',
    
  })
}
function toggleModal(){
  setIsModalVisible(false)
}
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
                          {t('common:groundEmptyMesssage')}
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


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <Maintopbar
      title={
       props.route.params.teamname1+' ' +t('homePage:vs')+' '+props.route.params.teamname2
      }
      type ={'myTeams'}
      status={props.route.params.status}
          
       
          navigation={props.navigation}
        />

{isLoading ? (
              <View style={styles.loader_style}>
                <ActivityIndicator color={Colors.orange} />
              </View>
            ) : (
              <View>{teamTags()}</View>
            )}
            
      </View>
      <View style={styles.bottomButtonVieww}>

                                <TouchableOpacity
                               onPress={() =>{
                                 newTeam()
                               }
                               
                              }

                                style={styles.buildteamtagLeft}>
                                    <Text style={styles.buildteamtagtext}>{t('common:newTeam')}</Text>
                                   
                                </TouchableOpacity>
                                </View>
                                <View>
{groundModal()}
</View>
    </SafeAreaView>
  );
};
export default myTeams;
