import React, {useState, useEffect} from 'react';
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
} from 'react-native';
import {styles} from './style';
import {Colors} from '../../../../res/style/color';
import {icons} from '../../../../res/constants';
import LoginLogo from '../../../../res/images/svg/loginlogo';
import LoginButton from '../../../component/widgets/loginButton/loginButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {fonts} from '../../../../res/style/fonts';
import InputText from '../../../component/widgets/loginInputText/loginInputtext';
import PasswordShowSvg from '../../../../res/images/svg/passwordShowSvg';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const UserRegister = (props) => {
  const [invitationCode, setinvitationCode] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+91');
  const [password, setPassword] = useState('+91');
  const [showPassword, setshowPassword] = useState(true);

  function showHidePassword() {
    setshowPassword(!showPassword);
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground source={icons.logbackground} style={styles.image}>
          <View style={styles.centerView}>
            <View style={styles.buttonView}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginTop: 20}}>
                  <Text
                    style={[
                      styles.TextStyle,
                      {color: Colors.bluedark, marginBottom: 10},
                    ]}>
                    Register to play on Cricket Arena
                  </Text>
                  <InputText
                    value={invitationCode}
                    onChangeText={(text) => setinvitationCode(text)}
                    placeholdertext={'Enter Invite Code'}
                    placeholdertextcolor={Colors.inputLabel}
                  />
                  <View style={{marginTop: 10}}>
                    <InputText
                      value={name}
                      onChangeText={(text) => setName(text)}
                      placeholdertext={'Enter Name'}
                      placeholdertextcolor={Colors.inputLabel}
                    />
                  </View>
                  <View style={{marginTop: 10}}>
                    <InputText
                      Typetext={'email-address'}
                      value={email}
                      onChangeText={(text) => setEmail(text)}
                      placeholdertext={'Enter Email'}
                      placeholdertextcolor={Colors.inputLabel}
                    />
                  </View>

                  <View style={{marginTop: 10}}>
                    <InputText
                      Typetext={'phone-pad'}
                      value={phone}
                      onChangeText={(text) => {
                        setPhone(text);
                        if (text == '') {
                          setPhone('+91');
                        }
                      }}
                      placeholdertext={'Mobile No'}
                      placeholdertextcolor={Colors.inputLabel}
                    />
                  </View>
                  <View style={styles.searchSection}>
                    <TextInput
                      style={styles.inputTextStyle}
                      placeholder="Password"
                      onChangeText={(text) => {
                        setPassword(text);
                      }}
                      secureTextEntry={showPassword}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        showHidePassword();
                      }}>
                      <PasswordShowSvg style={{marginRight: 10}} />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop: 4}}>
                    <Text style={styles.passwordText}>
                      *Must be 8 to 16 characters with a number and symbol
                    </Text>
                  </View>

                  <View style={{marginTop: 20}}>
                    <LoginButton
                      text={'REGISTER'}
                      buttonColor={Colors.registerButton}
                      onPress={() => {
                        props.navigation.navigate('verifyotp');
                      }}
                    />
                  </View>
                  <View style={{marginTop: 8}}>
                    <Text style={styles.registerText}>
                      By Registering, I agree to Cricket Arena’s T&C
                    </Text>
                  </View>
                </View>
              </ScrollView>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  marginBottom: 36,
                }}>
                <TouchableOpacity style={{marginBottom: 0}} onPress={() => {}}>
                  <Text style={[styles.TextStyle, {color: Colors.bluedark}]}>
                    Don’t have an account yet?{' '}
                    <Text style={[styles.TextStyle]}>Sign Up</Text>
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginBottom: 30}} onPress={() => {}}>
                  <Text style={[styles.TextStyle, {color: Colors.bluedark}]}>
                    Already have an Account?{' '}
                    <Text style={[styles.TextStyle]}> Login</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
export default UserRegister;
