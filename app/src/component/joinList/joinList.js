import React, { Component } from 'react'
import {

  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Touchable,
  ActivityIndicator,
  FlatList


} from 'react-native';
import { icons, api_link } from '../../../res/constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { styles } from './style'
import { widthPercentageToDP, heightPercentageToDP } from '../React Native Responsive Screen'
import { Colors } from '../../../res/style/color'
import { fonts } from '../../../res/style/fonts'
import { globalStyles } from '../../../res/style/appStyle'
import { Toast } from 'native-base';
import PriceArrowSvg from '../../../res/images/svg/priceArrow.svg'
import { postApiSerive } from '../../utills/postDataService'
import {getApiSerive} from '../../utills/getDataService'
import { tinyToastSerive } from '../../utills/Toast'
import Modal from 'react-native-modal';
import CrossSvg from '../../../res/images/svg/cross';
import PeopleSvg from '../../../res/images/svg/peoplesvg';
import StarSvg from '../../../res/images/svg/starsvg';
import WinnerSvg from '../../../res/images/svg/winnersvg';
import InfoSvg from '../../../res/images/svg/infosvg'
import Tooltip from 'react-native-walkthrough-tooltip';
import SaveTrophySvg from '../../../res/images/svg/savetrophy';
import TransactionModal from '../../component/modal/transactionModal'
import RNPgReactNativeSDK from 'react-native-pg-react-native-sdk'
import { withTranslation } from 'react-i18next';
class JoinListTag extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      contestId: '',
      saveData: '',
      entryfee:'',
      prizeWinning: '',
      // isInfoModalVisible: false,
      rawState:'',
      clicked:false,
      walletSummry:'',
      Mod:false,

      toolTipVisible:false,
      toolTipId:'',
      teamSaveModal: false,

      responseText:'',
      resToken:'',
      cashFreeLoader:true,
      cashFreeResult:'',
      cashFreeStatus:'',
      money:''
    }


  }
  getAmount=(money)=>{
    this.setState({money:money})
   
  }
  startPayment=(cfToken,orderId,money,apiKey,env)=> {
    this.closeModal()
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
   //working till here
   try{
   RNPgReactNativeSDK.startPaymentWEB(map, env,(result) => 
   {
    
     var res= JSON.parse(result)
     if(res.txStatus=="SUCCESS")
     {
       this.setState({cashFreeLoader:false,cashFreeResult:res})
       // setLoader(false)
       // setCashFreeResult(res);
       // setAddedAmount('');
       //console.log("obj : ",cashFreeResult)
       //console.log("api :", api_link.addCashApi,{"mode":"Cashfree","user_id":userData.user_id ,"amount": addedAmount, "transaction_detail":{"txStatus":res.txStatus,"txMsg":res.referenceId}} )
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
    //this.myAccount()
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
  closeModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };


  toggleModal = (item) => {
     console.log("total ammount is:",this.props.walletSummry)

    if (this.props.walletSummry != 0) {
      this.setState({ isModalVisible: !this.state.isModalVisible, saveData: item, entryfee: item.entry, prizeWinning: item.firstprize, walletSummry:this.props.walletSummry, });

    } else {
      this.setState({saveData: item, entryfee: item.entry, prizeWinning: item.firstprize, walletSummry:this.props.walletSummry, });
      Toast.show({
        style: { backgroundColor: Colors.orange },
        text: 'Total Amount is Zero Please Add Cash',
        duration: 1000,
        position: 'Top',
        buttonText: 'Ok',
      });


      setTimeout(() => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
      }, 1200);


    }


  };


  saveTeam = (data) => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    tinyToastSerive.showLoadingToast('Save Team')
    var teamData = { "matchid": data.match_id, "userid": "9", "CaptainId": this.props.joinTeamData.CaptainId, "ViceCaptainId": this.props.joinTeamData.ViceCaptainId, "PlayerList": this.props.joinTeamData.PlayerList, "edit": "0" }
    postApiSerive.postApiClass(api_link.saveteam, teamData).then((res) => {
      var dataJson = JSON.parse(res)
      // console.log("team post succes message",  dataJson.data.match_id)

      // tinyToastSerive.hideToast()
      if (dataJson.status === "success") {



        //here we call join team
        tinyToastSerive.hideToast()
        this.jointeam(dataJson.data.match_id, dataJson.data.id, data.contest_id, data.entry,data)

      } else {
        tinyToastSerive.hideToast()
      }

    })
  }

  jointeam = (item) => {
    console.log("data from captain screen:",this.props.joinTeamData)
    this.setState({isModalVisible: !this.state.isModalVisible});
    tinyToastSerive.showLoadingToast('Joining Team');
    var raw = {
      user_id: this.props.user_id,
      match_id: this.props.joinTeamData.match_id,
      my_team_id: this.props.joinTeamData.id,
      contest_id: item.contest_id,
      contest_amount: item.entry,
      private: '0',
    };

// console.log("raw data is:",raw)

    postApiSerive.postApiClass(api_link.joincontestapi, raw).then((res) => {
      // console.log("team post succes message",res)
      var parseData=JSON.parse(res)
      if(parseData.responsecode==200){
      this.contetsFullRequestApi(item,parseData);
      }else if(parseData.responsecode==400){
        tinyToastSerive.hideToast()
        Toast.show({
          style: {backgroundColor: Colors.orange},
          text: parseData.message,
          position:'bottom',
          duration: 3000,
        });
      }
      else{
        tinyToastSerive.hideToast()
        Toast.show({
          style: {backgroundColor: Colors.red},
          text: parseData.message,
          duration: 3000,
          position: 'Top',
        });
      }


    });
  };



  fethPrize = (item) => {
    tinyToastSerive.showLoadingToast('Joining...')
    getApiSerive
      .getApiClass(api_link.prizeapi + 'contest_id=' + item.contest_id)
      .then((res) => {
      // console.log('first tab result is:', res.winning_information)
      var raw={
        "prizeBreakup":res.winning_information,
        "contestData":item
        
      }
    
      this.setState({rawState:raw})
      tinyToastSerive.hideToast()
      this.setState({clicked:false})



      if (this.props.jointype == 'home') {


        if(this.props.totalTeamCount>0){
          if(this.props.walletSummry>0){
            this.props.navigation.navigate('selectMyTeams',{
              match_id_c:this.props.matchid_1,
              teamname1: this.props.team1shortname,
              teamname2: this.props.team2shortname,
              raw:raw,
              item:item
            })
          }else{

            Toast.show({
              style: {backgroundColor: Colors.orange},
              text: 'Total Amount is Zero Please Add Cash',
              duration: 2000,
              position: 'Top',
            });
          }
        }else{


        if (item.contest_type == 'not_confirm') {
          this.props.navigation.navigate('Teambuild', {
            matchid_1: this.props.matchid_c,
            contestid: item.contest_id,
            contestdata: item,
            contesttag: item.contest_tag,
            rawData:raw,
            type: "jointag",
            status:'post',

          })
        } else if (item.contest_type == 'confirm') {
          this.props.navigation.navigate('Teambuild', {
            matchid_1: this.props.matchid_c,
            contestid: item.contest_id,
            contesttag: item.contest_tag,
            contestdata: item,
            rawData:raw,
            type: "jointag",
            status:'post',

          })
        }

      }

      }
      else if (this.props.jointype == 'letsplay') {
        // console.log('type is lets play')
        this.setState({ contestId: item.contest_id })
        this.toggleModal(item)
      }






    

       

    
      });
  };





  contetsFullRequestApi=(item,res)=>{

        tinyToastSerive.hideToast();
          this.teamSaveToggleModal();
  };


  teamSaveToggleModal = () => {
    this.setState({teamSaveModal: !this.state.teamSaveModal});
  };


  moneyFormat(price, sign = '₹') {
    const pieces = parseFloat(price).toFixed(2).split('')
    let ii = pieces.length - 3
    while ((ii-=3) > 0) {
      pieces.splice(ii, 0, ',')
    }
    return sign + pieces.join('')
  }






  teamdataContent = (item) => {
    const { t } = this.props;

    return (
      <View
      style={styles.leaugecontainer}
      >


<TouchableOpacity onPress={() => {

this.props.navigation.navigate('ContestDetails', {

  team1shortname1: this.props.team1shortname,
  team2shortname2: this.props.team2shortname,
  contestdata: item,
  matchid_c: this.props.matchid_c,


})
}





}
 activeOpacity={.9} >
<View style={styles.containerJoinView}>

  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <View>
    <Text style={{ fontSize: RFValue(10, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Bold'], }}>{t('common:prizePool')}</Text>
    </View>
    <View>
    <Text style={{ fontSize: RFValue(16, 580), color: Colors.orange, fontFamily: fonts['DMSans-Medium'], }}> ₹{item.prize_pool} </Text>

    </View>
  </View>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>

     {(item.total_team - item.join_team) <= 0 || item.remain_to_join<=0 || item.firstprize<=0 ? null : <TouchableOpacity
      disabled={(item.total_team - item.join_team) <= 0 ? true : false}
      onPress={() => {
        this.fethPrize(item)
      }}
      style={styles.jointag}>

      {this.state.clicked ?
        <ActivityIndicator
          color={Colors.orange}
          style={{ height: '10%', width: 20 }}
        />
        :
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={{ color: Colors.white, fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Medium'], fontWeight: '500' }}>{t('common:join')} </Text>
        <Text style={{ color: Colors.white,fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Bold'], }}>₹{item.entry}</Text>
      </View>
      }
    </TouchableOpacity>
    }
  </View>

</View>
<View style={styles.prizePoolView}>
  <View>
  <Text style={{ fontSize: RFValue(10, 580), color: Colors.grayMedium, fontFamily: fonts['DMSans-Medium'], }}>{(item.total_team - item.join_team)} {t('common:spotLeft')}</Text> 
  </View>
  <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center' }}>
            <Text style={{ fontSize: RFValue(10, 580), color: Colors.grayMedium, fontFamily: fonts['DMSans-Medium'], }}> {item.total_team} {t('common:spots')} </Text>

          </View>
</View>
<View style={styles.barView}>
  <Text style={[styles.bar, { width: parseFloat((item.join_team / item.total_team) * 100) > 100 ? '100%' : parseFloat((item.join_team / item.total_team) * 100) + '%' }]}>.</Text>

</View>
</TouchableOpacity>
<View style={styles.imagesView}>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <PeopleSvg />
    <Text style={{ marginLeft: 3, fontSize: RFValue(8, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Medium'], }}>{item.max_team == 1 ? t('common:singleEntry') : t('common:upTo') +' '+ item.max_team +' '+ t('common:teams')}</Text>
  </View>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <StarSvg />
    <Text style={{ marginLeft: 3, fontSize: RFValue(8, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Medium'], }}>₹{item.firstprize == null ? 0 : item.firstprize} {t('common:topPrize')}</Text>
  </View>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <WinnerSvg />
    <Text style={{ marginLeft: 3, fontSize: RFValue(8, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Medium'], }}>{item.win+ '% '+t('common:winners')}</Text>
  </View>

  {item.contest_type=='confirm'?  
          <View style={{ flexDirection: 'row',  }}>
             <Tooltip
             contentStyle={{backgroundColor:Colors.darkGrey}}
            isVisible={this.state.toolTipId==item.contest_id?this.state.toolTipVisible:false}
            content={<Text style={{color:Colors.white,fontFamily: fonts['DMSans-Medium']}}>{item.contest_type=='confirm'? t('common:cToolTipText')
            :t('common:ucToolTipText')}</Text>}
            placement="top"
            onClose={() => this.setState({ toolTipVisible: false })}
          >
            
          <TouchableOpacity 
           onPress={() => 
            this.setState({toolTipId:item.contest_id,toolTipVisible:!this.state.toolTipVisible })
          }
          style={{  alignItems: 'center', backgroundColor:Colors.confirmLight,borderRadius:50,height:20,width:20,justifyContent:'center',alignContent:'center' }}>
                      <Text style={{ fontSize: RFValue(8, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Medium'], }}>{t('common:confirmTag')}</Text>
                      </TouchableOpacity>
          </Tooltip>
        
            </View>:
           <View style={{ flexDirection: 'row',  }}>

<Tooltip
             contentStyle={{backgroundColor:Colors.darkGrey}}
            isVisible={this.state.toolTipId==item.contest_id?this.state.toolTipVisible:false}
            content={<Text style={{color:Colors.white,fontFamily: fonts['DMSans-Medium']}}>{item.contest_type=='confirm'
            ?  t('common:cToolTipText')
            :  t('common:ucToolTipText')}</Text>}
            placement="top"
            onClose={() => this.setState({ toolTipVisible: false })}
          >
            
          <TouchableOpacity 
           onPress={() => 
            this.setState({toolTipId:item.contest_id,toolTipVisible:!this.state.toolTipVisible })
          }
          style={{  alignItems: 'center', backgroundColor:Colors.confirmLight,borderRadius:50,height:20,width:20,justifyContent:'center',alignContent:'center' }}>
                     <Text style={{ fontSize: RFValue(8, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Medium'], }}>{t('common:unConfirmTag')}</Text>
                      </TouchableOpacity>
          </Tooltip>
        

      </View>
          }
          
 
  <View style={{ flexDirection: 'row', alignItems: 'center', }}>
    <Text style={{ marginRight: 5, fontSize: RFValue(8, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Medium'], }}></Text>
  </View>

</View>


      </View>


    )
  }


  render() {

    const { t } = this.props;

    return (
      <View>
        <FlatList
          vertical={true}
          showsHorizontalScrollIndicator={false}
          data={this.props.data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 5, }}
          renderItem={({ item, index }) => {
            return (
              <View>
             {this.teamdataContent(item)}
              </View>
    
            );
          }}
          ListEmptyComponent={() =>
            <View

              activeOpacity={10}>
              <Text style={styles.stauts}>{t('common:noContestMessage1')}</Text>
              <Text style={styles.stautsNext}>{t('common:noContestMessage2')}</Text>
            </View>

          }
          enableEmptySections={true}
          keyExtractor={(item, index) => index.toString()}
        />



        <Modal
          testID={'modal'}
          isVisible={this.state.Mod}
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            margin: 0,
        }}>
          <View
            style={styles.ViewBackground}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end',marginTop:-10 }}>
              <TouchableOpacity
                onPress={() => this.closeModal()}>
                <CrossSvg height={25} width={25}></CrossSvg>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ fontSize: RFValue(14, 580), fontFamily: fonts['DMSans-Bold'], }}>
                Confirm Your Team
                </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: '4%',
              }}>
              <Text
                style={{
                  fontSize: RFValue(14, 580),
                  fontFamily: fonts['DMSans-Bold'],
                  color: Colors.grayMedium,
                }}>
                Entry Fee
                </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: '2.0%',
              }}>
              <Text style={{ fontSize: RFValue(14, 580), fontFamily: fonts['DMSans-Bold'], }}>
                ₹ {this.state.entryfee?this.state.entryfee:0}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: '3.0%',
              }}>
             <View style={{ flexDirection: 'row', width: '80%' }}>
              <Text style={styles.seperatorStyleModal}>.</Text>
            </View> 
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: '3.0%',
              }}>
              <Text
                style={{
                  fontSize: RFValue(14, 580),
                  fontFamily: fonts['DMSans-Bold'],
                  color: Colors.grayMedium,
                }}>
                Your Wallet Summary
                </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: '2.0%',
              }}>
              <Text style={{ fontSize: RFValue(10, 580), paddingRight: 5 }}>
                Total Balance
                </Text>
              <Text style={{ fontSize: RFValue(14, 580), fontFamily: fonts['DMSans-Bold'], }}>
              {this.state.walletSummry?this.moneyFormat(this.state.walletSummry):'₹' + 0}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: '2.0%',
              }}>
              <TouchableOpacity style={styles.buildteamtag}
               onPress={()=>{this.closeModal(),this.props.navigation.navigate('addCash',{
                totalAmount:this.state.walletSummry
              })}}
              >
                <Text style={styles.buildteamtagtext}>ADD CASH</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: '3%',
              }}>
              <View style={{ flexDirection: 'row', width: '80%' }}>
              <Text style={styles.seperatorStyleModal}>.</Text>
            </View> 
            </View>
            {/* {this.state.prizeWinning ? */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: '2.0%',
                }}>
                <Text
                  style={{
                    fontSize: RFValue(14, 580),
                    fontFamily: fonts['DMSans-Bold'],
                    color: Colors.grayMedium,
                  }}>
                  Prize Money
                </Text>
              </View>
              {/* : null} */}
            {this.state.prizeWinning ?
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  marginTop: '2.0%',
                }}>
                <Text style={{ fontSize: RFValue(10, 580), paddingRight: 5 }}>
                  1st Prize
                </Text>
                <Text style={{ fontSize: RFValue(14, 580), fontFamily: fonts['DMSans-Bold'], }}>
                  ₹ {this.state.prizeWinning}
                </Text>
              </View>
              : 
              
              <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: '2.0%',
              }}>
              <Text style={{ fontSize: RFValue(10, 580), paddingRight: 5 }}>
                1st Prize
              </Text>
              <Text style={{ fontSize: RFValue(14, 580), fontFamily: fonts['DMSans-Bold'], }}>
                ₹ 0
              </Text>
            </View>
              
              }
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: this.state.prizeWinning ? '3%' : '2%',
                marginBottom: '5%',
              }}>
              <TouchableOpacity
                onPress={() => {
                  console.log("i am called vcz",this.state.contestId)
                  if (this.state.contestId) {
                    if (this.props.walletSummry != 0) {
                      // console.log("i am called")
                      // this.saveTeam(this.state.saveData);
                      this.jointeam(this.state.saveData)
                    } else {
                      console.log("i am not called")
                      Toast.show({
                        style: { backgroundColor: Colors.orange },
                        text: 'Total Amount is Zero Please Add Cash',
                        duration: 1500,
                        position: 'Top',
                        buttonText: 'Ok',
                      });
                    }
                  }
                }}
                style={styles.buildteamtag}>
                <Text style={styles.buildteamtagtext}>LETS PLAY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

           


        <TransactionModal
      props={this.props}
      amount={this.getAmount.bind(this)}
      walleltSummery={this.state.walletSummry?this.state.walletSummry:0}
      contestfee={this.state.entryfee?this.state.entryfee:0}
      deposit={this.props.deposite?this.props.deposite:0}
      winnings={this.props.winnings?this.props.winnings:0}
      extracash={this.props.bonous_amount?this.props.bonous_amount:0}
      modelVisible={this.state.isModalVisible}
      closeModel={()=>{
        this.closeModal()
      }}
      joinPress={()=>{
        console.log("wallet summery:",this.state.walletSummry,"entry fee is:",this.state.entryfee)
       if(this.state.walletSummry >= this.state.entryfee)
       {
        if (this.state.contestId) {
          if (this.props.walletSummry != 0) {
            //this.saveTeam(this.state.saveData);
            this.jointeam(this.state.saveData)
          } else {
            Toast.show({
              style: {backgroundColor: Colors.orange},
              text: 'Total Amount is Zero Please Add Cash',
              duration: 1500,
              position: 'Top',
              buttonText: 'Ok',
            });
          }

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
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              margin: 0,
          }}>
            <View
             style={styles.ViewBackground}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <TouchableOpacity
                  style={{marginRight: 5, marginTop: 5}}
                  onPress={()=>{ this.props.navigation.navigate('Home');}}>
                  <CrossSvg height={20} width={20}></CrossSvg>
                
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center',marginTop: '5.0%',}}>
                 <SaveTrophySvg/>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5.0%',}}>
                <Text style={{fontSize: RFValue(16, 580), fontFamily: fonts['DMSans-Bold']}}>
                Team Saved Successfully
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: '5.0%',
                }}>
                <TouchableOpacity style={styles.buildteamtag}
                onPress={()=>{ this.props.navigation.navigate('Home');}}
                >
                  <Text style={styles.buildteamtagtext}>GO BACK</Text>
                </TouchableOpacity>

              </View>
               </View>
          </Modal>

     
     
     

      </View>

    )
  }
}
export default  withTranslation()(JoinListTag);