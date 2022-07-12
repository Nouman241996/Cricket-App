import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Image,
  TextInput
} from 'react-native';
import {styles} from './style';
import {Colors} from '../../../../res/style/color';
import {icons,api_link} from '../../../../res/constants';
import LoginLogo from '../../../../res/images/svg/loginlogo';
import BackSvg from '../../../../res/images/svg/back.svg';
import LoginButton from '../../../component/widgets/loginButton/loginButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {fonts} from '../../../../res/style/fonts';
import InputText from '../../../component/widgets/loginInputText/loginInputtext';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { tinyToastSerive } from '../../../utills/Toast';
import { authApiSerive } from '../../../utills/authServices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import PasswordShowSvg from '../../../../res/images/svg/passwordShowSvg';
import { fetchUSERApi } from '../../../redux/actions/userAction';

import {Toast,Label} from 'native-base';
const Password = (props) => {
  const [mobileNo, setMobileNo] = useState('');
  const [userPassword, setUserPassword]=useState('')
  const [showPassword, setshowPassword] = useState(true);
  const [passError,setPassError]=useState(false)
  const dispatch = useDispatch();
  function showHidePassword() {
    setshowPassword(!showPassword);
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
        Login
        </Text>
        <Text>

        </Text>
      </View>
    )
  }
 async function login() {
  
  if(userPassword.length<=0)
  {
    setPassError(true)
  }
  else{
    tinyToastSerive.showLoadingToast('signing in');
    var rawData = {
      mobile:'',
      mobiletoken:props.route.params.mobiletoken,
      email:props.route.params.userEmail,
      password:userPassword
    }
    console.log("raw data is:",rawData)
    authApiSerive.authApiClass(api_link.login,rawData).then(async(res) => {
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
      }
      else if(dataJson.message==="Your email is not registered! Please signup above.")
      {
        Toast.show({
          style: {backgroundColor: Colors.red},
          text: dataJson.message,
          duration: 2000,
          position: 'Top',
        });
        
      }
      else{
        await AsyncStorage.setItem('@userDataAsync', JSON.stringify(dataJson.data));
        dispatch(fetchUSERApi(dataJson.data))
        props.navigation.navigate('mainPage');
        tinyToastSerive.hideToast()
      }
     

  });
}

  
}
  return (
    
    <SafeAreaView style={{flex: 1}}>
        {mainheader()}
    
      <View style={styles.container}>
   
        <ImageBackground source={icons.logbackground} style={styles.image}>
          <View style={styles.centerView}>
            <View style={styles.buttonView}>
            
              <View style={{marginTop: 20}}>
                <Text
                  style={[
                    styles.EmailTextStyle,
                    {color: Colors.bluedark, marginBottom: 10},
                  ]}>
                  {' '} {props.route.params.userEmail}
                </Text>
                <View style={styles.passwordSection}>
                    <TextInput
                      style={styles.inputTextStylePassword}
                      maxLength={16}
                      placeholder="Password"
                      onChangeText={(text) => {
                        setUserPassword(text);
                        setPassError(false)
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
                  {passError ? (
                  <Text
                    style={{
                      marginTop: 4,
                      fontFamily: fonts['DMSans-Regular'],
                      fontSize: 12,
                      color: Colors.absent,
                    }}>
                    * Please Enter The Password
                  </Text>
                ) : null}

                <View style={{marginTop: 20}}>
                  <LoginButton
                    text={'Login'}
                    buttonColor={Colors.orange}
                    onPress={() => {
                     login()
                    }}
                  />
                </View>
                <TouchableOpacity
                style={{marginBottom: 10,marginTop:10}}
                onPress={() => {
                 
                }}>
                <Text style={[styles.TextStyle, {color: Colors.bluedark,alignSelf:'center',textAlign:'center'}]}>
                 Forget Password ?{' '}
                 
                </Text>
              </TouchableOpacity>
                <TouchableOpacity
                style={{marginBottom: 10,marginTop:0}}
                onPress={() => {
                  props.navigation.navigate('login');
                }}>
                <Text style={[styles.TextStyle, {color: Colors.bluedark,alignSelf:'center',textAlign:'center'}]}>
                  Not a member ?{' '}
                  <Text style={[styles.TextStyle]}>Register</Text>
                </Text>
              </TouchableOpacity>
              
              </View>
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
export default Password;
