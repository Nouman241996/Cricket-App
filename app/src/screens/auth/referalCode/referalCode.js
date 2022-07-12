import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator,
    Image,
    TextInput,
    ScrollView,
    Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './style';
import { Colors } from '../../../../res/style/color'
import { icons, api_link } from '../../../../res/constants'
import LoginLogo from '../../../../res/images/svg/loginlogo'
import LoginButton from '../../../component/widgets/loginButton/loginButton'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { fonts } from '../../../../res/style/fonts';
import InputText from '../../../component/widgets/loginInputText/loginInputtext'
import PasswordShowSvg from '../../../../res/images/svg/passwordShowSvg'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import messaging from '@react-native-firebase/messaging';
import { authApiSerive } from '../../../utills/authServices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from 'native-base';
import { tinyToastSerive } from '../../../utills/Toast';
import analytics from '@react-native-firebase/analytics';
const ReferalCode = (props) => {

    const [invitationCode, setinvitationCode] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [countryCode, setCountryCode] = useState('+91')
    const [password, setPassword] = useState('')
    const [showPassword, setshowPassword] = useState(true)


    const [inviteCode, setInviteCode] = useState(false)
    const [signupMobile, setSignupMobile] = useState('');
    const [emailVal, setEmailVal] = useState(false)
    const [nameVal, setNameVal] = useState(false)
    const [phoneVal, setPhoneVal] = useState(false)
    const [passwordVal, setPasswordVal] = useState(false)
    const [fcmToken, setfcmToken] = useState(false);
    const [passwordError, setPasswordError] = useState(false)
    const [emailError, setEmailError] = useState(false)

    function showHidePassword() {
        setshowPassword(!showPassword);
    }

    useEffect(
        () => {


            analytics().logEvent('referral_code', {
                description: "Refferal code signup by user"
            })

        }, []);


    async function Register() {
        console.log('you are signup please login')
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var passwordReg = new RegExp(/((?=.*\d)(?=.*[a-zA-Z])(?=.*\W).{6,8})/)

        if (!invitationCode) {
            setInviteCode(true)
        }
        else if (!signupMobile || phone.length < 14) {
            setPhoneVal(true);
        }
        else if (email == '' || !emailReg.test(email)) {
            setEmailError(true)
        }
        else if (password == '' || !passwordReg.test(password)) {
            setPasswordError(true)
        }
        // else if(!name){
        //     setNameVal(true)
        // }
        // else if(!email){
        //     setEmailVal(true)
        //   }
        else if (!phone) {
            setPhoneVal(true)
        }
        //   else if(!password){
        //     setPasswordVal(true)
        //   }

        else {
            const fcmToken = await AsyncStorage.getItem('@FcmToken');
            setfcmToken(fcmToken)
            tinyToastSerive.showLoadingToast('signing up');
            var rawData = {
                mobile: phone,
                code: invitationCode,
                mobiletoken: fcmToken,
                email: email,
                password: password
            }

            authApiSerive.authApiClass(api_link.signUp, rawData).then((res) => {
                var dataJson = JSON.parse(res);

                tinyToastSerive.hideToast()
                if (dataJson.responsecode != 200) {
                    Toast.show({
                        style: { backgroundColor: Colors.red },
                        text: dataJson.message,
                        duration: 2000,
                        position: 'Top',
                    });
                } else {
                    Toast.show({
                        style: { backgroundColor: Colors.greendark },
                        text: dataJson.message,
                        duration: 2000,
                        position: 'Top',
                    });
                    if (dataJson.data) {
                        setTimeout(() => {
                            props.navigation.navigate('verifyotp', {
                                phoneNumber: phone,
                                data: dataJson.data
                            });
                        }, 1000);



                    }
                    else {
                        Toast.show({
                            style: { backgroundColor: Colors.red },
                            text: dataJson.message,
                            duration: 2000,
                            position: 'Top',
                        });

                    }
                }

            });










            // props.navigation.navigate('verifyotp')
            // setInviteCode(false)
            //   Toast.show({
            //     style: { backgroundColor: Colors.greendark },
            //     text: 'Thanks! Your account has been successfully created.please login',
            //     duration: 2000,
            //     position: 'Top',
            //   });

            //

        }


    }
    const validateUserEmail = (text) => {
        var reg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);



        if (!reg.test(email)) {

            setEmailError(true)
        }

    }
    const validatePass = () => {
        var passwordReg = new RegExp(/((?=.*\d)(?=.*[a-zA-Z])(?=.*\W).{8,16})/)


        if (!passwordReg.test(password)) {
            setPasswordError(true)
        }

    }
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

    return (
        <SafeAreaView
            style={{ flex: 1, }}
        >
            <View style={styles.container}>

                <ImageBackground source={icons.logbackground} style={styles.image}>
                    <View style={styles.centerView}>
                        <View style={styles.buttonView}>
                            <ScrollView

                                showsVerticalScrollIndicator={false}
                            >
                                <View style={{ marginTop: 20 }}>

                                    <Text style={[styles.TextStyle, { color: Colors.bluedark, marginBottom: 10 }]}>Enter Referral Code</Text>
                                    <View style={styles.passwordSection}>
                                    <TextInput
                                                style={styles.inputTextStyle}
                                                placeholder="Enter Invite Code"
                                                placeholdertextcolor={Colors.inputLabel}
                                                
                                                value={invitationCode}
                                             
                                                onChangeText={(text) => {
                                                    //setPhone(text)
                                                    setinvitationCode(text)
                                                    setInviteCode(false)
                                                }}
                                            />
                                    {/* <InputText
                                        style={styles.inputTextStylePassword}

                                        value={invitationCode}
                                        onChangeText={text => {
                                            setinvitationCode(text)
                                            setInviteCode(false)
                                        }
                                        }
                                        placeholdertext={'Enter Invite Code'}
                                        placeholdertextcolor={Colors.inputLabel}

                                    /> */}
                                    </View>
                                    {inviteCode ? <Text style={{
                                        marginTop: 4,
                                        fontFamily: fonts['DMSans-Regular'],
                                        fontSize: 12,
                                        color: Colors.absent
                                    }}>* Please Enter Valid Code</Text>
                                        : null
                                    }

                                    <View style={{ marginTop: 10 }}>

                                        <View style={styles.phoneView}>
                                            <Text style={{ marginLeft: 10 }}>{countryCode}</Text>

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
                                        {phoneVal ? <Text style={{
                                            marginTop: 4,
                                            fontFamily: fonts['DMSans-Regular'],
                                            fontSize: 12,
                                            color: Colors.absent
                                        }}>* Please Enter Valid Number</Text>
                                            : null

                                        }
                                        <View style={{ marginTop: 5 }}>
                                            <View style={{ marginTop: 5 }}>
                                                <View style={styles.searchSection}>

                                                    <TextInput
                                                        style={styles.inputTextStylePassword}
                                                        placeholder="Email"
                                                        placeholdertextcolor={Colors.inputLabel}
                                                        keyboardType={"email-address"}
                                                        value={email}
                                                        onBlur={() => {
                                                            if (email.length > 0) {
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

                                        <View style={{ marginTop: 5 }}>
                                            <View style={{ marginTop: 5 }}>
                                                <View style={styles.passwordSection}>
                                                    <TextInput
                                                        style={styles.inputTextStylePassword}
                                                        maxLength={16}
                                                        placeholder="Password"
                                                        onChangeText={(text) => {
                                                            setPassword(text);
                                                            setPasswordError(false)
                                                        }}
                                                        onBlur={() => {
                                                            if (password.length > 0) {
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
                                                        {/* <PasswordShowSvg style={{ marginRight: 10 }} /> */}
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


                                    </View>
                                    {/* <View style={styles.searchSection}>

                                    <TextInput
                                        style={styles.inputTextStyle}
                                        placeholder="Password"
                                        onChangeText={(text) => { setPassword(text), setPasswordVal(false)}}
                                        secureTextEntry={showPassword}
                                    />
                                      
                                    <TouchableOpacity
                                        onPress={()=>{showHidePassword()}}
                                    >{showPassword?(<PasswordShowSvg style={{ marginRight: 10 }} />):( <Icon name="eye-slash" size={13} color='#FF7D4A' style={{ marginRight: 10 }}/>  )}
                                        
                                        
                                       
                                    </TouchableOpacity>

                                </View>
                                {passwordVal?<Text style={{
                            marginTop: 4,
                            fontFamily: fonts['DMSans-Regular'],
                            fontSize: 12,
                            color: Colors.absent
                        }}>* Please Enter Valid Password</Text>
                        :null

}
                                <View style={{ marginTop: 4 }}>
                                    <Text style={styles.passwordText}>*Must be 8 to 16 characters with a number and symbol</Text>
                                </View> */}

                                    <View style={{ marginTop: 20, alignSelf:'center' }}>
                                        <LoginButton
                                            text={'REGISTER'}
                                            buttonColor={Colors.registerButton}
                                            onPress={() => {
                                                Register()

                                                // setInviteCode(true)
                                            }}
                                        />

                                    </View>
                                    <View style={{ marginTop: 5,flexDirection:'row',justifyContent:'center' }}>
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
                  </TouchableOpacity></View>



                                </View>

                                <View style={{
                                    flex: 1,
                                    justifyContent: 'flex-end', alignItems: 'center',
                                    marginBottom: 36,

                                }}>
                                    <TouchableOpacity
                                        style={{ marginBottom: 0, marginTop: 10 }}
                                        onPress={() => {
                                            props.navigation.navigate('login')
                                        }}><Text style={[styles.TextStyle, { color: Colors.bluedark }]}>Don’t have an account yet? <Text style={[styles.TextStyle]}>Sign Up</Text></Text></TouchableOpacity>
                                    <TouchableOpacity
                                        style={{ marginBottom: 30, marginTop: 10 }}
                                        onPress={() => {
                                            props.navigation.navigate('loginScreen', { mobiletoken: fcmToken })
                                        }}><Text style={[styles.TextStyle, { color: Colors.bluedark }]}>Already have an Account? <Text style={[styles.TextStyle]}> Login</Text></Text></TouchableOpacity>

                                </View>
                            </ScrollView>

                        </View>




                    </View>

                </ImageBackground>



            </View>
        </SafeAreaView>
    );
};
export default ReferalCode;
