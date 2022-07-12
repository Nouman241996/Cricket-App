import React, { useState, useEffect,useCallback } from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../component/React Native Responsive Screen'

import { styles } from './style';
import { Colors } from '../../../res/style/color'
import { icons } from '../../../res/constants'
import EditBtn from '../../../res/images/svg/editBtn.svg'
import CloneBtn from '../../../res/images/svg/cloneBtn.svg'
import CrossSvg from '../../../res/images/svg/cross';
import Modal from 'react-native-modal';
import {fonts} from '../../../res/style/fonts';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { useTranslation } from 'react-i18next';
const transactionModal = ({emptyCashError,cashLimit, props,amount,walleltSummery,contestfee,deposit,winnings,extracash,moneytoadded,joinPress,modelVisible,closeModel}) => {
  const { t } = useTranslation();
  //const {props}=callback
    const [modalVisible,setModalVisible]=useState(true)
    const [money, setMoney] =useState(0);
    const [walletBalance, setWalletBalance] =useState('10');
    // const handleClick = useCallback(() => {
    //   console.log(money)
    // }, [money]);

  const closeModal = () => {
    setModalVisible(false);
  };
 
console.log(walleltSummery,"or",contestfee,":",walleltSummery<contestfee)


function  moneyFormat(price, sign = '₹') {
  const pieces = parseFloat(price).toFixed(2).split('');
  let ii = pieces.length - 3;
  while ((ii -= 3) > 0) {
    pieces.splice(ii, 0, ',');
  }
  return sign + pieces.join('');
}

const callBack = (text) => {
  amount(text)
}

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
          {/* transection modal */}
      <Modal
            testID={'modal'}
            isVisible={modelVisible}
            //swipeDirection={['up', 'left', 'right', 'down']}
            style={{
              backgroundColor: 'rgba(0,0,0,0)',
              margin: 0,
            }}>
            <View style={styles.ViewBackground}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: -2,
                }}>
                <TouchableOpacity onPress={closeModel}>
                  <CrossSvg height={25} width={25}></CrossSvg>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center',marginTop: -9,}}>
                <Text
                  style={{
                    fontSize: RFValue(17, 580),
                    fontFamily: fonts['DMSans-Bold'],
                  }}>
                  {t('common:transDetail')}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: '9%',
                }}>
                <Text
                  style={{
                    fontSize: RFValue(17, 580),
                    fontFamily: fonts['DMSans-Bold'],
                    color: '#7782AD',
                  }}>
                {t('common:walletBalance')}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: '3.5%',
                }}>
                <Text
                  style={{
                    fontSize: RFValue(14, 580),
                    fontFamily: fonts['DMSans-Bold'],
                  }}>
                   {moneyFormat(walleltSummery)}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: '5.0%',
                }}>
                <View style={{flexDirection: 'row', width: '97%'}}>
                  <Text style={styles.seperatorStyle}>.</Text>
                </View>
               
                {/* <View style={{flexDirection: 'row', width: '100%'}}>
                  <Text style={styles.seperatorStyle}>.</Text>
                </View> */}
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',padding:3,marginTop:6}}>
                 <View><Text style={{
                    fontSize: RFValue(17, 580),
                    fontFamily: fonts['DMSans-Bold'],
                    color: '#7782AD',
                  }}>{t('common:contestFee')}</Text></View> 
                 <View><Text style={{
                    fontSize: RFValue(17, 580),
                    fontFamily: fonts['DMSans-Bold'],
                  }}>{moneyFormat(contestfee)}</Text></View> 
                </View>
                <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: '3.0%',
                }}>
                <View style={{flexDirection: 'row', width: '97%'}}>
                  <Text style={styles.seperatorStyle}>.</Text>
                </View>
               
                {/* <View style={{flexDirection: 'row', width: '100%'}}>
                  <Text style={styles.seperatorStyle}>.</Text>
                </View> */}
              </View>
              <View style={{marginTop:10,marginBottom:10}}>
              {/* <View style={{flexDirection:'row',justifyContent:'space-between',padding:3,marginTop:6,marginBottom:-4}}>
                 <View><Text style={{
                    fontSize: RFValue(11, 580),
                    fontFamily: fonts['DMSans-Medium'],
                    color: '#262C46',
                  }}>Deposit:</Text></View> 
                 <View ><Text style={{
                    fontSize: RFValue(11, 580),
                    fontFamily: fonts['DMSans-Medium'],
                  }}>{moneyFormat(deposit)}</Text></View> 
                </View> */}
                {/* <View style={{flexDirection:'row',justifyContent:'space-between',padding:3,marginTop:6,marginBottom:-4}}>
                 <View style={{marginTop:5}}><Text style={{
                    fontSize: RFValue(11, 580),
                    fontFamily: fonts['DMSans-Medium'],
                    color: '#262C46',
                  }}>Winnings:</Text></View> 
                 <View style={{marginTop:5}}><Text style={{
                    fontSize: RFValue(11, 580),
                    fontFamily: fonts['DMSans-Medium'],
                  }}>{moneyFormat(winnings)}</Text></View> 
                </View> */}
                {/* <View style={{flexDirection:'row',justifyContent:'space-between',padding:3,marginTop:6,marginBottom:-4}}>
                 <View style={{marginTop:5}}><Text style={{
                    fontSize: RFValue(11, 580),
                    fontFamily: fonts['DMSans-Medium'],
                    color: '#262C46',
                  }}>ExtraCash:</Text></View> 
                 <View style={{marginTop:5}}><Text style={{
                    fontSize: RFValue(11, 580),
                    fontFamily: fonts['DMSans-Medium'],
                  }}>{moneyFormat(extracash)}</Text></View> 
                </View> */}
                </View>
                {walleltSummery<contestfee?
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:3,marginTop:22,marginBottom:5}}>
                 <View><Text style={{
                    fontSize: RFValue(17, 580),
                    fontFamily: fonts['DMSans-Bold'],
                    color: '#7782AD',
                  }}>{t('common:moneyAdded')}:</Text></View> 
                 <View><Text
                 numberOfLines={1}
                 style={{
                    fontSize: RFValue(17, 580),
                    width:80,
                    textAlign:'right',
                    fontFamily: fonts['DMSans-Bold'],
                  }}>{moneyFormat(contestfee-walleltSummery)}</Text></View> 
                </View>
                :null}


{walleltSummery<contestfee?
                <View style={{padding:12}}>
        <TextInput
        value={money}
        style={[styles.inputTextStyle,{borderColor:Colors.black},{fontSize:RFValue(12)}]}
        placeholder={t('common:enterMoney')}
        keyboardType={'phone-pad'}
        onChangeText={text =>{ 
          setMoney(text)
          callBack(text)
        
        
        }}
        placeholderTextColor={Colors.grayMedium}
       
              
      />
</View>
:null}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: '2.0%',
                  marginBottom:10
                }}>
                <TouchableOpacity style={styles.buildteamtag}
                 onPress={joinPress}
                >
                   <Text style={styles.buildteamtagtext}>{walleltSummery<contestfee?t('common:addCash'):t('common:join')}</Text>
                </TouchableOpacity>
              </View>
              
            </View>
          </Modal>
         
    </View>
  );
};
export default transactionModal;
