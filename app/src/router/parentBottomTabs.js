import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {isIphoneX} from 'react-native-iphone-x-helper';
import Home from '../screens/Home/home/Home';
import Profile from '../screens/Profile/profile';
import MainPage from '../screens/ParentScreens/container/mainPageParent/mainPage';
import Tropy from '../screens/trophy/myContest/mycontest';
import GameHome from '../screens/games/container/gameHome/gameHome'
import {icons} from '../../res/constants';
import {Colors} from '../../res/style/color';
import HomeIconSvg from '../../res/images/svg/homeIconSvg.svg';
import FileSvg from '../../res/images/svg/fileSvg.svg';
import GameSvg from '../../res/images/svg/gameSvg.svg';
import Vector from '../../res/images/svg/Vector.svg';
import VerifyAccount from '../screens/wallet/container/walletScreens/verifyAccount';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import VerifyAccountWallet from '../screens/ParentScreens/container/walletParent/wallet'

import GameButtonSvg from '../../res/images/svg/gamebtn'
import profile from '../screens/Profile/profile';
import ReferAndEarn from '../screens/wallet/container/referFriend/referFriend'
import analytics from '@react-native-firebase/analytics';
import {fetchGameSwitcherApi} from '../redux/actions/gameSwitcherAction'
const Tab = createBottomTabNavigator();


const  CustomTabBar = (props) => {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            backgroundColor: Colors.white,
          }}></View>
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};
const ParentTabBar = () => {
  
  const userData = useSelector(
    (state) => state.userR.userSuccess,
  );
  const dispatch= useDispatch();
  return (
    <Tab.Navigator
   TouchableOpacity={true}
      tabBarOptions={{
       

        activeTintColor: 'red',
        inactiveTintColor: 'white',
        showLabel: false,
        keyboardHidesTabBar: true,

        style: {
          borderWidth: 0.5,
          height:55,
          borderBottomWidth: 1,
          backgroundColor:  Colors.botBlue,
          // borderTopLeftRadius: 25,
          // borderTopRightRadius: 25,
          borderColor: Colors.botBlue,
          position: 'absolute',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.46,
          shadowRadius: 11.14,
          
          elevation: 17,
          
        
        },

      }}
    
      tabBar={(props) => <CustomTabBar  props={props} />}>

<Tab.Screen
        name="group"
        component={MainPage}
        initialParams={{type: 'home'}}
        listeners={{
          tabPress: e => {
            dispatch(fetchGameSwitcherApi(false));
            analytics().logEvent('bottomtab_homeicon_clicks', {       
              description: "click on home icon from bottom tab home page "
              })
            // e.preventDefault(); // Use this to navigate somewhere else
            console.log("Home tab bar button pressed")
          },}}
        options={{
         
          tabBarIcon: ({focused}) => (
            
            <Entypo
            name="home"
            color={focused ? Colors.orange : Colors.grayMedium}
            size={25}
            >

            </Entypo>
           
            // <Image
            //   source={icons.group}
            //   resizeMode="contain"
            //   style={{
            //     // width: 30,
            //     // height: 30,
            //     tintColor: focused ? Colors.orange : Colors.grayMedium,
            //   }}
            // />

          ),
        }}
      />
   <Tab.Screen
        name="trophy"
        initialParams={{type: 'tab'}}
        component={ReferAndEarn}
        listeners={{
          tabPress: e => {
            dispatch(fetchGameSwitcherApi(false));
            analytics().logEvent('bottomtab_referral_clicks', {       
              description: "click on refferal icon from bottom tab home page "
              })
            // e.preventDefault(); // Use this to navigate somewhere else
            console.log("Refer friend tab bar button pressed")
          },}}
        options={{
          tabBarIcon: ({focused}) => (

            <MaterialCommunityIcons
            name="ticket-confirmation"
            color={focused ? Colors.orange : Colors.grayMedium}
            size={25}
            >
   </MaterialCommunityIcons>
            
            // {/* <Image
            //   source={icons.trophy}
            //   resizeMode="contain"
            //   style={{
            //     // width: 25,
            //     // height: 25,
            //     tintColor: focused ? Colors.orange : Colors.grayMedium,
            //   }}
            // /> */}



          ),
        }}
      />
<Tab.Screen
        name="funds"
        component={VerifyAccountWallet}
        initialParams={{type: "wallet"}}
        listeners={{
          tabPress: e => {
            dispatch(fetchGameSwitcherApi(false));
            analytics().logEvent('bottomtab_wallet_clicks', {       
              description: "click on wallet icon from bottom tab home page "
              })
            // e.preventDefault(); // Use this to navigate somewhere else
            console.log("wallet tab bar button pressed")
          },}}
        options={{
          tabBarIcon: ({focused}) => (

            <Ionicons
            name="ios-wallet"
            color={focused ? Colors.orange : Colors.grayMedium}
            size={25}
            >
   </Ionicons>



            // <Image
            //   source={icons.funds}
            //   resizeMode="contain"
            //   style={{
            //     // width: 25,
            //     // height: 25,
            //     tintColor: focused ? Colors.orange : Colors.grayMedium,
            //   }}
            // />



          ),
        }}
      />

<Tab.Screen
name="gameHome"
component={GameHome}
listeners={{
  tabPress: e => {
    dispatch(fetchGameSwitcherApi(true));
    analytics().logEvent('bottomtab_switcher_clicks', {       
      description: "click on switcher icon from bottom tab home page "
      })
    // e.preventDefault(); // Use this to navigate somewhere else
    console.log("switcher tab bar button pressed")
  },}}
options={{
  tabBarIcon: ({focused}) => (

    <Ionicons
    name="game-controller"
    color={focused ? Colors.orange : Colors.grayMedium}
    size={25}
    >
</Ionicons>


    // <Image
    //   source={icons.gamegray}
    //   resizeMode="contain"
    //   style={{
    //     // width: 25,
    //     // height: 25,
    //     tintColor: focused ? Colors.orange : Colors.grayMedium,
    //   }}
    // />




  ),
 }}
/>

<Tab.Screen
         name="profile"
         component={Profile}
         listeners={{
          tabPress: e => {
            analytics().logEvent('bottomtab_profile_clicks', {       
              description: "click on profile icon from bottom tab home page "
              })
            // e.preventDefault(); // Use this to navigate somewhere else
            console.log("profile tab bar button pressed")
          },}}
        options={{
          tabBarIcon: ({focused}) => (
            <View
            style={{
              overflow: 'hidden',
              borderWidth: 2,
              borderRadius: 35,
              padding: 2,
              borderColor: focused ? Colors.orange : Colors.white,
            }}>
            <Image
              source={icons.profileImage1}
              source={userData.image?{uri: userData.image}: icons.profileImage1 } 
              style={{
                width: 32,
                height: 32,
                alignSelf: 'center',
                borderRadius:32
              }}
            />
          </View>
          ),
        }}
      />



      



    </Tab.Navigator>
  );
};

export default ParentTabBar;




