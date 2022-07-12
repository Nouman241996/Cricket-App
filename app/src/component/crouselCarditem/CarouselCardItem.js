import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  Button,
} from 'react-native';
import Tags from 'react-native-tags';
export const SLIDER_WIDTH = Dimensions.get('window').width + 44;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);
import LinearGradient from 'react-native-linear-gradient';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import CountDown from '../../component/countComponent/countdown';
import { styles } from './style';
import { widthPercentageToDP, heightPercentageToDP } from '../React Native Responsive Screen'
import { Colors } from '../../../res/style/color';
import {fonts} from '../../../res/style/fonts'
import ClockSvg from '../../../res/images/svg/clock.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CarouselCardItem = ({ item, index, type,tabstatus }) => {

  
  //  console.log('contest number is--',tabstatus=='upcoming')
// console.log('league name is--',item.league_name)
// console.log('match status is--',item.match_status)
// console.log('team 1 name',item.team_short_name1)
// console.log('team 1 name',item.team_short_name2)
// console.log('eleven out is ',item.eleven_out)


var myloop = [];

for (let i = 0; i < item.team_count; i++) {
  myloop.push(
<View  key={i} style={{   backgroundColor: Colors.grayMedium,
  marginTop: -1,
  height: 25,
  width:25,
  borderRadius: 30,
  marginLeft: 5,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth:1,borderColor:'white'}}>
<Text style={{
 fontFamily: fonts['DMSans-Bold'],
 fontStyle:'normal',
fontSize: RFValue(10),
color: 'white',
}}>T{i+2-1}</Text>
</View>

  );
}
  
  var elevenOut=item.eleven_out
  
  
  var color1= 'F5CD28'
  var color2='8E1841'
  if(item.team1_color){
     color1 = item.team1_color.substr(2, 10);
   
  }
  if(item.team2_color){
    color2 = item.team2_color.substr(2, 10);
  }
 
  
  //  console.log("color is",color1)

  function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.2)';
    }
    throw new Error('Bad Hex');
}

// hexToRgbA('#'+color+'')

  return (
    <View key={index}>
      <View>
        <LinearGradient
          start={{ x: 0, y: 0.9 }}
          end={{ x: 0.9, y: 1 }}
          // colors={['rgba('+item.team_color1+',0.2)','rgba('+item.team_color2+',0.2)']}
          colors= {['rgba('+hexToRgbA('#'+color1+'')+')', 'rgba('+hexToRgbA('#'+color2+'')+')']}
          style={{
            borderRadius: 17,
            margin: 5,
            width:  type == 'tropy' ? widthPercentageToDP(92):widthPercentageToDP(85),
            height: type == 'tropy' ? heightPercentageToDP(29) : heightPercentageToDP(28),
            marginLeft: 15,
            marginBottom: 15,
            
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 16,
              marginLeft: type == 'tropy' && item.time === 0 ? 13 : 13,
              justifyContent: 'space-between',
            }}>

        
            <View style={{marginLeft:type == 'tropy'?10:10,width:160}}>
              <Text style={[styles.testText,{textAlign:'left'}]} numberOfLines={1}>
                {item.league_name}
               
              </Text>
            </View>
            {type == 'tropy'   &&  tabstatus=='upcoming' ? (
              <View style={{flexDirection: 'row', justifyContent:'flex-end' ,marginTop:3 }}> 
              <View style={{ marginRight:0}}>
                <ClockSvg
                  
                  width={10}
                  height={10}></ClockSvg> 
                   </View>
                <View style={{marginRight:13}}>
                  <CountDown
                    size={5}
                    until={item.time}
                    digitStyle={{
                      backgroundColor: null,
                      borderWidth: 0,
                      borderColor: null,
                    }}
                    digitTxtStyle={{ color: Colors.grayMedium, fontSize: RFValue(8),  fontFamily: fonts['DMSans-Regular'],
                    fontStyle:'normal' }}
                    timeLabelStyle={{
                      color: Colors.grayMedium,
                       fontSize: RFValue(8),  fontFamily: fonts['DMSans-Bold'],
                    fontStyle:'normal'
                    }}
                    timeToShow={['D', 'H', 'M', 'S']}
                    timeLabels={{ d: 'D', h: 'H', m: 'M', s: 'S' }}
                    showSeparator={true}
                    separatorStyle={{ color: Colors.grayMedium }}
                  />
                </View>
            
              </View>
            ) : (
              <View style={[styles.livetag,{backgroundColor:type == 'tropy'?Colors.highLight2:Colors.orange}]}>
                <Text style={styles.statusText}>{item.match_status=='Result'?'COMPLETED': item.match_status=='Fixture'?'UPCOMING': item.match_status.toUpperCase()}</Text>
              </View> 
            )}
          </View>

          <View style={styles.Mainview}>
            <View style={styles.countryVScountryMainView}>
              <View style={styles.countryImage1}>
                <Image source={{ uri: item.team_image1 }} style={{ width: 35, height:35 }} resizeMode="contain" />
                <Text style={styles.countryText}>{item.team_short_name1}</Text>
              </View>
              <View>
                <Text style={styles.vsText}>vs</Text>
              </View>
              <View style={styles.countryImage2}>
                <Image source={{ uri: item.team_image2 }} style={{ width: 35, height: 35 }} resizeMode="contain" />
                <Text style={styles.countryText}>{item.team_short_name2}</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 20,
              marginLeft: 15,
              marginTop: -20,
              marginBottom: 15,
              backgroundColor: 'White',
            }}>
            <View style={{ flexDirection: 'row' ,marginTop:2}}>
          {myloop.slice(0,2)}  

           {item.team_count>2?
                <View
                  style={
                    {
                      backgroundColor: type== 'trophy'?Colors.darkGrey:Colors.white,
                      // marginTop: -1,
                      height: 25,
                      width:25,
                      borderRadius: 30,
                      marginLeft: 5,
                      justifyContent: 'center',
                      alignItems: 'center',

                    }
                  }>
                  <Text style={{
                     fontFamily: fonts['DMSans-Bold'],
                     fontStyle:'normal',
                    fontSize: RFValue(10),
                    color:type== 'trophy'? 'white':Colors.darkGrey,
                  }}>+{item.team_count-2}</Text>


                </View>
:null}
                

             
            </View>
            <View style={{ flexDirection: 'row'}}>
            {type == 'tropy' ? (
              <View style={[styles.contesttag,{marginRight:10}]}>
                <Text style={styles.statusText}>
                  {item.contest_count} Contest 
                </Text>
              </View>
            ) : null}
            {type == 'tropy' && tabstatus=='upcoming' && item.eleven_out ==='1' ? (
              <View style={{ flexDirection: 'row', marginTop: 7, marginRight: -5 }}>
                <Text style={{fontSize:RFValue(12),  fontFamily: fonts['DMSans-Medium'],
                     fontStyle:'normal',}}>Line up</Text>
                    
                     <View> 
                <Image
                  style={styles.tickImage}
                  source={require('../../../res/images/tick.png')}></Image></View>
              </View>
                     
            ) : null}
</View>
            
          </View>
        </LinearGradient>
        </View>
    </View>
  );
};

export default CarouselCardItem;
