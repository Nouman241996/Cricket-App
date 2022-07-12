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
} from 'react-native';
import {icons, api_link} from '../../../../../res/constants';
import CarouselCards from '../../../Home/Components/CarouselCards';
import MainHeader from '../../../../component/mainHeaderComponent/Mainheader';
import Matchstatuscomponent from '../../../Home/Components/matchstatus';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {fetchHomeApi} from '../../../../redux/actions/homeAction';
import {fetchGameSwitcherApi} from '../../../../redux/actions/gameSwitcherAction';
import {styles} from './style';
import {Colors} from '../../../../../res/style/color';
import Matchlist from '../../../../component/matchList/matchList';
import CrossSvg from '../../../../../res/images/svg/cross'
import AppLogoSvg from '../../../../../res/images/svg/applogo'
import ProGameSvg from '../../../../../res/images/svg/progame'
import SportsGameSvg from '../../../../../res/images/svg/gameicon2'
import ScorekiyaSvg from '../../../../../res/images/svg/gameicon3'
import Modal from 'react-native-modal';
import {fonts} from '../../../../../res/style/fonts';
import LinearGradient from 'react-native-linear-gradient';
import messaging from '@react-native-firebase/messaging';
import { fcmService } from "../../../../utills/FCMService";
import analytics from '@react-native-firebase/analytics';
import { NavigationActions, StackActions } from 'react-navigation';
class gameHome extends Component {
  constructor(props) {
   // this.unsubscribe;
    super(props);
    const status_match = ['UPCOMING', 'LIVE', 'COMPLETED'];
    var data = [];
    this.state = {
      setClick: false,
      status_match,
      ID: '',
      is_select: '',
      data: [],
      isLoading: true,
      refreshing: true,
      carousel_data: [],
      liveData: [],
      completedData: [],
      isModalVisible: false,
    };
  }
  componentDidMount() {
    analytics().logEvent('switcher_pop_up_visits', {       
      description: "visits on switcher pop up"
      })
     
    
  }
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

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
        this.setState({isModalVisible:true})
    //   this._fetchData();


