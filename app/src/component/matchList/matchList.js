import React, { useState } from 'react';
import icons from '../../../res/constants/icons'
import { View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP, heightPercentageToDP } from '../React Native Responsive Screen'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { NavigationContainer } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'
import { globalStyles } from '../../../res/style/appStyle'
import { Colors } from '../../../res/style/color'
import CountDown from '../../component/countComponent/countdown'
import { fonts } from '../../../res/style/fonts'

import ClockSvg from '../../../res/images/svg/clock.svg';
import ClockWhiteSvg from '../../../res/images/svg/clockWhiteSvg.svg';
import { useTranslation } from 'react-i18next';
import { call } from 'react-native-reanimated';
import Button from '../../component/widgets/loginButton/loginButton'


export default function matchList({ navigation, data,matchType, callback,loadMore }) {
  const { t } = useTranslation();
  const {timeUp, setTimeUp}=useState(true)


 const renderFooter = () => {
    // if (!isMoreLoading) return true;
  
    return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
        {data.length>0?
      <Button
                text={'Load More'}
                buttonColor={Colors.orange}
                style={{width:widthPercentageToDP(30)}}
                 onPress={loadMore}
              />
              :null}
              </View>
    );
  };



 
  return (

    <FlatList
      data={data}
      contentContainerStyle={{ paddingBottom: 120 }}
      renderItem={({ item }) =>
        // main view of matchlis..... sending params with hooks
        <TouchableOpacity
        disabled={matchType=='upcoming'? item.time>0 || timeUp? false:true : true}
          onPress={() => {

            
            var date_time = JSON.stringify(item.match_date_time);
            var match_date = date_time.substring(1, 11)
            var d = new Date(match_date);
            let shortMonth = d.toLocaleString('en-us', { month: 'short' }); /* Jun */
            let month = shortMonth.substring(4, 10);
            let year = shortMonth.substring(20, 24);
            let final_match_date = month + "TH " + year;


            
            navigation.navigate('contest', {
              name: item.title,
              date: item.time,
              day: final_match_date,
              data:item,
              match_id_c: item.match_id,
              match_status: item.match_status,
              team1shortname: item.team_short_name1,
              team2shortname: item.team_short_name2,
             
              jointype: 'home'


            })
          }}
          style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.items}>
            {/* person tag view */}
            {matchType=='upcoming'?
            <View style={{ position: 'absolute', justifyContent: 'center', alignSelf: 'center' }}>
              <View style={styles.personview}>
                <Image source={icons.vector} resizeMode='contain' />
                <Text style={{ fontSize: RFValue(12), color: Colors.darkGrey, fontFamily: fonts['DMSans-Medium'], fontStyle: 'normal' }}>{item.total_teams}</Text>
              </View>
            </View>
            :null
      }
            {/* Test series */}
            <View style={styles.testSeriesView}>
              <Text style={[styles.testSeriesText,{textAlign: 'center',}]} numberOfLines={1}>{item.league_name.toUpperCase()}</Text>
            </View>
            {/* Country VS country */}
            <View style={styles.countryVscountry}>
              <View style={{ position: 'absolute', marginLeft: 69 }}><Image source={icons.homestar} resizeMode="contain" /></View>
              {/* First cuntry and text */}
              <LinearGradient start={{ x: 0, y: 0.9 }} end={{ x: 0.9, y: 1 }} colors={['\'rgba' + '(' + item.team_color1 + ',' + '0.3' + ')\'', '\'rgba' + '(' + item.team_color2 + ',' + '0.3' + ')\'']} style={styles.firstCountryView}>
                <Image source={{ uri: item.team_image1 }} style={{ width: 28, height: 28 }} resizeMode="contain" />
                <Text style={styles.countryText}>{item.team_short_name1}</Text>

              </LinearGradient>
              {/* VS text */}

              <View style={{ marginTop: 10 }} ><Text style={styles.vStext}>{t('homePage:vs')}</Text></View>

              {/* Second Country view and Text */}
              <LinearGradient start={{ x: 0, y: 0.9 }} end={{ x: 0.9, y: 1 }} colors={['rgba(128,0,0,0.2)', 'rgba(255,165,0,0.1)']} style={styles.secondCountryView}>
                <View style={{ position: 'absolute', right: 75, top: 20 }}><Image source={icons.homestar} resizeMode="contain" /></View>
                <Image source={{ uri: item.team_image2 }} style={{ width: 28, height: 28 }} resizeMode="contain" />
                <Text style={styles.countryText}>{item.team_short_name2}</Text>
              </LinearGradient>

            </View>
            {/* Country VS country End */}
            {/* Lower Tags view */}
            {/* <View style={styles.lowertagsview}>
            <View style={styles.lowerTag1}>
              <Image tintColor='white' source={icons.vector} resizeMode='contain' />
              <Text style={{ fontSize: RFValue(9.5), fontWeight: 'bold',color:'white' }}>{item.match_date_time}</Text>
            </View>

            <View style={styles.lowerTag2}>
              <Text style={{ fontSize: RFValue(9.5), fontWeight: 'bold' }} >Line Up Out</Text>
            </View>
          </View> */}
          {matchType=='upcoming'?
           <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 5, marginTop: -13 }}>
              
           <View style={[Math.floor(item.time / 60) - (Math.floor(item.time / 60 / 60) * 60) < 25 && Math.floor(item.time / 60 / 60) <= 0 ? styles.timetag : styles.timetagblack,{padding:8}]}>
             <View style={{ marginRight: 5 }}>
               {Math.floor(item.time / 60) - (Math.floor(item.time / 60 / 60) * 60) < 25 && Math.floor(item.time / 60 / 60) <= 0 ? <ClockWhiteSvg /> : <ClockSvg />}
               </View>
             <View>
               <CountDown
                  onFinish={
                    ()=>
                    callback()

                  }
                 size={5}
                 until={item.time}
                 digitStyle={{ backgroundColor: null, borderWidth: 0, borderColor: null }}
                 digitTxtStyle={{ color: '#fff', fontSize: RFValue(8), fontFamily: fonts['DMSans-Medium'], fontStyle: 'normal' }}
                 timeLabelStyle={{ color: '#fff', fontSize: RFValue(8), fontFamily: fonts['DMSans-Bold'], fontStyle: 'normal' }}              
                 
                 timeToShow={['D', 'H', 'M', 'S']}
                 timeLabels={{ d: 'D', h: 'H', m: 'M', s: 'S' }}
                 showSeparator={true}
                 separatorStyle={{ color: '#fff' }}
               />
             </View>
           </View>
           {item.eleven_out == 1 ?
             <View style={styles.lineUpOut}>
               <Text style={{ fontSize: RFValue(8, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Medium'], fontStyle: 'normal' }}>
                 {t('homePage:lineUp')}
           </Text>
         
             </View> : null 

           }
         </View>
        :
        
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 5, marginTop: -13 }}>
              
              <Text style={styles.matchScoreText}>
                 {item.team_short_name1} {item.team1Score==''? null:item.team1Score} ({item.team1Over})
              </Text>
              <Text style={styles.matchScoreVSText}>
              {t('homePage:vs')}
              </Text>
              <Text style={styles.matchScoreText}>
              {item.team_short_name2} {item.team2Score==''? null:item.team2Score} ({item.team2Over})
              </Text>
        </View>
        
        }
           </View>
        </TouchableOpacity>
      }
      ListEmptyComponent={() =>
        <View
          style={{ justifyContent: 'center', alignSelf: 'center', height: heightPercentageToDP(50) }}
          activeOpacity={10}>
          <Text style={[globalStyles.stautsLiist]}>{t('common:emptyMessage1')}</Text>
          <Text style={globalStyles.stautsNextList}>{t('common:emptyMessage2')}</Text>
        </View>

      }
      //ListFooterComponent={renderFooter}
      keyExtractor={(item, index) => index.toString()}
    />

  );
}

