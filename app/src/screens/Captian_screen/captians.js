import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Touchable,
  ActivityIndicator,
  Button,
  Alert,
  BackHandler,
} from 'react-native';
import {icons, api_link} from '../../../res/constants';
import LinearGradient from 'react-native-linear-gradient';
import RNPgReactNativeSDK from 'react-native-pg-react-native-sdk'
import Modal from 'react-native-modal';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../../src/component/React Native Responsive Screen';
import TransactionModal from '../../component/modal/transactionModal'
import MobelOpenBtnSvg from '../../../res/images/svg/modelopenbtn.svg';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {styles} from './style';
import {Colors} from '../../../res/style/color';
import {fonts} from '../../../res/style/fonts';
import MobelCloseBtnSvg from '../../../res/images/svg/modelclosebtn.svg';
import {ImageBackground} from 'react-native';
import GroundViewPlayersList from '../../component/groundViewPlayersList/groundViewPlayersList';
import {getApiSerive} from '../../utills/getDataService';
import {postApiSerive} from '../../utills/postDataService';
import {Toast, Root} from 'native-base';
import CrossSvg from '../../../res/images/svg/cross';
import SepSvg from '../../../res/images/svg/sepsvg';
import SaveTrophySvg from '../../../res/images/svg/savetrophy';
import {tinyToastSerive} from '../../utills/Toast';
import {connect} from 'react-redux';
import { withTranslation } from 'react-i18next';
const BASE_RESPONSE_TEXT = "Response or error will show here.";
import AsyncStorage from '@react-native-async-storage/async-storage';
var playerList = [];
class SelectCaptians extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credit_points: 0,
      isModalVisible: false,
      teamSaveModal: false,
      setClick: false,
      is_select: '',
      is_vc: '',
      is_c: '',
      is_c_slected: false,
      is_vc_slected: false,
      isGroundModalVisible: false,
      entryFee: '',
      walletSummry: '',
      prizeMoney: '9000',
      CaptainId: '',
      ViceCaptainId: '',
      matchID: '',
      contestId: '',
      credit_amount: '',
      bonous_amount: '',
      newTeamlist: [],
      result: [],
      teamOneUniqueData: [],
      teamTwoUniqueData: [],
      team1Count: 0,
      team2Count: 0,
      deposite:0,
      winnings:0,
      responseText:'',
      resToken:'',
      cashFreeLoader:true,
      cashFreeResult:'',
      cashFreeStatus:'',
      money:'',
      responceCode:'',
      contestFullError:''
    };
  }
  handleCallback = (childData) =>{
    this.setState({money: childData})
}
  clearAsyncStorage = async () => {
    await AsyncStorage.removeItem('@teamData');
  };
  componentDidMount() {
  
    console.log("team name in captain screen", "teamname1:",this.props.route.params.team1shortname1,
    "teamname2",this.props.route.params.team2shortname2,)

    playerList = [];
    Toast.hide();
    this.contestData();

    this.myAccount();
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.myAccount();
      this.filterTeam();

    });
    // this.filterTeam();

    
    
    if (
      this.props.route.params.status == 'edit' ||
      this.props.route.params.status == 'clone'  ||
      this.props.route.params.status == 'editMyTeam' ||
      this.props.route.params.status == 'cloneMyTeam' ||  this.props.route.params.status == 'editselMyTeam' ||
      this.props.route.params.status == 'cloneselMyTeam'
    ) {
      this.setState({is_c: this.props.route.params.capt});
      this.setState({is_vc: this.props.route.params.vCapt});
      this.findUniqueData();
    } else {
      this._retrieveData();
      this.findUniqueData();
    }
  }

  contestData = () => {
    if (this.props.route.params.contestdataCap) {
      var contestData = this.props.route.params.contestdataCap;
      console.log("contest clone data is:",contestData)

      this.setState({
        entryFee: contestData.entry,
        matchID: contestData.match_id,
        contestId: contestData.contest_id,
        prizeMoney: contestData.firstprize,
      });
    }else{
      var contestData = this.props.route.params.contestdataCap;
      console.log("contest clone else data is:",contestData)

    }
  };


 
   startPayment=(cfToken,orderId,money,apiKey,env)=> {
     this.closeModal()
    console.log('Function works',cfToken)
    var map = {
      "orderId": orderId,
      "orderAmount": money,
      "appId": apiKey,
      "tokenData": cfToken,
      "orderCurrency": "INR",
      "orderNote": "asdasdasd",
      "notifyUrl": "https://test.gocashfree.com/notify",
      "customerName": "Cashfree User",
      "verifyExpiry": "100",
      "customerPhone": "0123456789",
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
      console.log("Res is : "+ res.txStatus);
      if(res.txStatus=="SUCCESS")
      {
        
        this.setState({cashFreeLoader:false,cashFreeResult:res})
        // setLoader(false)
        // setCashFreeResult(res);
        // setAddedAmount('');
        //console.log("obj : ",cashFreeResult)
        console.log("api :", api_link.addCashApi,{"mode":"Cashfree","user_id":this.props.userSuccess.user_id,"amount": money, "transaction_detail":{"txStatus":res.txStatus,"txMsg":res.referenceId}} )
        postApiSerive.postApiClass(api_link.addCashApi,{"mode":"Cashfree","user_id":this.props.userSuccess.user_id ,"amount": money, "transaction_detail":{"txStatus":res.txStatus,"txMsg":res.referenceId}}).
        then((res) => {
          
          console.log('Amount posted Succesfully',res)
         
         });
         tinyToastSerive.showSuccessToast("Amount Added")
      }
      else
      {
      Toast.show({
              style: {backgroundColor: Colors.orange},
              text: 'Payment could not proceed',
              duration: 3000,
            });  
      }
     this.myAccount()
      // fetchNewAmountData()
      console.log("obj "+res.txStatus)
      //setCashFreeStatus(res.txStatus)
      this.setState({cashFreeStatus:res.txStatus})
     
     
      
      tinyToastSerive.showLoadingToast('Adding cash...')
      tinyToastSerive.hideToast()
     
     
     
     // setTimeout(function(){ setModalVisible(true)}, 1000)
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



  filterTeam = () => {
    //here we filter team for post selected players

    console.log("length before forloop",this.props.route.params.newteam.length)
    var team = this.props.route.params.newteam;
    // console.log("Team data :",team)
    for (var i = 0; i < team.length; i++) {
      playerList.push({PlayerId: team[i].playerid});
    }
    console.log("length after forloop",playerList.length)
  };

  getAmount=(money)=>{
    this.setState({money:money})
   
  }
   _startProcess=()=> {
     //this.closeModal()
    
     this.setState({responseText:"error"})
     
     //setResponseText(BASE_RESPONSE_TEXT);
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
        "orderAmount": this.state.money,
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
          console.log("data" + data);
          try{

            console.log("try payment");
          var cfToken = data.cftoken
           
            console.log("Token is : " + data.cftoken);
            this.setState({resToken:data.cfToken})
            //setResToken(data.cftoken)
            this.startPayment(cfToken,orderId,this.state.money,apiKey,env)
           
          }
          catch(error){
            this.setState({responseText:data})
            //setResponseText(data);
          }          
        })
  
   
  
    var responseHandler=(result)=> {
      console.log("Body of RES")
      this.setState({responseText:result})
       // setResponseText(result);
        console.log("res"+result);
      try {
        var output = "";
        var obj = JSON.parse(result, function (key, value) {
          if (key !=="") {
            output = output + key + " : " + value + "\n"          
          }
      
        });

        this.setState({responseText:output})
        //setResponseText(output);
        console.log("Body of funct")
        console.log("Output :"+output)
      } 
      catch(error) {
        //
      }
    }

  }


  findUniqueData = () => {
    var team = this.props.route.params.newteam;
    let map = new Map();
    for (const item of team) {
      if (!map.has(item.teamid)) {
        map.set(item.teamid, true); // set any value to Map
        this.state.result.push({
          name: item.team_short_name,
        });
      }
    }
    this.setState({teamOneUniqueData: this.state.result[0]});
    this.setState({teamTwoUniqueData: this.state.result[1]});
    this.setState({
      team1Count: team.filter((x) => x.team_number == '1').length,
    });
    this.setState({
      team2Count: team.filter((x) => x.team_number == '2').length,
    });
  };
  myAccount = () => {
    //here we check payment check //
    console.log('myCash info:', api_link.my_accountapi + 'user_id='+this.props.userSuccess.user_id+'');
    getApiSerive
      .getApiClass(api_link.my_accountapi + 'user_id='+this.props.userSuccess.user_id+'')
      .then((res) => {
        //("fetch cash info:",res)
        // match_id
//console.log("my balance is:", res.data.total_amount)

        this.setState({
          walletSummry: res.data.total_amount,
          bonous_amount: res.data.bonous_amount,
          deposite:res.data.credit_amount,
          winnings:res.data.winning_amount,
        });
      });
  };

  closeModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  teamSaveToggleModal = () => {
    this.setState({teamSaveModal: !this.state.teamSaveModal});
  };

  toggleModal = () => {
    if (this.props.route.params.type === 'jointag') {
      if (
        this.props.route.params.status == 'edit' ||
        this.props.route.params.status == 'editMyTeam' || this.props.route.params.status == 'cloneMyTeam' ||
        this.props.route.params.status == 'editselMyTeam' || this.props.route.params.status == 'cloneselMyTeam'
      ) {
        console.log('status edit call');
        this.saveEditTeam();
      } else {
        console.log('modal call');

        if (this.state.walletSummry != 0) {
          this.setState({isModalVisible: !this.state.isModalVisible});
          // var bonusPercentage=parseFloat(this.state.entryFee*10/100);
          // var subtracBonus=this.state.bonous_amount-bonusPercentage;
          // console.log("bonus 10% is:",bonusPercentage,subtracBonus)
        } else {
          Toast.show({
            style: {backgroundColor: Colors.orange},
            text: 'Total Amount is Zero Please Add Cash',
            duration: 1000,
            position: 'Top',
            buttonText: 'Ok',
          });

          setTimeout(() => {
            this.setState({isModalVisible: !this.state.isModalVisible});
          }, 1200);
        }
      }
    } else {
      this.saveTeamHistory()
    }
  };
  toggleGroundModal = () => {
    this.setState({isGroundModalVisible: !this.state.isGroundModalVisible});
  };


  saveEditTeam=()=>{

    var teamData;
    this.setState({isModalVisible: false});

   
    console.log("edit team data is:",teamData)
    if(this.props.route.params.status == 'cloneMyTeam' || this.props.route.params.status == 'cloneselMyTeam' ){
      teamData = {
        matchid: this.state.matchID,
        userid: this.props.userSuccess.user_id,
        CaptainId: this.state.is_c,
        ViceCaptainId: this.state.is_vc,
        PlayerList: playerList,
        edit: '0',
        my_team_id: this.props.route.params.teamid,
      };
      tinyToastSerive.showLoadingToast('Cloning Team');
    }else{
      teamData = {
        matchid: this.state.matchID,
        userid: this.props.userSuccess.user_id,
        CaptainId: this.state.is_c,
        ViceCaptainId: this.state.is_vc,
        PlayerList: playerList,
        edit: '1',
        my_team_id: this.props.route.params.teamid,
      };
      tinyToastSerive.showLoadingToast('Updating Team');

    }
  

    postApiSerive.postApiClass(api_link.saveteam, teamData).then((res) => {
      var dataJson = JSON.parse(res);
      console.log('status is:', dataJson.message);
      this.props.route.params.callback() 

      //here we call join team
        tinyToastSerive.hideToast();
        this.teamSaveToggleModal();
    
      playerList = [];
    });


  }

  saveTeamHistory = () => {


    var teamData;
      teamData = {
        matchid: this.state.matchID,
        userid: this.props.userSuccess.user_id,
        CaptainId: this.state.is_c,
        ViceCaptainId: this.state.is_vc,
        PlayerList: playerList,
        edit: '0',
      };

      console.log("save team history Raw",teamData)

      tinyToastSerive.showLoadingToast('Saving Team');
    

    postApiSerive.postApiClass(api_link.saveteam, teamData).then((res) => {
      var dataJson = JSON.parse(res);
      console.log('status is:', dataJson.status);

      //here we call join team
      this.props.route.params.callback() 
        tinyToastSerive.hideToast();
        playerList = [];
       // this.props.navigation.reset({index: 0, routes: [{name: 'contest'}]});
       this.clearAsyncStorage();
        this.props.navigation.navigate('contest', {
          jointype: 'letsplay',
          joinTeamData: dataJson.data,
          Wallet: this.state.walletSummry,
          bonus:this.state.bonous_amount,
          deposite:this.state.deposite,
          winnings:this.state.winnings,
          team1shortname:this.props.route.params.team1shortname1,
          team2shortname:this.props.route.params.team2shortname2,
          match_id_c: this.props.route.params.matchglobalid,
        });



      
    });
  };


  saveTeam = () => {
    var teamData;
  
      this.setState({isModalVisible: !this.state.isModalVisible});

      teamData = {
        matchid: this.state.matchID,
        userid: this.props.userSuccess.user_id,
        CaptainId: this.state.is_c,
        ViceCaptainId: this.state.is_vc,
        PlayerList: playerList,
        edit: '0',
      };



      tinyToastSerive.showLoadingToast('Saving Team');
    

    postApiSerive.postApiClass(api_link.saveteam, teamData).then((res) => {
      var dataJson = JSON.parse(res);
      console.log('status is:', dataJson.status);

      //here we call join team
      this.props.route.params.callback() 
        tinyToastSerive.hideToast();
        playerList = [];
        this.jointeam(dataJson.data.match_id, dataJson.data.id);
      
    });
  };

  jointeam = (matchid, my_team_id) => {
    tinyToastSerive.showLoadingToast('Joining Team');
    var raw = {
      user_id: this.props.userSuccess.user_id,
      match_id: matchid,
      my_team_id: my_team_id,
      contest_id: this.state.contestId,
      contest_amount: this.state.entryFee,
      private: '0',
    };

    postApiSerive.postApiClass(api_link.joincontestapi, raw).then((res) => {
      var parseData=JSON.parse(res)
      this.setState({responceCode:parseData.responsecode})
      if (this.props.route.params.status == 'clone'|| this.props.route.params.status =='upcomingPost') {
        this.teamSaveToggleModal();
        tinyToastSerive.hideToast();
      } else {
        this.contetsFullRequestApi(parseData);
      }
    });
  };

  contetsFullRequestApi = (res) => {
    
    // var raw = this.props.route.params.rawDatapost;
    // var contestD = raw.contestData;

    // if (
    //   contestD.total_team - contestD.join_team <= 1 
    //   // &&
    //   // contestD.contest_type == 'not_confirm'
    // ) {
    //   postApiSerive.postApiClass(api_link.contetsFullApi, raw).then((res) => {
      console.log("contest clone message:",res.responsecode)
        tinyToastSerive.hideToast();
    if(res.responsecode==400){
      
      this.setState({contestFullError:res.message})
      this.teamSaveToggleModal();
  }else{

       this.teamSaveToggleModal();
    }
     
        // tinyToastSerive.showSuccessToast('Team Saved & Joined Succesfully');
        // this.props.navigation.navigate('Home');
    //   });
    // } else {
    //   tinyToastSerive.hideToast();
    //   this.teamSaveToggleModal();
    // }
  };
  _storeData = async (data) => {
    try {
      await AsyncStorage.setItem('@teamData', data);
    } catch (e) {}
  };
  _retrieveData = async () => {
    try {
      const userData = await AsyncStorage.getItem('@teamData');
      const parsedData = JSON.parse(userData);
      if (userData !== null) {
        var team = this.props.route.params.newteam;
        for (var i = 0; i < team.length; i++) {
          if (team[i].playerid == parsedData.isC) {
            this.setState({is_c: parsedData.isC});
          }
          if (team[i].playerid == parsedData.isVc) {
            this.setState({is_vc: parsedData.isVc});
          }
        }
      }
    } catch (e) {}
  };
  handlerButtonOnClick = (item, type) => {
    const newstate = !this.state.setClick;
    this.setState({
      setClick: newstate,
    });

    if (type == 'C') {
      this.state.is_c = item.playerid;
      if (this.state.is_vc == item.playerid) {
        this.state.is_vc = item.playerid;
        this.setState({CaptainId: item.playerid});
        this.state.is_vc = '';
      }
    } else if (type == 'VC') {
      this.state.is_vc = item.playerid;
      if (this.state.is_c == item.playerid) {
        this.state.is_vc = item.playerid;
        this.setState({ViceCaptainId: item.playerid});
        this.state.is_c = '';
      }
    }

    let captiansData = {isC: this.state.is_c, isVc: this.state.is_vc};

    this._storeData(JSON.stringify(captiansData));
  };

  moneyFormat(price, sign = '₹') {
    const pieces = parseFloat(price).toFixed(2).split('');
    let ii = pieces.length - 3;
    while ((ii -= 3) > 0) {
      pieces.splice(ii, 0, ',');
    }
    return sign + pieces.join('');
  }

  render() {
    const { t } = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <LinearGradient
          start={{x: 0, y: 0.9}}
          end={{x: 0.9, y: 1}}
          colors={['rgba(42,104,11,0.15)', 'rgba(24,165,135,0.15)']}>
          <View style={styles.mainheader}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={icons.arrowback} style={styles.barimage} />
            </TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: RFValue(10),
                  color: Colors.darkGrey,
                  fontWeight: '700',
                  fontFamily: fonts['DMSans-Bold'],
                }}>
                {this.props.route.params.status == 'edit' || this.props.route.params.status == 'clone' ||
                    this.props.route.params.status == 'editMyTeam' ||
                    this.props.route.params.status == 'cloneMyTeam' ||  this.props.route.params.status == 'editselMyTeam' ||
                    this.props.route.params.status == 'cloneselMyTeam'
                  ? null
                  : this.props.route.params.headertext.toUpperCase()}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 15,
              }}>
              <TouchableOpacity
                disabled={
                  this.state.is_c == '' || this.state.is_vc == '' ? true : false
                }
                onPress={() => this.toggleModal()}
                style={
                  this.state.is_c == '' || this.state.is_vc == ''
                    ? styles.jointag
                    : styles.jointagSelected
                }>
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: RFValue(13),
                    fontFamily: fonts['DMSans-Medium'],
                    fontWeight: '500',
                    letterSpacing: 2,
                  }}>
                  {this.props.route.params.status == 'edit'  ||
                    this.props.route.params.status == 'editMyTeam'||  this.props.route.params.status == 'editselMyTeam'? t('common:capUpdate') : this.props.route.params.status == 'clone' ||
                    this.props.route.params.status == 'cloneMyTeam' ||   this.props.route.params.status == 'cloneselMyTeam' ? t('common:capClone'): t('common:next')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1, marginTop: 17}}>
            <View style={styles.progressBar1}>
              <Text style={styles.circleSelected}>.</Text>
              <Text style={styles.bar}>.</Text>
              <Text style={styles.circleSelected}>.</Text>

              <Text style={styles.progressBar2}>.</Text>

              <Text style={styles.barwhite}>.</Text>
              <Text style={styles.circleUnSelected}>.</Text>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginTop: 5}}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 15,
                marginTop: 5,
                marginRight: 15,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: RFValue(7.5, 580),
                  color: Colors.darkGrey,
                  fontFamily: fonts['DMSans-Medium'],
                }}>
               {t('common:selectMatch')}
              </Text>
              <Text
                style={{
                  fontSize: RFValue(7.5, 580),
                  color: Colors.darkGrey,
                  fontFamily: fonts['DMSans-Medium'],
                }}>
                 {t('common:selectContest')}
              </Text>
              <Text
                style={{
                  fontSize: RFValue(7.5, 580),
                  color: Colors.darkGrey,
                  fontFamily: fonts['DMSans-Medium'],
                }}>
               {t('common:createTeam')}
              </Text>
            </View>
          </View>
          <View
            style={{flexDirection: 'column', marginTop: 5, marginBottom: 19}}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 15,
                marginTop: 14,
                marginRight: 15,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    color: Colors.darkGrey,
                    fontSize: RFValue(23),
                    fontWeight: '700',
                    fontFamily: fonts['DMSans-Medium'],
                  }}>
                  {t('common:selectCap')}
                </Text>
                <Text
                  style={{
                    color: Colors.darkGrey,
                    fontSize: RFValue(23),
                    fontWeight: '700',
                    fontFamily: fonts['DMSans-Medium'],
                  }}>
                  & {t('common:selectVCap')}
                </Text>
              </View>
              <View></View>
            </View>
          </View>
        </LinearGradient>
        {/* header end */}
        <View style={{flex: 1, backgroundColor: Colors.mainbackground}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 9,
              marginBottom: 6,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  borderColor: Colors.grayMedium,
                  borderWidth: 2,
                  width: 30,
                  height: 25,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    fontSize: RFValue(10),
                    color: Colors.grayMedium,
                    fontWeight: '700',
                    fontFamily: fonts['DMSans-Medium'],
                  }}>
                 {t('common:captainTag')}
                </Text>
              </View>
              <Text
                style={{
                  color: Colors.grayMedium,
                  fontSize: RFValue(10),
                  fontWeight: '700',
                  fontFamily: fonts['DMSans-Medium'],
                }}>
                2X  {t('common:points')}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  borderColor: Colors.grayMedium,
                  borderWidth: 2,
                  width: 30,
                  height: 25,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    fontSize: RFValue(10),
                    color: Colors.grayMedium,
                    fontWeight: '700',
                    fontFamily: fonts['DMSans-Medium'],
                  }}>
                 {t('common:vCaptainTag')}
                </Text>
              </View>
              <Text
                style={{
                  color: Colors.grayMedium,
                  fontSize: RFValue(12),
                  fontWeight: '700',
                  fontFamily: fonts['DMSans-Medium'],
                }}>
                1.5X {t('common:points')}
              </Text>
            </View>
          </View>
          <FlatList
            vertical={true}
            showsHorizontalScrollIndicator={false}
            data={this.props.route.params.newteam}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 5}}
            renderItem={({item, index}) => {
              return (
                <View style={{alignSelf: 'center'}}>
                  <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    style={styles.contestcontainer}>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{marginLeft: 4}}>
                          <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => this.handlerButtonOnClick(item, 'C')}
                            style={
                              this.state.is_c == item.playerid
                                ? styles.captiantag_selected
                                : styles.captiantag
                            }>
                            {this.state.is_c == item.playerid ? (
                              <Text
                                style={{
                                  color: Colors.white,
                                  fontSize: RFValue(10),
                                  fontFamily: fonts['DMSans-Medium'],
                                }}>
                                2X
                              </Text>
                            ) : (
                              <Text
                                style={{
                                  color: Colors.white,
                                  fontSize: RFValue(10),
                                  fontFamily: fonts['DMSans-Medium'],
                                  fontWeight: '700',
                                }}>
                                {t('common:captainTag')}
                              </Text>
                            )}
                          </TouchableOpacity>
                        </View>
                        <View>
                          <Text
                            style={{
                              color: Colors.grayMedium,
                              fontSize: RFValue(11),
                              fontFamily: fonts['DMSans-Medium'],
                              fontWeight: '400',
                            }}>
                            {item.cby}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{marginLeft: 4}}>
                          <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() =>
                              this.handlerButtonOnClick(item, 'VC')
                            }
                            style={
                              this.state.is_vc == item.playerid
                                ? styles.captiantag_selected
                                : styles.captiantag
                            }>
                            {this.state.is_vc == item.playerid ? (
                              <Text
                                style={{
                                  color: Colors.white,
                                  fontSize: RFValue(11),
                                  fontFamily: fonts['DMSans-Medium'],
                                }}>
                                1.5X
                              </Text>
                            ) : (
                              <Text
                                style={{
                                  color: Colors.white,
                                  fontSize: RFValue(12),
                                  fontFamily: fonts['DMSans-Medium'],
                                  fontWeight: '700',
                                }}>
                                {t('common:vCaptainTag')}
                              </Text>
                            )}
                          </TouchableOpacity>
                        </View>
                        <View>
                          <Text
                            style={{
                              color: Colors.grayMedium,
                              fontSize: RFValue(10),
                              fontFamily: fonts['DMSans-Medium'],
                              fontWeight: '400',
                            }}>
                            {item.vcby}
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={{flexDirection: 'column', marginTop: 12}}>
                      <Image
                        source={{uri: item.image}}
                        style={{height: 85, width: 75}}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginRight: 16,
                          marginTop: 18,
                        }}>
                        <Text
                          numberOfLines={1}
                          style={{
                            paddingBottom: 5,
                            fontSize: RFValue(10, 580),
                            width: 130,
                            fontFamily: fonts['DMSans-Medium'],
                            fontWeight: '400',
                          }}>
                          {item.name}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: 8,
                          marginBottom: 12,
                          marginRight: 12,
                        }}>
                        <View>
                          <Text
                            style={{
                              paddingBottom: 5,
                              fontSize: RFValue(10),
                              fontFamily: fonts['DMSans-Medium'],
                              fontWeight: '400',
                              color: Colors.darkGrey,
                            }}>
                            S.BY
                          </Text>
                          <Text
                            style={{
                              paddingBottom: 5,
                              fontSize: RFValue(10),
                              fontFamily: fonts['DMSans-Medium'],
                              fontWeight: '400',
                              color: Colors.darkGrey,
                            }}>
                            {item.selection_percent}%
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              paddingBottom: 5,
                              fontSize: RFValue(10),
                              fontFamily: fonts['DMSans-Medium'],
                              fontWeight: '400',
                              color: Colors.darkGrey,
                            }}>
                            PTS
                          </Text>
                          <Text
                            style={{
                              paddingBottom: 5,
                              fontSize: RFValue(10),
                              fontFamily: fonts['DMSans-Medium'],
                              fontWeight: '400',
                              color: Colors.darkGrey,
                            }}>
                            {item.player_points}
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              paddingBottom: 5,
                              fontSize: RFValue(10),
                              fontFamily: fonts['DMSans-Medium'],
                              fontWeight: '400',
                              color: Colors.darkGrey,
                            }}>
                            CR
                          </Text>
                          <Text
                            style={{
                              paddingBottom: 5,
                              fontSize: RFValue(10),
                              fontFamily: fonts['DMSans-Medium'],
                              fontWeight: '400',
                              color: Colors.darkGrey,
                            }}>
                            {item.credit_points}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            ListEmptyComponent={() => (
              <View activeOpacity={10}>
                <Text style={styles.stauts}>{t('common:noContestMessage1')}</Text>
                <Text style={styles.stautsNext}>
                {t('common:noContestMessage2')}
                </Text>
              </View>
            )}
            enableEmptySections={true}
            keyExtractor={(item, index) => index.toString()}
          />

          <TouchableOpacity
            style={styles.swipeUpDownMainView}
            onPress={() => this.toggleGroundModal()}>
            <TouchableOpacity
              style={{position: 'absolute', top: -6}}
              onPress={() => this.toggleGroundModal()}>
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
                {t('common:yourTeam')}
              </Text>
            </View>
          </TouchableOpacity>
          <View>




            
            <Modal
              testID={'modal'}
              isVisible={this.state.isGroundModalVisible}
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                margin: 0,
                marginTop: 25,
                borderRadius: 25,
              }}>
              <SafeAreaView
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  backgroundColor: 'white',
                  borderRadius: 25,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    borderRadius: 25,
                  }}></View>
                <TouchableOpacity
                  onPress={() => this.toggleGroundModal()}
                  style={styles.swipeUpDownOpened}>
                  <View
                    style={{
                      flexDirection: 'row',
                      position: 'absolute',
                      top: -12,
                    }}>
                    <TouchableOpacity
                      style={{marginRight: 5, marginTop: 5}}
                      onPress={() => this.toggleGroundModal()}>
                      <MobelCloseBtnSvg />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      position: 'absolute',
                      top: 15,
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(12),
                        fontWeight: '700',
                        color: Colors.darkGrey,
                        letterSpacing: 2,
                      }}>
                      {t('common:yourTeam')}
                    </Text>
                  </View>
                </TouchableOpacity>

                <View style={{flex: 1}}>
                  <ImageBackground source={icons.groundImage} style={{flex: 1}}>
                    <ScrollView
                      showsVerticalScrollIndicator={false}
                      style={{marginTop: 15}}>
                      <GroundViewPlayersList
                        playertype="KEEPER"
                        screenType="captains"
                        pointType=""
                        captainId={this.state.is_c}
                        viceCaptainId={this.state.is_vc}
                        data={this.props.route.params.newteam.filter(
                          (x) => x.player_desigination == 'Wicket Keeper',
                        )}
                      />
                      <GroundViewPlayersList
                        playertype="BATSMAN"
                        screenType="captains"
                        pointType=""
                        captainId={this.state.is_c}
                        viceCaptainId={this.state.is_vc}
                        data={this.props.route.params.newteam.filter(
                          (x) => x.player_desigination == 'Batsman',
                        )}
                      />
                      <GroundViewPlayersList
                        playertype="ALL ROUNDER"
                        screenType="captains"
                        pointType=""
                        captainId={this.state.is_c}
                        viceCaptainId={this.state.is_vc}
                        data={this.props.route.params.newteam.filter(
                          (x) => x.player_desigination == 'All Rounder',
                        )}
                      />
                      <GroundViewPlayersList
                        playertype="BOWLER"
                        screenType="captains"
                        pointType=""
                        captainId={this.state.is_c}
                        viceCaptainId={this.state.is_vc}
                        data={this.props.route.params.newteam.filter(
                          (x) => x.player_desigination == 'Bowler',
                        )}
                      />
                    </ScrollView>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginLeft: 18,
                        marginRight: 18,
                        marginBottom: 12,
                      }}>
                      <View>
                        <Text
                          style={{
                            fontWeight: '400',
                            color: Colors.darkGrey,
                            fontSize: RFValue(10),
                            fontFamily: fonts['DMSans-Medium'],
                          }}>
                          {this.state.teamOneUniqueData.name} (
                          {this.state.team1Count})
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontWeight: '400',
                            color: Colors.darkGrey,
                            fontSize: RFValue(10),
                            fontFamily: fonts['DMSans-Medium'],
                          }}>
                          {this.state.teamTwoUniqueData.name} (
                          {this.state.team2Count})
                        </Text>
                      </View>
                    </View>
                  </ImageBackground>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      backgroundColor: '#262C46',
                      height: 50,
                      width: '100%',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(10, 580),
                          fontFamily: fonts['DMSans-Medium'],
                          fontWeight: '400',
                          color: Colors.highLight,
                        }}>
                        {t('common:availCredit')}
                      </Text>
                      <Text
                        style={{
                          color: Colors.white,
                          fontSize: RFValue(12, 580),
                          fontFamily: fonts['DMSans-Medium'],
                          fontWeight: '500',
                        }}>
                        {' '}
                        CR {100 - this.props.route.params.CR}
                      </Text>
                    </View>

                    <Text
                      style={{
                        color: Colors.white,
                        fontSize: RFValue(10, 580),
                        fontFamily: fonts['DMSans-Medium'],
                        fontWeight: '500',
                      }}>
                      {this.props.route.params.totalplayers} / 11 {t('common:playerSelected')}
                    </Text>
                  </View>
                </View>
              </SafeAreaView>
            </Modal>
          </View>  
          <TransactionModal
      props={this.props}
      amount={this.getAmount.bind(this)}
      walleltSummery={this.state.walletSummry?this.state.walletSummry:0}
      contestfee={this.state.entryFee?this.state.entryFee:0}
      deposit={this.state.deposite?this.state.deposite:0}
      winnings={this.state.winnings?this.state.winnings:0}
      extracash={this.state.bonous_amount?this.state.bonous_amount:0}
      modelVisible={this.state.isModalVisible}
      closeModel={()=>{
        this.closeModal()
      }}
      joinPress={()=>{

       if(this.state.walletSummry>=this.state.entryFee)
       {
        if (this.props.route.params.type === 'jointag') {
          if (this.state.walletSummry != 0) {
            this.saveTeam();
            this.clearAsyncStorage();
          } else {
            Toast.show({
              style: {backgroundColor: Colors.orange},
              text: 'Total Amount is Zero Please Add Cash',
              duration: 1500,
              position: 'Top',
              buttonText: 'Ok',
            });
          }
        } else {
          this.props.navigation.reset({index: 0, routes: [{name: 'contest'}]});
          var teamData = {
            userid: this.props.userSuccess.user_id,
            CaptainId: this.state.is_c,
            ViceCaptainId: this.state.is_vc,
            PlayerList: playerList,
            edit: '0',
          };
          this.clearAsyncStorage();
          this.props.navigation.navigate('contest', {
            jointype: 'letsplay',
            joinTeamData: teamData,
            team1shortname:this.props.route.params.team1shortname1,
            team2shortname:this.props.route.params.team2shortname2,
            Wallet: this.state.walletSummry,
            match_id_c: this.state.matchID,
          });
        } 

        
      }
      else
      {
        if(this.state.money<=0 || this.state.money>200000 || this.state.money=='')
        {
          Toast.show({
            style: {backgroundColor: Colors.orange},
            text: 'Payment could not proceed',
            duration: 3000,
            position:'top'
          });  
        }
        else
        {
        this._startProcess()
        }
      }
       
    }
  


    }
      />
         
         
          <Modal
            testID={'modal'}
            isVisible={this.state.teamSaveModal}
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
                    this.clearAsyncStorage();
                    this.props.navigation.navigate('Home');
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
                  {this.props.route.params.status == 'edit' ||
                    this.props.route.params.status == 'editMyTeam' ||  this.props.route.params.status == 'editselMyTeam'
                    ?  t('common:teamEditMessage')
                    :this.props.route.params.status == 'cloneMyTeam'|| this.props.route.params.status == 'cloneselMyTeam'?t('common:teamCloneMessage'):this.state.responceCode==400?this.state.contestFullError: t('common:teamSavedMessage')}
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
                    if(this.props.route.params.status=='edit' || this.props.route.params.status=='clone'|| this.props.route.params.status =='upcomingPost'){
                      this.clearAsyncStorage();
                      this.props.navigation.navigate('upcommingcontest',{
                        status:'edit',
                        tabSelect:0,
                      });
                    }else if( this.props.route.params.status == 'editMyTeam' || this.props.route.params.status == 'cloneMyTeam'){
                      this.clearAsyncStorage();
                      this.props.navigation.navigate('myTeams');
                     
                    }else if( this.props.route.params.status == 'editselMyTeam' || this.props.route.params.status == 'cloneselMyTeam'){
                      this.clearAsyncStorage();
                      this.props.navigation.navigate('selectMyTeams');
                     
                    }
                    
                    else{  
                      this.clearAsyncStorage();
                        this.props.navigation.navigate('Home');
                    }
                    
                  }}>
                  <Text style={styles.buildteamtagtext}>{t('common:goBack')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  userSuccess:state.userR.userSuccess,
});

const mapDispatchToProps = {
 
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(SelectCaptians));
