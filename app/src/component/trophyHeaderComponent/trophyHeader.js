import React, { Component } from 'react';
import {
SafeAreaView,
StyleSheet,
ScrollView,
View,
Text,
StatusBar,
TouchableOpacity,
Image,
Dimensions,
Button,
TouchableHighlight,

} from 'react-native';
import { icons } from '../../../res/constants';
import HomeSvg from '../../../res/images/svg/home.svg'
import BackSvg from '../../../res/images/svg/back.svg'
import CountDown from '../../component/countComponent/countdown'
import { Colors } from '../../../res/style/color'
import { styles } from './style'
import { RFValue } from 'react-native-responsive-fontsize';
import { fonts } from '../../../res/style/fonts';
import { useTranslation } from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import { fetchDrawerSwitcher } from '../../redux/actions/gameSwitcherAction';

const trophyHeader = (props, type) => {
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const goBack = () => {
    if(props.status==='backMyTeam'){
props.navigation.navigate('Home')
    }else{
      props.navigation.goBack()
    }
 
  }

  return (
    <>

      <View style={styles.mainheader}>
        <TouchableOpacity
          onPress={() => {
            goBack()
          }}
        >
          <BackSvg
            style={styles.barimage}
            height={15} width={15}
          ></BackSvg>

        </TouchableOpacity>
      <View style={{marginLeft:props.type==='completed' || props.type=='livejointeam' || props.type=='myTeams' ? 0: 55,marginRight: props.type=='myTeams'?20:0}}>
      <Text style={styles.title}>{props.title}</Text>
        </View>  


        <View style={{flexDirection:'row',padding:props.type==='completed'? 0:8}}>
          {props.type =='completed' || props.type=='livejointeam'? (
<TouchableOpacity
  onPress={()=>{
    dispatch(fetchDrawerSwitcher(2))
    props.navigation.navigate('PointSystem')}}
  style={{marginRight:16 }}>
  <Text style={{fontSize:RFValue(14),color:Colors.orange  ,fontFamily:fonts['DMSans-Bold'],}}>{t('common:pts')}</Text>
  </TouchableOpacity>

          ):(
           <> 
          <View>
            {props.icon}
          </View>
          <View>
            <CountDown
              size={5}
              until={props.counterValue}
              digitStyle={{
                backgroundColor: null,
                borderWidth: 0,
                borderColor: null,
              }}
              digitTxtStyle={{ color: Colors.grayMedium, fontSize: 8 }}
              timeLabelStyle={{
                color: Colors.grayMedium,
                fontSize: 8,
                fontWeight: 'bold',
              }}
              timeToShow={['D', 'H', 'M', 'S']}
              timeLabels={{ d: 'D', h: 'H', m: 'M', s: 'S' }}
              showSeparator={true}
              separatorStyle={{ color: Colors.grayMedium }}
            />
          </View>

         </> )}
        </View>

      </View>

    </>
  )

}

export default trophyHeader;