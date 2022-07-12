import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../../src/component/React Native Responsive Screen';

import {styles} from './style';
import {Colors} from '../../../res/style/color';
import {icons} from '../../../res/constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {color} from 'react-native-reanimated';
import {fonts} from '../../../res/style/fonts';

const bollerScoreCard = (props) => {
 // console.log('data of scorerere',props.data) 
  return (
    <View>
      <View >
        <View style={styles.mainBody}>
          <View style={{width: 80}}>
            <Text numberOfLines={1} style={styles.listBody}>
              {props.data.name}
            </Text>
            <Text
              numberOfLines={1}
              style={[
                styles.listBody,
                {
                  color:
                  props.data.status === 'Batting'
                      ? Colors.orange
                      : Colors.grayMedium,
                  fontFamily:
                  props.data.status === 'Batting'
                      ? fonts['DMSans-Bold']
                      : fonts['DMSans-Medium'],
                },
              ]}>
              {props.data.how_out}
            </Text>
          </View>

          <View style={{flexDirection: 'row',justifyContent:'space-between', marginLeft: 24, width: 180}}>
            {/* <View style={{marginLeft: 16, marginRight: 10}}> */}
              <Text style={styles.listBody}>{props.data.overs.slice(0,3)}</Text>
            {/* </View> */}

            {/* <View style={{marginLeft: 16, marginRight: 10}}> */}
              <Text style={styles.listBody}>{props.data.runs_conceded.slice(0,3)}</Text>
            {/* </View> */}
            
            {/* <View style={{marginLeft: 16, marginRight: 10}}> */}
              <Text style={styles.listBody}>{props.data.wickets.slice(0,3)}</Text>
            {/* </View> */}
            {/* <View style={{marginLeft: 16, marginRight: 10}}> */}
              <Text style={styles.listBody}>{props.data.maidens.slice(0,3)}</Text>
            {/* </View> */}
            {/* <View style={{marginLeft: 16, marginRight: 15}}> */}
              <Text style={styles.listBody}>{props.data.econ.slice(0,5)}</Text>
            {/* </View> */}
          </View>
        </View>
      </View>
    </View>
  );
};
export default bollerScoreCard;
