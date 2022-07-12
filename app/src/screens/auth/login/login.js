import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking
} from 'react-native';
import {styles} from './style';
import {Colors} from '../../../../res/style/color';
import {icons,api_link} from '../../../../res/constants';
import {tinyToastSerive} from '../../../utills/Toast';
import LoginLogo from '../../../../res/images/svg/loginlogo';
import LoginButton from '../../../component/widgets/loginButton/loginButton';
import {fonts} from '../../../../res/style/fonts';
import {Toast} from 'native-base';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {authApiSerive} from '../../../utills/authServices';
import {useDispatch, useSelector} from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { Flow  } from 'react-native-animated-spinkit'
import Modal from 'react-native-modal';
import { getApiSerive } from "../../../utills/getDataService";
import analytics from '@react-native-firebase/analytics';
import PasswordShowSvg from '../../../../res/images/svg/passwordShowSvg';
import { postApiSerive } from '../../../utills/postDataService';

const login = (props) => {
  const isFocused = useIsFocused();
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [maintinanceModal,setMaintenanceModal]=useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [loginMobile, setLoginMobile] = useState('');

  const [signupMobile, setSignupMobile] = useState('');

  const [mobileNoVal, setMobileNoVal] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [phoneVal, setPhoneVal] = useState(false);
  const [fcmToken, setfcmToken] = useState('');
  const [authLoader, setAuthLoader] = useState(true);
  const [maintanance, setMaintanance] = useState('');
  const [password, setPassword] = useState('+91');
  const [showPassword, setshowPassword] = useState(true);
  const [emailError,setEmailError]=useState(false)
  const [passwordError,setPasswordError]=useState(false)

  const [isPhoneNo,setIsPhoneNo]=useState(false)
  const [isEmail,setIsEmail]=useState(false)
  const [invalidInput,setInvalidInput]=useState(false)
  const [isPhoneError,setIsPhoneError]=useState(false)
  const [isEmailError,setIsEmailError]=useState(false)
  const [isError,setIsError]=useState(false)

    const userData = useSelector(
    (state) => state.userR.userSuccess,
  );
  const appReminder = useSelector(
    (state) => state.appReminder.appReminderSuccess,
  );
  function showHidePassword() {
    setshowPassword(!showPassword);
  }
  async function saveTokenToDatabase(token) {
    await AsyncStorage.setItem('@FcmToken', token);
    setfcmToken(token)
  }

  function signup() {
    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    var passwordReg=new RegExp(/((?=.*\d)(?=.*[a-zA-Z])(?=.*\W).{6,8})/)
 

    if (!signupMobile || phone.length<14) {
      setPhoneVal(true);
    }
    else if(email=='' || !emailReg.test(email) )
    {
        setEmailError(true)
    }
    else if(password=='' || !passwordReg.test(password) )
    {
        setPasswordError(true)
    }
    else {
    
      tinyToastSerive.showLoadingToast('signing up');
      var rawData = {
        mobile:countryCode+signupMobile,
        mobiletoken:fcmToken,
        email:email,
        password:password
      }
      var data=
        {mobile:countryCode+signupMobile}
      
      // console.log(api_link.signUp +  "mobile:"+countryCode+signupMobile +","
      // +   "code:"+""  +"," +  "mobiletoken:"+fcmToken  +","+ "email:"+email +"," + "password:"+password
      // )
      authApiSerive.authApiClass(api_link.signupotp,data).then((res) => {
        console.log("api response",res)
        var dataJson = JSON.parse(res);
        console.log('signup otp number:', dataJson);
        tinyToastSerive.hideToast()
        if(dataJson.responsecode!=200){
          Toast.show({
            style: {backgroundColor: Colors.red},
            text: dataJson.message,
            duration: 2000,
            position: 'Top',
          });
        }else{
        Toast.show({
          style: {backgroundColor: Colors.greendark},
          text: dataJson.message,
          duration: 1000,
          position: 'Top',
        });
        // dispatch(fetchUSERApi(dataJson.data))
         setTimeout(() => {
          props.navigation.navigate('verifyotp',{
            type:'signup',
            phoneNumber:countryCode+signupMobile,
            data:rawData
          });
        }, 1000);
      
        tinyToastSerive.hideToast()
      }
     
      })
  
        
     
    }
  }

  function login() {
    console.log("login token:",fcmToken)
    var regPhone=new RegExp(/^[+][0-9.,$;]+$/)
    var phoneNo=''
    if(regPhone.test(mobileNo))
    {
        phoneNo=mobileNo;
    }
    else{
      phoneNo='+'+mobileNo
    }
    if (phoneNo.length<13) {
      setMobileNoVal(true);
    } else {
      tinyToastSerive.showLoadingToast('signing in');
      var rawData = {
        mobile:phoneNo,
        mobiletoken:fcmToken,
        email:'',
        password:''
      }
      console.log("raw data is:",rawData)
      authApiSerive.authApiClass(api_link.login,rawData).then((res) => {
        var dataJson = JSON.parse(res);
        console.log('login otp number :', dataJson);
        tinyToastSerive.hideToast()
        if(dataJson.responsecode!=200){
          Toast.show({
            style: {backgroundColor: Colors.red},
            text: dataJson.message,
            duration: 2000,
            position: 'Top',
          });
        }else if(dataJson.message==="Your mobile is not correct"){
          Toast.show({
            style: {backgroundColor: Colors.red},
            text: dataJson.message,
            duration: 2000,
            position: 'Top',
          });
        }
        else{
         
        props.navigation.navigate('verifyotp',{
          phoneNumber:phoneNo,
          data:dataJson.data
        });
        tinyToastSerive.hideToast()
      }

    });

    }
  }
  function loginEmail() {
    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
  if(emailReg.test(mobileNo)){
    
    props.navigation.navigate('password',{
      userEmail:mobileNo,
      mobileToken:fcmToken
    });
  }
  else if(!emailReg.test(mobileNo))
  {
    setIsEmailError(true)
  }
    
  }

  useEffect( () => {
    console.log('app reminder is:',appReminder );
    console.log('maintance url is:', api_link.maintance);
    setAuthLoader(true)
    getApiSerive.getApiClass(api_link.maintance).then(async(res)=>{
    var data=res.maintenance_status
      setMaintanance(data)
      if(res.maintenance_status==1){
        setAuthLoader(false)
        setMaintenanceModal(true)
      }
      else{
        setMaintenanceModal(false)
        const dataUser = await AsyncStorage.getItem('@userDataAsync');
        const reminderData = await AsyncStorage.getItem('@ReminderData');
        console.log('user loin data is',dataUser,reminderData)
        
         if(JSON.parse(dataUser)){
         
           if(reminderData==='pro'){
           props.navigation.navigate('Home')
           
          }
           else{  
            props.navigation.navigate('mainPage')
           
           }
          
         }else{
          
           setAuthLoader(false)
         }
      }
    
     
  })
  
    

    async function fcmTokenGet() {
    
      const fcmToken = await AsyncStorage.getItem('@FcmToken');
      setfcmToken(fcmToken)

  
      if(!fcmToken){
  
      
  
      messaging()
      .getToken()
      .then(token => {
        return saveTokenToDatabase(token);
      });
  
    // If using other push notification providers (ie Amazon SNS, etc)
    // you may need to get the APNs token instead for iOS:
    // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => { return saveTokenToDatabase(token); }); }
  
    // Listen to whether the token changes
    return messaging().onTokenRefresh(token => {
      saveTokenToDatabase(token);
    });

    }
 
  
}
    fcmTokenGet()

    return () => {
      setfcmToken('')
    };
   
  }, [isFocused,appReminder]); 




  function signupTextChange(text) {
    var cleaned = ('' + text).replace(/\D/g, '')
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        var intlCode = (match[1] ? '+1 ' : ''),
            number = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
        setPhone(number)
        return;
    }
    
    setPhone(text)
  }
  
  const validateUserEmail=(text)=>{
    var reg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
   
    
    
     if(!reg.test(email))
    {
      
      setEmailError(true)
    }
  
  }
