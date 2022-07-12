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

const statsCard = ({data}) => {
  return (
    <View>
            <View>
              <View style={styles.mainBody}>
             
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginTop: -5}}>
                    <Image
                      source={{
                        uri:data.image,
                      }}
                      style={{width: 40, height: 40, borderRadius: 30}}
                    />
                  </View>

                  <View style={{width: 80, marginLeft: 10,marginTop:5}}>
                    <Text numberOfLines={1} style={styles.listBody}>
                      {data.name}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={[styles.listBody, {color: Colors.grayMedium}]}>
                      {data.team_short_name} - {data.short_term}
                    </Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row',width: 185, marginRight: 2,justifyContent:'space-between',marginTop:5}}>
                  <View style={{marginLeft: 15, marginRight: 22}}>
                    <Text style={styles.listBody}>{data.selection_percent.slice(0,4)}</Text>
                  </View>

                  <View style={{marginLeft: 20, marginRight: 20}}>
                    <Text style={styles.listBody}>{data.cby.slice(0,4)}</Text>
                  </View>

                  <View style={{marginLeft: 20, marginRight: 20}}>
                    <Text style={styles.listBody}>{data.vcby.slice(0,4)}</Text>
                  </View>
                </View>
              </View>
            </View>
        



    </View>
  );
};
export default statsCard;
