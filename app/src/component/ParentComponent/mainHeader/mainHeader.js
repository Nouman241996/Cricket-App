import React, { useState, useEffect } from 'react';
import {
  Text,
  ScrollView,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';
import { styles } from './style';
import Frame from '../../../../res/images/svg/loginWhite.svg'
import MenuSvg from '../../../../res/images/svg/menuWhite.svg';
import Profile from '../../../../res/images/svg/profile.svg';
import {icons} from '../../../../res/constants';
import analytics from '@react-native-firebase/analytics';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MenuDarkSvg from '../../../../res/images/svg/menudark.svg';
import {useDispatch} from 'react-redux'
import {fetchDrawerSwitcher} from '../../../redux/actions/gameSwitcherAction'

const mainHeader = ({ screen, profileImage,navigation }) => {
  const dispatch = useDispatch()
  return (

    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(fetchDrawerSwitcher(1))
            analytics().logEvent('drawer_clicks', {
              description: "drawer clicks by user"
            })
            navigation.toggleDrawer()
          }}
          style={{ marginTop: 15, marginLeft: 10 }}>
          {screen == 'wallet' ? <MenuDarkSvg style={styles.barimage}
            height={20} width={20}>
          </MenuDarkSvg> :
            <MenuSvg style={styles.barimage}
              height={20} width={20}>
            </MenuSvg>
          }
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginRight: 20, justifyContent: 'center' }}
        >
          <Frame
            height={90} width={90}>
          </Frame>
        </TouchableOpacity>

        <View
          style={{
            overflow: 'hidden',
            marginTop: 25


          }}>
          {screen == 'wallet' ?
            <Image
              source={profileImage ? { uri: profileImage } : icons.profileImage1}
              style={{
                width: 30,
                height: 30,
                alignSelf: 'center',
                borderRadius: 30
              }}
            /> : null
          }
        </View>

      </View>
    </>

  )
}
export default mainHeader;
