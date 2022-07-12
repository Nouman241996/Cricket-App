import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,

} from 'react-native';
import { styles } from './style';
import MainHeader from '../../../../component/mainHeaderComponent/Mainheader'
import TotalBalance from '../../components/totalBalance/totalBalance'
import AmountCard from '../../components/amountCards/amountCard'
import InfoSvg from '../../../../../res/images/svg/infosvg'
import ArrowLeftSvg from '../../../../../res/images/svg/arrowLeftSvg'
import CustomButton from '../../../../component/widgets/button/button'
import { Colors } from '../../../../../res/style/color'
import BackSvg from '../../../../../res/images/svg/back.svg'
import { SafeAreaView, TabRouter } from 'react-navigation';
import LabelText from '../../../../component/widgets/label/label'
import InputTextBox from '../../../../component/widgets/inputText/inputText'
const BASE_RESPONSE_TEXT = "Response or error will show here.";
import { api_link } from '../../../../../res/constants'
import { postApiSerive } from '../../../../utills/postDataService'
import RNPgReactNativeSDK from 'react-native-pg-react-native-sdk'
import { Col, Toast } from 'native-base';
import Modal from 'react-native-modal';
import CrossSvg from '../../../../../res/images/svg/cross';
import { fonts } from '../../../../../res/style/fonts'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getApiSerive } from '../../../../utills/getDataService'
import HomeSvg from '../../../../../res/images/svg/homewallet.svg'
import { tinyToastSerive } from '../../../../utills/Toast'
import { useDispatch, useSelector } from 'react-redux';
import { color } from 'react-native-reanimated';
const AddCash = (props) => {

  const [responseText, setResponseText] = useState(BASE_RESPONSE_TEXT)
  const { totalAmount } = props.route.params;
  const [addedAmount, setAddedAmount] = useState('')
  const [resToken, setResToken] = useState('')
  const [isModalVisible, setModalVisible] = useState(false);
  const [cashFreeStatus, setCashFreeStatus] = useState('')
  const [cashFreeResult, setCashFreeResult] = useState([])
  const [updatedAmount, setUpdatedAmount] = useState(totalAmount)
  const [loader, setLoader] = React.useState(true);
  const [emptyCash, setEmptyCash] = useState(false)
  const [cashLimit, setCashLimit] = useState(false)
  const userData = useSelector(
    (state) => state.userR.userSuccess,
  );
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }
  const fetchNewAmountData = () => {
    getApiSerive
      .getApiClass(
        api_link.walletAmountApi + userData.user_id,
      )
      .then((res) => {

        setLoader(true)
        setUpdatedAmount(res.data.total_amount)


      });
  }
  function _startProcess(mode) {
    setResponseText(BASE_RESPONSE_TEXT);
    var orderId;

    const apiKey = "835057b01952e633919b4832f50538"; // put your apiKey here
    const apiSecret = "34c51017af661c77fa17a7ee65f9bf72592f9489"; // put your apiSecret here

    const env = "PROD"; // use "TEST" or "PROD"
    var tokenUrl;
    if (env === "PROD") {
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
      
        try {
          cfToken = data.cftoken
        
          setResToken(data.cftoken)
          startPayment(cfToken)
        }
        catch (error) {
          setResponseText(data);
        }
      })


    function startPayment(cfToken) {
     
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
        "color1": Colors.orange,
        "color2": Colors.white,

      }
     
      //working till here
      try {
        RNPgReactNativeSDK.startPaymentWEB(map, env, (result) => {

        
          var res = JSON.parse(result)
          if (res.txStatus == "SUCCESS") {
            setLoader(false)
            setCashFreeResult(res);
            setAddedAmount('');
           postApiSerive.postApiClass(api_link.addCashApi, { "mode": "Cashfree", "user_id": userData.user_id, "amount": addedAmount, "transaction_detail": { "txStatus": res.txStatus, "txMsg": res.referenceId } }).
              then((res) => {

                //res

              });
          }

          fetchNewAmountData()
        
          setCashFreeStatus(res.txStatus)



          tinyToastSerive.showLoadingToast('Adding cash...')

          setTimeout(function () { tinyToastSerive.hideToast() }, 1000)

          setTimeout(function () { setModalVisible(true) }, 1000)
          //setModalVisible(true)





          // Toast.show({
          //   style: {backgroundColor: Colors.green},
          //   text: 'Cash Added',
          //   duration: 3000,
          // });           
          //props.navigation.navigate('VerifyAccount')

          var obj = JSON.parse(result, function (key, value) {
          
            // Do something with the result


          })
        })
      } catch (error) {
        console.log("Error", error)
      }


    }


    var responseHandler = (result) => {
    
      setResponseText(result);
    
      try {
        var output = "";
        var obj = JSON.parse(result, function (key, value) {
          if (key !== "") {
            output = output + key + " : " + value + "\n"
          }

        });
        setResponseText(output);
     
      }
      catch (error) {
        //
      }
    }

  }

  const saveAddedCash = () => {
    setEmptyCash(false)
    if (addedAmount == '' || addedAmount > 200000) {
      if (addedAmount > 200000) {
        // Toast.show({
        //   style: {backgroundColor: Colors.orange},
        //   text: 'Amount cannot exceed INR 200000',
        //   duration: 3000,
        // });
        setCashLimit(true)
      }
      else {
        // Toast.show({
        //   style: {backgroundColor: Colors.orange},
        //   text: 'Please add amount...',
        //   duration: 3000,
        // });
        setEmptyCash(true)
      }

    }
    else {
      _startProcess("UPI")
    }


  }
  const mainheader = () => {
    return (
      <View style={styles.mainheader}>
        <TouchableOpacity
          onPress={() => { props.navigation.goBack() }}
        >
          <BackSvg
            style={styles.backBtn}
            height={15} width={15}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          ADD CASH
        </Text>
        <Text>

        </Text>
      </View>
    )
  }
  const addCashFromButtons = (cash) => {
    setAddedAmount(cash)

  }
  const cashCards = (cash) => {
    return (
      <TouchableOpacity
        onPress={() => { addCashFromButtons(cash), setEmptyCash(false), setCashLimit(false) }}
        style={styles.cashCards}>
        <Text
          style={styles.cashText}
        >₹{cash}</Text>
      </TouchableOpacity>
    )
  }

  const addCashButton = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 18, marginBottom: 18, }}>
        <CustomButton
          text={'ADD CASH'}
          color={Colors.orange}
          textColor={Colors.white}
          widthButton='90%'
          onPress={() => { saveAddedCash() }}
        />


      </View>
    )
  }

  return (

    <SafeAreaView style={styles.container}>

      {mainheader()}
      <ScrollView>

        <TotalBalance
          screenType={'addcash'}
          amount={updatedAmount}
          loader={loader}
        />
        <View style={styles.inputView}>
          <LabelText
            text={'AMOUNT TO ADD'}
          />
          <InputTextBox

            placeholdertext={'ADD CASH'}
            value={addedAmount}
            onChangeText={(text) => { setAddedAmount(text.replace(/[^0-9]/g, '')), setEmptyCash(false), setCashLimit(false) }}
            Typetext={'numeric'}
            length={6}
            borderCol={emptyCash || cashLimit ? Colors.basicRed : Colors.darkGrey}

          />
        </View>
        {emptyCash ? <LabelText
          text={'Please Add Amount'}
        /> : null}
        {cashLimit ? <LabelText
          text={'Amount Cannot Exceed INR 200000'}
        /> : null}

        <View style={styles.cashView}>
          {cashCards('200')}
          {cashCards('500')}
        </View>
        {addCashButton()}
      </ScrollView>
      <Modal
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          margin: 0,
        }}
        onBackButtonPress={() => { setModalVisible(false), props.navigation.goBack() }}
        onBackdropPress={() => { setModalVisible(false), props.navigation.goBack() }}
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => toggleModal()}
        hardwareAccelerated
      >

        <View style={styles.ViewBackground}>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity

              onPress={() => { toggleModal(), props.navigation.goBack() }}>
              <CrossSvg height={20} width={20}></CrossSvg>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <HomeSvg />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 12, }}>
            <Text style={{ fontSize: RFValue(14, 580), fontFamily: fonts['DMSans-Bold'] }}>
              Payment Confirmation
            </Text>
          </View>


          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8, marginBottom: 5, }}>

            <Text style={{ fontSize: RFValue(12, 580), fontFamily: fonts['DMSans-Medium'] }}>
              {cashFreeStatus == "SUCCESS" ? "Paymend Added Succesfully" : "Paymend could not process"}

            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8, marginBottom: 5, }}>
            <CustomButton
              text={'Back'}
              color={Colors.orange}
              textColor={Colors.white}
              widthButton='25%'
              onPress={() => { toggleModal(), props.navigation.goBack() }}
            />

          </View>
        </View>

      </Modal>


    </SafeAreaView>
  )

}
export default AddCash;