    this.setState({data: this.props.homeSuccess.fixtureMatch});
    this.setState({liveData: this.props.homeSuccess.liveMatches});
    this.setState({completedData: this.props.homeSuccess.completedMatches});
    if (this.props.homeSuccess.myMatch) {
      this.setState({carousel_data: this.props.homeSuccess.myMatch});
    } else {
      this.setState({carousel_data: []});
    }
  

   
    });
  }
  _onRefresh = () => {
    this.setState({refreshing: true});
    if (this.state.refreshing == false) {
      this._fetchData();

      this.setState({refreshing: false});
      //console.log('Refreshing')
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
    const {setClick} = this.state;
    const {ID} = this.state;
    const {is_select} = this.state;
    const {data, isLoading} = this.state;
    //const { carousel_data } = this.state;
    // console.log("length"+[].length)
    console.log("data", this.state.data)
    // buttons style
  
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
            //  navigation={this.props,navigation}
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
          <Modal
    style={{
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'flex-end',
      margin: 0,
      bottom:60
    }}
   onBackButtonPress={() => this.props.fetchGameSwitcherApi(false)}
    onBackdropPress={() =>{ this.props.fetchGameSwitcherApi(false), this.props.navigation.navigate('Home') }}
    visible={this.props.gameSwitcherSuccess}
    transparent
    animationType="slide"
    // onRequestClose={() => this.toggleModal()}
    hardwareAccelerated
  >

    <View style={styles.ViewBackground}>
      {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <TouchableOpacity

          onPress={() => this.toggleModal()}>
          <CrossSvg height={20} width={20}></CrossSvg>
        </TouchableOpacity>
      </View> */}
      <View style={{ flexDirection: 'row', }}>
        
        <Text style={{ fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Bold'] }}>
         SWITCH
            </Text>
      </View>
      <TouchableOpacity
      onPress={()=>{
        
        this.props.navigation.reset({
          index: 0,
          routes: [{ name: 'mainPage' }],
        });}}
      style={{ flexDirection: 'row',  marginTop: 15,  }}>
        <View>
        <AppLogoSvg />
        </View>

       <View style={{marginTop: 13, }}>
       <Text style={{ fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Bold'] ,textAlign:'center',color:Colors.darkGrey}}>
         Cric.One
            </Text>
       </View>
       
      </TouchableOpacity>
      <View style={{flexDirection: 'row', width: '100%',justifyContent:'center'}}>
                  <Text style={styles.seperatorStyle}>.</Text>
      </View>
      <TouchableOpacity
      onPress={()=>{
        
       
        this.setState({isModalVisible:false}),
        // this.props.navigation.navigate('group')
        this.props.navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
       
      }}
      style={{ flexDirection: 'row',  marginTop: 15, justifyContent:'space-between' }}>
       <View style={{flexDirection:'row'}} >
        {/* <View  style={{backgroundColor:Colors.orange,width:'26%',borderRadius:8,justifyContent:'center',alignItems:'center',marginLeft:10}} >
            <ProGameSvg/>
        </View> */}
   <Image source={icons.gamePro} />
       <View style={{marginTop: 14, marginLeft:8 }}>
       <Text style={{  fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Bold'] ,textAlign:'center',color:Colors.grayMedium}}>
        Pro Pick 11
            </Text>
       </View>
       </View>
       <View style={styles.confirmTag}>
       <Text style={ {fontFamily:fonts['DMSans-Bold'],fontSize: RFValue(10),color:Colors.darkGrey}}>
        ACTIVE
          </Text>
       </View>
       
      </TouchableOpacity>

      <TouchableOpacity
      // onPress={()=>{this.props.navigation.navigate('Home')}}
      style={{ flexDirection: 'row',  marginTop: 1, justifyContent:'space-between',marginTop:5 }}>
       <View style={{flexDirection:'row'}} >
        <View>
          <Image source={icons.gameIcon} />
        {/* <SportsGameSvg /> */}
        </View>

       <View style={{marginTop: 14,  }}>
       <Text style={{ fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Regular'] , fontWeight:'100', textAlign:'center',color:Colors.darkGrey}}>
      Sports.Cards
            </Text>
       </View>
       </View>
       <View style={styles.comingSoonTag}>
       <Text style={ {fontFamily: fonts['DMSans-Regular'] , fontWeight:'100',fontSize: RFValue(8),color:Colors.darkGrey}}>
        Coming Soon
          </Text>
       </View>
       
      </TouchableOpacity>
      <TouchableOpacity
      // onPress={()=>{this.props.navigation.navigate('Home')}}
      style={{ flexDirection: 'row',  marginTop: 1, justifyContent:'space-between' }}>
       <View style={{flexDirection:'row'}} >
        <View>
        <ScorekiyaSvg />
        </View>

       <View style={{marginTop: 14, }}>
       <Text style={{ fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Regular'] , fontWeight:'100',textAlign:'center',color:Colors.darkGrey}}>
    Score kiya?
            </Text>
       </View>
       </View>
       {/* <LinearGradient start={{ x: 0, y: 0.9 }} end={{ x: 0.9, y: 1 }} colors={['rgba(24,0,135,0.15)', 'rgba(42,104,11,0.15)',]} style={styles.runTag} >
       <Text style={ {fontFamily:fonts['DMSans-Bold'],fontSize: RFValue(10),color:Colors.darkGrey}}>
       RUNNING
          </Text>
       </LinearGradient> */}
        <View style={styles.comingSoonTag}>
       <Text style={ {fontFamily: fonts['DMSans-Regular'] , fontWeight:'100',fontSize: RFValue(8),color:Colors.darkGrey}}>
        Coming Soon
          </Text>
       </View>
       
      </TouchableOpacity>


    </View>

  </Modal>
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
  gameSwitcherSuccess:state.gameSwitcher.gameSwitcherSuccess
});

const mapDispatchToProps = {
  fetchHomeApi,
  fetchGameSwitcherApi
};

export default connect(mapStateToProps, mapDispatchToProps)(gameHome);
