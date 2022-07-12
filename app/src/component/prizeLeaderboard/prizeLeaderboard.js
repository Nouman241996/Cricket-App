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

import {RFValue} from 'react-native-responsive-fontsize';
import {fonts} from '../../../res/style/fonts';
import { useTranslation } from 'react-i18next';
const prizeLeaderboard = ({data, type}) => {
  const { t } = useTranslation();


console.log("item is:",data)




  const renderScoreSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          borderWidth: 0.2,
          borderColor: Colors.seperatorColor,
          margin: 12,
          width: widthPercentageToDP(87),
          backgroundColor: Colors.seperatorColor,
          alignSelf: 'center',
        }}
      />
    );
  };


  return (
    <View>
    
      <View
        style={{
          backgroundColor:
            type == 'leader' ? Colors.darkGrey :Colors.mainbackground ,
        }}>

{data.length>0?
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 7,
          }}>
          <View>
            <Text
              style={{
                fontSize: RFValue(13),
                color: Colors.grayMedium,
                fontFamily: fonts['DMSans-Bold'],
              }}>
              {t('common:ranks')}
            </Text>
          </View>

          <View style={{marginRight: 5}}>
       
            {type == 'prize' &&  
              <Text
                style={{
                  fontSize: RFValue(13),
                  color: Colors.grayMedium,
                  fontFamily: fonts['DMSans-Bold'],
                }}>
                {t('common:ranks')}
              </Text>
}

{type == 'winning' &&  
              <Text
                style={{
                  fontSize: RFValue(13),
                  color: Colors.grayMedium,
                  fontFamily: fonts['DMSans-Bold'],
                }}>
                {t('common:winings')}
              </Text>
}

           {type == 'leader' &&    
              <Text
                style={{
                  fontSize: RFValue(13),
                  color: Colors.grayMedium,
                  fontFamily: fonts['DMSans-Bold'],
                }}>
                {t('common:team')}
              </Text>
}
            



          </View>
        </View>
        :null}



{data.length>0?

<View
          style={{
            height: 1,
            borderWidth: 0.2,
            borderColor: Colors.grayMedium,
            margin: 12,
            width: widthPercentageToDP(87),
            backgroundColor: Colors.grayMedium,
            alignSelf: 'center',
          }}
        />
:null}

        <FlatList
          vertical={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
          renderItem={({item, index}) => {
            return (
              <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Text
                    style={{
                      color: type == 'prize' || type=='winning' ? Colors.darkGrey : Colors.white,
                      fontSize: RFValue(14),
                      fontFamily: fonts['DMSans-Medium'],
                    }}>
                    {type == 'prize' || type=='winning' ? item.to_rank==item.from_rank? item.to_rank : item.rank: item.to_rank==item.from_rank? item.to_rank : item.rank }
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      color: type == 'prize' || type=='winning' ? Colors.darkGrey : Colors.white,
                      fontSize: RFValue(14),
                      fontFamily: fonts['DMSans-Medium'],
                    }}>
                    {type == 'prize' || type=='winning'
                      ? '₹' + item.price
                      :item.team_name?item.team_name:t('common:teamShort')} {item.team_name?<Text style={{fontSize:RFValue(6)}}>{t('common:teamShort')} {item.TeamName}</Text>:item.TeamName}
                  </Text>
                </View>
              </View>
              <View
        style={{
          height: 1,
          borderWidth: 0.2,
          borderColor: Colors.seperatorColor,
          margin: 12,
          width: widthPercentageToDP(87),
          backgroundColor: Colors.seperatorColor,
          alignSelf: 'center',
        }}
      />
            </View>

            );
          }}
          ListEmptyComponent={() => (
            <View activeOpacity={10}>
              <Text style={[styles.stauts,{color: Colors.grey}]}>{t('common:contestEmptyMessg1')}</Text>
              <Text style={styles.stautsNext}>
              {t('common:contestEmptyMessg2')}
              </Text>
            </View>
          )}
          enableEmptySections={true}
          keyExtractor={(item, index) => index.toString()}
        />
      




      </View>
    </View>
  );
};
export default prizeLeaderboard;
