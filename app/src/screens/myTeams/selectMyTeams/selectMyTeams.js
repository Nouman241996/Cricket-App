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
import Maintopbar from '../../../component/trophyHeaderComponent/trophyHeader';

import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../../../res/style/color';
import ClockSvg from '../../../../res/images/svg/clock.svg';
import SaveTrophySvg from '../../../../res/images/svg/savetrophy';
import GetApiService, {getApiSerive} from '../../../utills/getDataService';
import {icons, api_link} from '../../../../res/constants';
import JoinListTag from '../../../component/joinList/joinList';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

import {fetchMyContestApi} from '../../../redux/actions/myContestAction';
import SectionListTag from '../../../component/sectionList/sectionList';
import {globalStyles} from '../../../../res/style/appStyle';
import EditBtnSvg from '../../../../res/images/svg/editBtn.svg';
import CloneBtnSvg from '../../../../res/images/svg/cloneBtn.svg';
import EditSvg from '../../../../res/images/svg/editcolor.svg';
import SwitchSvg from '../../../../res/images/svg/switch.svg';
import ArrowDownSvg from '../../../../res/images/svg/arrowdown.svg';
import {fonts} from '../../../../res/style/fonts';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import PeopleSvg from '../../../../res/images/svg/peoplesvg';
import StarSvg from '../../../../res/images/svg/starsvg';
import WinnerSvg from '../../../../res/images/svg/winnersvg';
import RedCrossSvg from '../../../../res/images/svg/redcross.svg';
import CrossSvg from '../../../../res/images/svg/cross';
const BASE_RESPONSE_TEXT = "Response or error will show here.";
import Tooltip from 'react-native-walkthrough-tooltip';
import Modal from 'react-native-modal';
import MobelOpenBtnSvg from '../../../../res/images/svg/modelopenbtn.svg';
import MobelCloseBtnSvg from '../../../../res/images/svg/modelclosebtn.svg';
import GroundViewPlayersList from '../../../component/groundViewPlayersList/groundViewPlayersList';
import {tinyToastSerive} from '../../../utills/Toast'
import {Toast} from 'native-base'
import {postApiSerive} from '../../../utills/postDataService';

