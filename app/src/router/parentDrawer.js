import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContents from '../screens/drawerContent/drawerContents';
import ParentTabs from './parentBottomTabs';

const Drawer = createDrawerNavigator();
const parentDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContents {...props} />}>
      <Drawer.Screen name="Feed" drawerPosition="left" component={ParentTabs} />
    </Drawer.Navigator>
  );
};

export default parentDrawer;
