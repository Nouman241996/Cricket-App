import React, {Component} from 'react';
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
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Platform
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {icons, api_link} from '../../../../res/constants';
import CarouselCards from '../Components/CarouselCards';
import MainHeader from '../../../component/mainHeaderComponent/Mainheader';
import Matchstatuscomponent from '../Components/matchstatus';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {fetchHomeApi} from '../../../redux/actions/homeAction';
import {styles} from './style';
import {Colors} from '../../../../res/style/color';
import Matchlist from '../../../component/matchList/matchList';
import RBSheet from "react-native-raw-bottom-sheet";
import CrossSvg from '../../../../res/images/svg/cross'
import LoginLogo from '../../../../res/images/svg/loginlogo';
import ProGameSvg from '../../../../res/images/svg/progame'
import SportsGameSvg from '../../../../res/images/svg/sportsgame'
import ScorekiyaSvg from '../../../../res/images/svg/scorekyagame'
import Modal from 'react-native-modal';

import {fonts} from '../../../../res/style/fonts';
import LinearGradient from 'react-native-linear-gradient';
import messaging from '@react-native-firebase/messaging';
import { fcmService } from "../../../utills/FCMService";
import analytics from '@react-native-firebase/analytics';
import Entypo from 'react-native-vector-icons/Entypo';
import { getApiSerive } from "../../../utills/getDataService";
import { heightPercentageToDP } from '../../../component/React Native Responsive Screen';
import RNFS from 'react-native-fs'
import RNApkInstallerN from 'react-native-apk-installer-n';
// import ProgressBar from "react-native-animated-progress";
import {ProgressBar} from '@react-native-community/progress-bar-android';
import VersionNumber from 'react-native-version-number';
import { withTranslation } from 'react-i18next';
//var RNFS = require('react-native-fs'); 
var version=VersionNumber.appVersion; //1.0000
class Home extends Component {
  
  constructor(props) {
   // this.unsubscribe;
    super(props);
    const { t } = this.props;
    // const status_match = ;
    var data = [];
    this.state = {
      setClick: false,
      status_match:[t('homePage:upcomming'), t('homePage:live'), t('homePage:completed')],
      ID: '',
      is_select: '',
      data: [],
      isLoading: true,
      refreshing: true,
      carousel_data: [],
      liveData: [],
      completedData: [],  
      isModalVisible: false,
      showRbSheet:true,
      newVersion:'',
      updateNote:[],
      downloadProgress:'',
      versionData:'',
      downloadProgressText:''
      
    };
  }
 _downLoad =()=>{
    console.log('this')
    const filePath =  RNFS.DocumentDirectoryPath + '/CrickPro.apk';
    const download = RNFS.downloadFile({
        fromUrl: 'https://cric.one/cric.one-v1.0.apk',
          toFile: filePath,
        progress: res => {
          //console.log('actual res is'.res)(res.bytesWritten / res.contentLength)*100).toFixed(0)
          this.setState({downloadProgress:((res.bytesWritten / res.contentLength).toFixed(2))}),
          this.setState({downloadProgressText:((res.bytesWritten / res.contentLength)*100).toFixed(0)})
            console.log(this.state.downloadProgress);
        },
        progressDivider: 1
    });
     
    download.promise.then(result => {
        if(result.statusCode == 200){
            RNApkInstallerN.install(filePath)
            console.log('i am installed',result.statusCode)
      this.setState({isModalVisible: false});
    
        }
    });
    
  
    
  
   }
    saveData = async (token,note) => {
    try {
      await AsyncStorage.setItem('@newVersion',JSON.stringify({token, note}))
      this.setState({versionData:token})
      console.log('Data successfully saved',token,note)
    } catch (e) {
      console.log('Failed to save the data to the storage')
    }
  }

