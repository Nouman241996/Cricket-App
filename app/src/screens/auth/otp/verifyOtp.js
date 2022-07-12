import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
  Image,
} from 'react-native';
import {Toast,Label} from 'native-base';
import {styles} from './style';
import {Colors} from '../../../../res/style/color';
import {icons,api_link} from '../../../../res/constants';
import {fonts} from '../../../../res/style/fonts';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {tinyToastSerive} from '../../../utills/Toast';
import {authApiSerive} from '../../../utills/authServices';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUSERApi} from '../../../redux/actions/userAction'
import CountDown from '../../../component/countComponent/countdown'
const {width, height} = Dimensions.get('window');

const VerifyOtp = (props) => {
  const [mobileNo, setMobileNo] = useState('');
  const [code, setCode] = useState('');
  const [code1, setCode1] = useState('******');
  const [focus, setFocus] = useState(true);
  const [codeVal, setCodeVal] = useState(false);
  const [counterStar, setCounterStart] = useState('179')
  const dispatch = useDispatch();
async function verify(code){
  if (!code) {
    setCodeVal(true);
  } else {
   
  tinyToastSerive.showLoadingToast('Verifying Code');
  var rawData;
  if(props.route.params.type=='signup'){

    rawData = {
      mobile:props.route.params.data.mobile,
      mobiletoken: props.route.params.data.mobiletoken,
      email:props.route.params.data.email,
      password: props.route.params.data.password,
      type:props.route.params.type,
      otp: code,
      
    }
  }else{

  
       rawData = {
        user_id:props.route.params.data.user_id,
        type:props.route.params.type,
        mobile: props.route.params.phoneNumber ,
        otp: code,
        
      }
    }

    console.log('raw data is:',rawData)
      authApiSerive.authApiClass(api_link.numberVarify,rawData).then(async(res) => {
        var dataJson = JSON.parse(res);
        // console.log('raw data',rawData)
        // console.log('otp status is:', dataJson);
        tinyToastSerive.hideToast()
        if(dataJson.message==='Number verification not done'){
          Toast.show({
            style: {backgroundColor: Colors.black},
            text: dataJson.message,
            duration: 2000,
            position: 'Top',
          });
        }else{ 

          if(props.route.params.type=='signup'){

            await AsyncStorage.setItem('@userDataAsync', JSON.stringify(dataJson.data));
            dispatch(fetchUSERApi(dataJson.data))
          props.navigation.navigate('mainPage');
          tinyToastSerive.hideToast()

          }else{

            await AsyncStorage.setItem('@userDataAsync', JSON.stringify(props.route.params.data));
            dispatch(fetchUSERApi(props.route.params.data))
          props.navigation.navigate('mainPage');
          tinyToastSerive.hideToast()
          }

         
      }
    

    });

  
  }
}


async function resentOtp() {
  tinyToastSerive.showLoadingToast('Recending OTP');
  var rawData = {
    user_id:props.route.params.data.user_id,
  }
  authApiSerive.authApiClass(api_link.resentOtp,rawData).then(async(res) => {
    var dataJson = JSON.parse(res);
    console.log('raw data',dataJson)
    if(dataJson.message=='Otp send successfully'){
      Toast.show({
        style: {backgroundColor: Colors.greendark},
        text: dataJson.message,
        duration: 2000,
        position: 'Top',
      });
      setCounterStart(179)
      tinyToastSerive.hideToast()
     

    }else{

      tinyToastSerive.hideToast()
      Toast.show({
        style: {backgroundColor: Colors.themeDarkRed},
        text: dataJson.message,
        duration: 2000,
        position: 'Top',
      });
    }
  
});

}

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground source={icons.logbackground} style={styles.image}>
          <View style={styles.centerView}>
            <View style={styles.buttonView}>
              <View style={{marginTop: 20}}>
                <Text
                  style={[
                    styles.TextStyle,
                    {color: Colors.bluedark, marginBottom: 10},
                  ]}>
                  Verify Phone
                </Text>
                <Text
                  style={[
                    styles.TextBasicStyle,
                    {color: Colors.basicBlue, marginBottom: 10},
                  ]}>
                  Code is sent to {props.route.params.phoneNumber}
                </Text>

                <View style={styles.verifyCode}>
                  <SmoothPinCodeInput
                    placeholder={
                      Platform.OS == 'ios' ? (
                        <Text
                          style={{
                            width: 10,
                            height: 16,
                            opacity: 0.3,
                          }}>
                          *
                        </Text>
                      ) : null
                    }
                    animated={false}
                    animationFocused={null}
                    containerStyle={[
                      {
                        margin: 10,
                        backgroundColor: Colors.white,
                        borderTopLeftRadius: code.length == 0 ? 25 : 0,
                        borderBottomLeftRadius: code.length == 0 ? 25 : 0,
                        borderTopRightRadius: code.length == 5 ? 25 : 0,
                        borderBottomRightRadius: code.length == 5 ? 25 : 0,
                      },
                    ]}
                    value={code}
                    autoFocus={focus}
                    codeLength={4}
                    cellSpacing={20}
                    cellSize={width / 9}
                    cellStyle={{
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      borderWidth: 2,
                      borderColor: Colors.Courseborder,
                      backgroundColor: Colors.white,
                    }}
                    cellStyleFocused={{
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      borderWidth: 2,
                      borderColor: Colors.orange,
                    }}
                    textStyle={styles.code}
                    textStyleFocused={styles.newFonts}
                    onTextChange={(code) => {
                      setCode(code)
                      console.log("code length is:",code.length)
                      if(code.length==4){
                        verify(code)
                      }  
                    setCodeVal(false)}}
                  />
                  {codeVal ? (
                  <Text
                    style={{
                      marginTop: 4,
                      fontFamily: fonts['DMSans-Regular'],
                      fontSize: 12,
                      color: Colors.absent,
                    }}>
                    * Please Enter Valid code
                  </Text>
                ) : null}
                </View>


                <CountDown
                                size={20}
                                until={counterStar}
                                digitStyle={{ backgroundColor: '#FFF', }}
                                digitTxtStyle={{ color: Colors.NewBackgroundColor }}
                                timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
                                separatorStyle={{ color: Colors.NewBackgroundColor }}
                                timeToShow={['M', 'S']}
                                timeLabels={{ m: null, s: null }}
                                showSeparator
                            />
                            <View style={{ marginTop: 20, marginBottom: 100 }}>
                                <Label style={[styles.placeholderText, { textAlign: 'center' }]}>
                                    Don't receive The OTP?
                            </Label>
                                <TouchableOpacity
                                    style={{
                                        marginTop: 15,
                                    }}
                                    onPress={() => { resentOtp() }}
                                >
                                    <Label style={[styles.text1, { textAlign: 'center', marginTop: 7 }]}>
                                        Resend OTP
                                </Label>
                                </TouchableOpacity>
                            </View>

                {/* <TouchableOpacity
                  style={{marginBottom: 10, marginTop: 20}}
                  onPress={() => {}}>
                  <Text
                    style={[styles.TextBasicStyle, {color: Colors.bluedark}]}>
                    Have a Referal Code ?{' '}
                    <Text style={[styles.TextBasicStyle]}>Enter Code</Text>
                  </Text>
                </TouchableOpacity> */}

{/* verify button code */}

                {/* <View style={{marginTop: 25}}>
                  <LoginButton
                    text={'Verify'}
                    buttonColor={Colors.orange}
                    onPress={() => {
                      verify()
                      
                    }}
                  />
                </View> */}



              </View>

              {/* <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  marginBottom: 36,
                }}
                onPress={() => {}}>
                <Text
                  style={[
                    styles.TextBasicStyle,
                    {
                      marginTop: 30,
                      marginBottom: 20,
                      textDecorationColor: Colors.orange,
                      textDecorationLine: 'underline',
                      textAlign: 'center',
                    },
                  ]}>
                  Login Using Email
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </ImageBackground>

        {/* <View style={styles.footer}>
<ImageBackground source={icons.logbackground} style={styles.image}>
    </ImageBackground>
      </View> */}
      </View>
    </SafeAreaView>
  );
};
export default VerifyOtp;
