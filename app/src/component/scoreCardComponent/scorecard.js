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

const scoreCard = (props) => {
 
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
                  props.type==='live' &&  props.data.batting==='true'
                      ? Colors.orange
                      : Colors.grayMedium,
                  fontFamily:
                  props.type=='live' &&  props.data.batting == 'true'
                      ? fonts['DMSans-Bold']
                      : fonts['DMSans-Medium'],
                },
              ]}>
              { props.type=='live' && props.data.batting==='true' ?'Batting':props.data.how_out}
            </Text>
          </View>

          <View style={{flexDirection: 'row',justifyContent:'space-between', marginLeft: 24, width: 180}}>
            {/* <View style={{marginLeft: 16, marginRight: 10}}> */}
              <Text style={styles.listBody}>{props.data.runs.slice(0,3)}</Text>
            {/* </View> */}

            {/* <View style={{marginLeft: 16, marginRight: 10}}> */}
              <Text style={styles.listBody}>{props.data.balls_faced.slice(0,3)}</Text>
            {/* </View> */}
            
            {/* <View style={{marginLeft: 16, marginRight: 10}}> */}
              <Text style={styles.listBody}>{props.data.fours.slice(0,3)}</Text>
            {/* </View> */}
            {/* <View style={{marginLeft: 16, marginRight: 10}}> */}
              <Text style={styles.listBody}>{props.data.sixes.slice(0,3)}</Text>
            {/* </View> */}
            {/* <View style={{marginLeft: 16, marginRight: 15}}> */}
              <Text style={styles.listBody}>{props.data.strike_rate.slice(0,5)}</Text>
            {/* </View> */}
          </View>
        </View>
      </View>
    </View>
  );
};
export default scoreCard;
