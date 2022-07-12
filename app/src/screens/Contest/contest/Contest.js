import React, { Component } from 'react'
import {

    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Touchable,
    ActivityIndicator,
    FlatList,
    BackHandler


} from 'react-native';
import { icons, api_link } from '../../../../res/constants';
import CountDown from '../../../component/countComponent/countdown'
import LinearGradient from 'react-native-linear-gradient';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Modal from 'react-native-modal';
import { styles } from './style'
import { Colors } from '../../../../res/style/color'
import { globalStyles } from '../../../../res/style/appStyle'
import SectionListTag from '../../../component/sectionList/sectionList'
import ClockSvg from '../../../../res/images/svg/clock.svg'
import CoinSvg from '../../../../res/images/svg/coinimage.svg'
import HomeSvg from '../../../../res/images/svg/homewallet.svg'
import CrossSvg from '../../../../res/images/svg/cross';
import JoinListTag from '../../../component/joinList/joinList'
import { widthPercentageToDP, heightPercentageToDP } from '../../../component/React Native Responsive Screen'
import GetApiService, { getApiSerive } from '../../../utills/getDataService'
import SaveTrophySvg from '../../../../res/images/svg/savetrophy';
import { fonts } from '../../../../res/style/fonts'
import { Toast,Segment } from 'native-base'
import {connect} from 'react-redux';
import {fetchHomeApi} from '../../../redux/actions/homeAction';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../../component/widgets/button/button';
import { withTranslation } from 'react-i18next';
class Contest extends Component {

