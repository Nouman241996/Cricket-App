import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {isIphoneX} from 'react-native-iphone-x-helper';
import Home from '../screens/Home/home/Home';
import Profile from '../screens/Profile/profile';
// import MainPage from '../screens/ParentScreens/container/mainPageParent/mainPage';
import Tropy from '../screens/trophy/myContest/mycontest';
import GameHome from '../screens/games/container/gameHome/gameHome'
import {icons} from '../../res/constants';
import {Colors} from '../../res/style/color';
import VerifyAccount from '../screens/wallet/container/walletScreens/verifyAccount';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import {fetchGameSwitcherApi} from '../redux/actions/gameSwitcherAction'

import GameButtonSvg from '../../res/images/svg/gamebtn'
const Tab = createBottomTabNavigator();

const CustomTabBar = (props) => {
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
const Tabs = () => {
  const userData = useSelector(
    (state) => state.userR.userSuccess,
  );
  const dispatch= useDispatch();
  return (
    <Tab.Navigator
      tabBarOptions={{
        // showLabel: false,
        // style: {
        //   backgroundColor: 'white',
        //   flexDirection: 'row',
        //    elevation: 0,
        // },


        activeTintColor: 'red',
        inactiveTintColor: 'white',
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          borderWidth: 0.5,
          height:55,
          borderBottomWidth: 1,
          backgroundColor:  Colors.white,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderColor: Colors.white,
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
      tabBar={(props) => <CustomTabBar props={props} />}>
      <Tab.Screen
        name="group"
        component={Home}
        initialParams={{type: 'home'}}
        listeners={{
          tabPress: e => {
            dispatch(fetchGameSwitcherApi(false));
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
        component={Tropy}
        listeners={{
          tabPress: e => {
            dispatch(fetchGameSwitcherApi(false));
          },}}
        options={{
          tabBarIcon: ({focused}) => (

            <Ionicons
            name="md-trophy-sharp"
            color={focused ? Colors.orange : Colors.grayMedium}
            size={23}
            >
   </Ionicons>
            
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
        component={VerifyAccount}
        initialParams={{type: "wallet"}}
        listeners={{
          tabPress: e => {
            dispatch(fetchGameSwitcherApi(false));
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
  tabBarOnPress:({navigation})=> {
    console.log("hello i am home called")
  }
 }}
/>

      <Tab.Screen
        name="profile"
        component={Profile}
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
                  width: 35,
                  height: 35,
                  alignSelf: 'center',
                  borderRadius:35
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;