const validatePass=()=>{
  var passwordReg=new RegExp(/((?=.*\d)(?=.*[a-zA-Z])(?=.*\W).{8,16})/)
  
  
   if(!passwordReg.test(password) )
  {
      setPasswordError(true)
  }

}

 



function loginTextChange(text) {
  
  var cleaned = ('' + text).replace(/\D/g, '')
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
      var intlCode = (match[1] ? '+1 ' : ''),
          number = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
      setMobileNo(number);

      return;
  }
  setMobileNo(text);
  
}
function checkLoginDetails(text)
{
  var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  var reg = new RegExp(/^[0-9]*$/);
  var regPhone=new RegExp(/^[+][0-9.,$;]+$/)
  if(reg.test(text) || regPhone.test(text))
 {
   setIsEmail(false)
   console.log("phone no")
   setIsPhoneNo(true)
   //loginTextChange(text)
   console.log("phone no",text)
   setInvalidInput(false)
  
 }
 else if(emailReg.test(text)){
  console.log("Email")
  setIsEmail(true)
  setIsPhoneNo(false)
  setInvalidInput(false)
 }
 else{
  console.log("nothing")
  setIsPhoneNo(false)
  setIsEmail(false)
  setInvalidInput(true)
 }


}

  return (
    <SafeAreaView style={{flex: 1}}>
 {authLoader ? 
                  <View style={styles.loaderStyle}>
                    <LoginLogo height={140} width={140} />
                     <Flow style={{marginTop:20}} size={70} color={Colors.orange}></Flow>
                  </View>
                  :
      <View style={styles.container}>
        <View style={styles.loginLogo}>
          <LoginLogo height={90} width={90} />
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.buttonView}>
            <View style={{marginTop: 15}}>
              <View style={{marginTop: 10}}>
                <View style={styles.searchSection}>
                  <Text style={{marginLeft: 10}}>{countryCode} </Text>

                  <TextInput
                    style={styles.inputTextStyle}
                    placeholder="Mobile No"
                    placeholdertextcolor={Colors.inputLabel}
                    keyboardType={"phone-pad"}
                    value={phone}
                    maxLength={14}
                    onChangeText={(text) => {
                      //setPhone(text)
                      setSignupMobile(text)
                       signupTextChange(text)
                       setPhoneVal(false);
                    }}
                  />
                </View>
                
                {phoneVal ? (
                  <Text
                    style={{
                      marginTop: 4,
                      fontFamily: fonts['DMSans-Regular'],
                      fontSize: 12,
                      color: Colors.absent,
                    }}>
                    * Please Enter Valid Mobile No
                  </Text>
                ) : null}
                <Text
                    style={{
                      marginTop: 1,
                      fontFamily: fonts['DMSans-Regular'],
                      fontSize: 12,
                      color: Colors.grayMedium,
                    }}>
                   You will receive an OTP for verification
                  </Text>
              </View>
           
             
               </View>
              
               <View style={{marginTop: 5}}>
              <View style={{marginTop: 5}}>
                <View style={styles.searchSection}>
               
                  <TextInput
                    style={styles.inputTextStylePassword}
                    placeholder="Email"
                    placeholdertextcolor={Colors.inputLabel}
                    keyboardType={"email-address"}
                    value={email}
                   onBlur={()=>{
                     if(email.length>0){
                     validateUserEmail()
                     }
                   }}
                    onChangeText={(text) => {
                      //setPhone(text)
                      setEmailError(false)
                     setEmail(text)
                    }}
                  />
                </View>
                
                {emailError ? (
                  <Text
                    style={{
                      marginTop: 4,
                      fontFamily: fonts['DMSans-Regular'],
                      fontSize: 12,
                      color: Colors.absent,
                    }}>
                    * Please Enter Valid Email
                  </Text>
                ) : null}
                {/* <Text
                    style={{
                      marginTop: 1,
                      fontFamily: fonts['DMSans-Regular'],
                      fontSize: 12,
                      color: Colors.grayMedium,
                    }}>
                    No Spam 
                  </Text> */}
              </View>
           
             
               </View>
            
               <View style={{marginTop: 5}}>
              <View style={{marginTop: 5}}>
              <View style={styles.passwordSection}>
                    <TextInput
                      style={styles.inputTextStylePassword}
                      maxLength={16}
                      placeholder="Password"
                      onChangeText={(text) => {
                        setPassword(text);
                        setPasswordError(false)
                      }}
                      onBlur={()=>{
                       if(password.length>0)
                       {
                         validatePass()
                       }
                      }}
                      secureTextEntry={showPassword}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        showHidePassword();
                      }}>
                        <Image source={!showPassword? icons.viewPass:icons.hidePass}
                                                             
                                                             style={{height:15,width:15,marginRight:10, }}
                                                             />
                      {/* <PasswordShowSvg style={{marginRight: 10}} /> */}
                    </TouchableOpacity>
                  </View>
                  
                  {passwordError ? (
                  <View style={styles.errorStyle}>
                 <Text
                    style={{
                      marginTop: 4,
                      fontFamily: fonts['DMSans-Regular'],
                      fontSize: 12,
                      color: Colors.absent,
                    }}>
                    * Invalid Password! (Password must contain 8 to 16 characters with 1 number, 1 symbol & 1 alphabet) 
                  </Text>
                  </View>
                ) : null}
                </View>
           
             
               </View>
           
            <View style={{marginTop: 15}}>
              <LoginButton
                text={'Sign Up'}
                buttonColor={Colors.orange}
                onPress={async () => {
                  signup();
                  await analytics().logSignUp({
                    method: 'mobile',
                    });
                  async () =>
          // await analytics().logEvent('signup', {
          //   id: 3745092,
          //   item: 'mens grey t-shirt',
          //   description: ['round neck', 'long sleeved'],
          //   size: 'L',
          // })
          console.log("Sign up fire base analytics")


                }}
              />
            </View>
            <View style={{marginTop: 5,flexDirection:'row',justifyContent:'center'}}>
            <Text
                    style={{
                      marginTop: 4,
                      fontFamily: fonts['DMSans-Medium'],
                      fontSize: 10,
                      color: Colors.bluedark,
                      textAlign:'center'
                    }}>
                   By registering, I agree to Cric.One's
                  </Text>
                  <TouchableOpacity
                  onPress={()=>{Linking.openURL('https://cric.one/terms-and-conditions')}}
                  style={{marginLeft:5}}>
                  <Text
                    style={{
                      marginTop: 4,
                      fontFamily: fonts['DMSans-Bold'],
                      fontSize: 10,
                      color: Colors.orange,
                      textAlign:'center'
                    }}>
                  T&Cs
                  </Text>
                  </TouchableOpacity>
              </View>

            
            {/* <View style={styles.lineView}>
              <View style={styles.lineStyle} />
              <View>
                <Text style={styles.lineText}>OR</Text>
              </View>
              <View style={styles.lineStyle} />
            </View> */}

            <View style={{marginTop: 30,flexDirection:'row',justifyContent:'center'}}>
            <Text
                    style={{
                      marginTop: 4,
                      fontFamily: fonts['DMSans-Medium'],
                      fontSize: 14,
                      color: Colors.bluedark,
                      textAlign:'center'
                    }}>
                    Already a user? 
                  </Text>
                  <TouchableOpacity
                  onPress={()=>{props.navigation.navigate('loginScreen'
                  
 ,{mobiletoken:fcmToken}                 )}}
                  style={{marginLeft:5}}>
                  <Text
                    style={{
                      marginTop: 4,
                      fontFamily: fonts['DMSans-Bold'],
                      fontSize: 14,
                      color: Colors.orange,
                      textAlign:'center'
                    }}>
                   Log in
                  </Text>
                  </TouchableOpacity>
              </View>

            {/* <View style={{marginTop: 20}}>
            
            <View style={styles.searchSection}>
                  
                  <TextInput
                    style={styles.inputTextStylePassword}
                    placeholder="Mobile No or Email"
                    placeholdertextcolor={Colors.inputLabel}
                    keyboardType={"email-address"}
                    value={mobileNo}
                    maxLength={isPhoneNo?14:100}
                    onChangeText={(text) => {
                      setMobileNo(text)
                      checkLoginDetails(text)
                      setMobileNoVal(false)
                      setIsError(false)
                      setIsError(false)
                      
                    }}
                  />
                </View>
                {mobileNoVal ? (
                  <Text
                    style={{
                      marginTop: 4,
                      fontFamily: fonts['DMSans-Regular'],
                      fontSize: 12,
                      color: Colors.absent,
                    }}>
                    * Please Enter Valid Mobile No
                  </Text>
                ) : null}
                {isEmailError ? (
                  <Text
                    style={{
                      marginTop: 4,
                      fontFamily: fonts['DMSans-Regular'],
                      fontSize: 12,
                      color: Colors.absent,
                    }}>
                    * Please Enter Valid Email
                  </Text>
                ) : null}
                {isError ? (
                  <Text
                    style={{
                      marginTop: 4,
                      fontFamily: fonts['DMSans-Regular'],
                      fontSize: 12,
                      color: Colors.absent,
                    }}>
                    * Please Enter Valid Mobile No or Email
                  </Text>
                ) : null}
               


              <View style={{marginTop: 20}}>
                <LoginButton
                  text={'Sign In'}
                  buttonColor={Colors.orange}
                  onPress={async () => {
                   if(isPhoneNo){
                    login();
                  }
                  else if(isEmail)
                  {
                    loginEmail()
                    console.log("Email")
                  }
                  else if(invalidInput)
                  {
                      console.log("enter true")
                      setIsError(true)
                  }
                    await analytics().logLogin({
                      method: 'mobile',
                      });
                  }}
                 
                />
              </View>
              <TouchableOpacity
                style={{marginBottom: 10,marginTop:30}}
                onPress={() => {
                  props.navigation.navigate('ReferalCode');
                }}>
                <Text style={[styles.TextStyle, {color: Colors.bluedark}]}>
                  Have a Referal Code ?{' '}
                  <Text style={[styles.TextStyle]}>Enter Code</Text>
                </Text>
              </TouchableOpacity>
            </View>
         
          */}
         <TouchableOpacity
                style={{marginBottom: 10,marginTop:10}}
                onPress={() => {
                  props.navigation.navigate('ReferalCode');
                }}>
                <Text style={[styles.TextStyle, {color: Colors.bluedark}]}>
                  Have a Referal Code ?{' '}
                  <Text style={[styles.TextStyle]}>Enter Code</Text>
                </Text>
              </TouchableOpacity>
          </View>
        </ScrollView>

<Modal
          testID={'modal'}
          isVisible={maintinanceModal}
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
             margin: 0,
        }}>
          <View
            style={styles.ViewBackground}>

              <View style={styles.header}>
              <LoginLogo height={70} width={100} />
              </View>

              <View style={styles.maintenance}>
                <Image style={{height:'70%',width:'100%'}} source={icons.maintance}></Image>
              <Text style={styles.stautsNextList}>REPAIR AND UPDATE</Text>
              </View>
          
          </View>
        </Modal>


      </View>
}
    </SafeAreaView>
  );
};
export default login;