    constructor(props) {
        super(props);
        const status_type = ["ALL", "MEGA", "1 ON 1", "ULTIMATE", "ALL", "MEGA", "1 ON !", "ULTIMATE"];
        // var data = [];
        this.state = {
            status_type,
            setClick: false,
            ID: '',
            is_select: '',
            data: [],
            sectionData:[{
                key: '',
                data: []
              }],
            isLoading: true,
            refreshing: false,
            teamSaveModal: false,
            status_type_data: [],
            match_status: 'All',
            joinTeamData: '',
            walletSummry: '',
            myAccountLoader:false,
            isModalVisible: false,
            total_team:'',
            isTimeModalVisible: false,
            bonus:'',
            deposite:'',
            winnings:'',
            timer:this.props.route.params.date,



        }
    }
    toggleModal=()=>{
        this.setState({isTimeModalVisible: !this.state.isTimeModalVisible});
    }
    toggleModalContest = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
      };
      teamSaveToggleModal = () => {
        this.setState({teamSaveModal: !this.state.teamSaveModal});
      };
    handlerButtonOnClick = (i, typeid) => {

        console.log("type id is:", typeid)


        const newstate = !this.state.setClick;
        this.setState({
            setClick: newstate,
            is_select: i,
            match_status: typeid,
            isLoading: true,
            is_selection_list: false,


        });
        this._fetchStatusTypeData(typeid);


    }

    _fetchtabsData = () => {
        console.log("contest Url is:", api_link.status_type + 'match_id=' + this.props.route.params.match_id_c)
        getApiSerive.getApiClass(api_link.status_type + 'match_id=' + this.props.route.params.match_id_c)
            .then((res) => {

                this.setState({ status_type_data: [{ name: 'All', id: 'All' }, ...res.contest_categories] });



            })
    }

    _fetchStatusTypeData = (typeId) => {

        // console.log("type id in fetch function is:", this.props.route.params.match_id_c)

       console.log("contest status link:",api_link.contest + 'type=' + typeId + '&' + 'match_id=' + this.props.route.params.match_id_c+'&'+'user_id='+this.props.userSuccess.user_id)

        getApiSerive.getApiClass(api_link.contest + 'type=' + typeId + '&' + 'match_id=' + this.props.route.params.match_id_c+'&'+'user_id='+this.props.userSuccess.user_id)
            .then((res) => {
                //this.setState({ data: res.contests_data.category});
this.setState({total_team:res.total_team})

                if (typeId == 'All') {
                    if (res.contests_data.category == null) {
                        this.setState({ isLoading: false });

                    }
                    else {

                        let modifiedData = [];
                        //console.log('length ------' + res.contests_data.category.length)
                        for (let i = 0; i < res.contests_data.category.length; i++) {
                            let title = res.contests_data.category[i].title;
                            let data = res.contests_data.category[i].contests;
                            modifiedData.push({ 'title': title, 'data': data })
                        }
                        this.setState({ is_selection_list: true });
                        this.setState({ sectionData: modifiedData });
                        //console.log('Updated API data', this.state.data)
                        this.setState({ isLoading: false });
                    }
                }

                else {
                    if (res.contests == null) {
                        this.setState({ isLoading: false });
                    }
                    else {
                        this.setState({ data: res.contests });
                        //console.log('Updated API data', this.state.data)
                        this.setState({ isLoading: false });
                        this.setState({ is_selection_list: false });
                    }

                }


                //console.log('Data', api_link.contest + 'type=' + typeId + '&' + 'match_id=' + this.props.route.params.match_id_c)
            })
       // console.log(api_link.contest + 'type=' + typeId + '&' + 'match_id=' + this.props.route.params.match_id_c)

    }
    myAccount = () => {
        //here we check payment check //
        this.setState({ myAccountLoader:true})
        console.log('myCash info:', api_link.my_accountapi + 'user_id='+this.props.userSuccess.user_id+'');
        getApiSerive
          .getApiClass(api_link.my_accountapi + 'user_id='+this.props.userSuccess.user_id+'')
          .then((res) => {
            //("fetch cash info:",res)
            // match_id
    console.log("my balance is:", res.data.total_amount)
    
            this.setState({
                myAccountLoader:false,
              walletSummry: res.data.total_amount,
           
            //   bonous_amount: res.data.bonous_amount,
            });
          });
      };

      backAction = () => {
        if(this.props.route.params.jointype === 'letsplay'){
            this.props.navigation.navigate('myTeams',{
                        
                match_id_c:this.props.route.params.match_id_c,
                teamname1: this.props.route.params.team1shortname,
                teamname2: this.props.route.params.team2shortname,
                status:'backMyTeam',
                item:{"match_id":this.props.route.params.match_id_c}
        
              });
        }else{
            this.props.navigation.goBack()
        }
      
        return true;
      };

    componentDidMount() {
      
this.backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    this.backAction
  );

        this.focusListener = this.props.navigation.addListener('focus', () => {

            


          
            if (this.props.route.params.jointype === 'letsplay') {
                this._fetchtabsData()
                this._fetchStatusTypeData(this.state.match_status);
                this.setState({ joinTeamData: this.props.route.params.joinTeamData, walletSummry: this.props.route.params.Wallet,bonus: this.props.route.params.bonus,deposite: this.props.route.params.deposite,winnings: this.props.route.params.winnings })
             
              
                // console.log("data is:","joinTeamData", this.props.route.params.joinTeamData, "walletSummry Contest Screen", this.props.route.params.Wallet )
              
                // Toast.show({

                //     style: { backgroundColor: Colors.orange },
                //     text: 'Team Saved Please Join Contest here',
                //     buttonText:'Ok',
                //     duration: 10000,
                  
                  
                // });
                this.setState({ teamSaveModal: true})

            }
            this.myAccount()
        });

        this.myAccount()
        this._fetchtabsData()
        this._fetchStatusTypeData(this.state.match_status);



    }
    
    componentWillUnmount() {
        this.backHandler.remove();
       
      }

    calculate_width_orange = (value) => {
        let width = 50 * 1 / 100;
        let total_width = width + '%'
        return total_width;
    }




    render() {
      const { t } = this.props;
        const { setClick } = this.state;
        const { ID, data } = this.state;
        const { is_select, isLoading } = this.state;
        console.log('time',this.state.timer)
        if( this.props.route.params.date<1)
        {
            console.log("time up")
            this.state.isTimeModalVisible=true;
        }
        var _style;
        _style = {
            backgroundColor: Colors.orange,
            borderRadius: 30,
            padding: 10,
            height: 25,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',

        }
        return (

            <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }} >
                <LinearGradient start={{ x: 0, y: 0.9 }} end={{ x: 0.9, y: 1 }} colors={['rgba(24,0,135,0.15)', 'rgba(42,104,11,0.15)',]} >


                    <View style={styles.mainheader}>

                        <TouchableOpacity onPress={() => {

                            if(this.props.route.params.jointype === 'letsplay'){
                                this.props.navigation.navigate('myTeams',{
                                            
                                    match_id_c:this.props.route.params.match_id_c,
                                    teamname1: this.props.route.params.team1shortname,
                                    teamname2: this.props.route.params.team2shortname,
                                    status:'backMyTeam',
                                    item:{"match_id":this.props.route.params.match_id_c}
                            
                                  });
                            }else{
                                this.props.navigation.goBack()
                            }
                          
                            
                            }}>
                            <Image source={icons.arrowback} style={styles.barimage} />
                        </TouchableOpacity>
                        <View style={{ marginTop: 19,marginLeft:25 }}>
                            <Text style={{ fontSize: RFValue(10),textAlign:'center', color: Colors.darkGrey, fontWeight: '700', fontFamily: fonts['DMSans-Bold'], }}>{t('common:contest')}</Text>
                        </View>
                        <View style={{  flexDirection: 'row', marginTop: 15,marginRight:10 }} >
                            {/* <CoinSvg style={{marginTop:2}} /> */}
                           
                            <View style={styles.segmentLeftStyle}>
                            {this.state.myAccountLoader?
                             <ActivityIndicator color={Colors.orange} style={{ height: '15%', width: 40 }} />
                           
                            :
                            <Text numberOfLines={1} style={{ fontSize: RFValue(10, 580),textAlign:'center',marginLeft:2,marginRight:2, fontWeight: '700', color: Colors.orange, fontFamily: fonts['DMSans-Bold'], }}> ₹{this.state.walletSummry?this.state.walletSummry:0}</Text>
                           
    }
                            </View>

                            <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('addCash',{
                                totalAmount:this.state.walletSummry
                            })}
                            style={styles.segmentRightStyle}>
                           <FontAwesome name="plus" size={15} color={Colors.orange}></FontAwesome>
                            </TouchableOpacity>
                       
                        </View>
                    </View>
                    <View >
                        <View style={{ flexDirection: 'row' }}>

                            <View style={styles.statusBarView}>
                                <Text style={{ borderRadius: 100, backgroundColor: this.props.route.params.jointype == 'letsplay'? Colors.darkGrey:Colors.darkGrey, height: 10, width: '3%' }}>.</Text>
                                <Text style={[styles.line_5,{backgroundColor: this.props.route.params.jointype == 'letsplay'? Colors.darkGrey:Colors.darkGrey}]}>.</Text>

                                <Text style={[styles.line_3,{backgroundColor: this.props.route.params.jointype == 'letsplay'? Colors.darkGrey:Colors.white}]}>.</Text>
                                <Text style={{ borderRadius: 100, backgroundColor: this.props.route.params.jointype == 'letsplay'? Colors.darkGrey:Colors.white, height: 10, width: '3%' ,}}>.</Text>

                                <Text style={[styles.line_2,{backgroundColor: this.props.route.params.jointype == 'letsplay'? Colors.darkGrey:Colors.white}]}>.</Text>

                                <Text style={[styles.line_3,{backgroundColor: this.props.route.params.jointype == 'letsplay'? Colors.darkGrey:Colors.white}]}>.</Text>
                                <Text style={{ borderRadius: 100,  height: 10, width: '3%',backgroundColor: this.props.route.params.jointype == 'letsplay'? Colors.darkGrey:Colors.white }}>.</Text>

                            </View>

                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', marginTop: 4, }}>
                        <View style={styles.statusBarText}>
                            <Text style={{ fontSize: RFValue(7.5, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Medium'], }}>{t('common:selectMatch')}</Text>
                            <Text style={{ fontSize: RFValue(7.5, 580), color: Colors.grayMedium, fontFamily: fonts['DMSans-Medium'] }}>{t('common:selectContest')}</Text>
                            <Text style={{ fontSize: RFValue(7.5, 580), color: Colors.grayMedium, fontFamily: fonts['DMSans-Medium'] }}>{t('common:createTeam')}</Text>

                        </View>
                    </View>
                    <View style={styles.buildTeamNameView}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.leaugeName}>
                                    {this.props.route.params.name}
                                </Text>
                            </View>

{this.props.route.params.jointype === 'letsplay'?
                          null
                              :


                              <View style={styles.matchDateTimeView}>
                              <Text style={{ fontSize: RFValue(9, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Bold'], }}>
                              {t('common:playingOn')} {this.props.route.params.day.toUpperCase()}
                              </Text>
                              <View style={styles.timetagblack}>
                                  <View style={{ marginRight: 9 }}>
                                      <ClockSvg style={{ tintColor: Colors.orange }} />

                                  </View>
                                  <View>
                                      <CountDown
                                         onFinish={ ()=>this.state.isTimeModalVisible=true}
                                          size={5}
                                          until={this.props.route.params.date}
                                          digitStyle={{ backgroundColor: null, borderWidth: 0, borderColor: null }}
                                          digitTxtStyle={{ color: '#fff', fontSize: RFValue(8), fontFamily: fonts['DMSans-Bold']}}
                                          timeLabelStyle={{ color: '#fff', fontSize: RFValue(8), fontFamily: fonts['DMSans-Bold'] }}
                                          timeToShow={['D', 'H', 'M', 'S']}
                                          timeLabels={{ d: 'D', h: 'H', m: 'M', s: 'S' }}
                                          showSeparator={true}
                                          separatorStyle={{ color: '#fff' }}
                                      />
                                  </View>
                              </View>
                          </View>

                            }
                        </View>
      

                    </View>
                </LinearGradient>
                {/* Lower container */}
                {this.props.route.params.date != 0 ?
                    <View style={{ flex: 1, alignSelf: 'stretch' }}>
                        <View style={{ flexDirection: 'row',marginLeft:10 }}>
                            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} horizontal={true} >
                                {this.state.status_type_data.map((status, index) => (

                                    <TouchableOpacity disabled={status.name == '' ? true : false}
                                        activeOpacity={.9} key={index} onPress={() => this.handlerButtonOnClick(index, status.id)} >
                                        <View style={[is_select == index ? _style : null]}>
                                            <View >
                                                <Text style={[is_select == index ? styles.matchstatusbartextselected : styles.matchstatusbartext]}>{status.name.toUpperCase()}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}

                            </ScrollView>
                        </View>

                        {/* inside container */}

                        <View style={{ flex: 1 }}>
                            {isLoading ? <View style={styles.loader_style}><ActivityIndicator color={Colors.orange} style={{ height: '70%', width: 100 }} /></View> :


                                <View>
                                    {this.state.is_selection_list ?
                                        < SectionListTag
                                            {...this.props}
                                            data={this.state.sectionData}

                                            matchid_1={this.props.route.params.match_id_c}
                                            match_status={this.props.route.params.match_status}
                                            team1shortname={this.props.route.params.team1shortname}
                                            team2shortname={this.props.route.params.team2shortname}
                                            jointype={this.props.route.params.jointype}
                                            joinTeamData={this.state.joinTeamData}
                                            walletSummry={this.state.walletSummry}
                                            bonus={this.state.bonus}
                                            deposite={this.state.deposite}
                                            winnings={this.state.winnings}
                                            user_id={this.props.userSuccess.user_id}
                                            matchid_c={this.props.route.params.match_id_c} 
                                            totalTeamCount={this.state.total_team}
                                            /> :

                                        <JoinListTag
                                            {...this.props}
                                            data={this.state.data}
                                            matchid_1={this.props.route.params.match_id_c}
                                            match_status={this.props.route.params.match_status}
                                            team1shortname={this.props.route.params.team1shortname}
                                            team2shortname={this.props.route.params.team2shortname}
                                            matchid_c={this.props.route.params.match_id_c}
                                            joinTeamData={this.state.joinTeamData}
                                            user_id={this.props.userSuccess.user_id}
                                            walletSummry={this.state.walletSummry}
                                            bonus={this.state.bonus}
                                            deposite={this.state.deposite}
                                            winnings={this.state.winnings}
                                            jointype={this.props.route.params.jointype}
                                            totalTeamCount={this.state.total_team}
                                        />
                                    }

                                </View>
                            }

                        </View>
                        {this.props.route.params.jointype == 'home' ?
                            <View style={styles.bottomButtonView}>
                                <TouchableOpacity
                                //   disabled={this.state.total_team>0?true:false}
                                onPress={() => {
                                    if(this.state.total_team>0){
                                        this.props.navigation.navigate('myTeams',{
                                            
                                            match_id_c:this.props.route.params.match_id_c,
                                            teamname1: this.props.route.params.team1shortname,
                                            teamname2: this.props.route.params.team2shortname,
                                            status:'seeMyTeam',
                                            item:{"match_id":this.props.route.params.match_id_c}
                                    
                                          });
                                    }else{
                                        this.props.navigation.navigate('Teambuild', {
                                            matchid_1: this.props.route.params.match_id_c,
                                            team1shortname1: this.props.route.params.team1shortname,
                                            team2shortname2: this.props.route.params.team2shortname,
                                            contestdata:{"match_id":this.props.route.params.match_id_c},
                                            type: "bottomtabs",
                                            action:''
        
        
                                        })
                                    }
                                   

                                }} style={styles.buildteamtagLeft}>
                                    <Text style={styles.buildteamtagtext}>{this.state.total_team>0?t('common:yourTeams')+'('+ this.state.total_team +')':t('common:newTeam')}</Text>
                                   
                                </TouchableOpacity>

                            </View> : null}

                    </View>
                    : <View

                        activeOpacity={10}>
                        <Text style={styles.stauts}>{t('common:noContestMessage1')}</Text>
                        <Text style={styles.stautsNext}>{t('common:noContestMessage2')}</Text>
                    </View>}
                   


                    <Modal
            testID={'modal'}
            isVisible={this.state.teamSaveModal}
            //swipeDirection={['up', 'left', 'right', 'down']}
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              margin: 0,
            }}>
            <View style={styles.ViewBackground}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <TouchableOpacity
                  style={{marginRight: 5, marginTop: 5}}
                  onPress={() => {
                    this.setState({teamSaveModal: !this.state.teamSaveModal});
                    // this.props.navigation.navigate('Home');
                  }}>
                  <CrossSvg height={20} width={20}></CrossSvg>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: '5.0%',
                }}>
                <SaveTrophySvg />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: '5.0%',
                }}>
                <Text
                  style={{
                    fontSize: RFValue(14, 580),
                    textAlign:'center',
                    fontFamily: fonts['DMSans-Bold'],
                  }}>
                  {t('common:teamSaveModel')}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: '5.0%',
                }}>
                <TouchableOpacity
                  style={styles.buildteamtag}
                  onPress={() => {
                   this.teamSaveToggleModal()
                  }}>
                  <Text style={styles.buildteamtagsucc}>{t('common:ok')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Modal
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          margin: 0,
        }}
        onBackButtonPress={() => { this.toggleModal(), this.props.navigation.goBack() }}
        onBackdropPress={() => { this.toggleModal(), this.props.navigation.goBack() }}
        visible={this.state.isTimeModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => this.toggleModal()}
        hardwareAccelerated
      >

        <View style={styles.ViewBackground}>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity

              onPress={() => { toggleModal(), this.props.navigation.goBack() }}>
              <CrossSvg height={20} width={20}></CrossSvg>
            </TouchableOpacity>
          </View>
          {/* <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <HomeSvg />
          </View> */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 12, }}>
            <Text style={{ fontSize: RFValue(14, 580), fontFamily: fonts['DMSans-Bold'] }}>
            {t('common:deadlinePass')}
            </Text>
          </View>


          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8, marginBottom: 5, }}>

            <Text  style={{ textAlign: 'center', fontSize: RFValue(12, 580), fontFamily: fonts['DMSans-Medium'] }}>
            {t('common:worryNotMessage')}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8, marginBottom: 5, }}>
            <CustomButton
              text={t('common:goBack')}
              color={Colors.orange}
              textColor={Colors.white}
              widthButton='25%'
              onPress={() => { this.toggleModal(), this.props.navigation.goBack() }}
            />

          </View>
        </View>

      </Modal>



            </SafeAreaView>

        )
    }
}
const mapStateToProps = (state) => ({
    userSuccess:state.userR.userSuccess,
  });
  
  const mapDispatchToProps = {
    fetchHomeApi,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Contest));
  