import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../../component/React Native Responsive Screen';
import {color} from 'react-native-reanimated';
import TransactionModal from '../../../component/modal/transactionModal'
import RNPgReactNativeSDK from 'react-native-pg-react-native-sdk'
import { BaseButton } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
var paramName = 'Fixture';
const selectMyTeams = (props) => {
  const { t } = useTranslation();

  var item= props.route.params.item;
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

const [deposite, setDeposite] = useState('');
const [winnings, setWinnings] = useState('');

const [tranModalVisible, setTranModalVisible] = useState(false);

const [capt, setCapt] = useState('');
const [vCapt, setVCapt] = useState('');

const[match_id,setMatch_id]=useState('')
const[team,setteam]=useState('')
const [addedAmount,setAddedAmount]=useState('')
const [resToken,setResToken]=useState('')

const [teamSaveModal,setTeamSaveModal]=useState(false)
const [contestFullError,setContestFullError]=useState('')

const [cashFreeStatus,setCashFreeStatus]=useState('')
const [cashFreeResult,setCashFreeResult]=useState([])
const [responseText, setResponseText] = useState(BASE_RESPONSE_TEXT)



  const userData = useSelector(
    (state) => state.userR.userSuccess,
  );

  var getAmount=(money)=>{
    console.log("money is",money)
   setAddedAmount(money)
   
  }
  function _startProcess(mode) {
    closeModal()
    setResponseText(BASE_RESPONSE_TEXT);
    var orderId;

    const apiKey = "835057b01952e633919b4832f50538"; // put your apiKey here
    const apiSecret = "34c51017af661c77fa17a7ee65f9bf72592f9489"; // put your apiSecret here

    const env = "PROD"; // use "TEST" or "PROD"
    var tokenUrl;
    if(env === "PROD") { 
      tokenUrl = "https://api.cashfree.com/api/v2/cftoken/order";
       //for TEST
    } else { 
     tokenUrl = "https://test.cashfree.com/api/v2/cftoken/order";  //for PROD
    }

      orderId = "Order" + parseInt((100000000 * Math.random()));
      let orderApiMap = {
        "orderId": orderId,
        "orderAmount": addedAmount,
        "orderCurrency": "INR"
      }
    
      const postParams = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-client-id': apiKey,
          'x-client-secret': apiSecret
        },
        body: JSON.stringify(orderApiMap)
      }
    
      var cfToken;
      fetch(tokenUrl, postParams).then(response => {
      return response.json()
      })
        .then(data => {
          // console.log("data" + data);
          try{
            cfToken = data.cftoken
            console.log("Token is : " + data.cftoken);
            setResToken(data.cftoken)
            startPayment(cfToken)
          }
          catch(error){
            setResponseText(data);
          }          
        })
  
    
    function startPayment(cfToken) {
      console.log('Function works',userData)
      var map = {
        "orderId": orderId,
        "orderAmount": addedAmount,
        "appId": apiKey,
        "tokenData": cfToken,
        "orderCurrency": "INR",
        "orderNote": "asdasdasd",
        "notifyUrl": "https://test.gocashfree.com/notify",
        "customerName": "Cashfree User",
        "verifyExpiry": "100",
        "customerPhone": userData.mobile,
        "customerEmail": "cashfree@cashfree.com",
        "color1":Colors.orange,
        "color2":Colors.white,

      }
      console.log("Result is below: ");
      //working till here
      try{
      RNPgReactNativeSDK.startPaymentWEB(map, env,(result) => 
      {
        
        console.log("Result is : "+ result);
        var res= JSON.parse(result)
        if(res.txStatus=="SUCCESS")
        {
          //setLoader(false)
          setCashFreeResult(res);
          setAddedAmount('');
          console.log("obj : ",cashFreeResult)
          console.log("api :", api_link.addCashApi,{"mode":"Cashfree","user_id":userData.user_id ,"amount": addedAmount, "transaction_detail":{"txStatus":res.txStatus,"txMsg":res.referenceId}} )
          postApiSerive.postApiClass(api_link.addCashApi,{"mode":"Cashfree","user_id":userData.user_id ,"amount": addedAmount, "transaction_detail":{"txStatus":res.txStatus,"txMsg":res.referenceId}}).
          then((res) => {
            
            console.log('Amount posted Succesfully')
           
           });
           tinyToastSerive.showSuccessToast("Amount Added")
        }
        else{
          Toast.show({
            style: {backgroundColor: Colors.orange},
            text: 'Payment could not proceed',
            duration: 3000,
          });  
        }
        
        //fetchNewAmountData()
        console.log("obj "+res.txStatus)
        setCashFreeStatus(res.txStatus)
       
       
        
        tinyToastSerive.showLoadingToast('Adding cash...')

        setTimeout(function(){  tinyToastSerive.hideToast()}, 1000)
        myAccount()
        //setTimeout(function(){ setModalVisible(true)}, 1000)
          //setModalVisible(true)
       
       
       
       
       
        // Toast.show({
        //   style: {backgroundColor: Colors.green},
        //   text: 'Cash Added',
        //   duration: 3000,
        // });           
        //props.navigation.navigate('VerifyAccount')

                    var obj = JSON.parse(result, function (key, value) 
                {
                  console.log(key + "::" + value);
                    // Do something with the result
                    
                    
                })
      })
    }catch(error)
      {
        console.log("Error",error )
      }

    
    }

  
    var responseHandler=(result)=> {
      console.log("Body of RES")
        setResponseText(result);
        console.log("res"+result);
      try {
        var output = "";
        var obj = JSON.parse(result, function (key, value) {
          if (key !=="") {
            output = output + key + " : " + value + "\n"          
          }
      
        });
        setResponseText(output);
        console.log("Body of funct")
        console.log("Output :"+output)
      } 
      catch(error) {
        //
      }
    }

  }
   
  const _fetchMyTeam = (typeId) => {
    setIsLoading(true)
    var match_id = props.route.params.match_id_c;
    console.log("match id is:",match_id)
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
        setDeposite(res.data.credit_amount)
        setWinnings(res.data.winning_amount)
      });
  };

  const contetsFullRequestApi=(parseData)=>{

    console.log("data add:",parseData,parseData.responsecode)
    // var item=props.route.params.item
    // var raw=props.route.params.raw
   
    //  // console.log('selectMyTeam post data:',item.total_team-item.join_team && item.contest_type)
    // //  && item.contest_type=='not_confirm'

    // if(item.total_team-item.join_team<=1){

      // postApiSerive.postApiClass(api_link.contetsFullApi,raw).then((res)=>{
        tinyToastSerive.hideToast()
          tinyToastSerive.showSuccessToast(parseData.message)
           props.navigation.navigate('Home')
          

        
      
       
    //  }) 

    // }else{
      
    //   tinyToastSerive.hideToast();
    //   tinyToastSerive.showSuccessToast(parseData)
    
    // }
  };