const styles = StyleSheet.create({
  matchScoreText:{
    letterSpacing:0,
    color:Colors.darkGrey,
    fontFamily: fonts['DMSans-Bold'],
    fontSize: RFValue(8),
    fontWeight:'bold'


  },
  matchScoreVSText:{
    letterSpacing:0,
    color:Colors.highLight,
    paddingLeft:5,
    paddingRight:5,
    fontFamily: fonts['DMSans-Bold'],
    fontSize: RFValue(8),
    fontWeight:'bold'

  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  items: {
    backgroundColor: 'white',

    marginVertical: 8,
    width: widthPercentageToDP(90),
    borderRadius: 20,
    margin: 22,
   


  },
  title: {
    fontSize: 32,
  },
  personview: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#D1C6A8',
    color: 'white',


    marginTop: -8,
    padding: 4,
    borderRadius: 10,
    height: 18,
    width: 47
  },
  testSeriesView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13,

  },
  testSeriesText: {
    // opacity: 0.20,
    color: Colors.grayMedium,
    fontSize: RFValue(10),
    letterSpacing: 0.2,
    fontFamily: fonts['DMSans-Bold'],
    fontStyle: 'normal',
    width: 160

  },
  countryVscountry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -8,

  },
  firstCountryView: {
    // backgroundColor: 'orange',
    alignItems: 'center',
    width: 57,
    height: 62,
    padding: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: -3
  },
  vStext: {

    fontSize: RFValue(22),
    color: Colors.darkGrey,
    fontFamily: fonts['DMSans-Bold'],
    fontStyle: 'normal'
  },
  secondCountryView: {
    // backgroundColor: 'orange',
    alignItems: 'center',
    marginTop: -3,
    width: 57,
    height: 62,
    padding: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  countryText: {
    fontSize: RFValue(8),

    color: Colors.darkBlue,
    fontFamily: fonts['DMSans-Medium'],
    fontStyle: 'normal'
  },
  lowertagsview:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  lowerTag1: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'orange',
    padding: 5,
    borderRadius: 16,
    marginLeft: 75,
    height: 22,
    width: widthPercentageToDP(30),



  },
  lowerTag2: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#D1C6A8',
    padding: 5,
    borderRadius: 16,
    marginRight: 77,
    height: 22,




  },
  //time tag style

  timetag: {
    backgroundColor: Colors.orange,
    borderRadius: 20,
    //width: widthPercentageToDP(32),
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 4
  },
  timetagblack: {
    backgroundColor: Colors.black,
    borderRadius: 20,
    //width: widthPercentageToDP(32),
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 2
  },
  lineUpOut: {
    backgroundColor: Colors.highLight,
    borderRadius: 20,
    height: 20,
    width: widthPercentageToDP(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginBottom: 2
  },


});