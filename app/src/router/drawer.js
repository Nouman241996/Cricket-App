import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContents from '../screens/drawerContent/drawerContents';
import {useSelector} from 'react-redux'
import Tabs from './bottomTabs';

const Drawer = createDrawerNavigator();
const drawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContents {...props} />}>
      <Drawer.Screen name="Feed" drawerPosition="left" component={Tabs} />
    </Drawer.Navigator>
  );
};

export default drawer;
