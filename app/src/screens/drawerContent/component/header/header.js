import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  RefreshControl,
  TextInput
} from 'react-native';
import BackSvg from '../../../../../res/images/svg/back.svg'
import { styles } from './style';
import { SafeAreaView } from 'react-native';

const MainHeader = ({navigation,screenName}) => {

return(
    <View style={styles.mainheader}>
    <TouchableOpacity 
        onPress={()=>{ navigation.goBack()}}
    >
        <BackSvg
            style={styles.backBtn}
            height={15} width={15}
        />
    </TouchableOpacity> 
    <Text style={styles.headerTitle}>
        {screenName.toUpperCase()}
    </Text>
    <Text>
       
    </Text>
    </View>
)

}
export default MainHeader
