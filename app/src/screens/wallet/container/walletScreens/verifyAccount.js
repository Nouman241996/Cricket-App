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
import {postApiSerive} from '../../../../utills/postDataService'

import { styles } from './style';
import MainHeader from '../../../../component/mainHeaderComponent/Mainheader'
import TotalBalance from '../../components/totalBalance/totalBalance'
import AmountCard from '../../components/amountCards/amountCard'
import InfoSvg from '../../../../../res/images/svg/infosvg'
import ArrowLeftSvg  from '../../../../../res/images/svg/arrowLeftSvg'
import CustomButton from '../../../../component/widgets/button/button'
import { Colors } from '../../../../../res/style/color'
import {api_link} from '../../../../../res/constants'
import {getApiSerive} from '../../../../utills/getDataService'
import { SafeAreaView } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import CrossSvg from '../../../../../res/images/svg/cross';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { fonts } from '../../../../../res/style/fonts'
//import { tinyToastSerive } from '../../../../utills/Toast'
import {Col, Toast} from 'native-base';
import { tinyToastSerive } from '../../../../utills/Toast';
const accountStatus='1'
import analytics from '@react-native-firebase/analytics';
import MainHeaderFromDrawer from '../../../drawerContent/component/header/header'
const VerifyAccount = (props) => {
  const {type}=props.route.params;

  const [totalAmount,setTotalAmount]=useState('')
  const [winningAmount,setWinningAmount]=useState('')
  const [bonusAmount,setBonusAmount]=useState('')
  const [creditAmount,setCreditAmount]=useState('')
  const [isLoad,setIsLoad]=useState(false)
  const [isVerified,setIsVerified]=useState(0)
  const [referalCode,setReferalCode]=useState('')
  const [isModalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [withDrawAmount, setWithDrawAmount]=useState('')
  const [withDrawError,setWithDrawError]=useState(false)

  const userData = useSelector(
    (state) => state.userR.userSuccess,
  );
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = React.useCallback(() => {
   
    setRefreshing(true);
    getApiSerive
    .getApiClass(
      api_link.walletAmountApi+userData.user_id,
    )
    .then((res) => {
      
    
      setTotalAmount(res.data.total_amount)
      setWinningAmount(res.data.winning_amount)
      setBonusAmount(res.data.bonous_amount)
      setCreditAmount(res.data.credit_amount)
    
      setIsLoad(true)
    });
    wait(1000).then(() => setRefreshing(false));
  }, []);
  

  const getWalletDataFromApi=()=>{
    const currentDate = new Date();
const timestamp = currentDate.getTime();
    getApiSerive
    .getApiClass(
      api_link.walletAmountApi+userData.user_id+'&v='+timestamp,
    )
    .then((res) => {
     
      setTotalAmount(res.data.total_amount)
      setWinningAmount(res.data.winning_amount)
      setBonusAmount(res.data.bonous_amount)
      setCreditAmount(res.data.credit_amount)
      setReferalCode(res.data.referral_code)
     
      setIsLoad(true)
      if(res.data.email_status =='1' && res.data.is_pan_verify=='4' && res.data.is_bank_verify=='4' && res.data.mobile_status=='1'){
       
        setIsVerified(1)
      }
      else{
        setIsVerified(0)
      }
    });

  }
  useEffect(
    () => {
      
       
        analytics().logEvent('wallet', {       
        description: "wallet opened by user"
        })
    getWalletDataFromApi()
      const focusListener = props.navigation.addListener('focus', () => {
       
         
      getWalletDataFromApi()
         
        });
    
        //setIsLoading(true);   
        // props.route.params.match_id_c
    
        
        
      }, []);
 
      const toggleModal = () => {
        setModalVisible(!isModalVisible);
       
      }
  const recentTransactions=()=>{

    return(
      <View style={styles.recentTransactionContainer}>
          <TouchableOpacity 
           onPress={()=>{
            props.navigation.navigate('RecentTransactions')
          }} 
          style={{flexDirection:'row', justifyContent:'space-between',marginTop:18,marginLeft:18,marginRight:18, marginBottom:18, alignItems:'center'}}>
              <Text style={styles.transactionText}>MY RECENT TRANSACTIONS</Text>
              <ArrowLeftSvg />
          </TouchableOpacity>
         
      </View>
    )
  }

  const referAndEarnButton=()=>{
    return(
    
          <View  style={{flexDirection:'row', justifyContent:'center',marginTop:18, marginBottom:18, }}>
             <CustomButton 
             text={'REFER AND EARN'}
             color={Colors.blue}
             textColor={Colors.white}
             widthButton='40%'
             onPress={()=>{
               props.navigation.navigate('ReferFriend',{refCode:referalCode})
             }}
             />
        
         
          </View>
         
    
    )

  }
  const postWithdrawAmount=()=>{
    //tinyToastSerive.showLoadingToast('Adding cash...')
   
    if(withDrawAmount<=0)
    {
     
      setWithDrawError(true)
    }
    else{ postApiSerive.postApiClass(api_link.postWithdrawAmountApi,{"user_id":userData.user_id ,"amount": withDrawAmount}).
    then((res) => {
      const parseData=JSON.parse(res)
   
      toggleModal()
      setWithDrawAmount('')
      getWalletDataFromApi()
     
      //tinyToastSerive.hideToast()
      Toast.show({
        style: {backgroundColor: Colors.orange},
        text: parseData.message,
        duration: 3000,
        position:'bottom'
      });
     });
    }
   
  
  }


return(

    <SafeAreaView style={styles.container}>
        
        {type=="drawer"? <MainHeaderFromDrawer 
         navigation={props.navigation}
         screenName={'WALLET'}
        />:
        <MainHeader 
        navigation={props.navigation}/> }
        
        <ScrollView
         refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        contentContainerStyle={{paddingBottom: 60}}
        >
          
          <TotalBalance 
            navigation={props.navigation}
            amount={totalAmount}
            loader={isLoad}

          />
          
          <AmountCard 
          title={'DEPOSIT'} 
          amount={creditAmount}
          icon={<InfoSvg />}
          loader={isLoad}
          toolTipText={'Deposit'}
          />
         
          <AmountCard 
          title={'WINNINGS'} 
          amount={winningAmount}   
          verified={isVerified}   
          navigation={props.navigation}
          verifyHeading={'Verify account to withdraw'}
          verifySubheading={'VERIFY ACCOUNT'}
          icon={<InfoSvg />}
          loader={isLoad}
          toolTipText={'Winning'}
          actionOnpress={()=>{toggleModal()}}
          />
         
          <AmountCard 
          title={'BONUS'} 
          amount={bonusAmount}
          icon={<InfoSvg />}
          loader={isLoad}
          toolTipText={'Bonus'}
          />
          {recentTransactions()}
          {referAndEarnButton()}
         
          </ScrollView>

          <Modal
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          margin: 0,
        }}
        onBackButtonPress={() => {setModalVisible(false),setWithDrawError(false)}}
        onBackdropPress={() => {setModalVisible(false),setWithDrawError(false)}}
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => {toggleModal(),setWithDrawError(false)}}
        hardwareAccelerated
      >

        <View style={styles.ViewBackground}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity

              onPress={() => toggleModal()}>
              <CrossSvg height={20} width={20}></CrossSvg>
            </TouchableOpacity>
          </View>
         
          <>
          <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
            <Text style={{ fontSize: RFValue(16, 580), fontFamily: fonts['DMSans-Bold'] }}>
          Enter withdraw Amount
                </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
              <TextInput
            style={styles.input}
            onChangeText={(text) => {setWithDrawAmount(text), setWithDrawError(false)}}
            value={withDrawAmount}
            placeholder="Enter Amount"
            keyboardType="number-pad"
          />
          
          </View>
          {withDrawError?  <Text style={{ fontSize: RFValue(9, 580), fontFamily: fonts['DMSans-Bold'] ,color:Colors.basicRed}}>
          Withdraw amount should be greater than 0 !
                </Text>:null}
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop:20,marginBottom:10}}>
          <CustomButton 
             text={'WITHDRAW Amount'}
             color={Colors.orange}
             textColor={Colors.white}
             widthButton='60%'
             onPress={()=>{postWithdrawAmount()}}
            
             />
        
          </View>
          </>
          
         
        </View>

      </Modal>

 
    </SafeAreaView>
)

}
export default VerifyAccount;