  _toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
   
  };
  clearAsyncStorage = async () => {
    await AsyncStorage.removeItem('@teamData');
}
  _fetchData = () => {
    console.log(
      'home url is:',
      api_link.cricketapi + 'my_match_record/?user_id='+this.props.userSuccess.user_id+''
    );
   
    // this.clearAsyncStorage();
    this.props.fetchHomeApi(api_link.cricketapi + 'my_match_record/?user_id='+this.props.userSuccess.user_id+'');
  };


  _upgradeAppFetchData = () => {
    console.log(
      'upgradeApp url is:',
      api_link.upgradeApp 
    );
    var url=  api_link.upgradeApp ;
    getApiSerive.getApiClass(url).then((res)=>{
      this.setState({newVersion:res.data.new_version})  
      const yourData = JSON.parse(res.data.note);
      console.log('upgrade your data is',this.state.newVersion!=version)
      this.setState({updateNote:yourData})
      this.saveData(res.data.new_version,yourData)
      if(res.data.new_version!=version){
        this.RBSheet.open()
      
      }
    
  })
  
    
  };

  componentDidMount() {

   // console.log('selected language is:',StringsOfLanguages.Hometabs.upcomming)

      console.log("android updated version is",version);
     analytics().logEvent('propick11_homepage_visits', {       
      description: "visits on propick11 home page"
      })
     { Platform.OS === 'android' ? ( this._upgradeAppFetchData()):null}
   
     fcmService.Notification(this.onInitialNotification,)
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this._fetchData();
      
    });
    // if(this.state.newVersion===version){
    //   this.RBSheet.open()
    // }
  }
  

  onInitialNotification = (remoteMessage, fromBackground) => {
    console.log("processNotification onRegister:", remoteMessage, fromBackground)
    if (remoteMessage) {
    console.log('body', remoteMessage.data)
      if (remoteMessage.data) {
        // If user tab on the notification when the app is in background or not running
        if (fromBackground && remoteMessage.data) {
         
          var date_time = JSON.stringify(remoteMessage.data.match_date_time);
          var match_date = date_time.substring(1, 11)
          var d = new Date(match_date);
          let shortMonth = d.toLocaleString('en-us', { month: 'short' }); /* Jun */
          let month = shortMonth.substring(4, 10);
          let year = shortMonth.substring(20, 24);
          let final_match_date = month + "TH " + year;
    
          this.props.navigation.navigate('contest', {
            name: remoteMessage.data.title,
            date: remoteMessage.data.time,
            day: final_match_date,
            data:remoteMessage.data,
            match_id_c: remoteMessage.data.match_id,
            match_status: remoteMessage.data.match_status,
            team1shortname: remoteMessage.data.team_short_name1,
            team2shortname: remoteMessage.data.team_short_name2,
           
            jointype: 'home'
    
    
          })
    

      }
    }
  }
}




  UNSAFE_componentWillReceiveProps(nextProps) {
    // console.log('componentWill Receive props', nextProps.t('homePage:upcomming'));
     this.setState({status_match:[nextProps.t('homePage:upcomming'), nextProps.t('homePage:live'), nextProps.t('homePage:completed')]})
     this.setState({data: nextProps.homeSuccess.fixtureMatch});
    this.setState({liveData: nextProps.homeSuccess.liveMatches});
    this.setState({completedData: nextProps.homeSuccess.completedMatches});
    if (nextProps.homeSuccess.myMatch) {
      this.setState({carousel_data: nextProps.homeSuccess.myMatch});
    } else {
      this.setState({carousel_data: []});
    }
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    if (this.state.refreshing == false) {
      this._fetchData();

      this.setState({refreshing: false});
    }
  };

  handlerButtonOnClick = (i) => {
    const newstate = !this.state.setClick;
    this.setState({
      setClick: newstate,
      is_select: i,
    });
  };
  render() {
    const { t } = this.props;
    const {setClick} = this.state;
    const {ID} = this.state;
    const {is_select} = this.state;
    const {data, isLoading} = this.state;
    
    return (
      <>
        <SafeAreaView style={{backgroundColor: Colors.white, flex: 1}}>
          <MainHeader navigation={this.props.navigation} />
          {this.state.carousel_data.length > 0 ? 
          
          <View
          style={{
            flexDirection: 'column',
            backgroundColor: Colors.mainbackground,
            marginTop: 3,
          }}>
          <CarouselCards
            {...this.props}
            itemsdata={this.state.carousel_data}
            navigation={this.props.navigation}
          />
        </View>
          
        : null}
          <View style={{flex: 1, backgroundColor: Colors.darkGrey}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly',marginTop:5}}>
              {this.state.status_match.map((status, index) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={index}
                  onPress={() => this.handlerButtonOnClick(index)}>
                  <View style={[styles.tabbarStyle,{backgroundColor: is_select == index ? Colors.orange : null}]}>
                  
                    <View>
                      <Text
                        style={
                          is_select == index
                            ? styles.matchstatusbartext
                            : styles.matchstatusbartextSelected
                        }>
                        {status}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            {/* matches matchlist view */}
            {is_select == 0 ? (
              <View style={{marginTop: 2}}>
                {this.props.homeRequest ? (
                  <View style={styles.loaderStyle}>
                    <ActivityIndicator
                      color={Colors.orange}
                      style={{height: '10%', width: 50}}
                    />
                  </View>
                ) : (
                  <Matchlist
                    data={this.state.data}
                    navigation={this.props.navigation}
                    callback={()=> {
                      this.props.fetchHomeApi(api_link.cricketapi + 'my_match_record/?user_id='+this.props.userSuccess.user_id+'');
  
                      console.log("done na")}}
                    matchType="upcoming"></Matchlist>
                )}
              </View>
            ) : null}
            {is_select == 1 ? (
              <View style={{marginTop: 2}}>
                {this.props.homeRequest ? (
                  <View style={styles.loaderStyle}>
                    <ActivityIndicator
                      color={Colors.orange}
                      style={{height: '10%', width: 50}}
                    />
                  </View>
                ) : (
                  <Matchlist
                    data={this.state.liveData}
                    navigation={this.props.navigation}
                    matchType="live"></Matchlist>
                )}
              </View>
            ) : null}
            {is_select == 2 ? (
              <View style={{marginTop: 2}}>
                {this.props.homeRequest ? (
                  <View style={styles.loaderStyle}>
                    <ActivityIndicator
                      color={Colors.orange}
                      style={{height: '10%', width: 50}}
                    />
                  </View>
                ) : (
                  <Matchlist
                    data={this.state.completedData}
                    navigation={this.props.navigation}
                    matchType="completed"></Matchlist>
                )}
              </View>
            ) : null}
          </View>


 

<RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          openDuration={250}
          
        >
         
                      <View >
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View >
                            <Text>         </Text>
                          </View>
                          <View style={{marginTop:17,marginRight:16}}>
                          <Text style={styles.modalItemText}>{t('common:upgradeMessage')}</Text>
                          </View>
                          <View style={{marginRight:5,marginTop:5}}>
                          <CrossSvg onPress={()=>{this.RBSheet.close()}} height={35} width={35}></CrossSvg>
                          </View>
                         
                        </View>
                        <View style={{alignSelf:'center',marginTop:10}}>
                        <LoginLogo height={80} width={80}></LoginLogo>
                      </View>
                      <View style={{alignSelf:'center'}}>
                        
               <FlatList
                vertical={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.updateNote}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40,marginTop:15 }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                  
                    return (

                     
                          <View style={{flexDirection:'row'}}>
                        <Entypo name='dot-single' size={20}></Entypo>
                      <Text style={styles.upgradeText}>{item}</Text>
                      </View>
                    );
                  }}
                         />
                        
                           
                      </View>
                     
                      </View>
                      <TouchableOpacity 
                      onPress={()=>{
                        this._downLoad(),
                        this._toggleModal(),
                        this.RBSheet.close()
                      }
                      }
                       style={styles.upgradeButton}><Text style={styles.upgradeButtonText}>{t('common:upgrade')}</Text></TouchableOpacity>
                    
        </RBSheet>


<View>
<Modal 
        isVisible={this.state.isModalVisible}>
        <View style={{backgroundColor:Colors.white,height:heightPercentageToDP(19)}}>
          
            <View style={{padding:5,marginLeft:7,marginTop:15}}>
            <Text style={styles.modalItemText}>{t('common:downloadMessage')}</Text>
            </View>
        
         <View >
           
        <View style={{padding:16}}>
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          color={Colors.orange}
          progress={Number(this.state.downloadProgress)}
        />
      
        </View>
        <View style={{flexDirection:'row',marginRight:15,marginTop:-10,justifyContent:'space-between'}}>
        <View style={{marginLeft:15,}}>
        
        {this.state.downloadProgress? <Text style={styles.upgradeText}>{this.state.downloadProgressText}%</Text >: 
        <Text style={styles.upgradeText}>0%</Text>}
        
        </View>
        <Text style={styles.upgradeText}>
        {this.state.downloadProgress? <Text style={styles.upgradeText}>{this.state.downloadProgressText}/100</Text>: 
        <Text style={styles.upgradeText}>0/100</Text>}
        </Text>
         
        </View>
      </View>
        </View>
      </Modal>
      </View>


        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userSuccess:state.userR.userSuccess,
  homeRequest: state.homeR.homeRequest,
  homeSuccess: state.homeR.homeSuccess,
  homeFailure: state.homeR.homeFailure,
});

const mapDispatchToProps = {
  fetchHomeApi,
};

export default  connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Home));