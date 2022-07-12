import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabs from '../router/bottomTabs';
import drawer from '../router/drawer';
import parentDrawer from '../router/parentDrawer'

//stack screens
import Contest from '../screens/Contest/contest/Contest';
import Teambuild from '../screens/TeamBuild/teambuild';
import Captians from '../screens/Captian_screen/captians';
import UpcommingContest from '../screens/trophy/components/upcomingContest/upcommingContest';
import MyTeams from '../screens/myTeams/myTeams';
import SelectMyTeams from '../screens/myTeams/selectMyTeams/selectMyTeams';

import CompletedContest from '../screens/trophy/components/completedContest/completedContest';

import LiveJoinTeam from '../screens/trophy/components/liveContest/liveTeamContest';
import ContestDetails from '../screens/Contest/components/contestDetails/contestDetails';

//wallet screens
import VerifyAccount from '../screens/wallet/container/walletScreens/verifyAccount';
import AddCash from '../screens/wallet/container/addCash/addCash';
import MobileAndPhone from '../screens/wallet/container/phoneAndEmail/phoneAndEmail';
import ReferFriend from '../screens/wallet/container/referFriend/referFriend'
import RecentTransaction from '../screens/wallet/container/recentTransactions/recentTransactions'

//login screens
import Login from '../screens/auth/login/login';
import Password from '../screens/auth/password/password';
import VerifyOtp from '../screens/auth/otp/verifyOtp';
import ReferalCode from '../screens/auth/referalCode/referalCode';
//UserRegister
import UserRegister from '../screens/auth/register/register';


//parent screen stacks
// import MainPage from '../screens/ParentScreens/container/mainPageParent/mainPage';

//drawer pages
import MyStats from '../screens/drawerContent/component/myStats/myStats'
import PointSystem from '../screens/drawerContent/component/pointSystem/pointSystem'
import HowToPlay from '../screens/drawerContent/component/howToPlay/howToPlay'
import ContacUs from '../screens/drawerContent/component/contactUs/contactUs'
import FAQ from '../screens/drawerContent/component/faq/faq';
import TermsAndPolicy from '../screens/drawerContent/component/termsAndPolicy/termsAndPolicy';
import CheckForUpdate from '../screens/drawerContent/component/checkForUpdates/checkForUpdate';
import ParentTabBar from '../router/parentBottomTabs'
import TestScreen from '../screens/testScreens/testscreen';
import loginScreen from '../screens/auth/loginScreen/loginScreen';
import ProfileImage from '../screens/Profile/profileImage/profileImage'
//import profileImage from '../screens/Profile/profileImage';
const Stack = createStackNavigator();
const stacksPath = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="testscreen"
        component={TestScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="loginScreen"
        component={loginScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="profileImage"
        component={ProfileImage}
        options={{headerShown: false}}
      />
<Stack.Screen
        name="mainPage"
        component={parentDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={drawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="contest"
        component={Contest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Teambuild"
        component={Teambuild}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Captians"
        component={Captians}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="upcommingcontest"
        component={UpcommingContest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="completedContest"
        component={CompletedContest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="myTeams"
        component={MyTeams}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="selectMyTeams"
        component={SelectMyTeams}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="LiveJoinTeam"
        component={LiveJoinTeam}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContestDetails"
        component={ContestDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyAccount"
        component={VerifyAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="addCash"
        component={AddCash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="mobileAndPhone"
        component={MobileAndPhone}
        options={{headerShown: false}}
      />

     
      <Stack.Screen
        name="password"
        component={Password}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="verifyotp"
        component={VerifyOtp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReferalCode"
        component={ReferalCode}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserRegister"
        component={UserRegister}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="ReferFriend"
        component={ReferFriend}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RecentTransactions"
        component={RecentTransaction}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyStats"
        component={MyStats}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PointSystem"
        component={PointSystem}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="HowToPlay"
        component={HowToPlay}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContacUs}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="FAQ"
        component={FAQ}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsAndPolicy"
        component={TermsAndPolicy}
        options={{headerShown: false}}
      />
 <Stack.Screen
        name="CheckForUpdate"
        component={CheckForUpdate}
        options={{headerShown: false}}
      />



    </Stack.Navigator>
  );
};
function stackRoutes() {
  return <NavigationContainer>{stacksPath()}</NavigationContainer>;
}

export default stackRoutes;
