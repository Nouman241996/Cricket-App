import React, {useState, useEffect} from 'react';
import {
  Text,
  ScrollView,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {fetchAppReminderApi} from '../../../../redux/actions/appReminder';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../../../component/React Native Responsive Screen';
import {styles} from './style';
import ParentCard from '../../../../../res/images/svg/parentCard.svg';
import HomeSvg from '../../../../../res/images/svg/home.svg';
import Kya from '../../../../../res/images/svg/kya.svg';
import Sportcard from '../../../../../res/images/svg/sportCard.svg';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import MainHeader from '../../../../component/ParentComponent/mainHeader/mainHeader';
import CarouselCard from '../../Component/CarouselCard';
import {Colors} from '../../../../../res/style/color';
import {fonts} from '../../../../../res/style/fonts';
import {getApiSerive} from '../../../../utills/getDataService'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchDrawerSwitcher} from '../../../../redux/actions/gameSwitcherAction'

var ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
import analytics from '@react-native-firebase/analytics';
const MainPage = (props) => {
  const [crouselData,setCrouselData]=useState([])
  const [crouselState,setCrouselState]=useState(false)
  const userData = useSelector((state) => state.userR.userSuccess);
  console.log('user ooodata is',userData)
   const  dispatch = useDispatch();
  useEffect(()=>{
    setCrouselState(true)
    getApiSerive.getApiClass('https://t10cricket.live/myrest/user/get_offers').then((res=>{
    
      if(res.responsecode==200){
        setCrouselData(res.data)
        setCrouselState(false)
      }else{
        setCrouselState(false)
      }
    }))
  },[])

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
      <ScrollView style={{flex:1}}>
        <View>
          <MainHeader  
          navigation={props.navigation}
          />
        </View>
        <View style={{flex: 0.7}}>
          {crouselState?
        <ShimmerPlaceholder
        autoplay={true}
        style={styles.image}
        >
        <View style={{height:500}}></View>
      </ShimmerPlaceholder>
      :
          
          <CarouselCard 
          data={crouselData}
          />
          
}
<View style={{bottom:crouselState?0:20}}>
          
          <View style={styles.playNowContainer}>
<View style={styles.horizontalLine}/>
<View style={{marginRight: 14, marginLeft: 14,}}>
            <Text style={styles.mainHeading}>
              Play Now
            </Text>
          </View> 
          
          <View style={styles.horizontalLine}/> 
          
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              // padding: 10,
              marginTop:20,
              marginBottom:60
            }}>
            <TouchableOpacity style={{marginLeft:13}}
              onPress={async() => {
                if (userData) {
                  dispatch(fetchDrawerSwitcher(1))
                  console.log("pro clicked")
                  await AsyncStorage.setItem('@ReminderData','pro');
                  // dispatch(fetchAppReminderApi('pro'))
                  props.navigation.navigate('Home');
                  analytics().logEvent('propick11_clicks', {       
                    description: "clicks on propick11 from home page"
                    })
                  //console.log("home is pressed")
                } else {
                  props.navigation.navigate('login');
                }
              }}>
              <View style={[styles.card, {backgroundColor: Colors.proPic}]}>
                <HomeSvg
                  height={80}
                  width={80}
                  style={styles.imageView}></HomeSvg>
              </View>
              <Text style={styles.cardText}>Pro Pick 11</Text>
            </TouchableOpacity>

            <View opacity={0.5}>
              <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('@ReminderData','card');
                // dispatch(fetchAppReminderApi('card'))
                analytics().logEvent('sportsCard_clicks', {       
                  description: "clicks on sportscards from home page"
                  })
              }}
              style={[styles.card, {backgroundColor: Colors.sportCard,opacity:0.3}]}>
                <Sportcard
                  height={80}
                  width={80}
                  style={styles.imageView}></Sportcard>
              </TouchableOpacity>
              <Text style={styles.cardText}>Sports.Cards</Text>
            </View>
            <View 
            opacity={0.5} 
            style={{marginRight:13}}>
              <TouchableOpacity
               onPress={async()=>{
                await AsyncStorage.setItem('@ReminderData','kya');
                // dispatch(fetchAppReminderApi('kya'))
                analytics().logEvent('scorekiya_clicks', {       
                  description: "clicks on score kiya from home page"
                  })
              }}
              style={[styles.card, {backgroundColor: Colors.scorekya}]}>
                <Kya height={80} width={80} style={styles.imageView}></Kya>
              </TouchableOpacity>
              <Text style={styles.cardText}>Score Kya?</Text>
            </View>
          </View>
        </View>
      
  
        </View>


        {/* <ParentCard /> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default MainPage;