const modelToggle=()=>{
  setTeamSaveModal(!teamSaveModal)

}

  useEffect(() => {

   // console.log("raw myteamScreen:",props.route.params.raw)

    const focusListener = props.navigation.addListener('focus', () => {
     
      myAccount()
      _fetchMyTeam();
       
      });

      myAccount()
      _fetchMyTeam();

   


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

   function   closeModal() {
    setTranModalVisible(false)
      };
const joinContest = (match_id,id) => {

  if(walletSummry!=0){


 
  tinyToastSerive.showLoadingToast('Joining Contest');
  var raw = {
    user_id: userData.user_id,
    match_id:match_id,
    my_team_id: id,
    contest_id:item.contest_id,
    contest_amount: item.entry,
    private: '0',
  };

console.log("raw data is:",raw)

  postApiSerive.postApiClass(api_link.joincontestapi, raw).then((res) => {
    
    var parseData=JSON.parse(res)
     console.log("team post succes message",parseData.responsecode)
     if(parseData.responsecode==200){
       console.log("success")
     contetsFullRequestApi(parseData)
     }else if(parseData.responsecode==400){

setContestFullError(parseData.message)
      tinyToastSerive.hideToast();  
      modelToggle()
     }else{
         tinyToastSerive.hideToast();
      Toast.show({
        style: {backgroundColor: Colors.red},
        text: parseData.message,
        position:'Top',
        duration: 3000,
      });
      
     }
   // this.contetsFullRequestApi(item);
  });
}else{
  Toast.show({
    style: {backgroundColor: Colors.orange},
    text: 'Total Amount is Zero Please Add Cash',
    duration: 1000,
    position: 'Top',
    buttonText: 'Ok',
  });

}


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
                  onPress={()=>{
                    
                  //  joinContest(item.match_id,item.team)
                setMatch_id(item.match_id)
                setteam(item.team)
                setTranModalVisible(!tranModalVisible)
                  
                  }}
     
                  style={styles.jointag}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
               <Text style={{ color: Colors.white, fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Medium'], fontWeight: '500' }}>{t('common:join')}</Text>     
                           </View>
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
                          status: 'editselMyTeam',
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
                          status: 'cloneselMyTeam',
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
<TransactionModal
     amount={getAmount}
      walleltSummery={walletSummry?walletSummry:0}
      contestfee={ item.entry? item.entry:0}
      deposit={deposite?deposite:0}
      winnings={winnings?winnings:0}
      extracash={bonousAmount?bonousAmount:0}
      modelVisible={tranModalVisible}
      closeModel={()=>{
        closeModal()
      }}
      joinPress={()=>{

       if(walletSummry>=item.entry)
       {
        setTranModalVisible(false)
        joinContest(match_id,team)
       }
       else{
         if(addedAmount<=0 || addedAmount >200000 || addedAmount=='')
         {
          Toast.show({
            style: {backgroundColor: Colors.orange},
            text: 'Payment could not proceed',
            duration: 3000,
            position:'top'
          });  
         }
         else{_startProcess('UPI')}
         
       }
      
      }
    }
      />


 
          <Modal
            testID={'modal'}
            isVisible={teamSaveModal}
            //swipeDirection={['up', 'left', 'right', 'down']}
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              margin: 0,
            }}>
            <View style={styles.ViewBackground}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <TouchableOpacity
                  style={{marginRight: 5, marginTop: 5}}
                  onPress={() => {
                     props.navigation.goBack();
                  }}>
                  <CrossSvg height={20} width={20}></CrossSvg>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: '5.0%',
                }}>
                <SaveTrophySvg />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: '5.0%',
                }}>
                <Text
                  style={{
                    fontSize: RFValue(16, 580),
                    textAlign:'center',
                    fontFamily: fonts['DMSans-Bold'],
                  }}>
                  {contestFullError}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: '5.0%',
                }}>
                <TouchableOpacity
                  style={styles.buildteamtag}
                  onPress={() => {
                   
                        props.navigation.goBack();
                   
                    
                  }}>
                  <Text style={styles.buildteamtagtext}>{t('common:goBack')}</Text>
                </TouchableOpacity>
              </View>
            </View>
        
        
        
        
         
          </Modal>


</View>








    </SafeAreaView>
  );
};
export default selectMyTeams;
