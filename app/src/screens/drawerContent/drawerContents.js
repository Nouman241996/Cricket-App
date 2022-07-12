/**
 * Created by Aakash Sajjad on 6/11/2020.
 */
 import React, { Component } from 'react';
 import LinearGradient from 'react-native-linear-gradient';
 import { View, StyleSheet, Image, Text,TouchableOpacity,ScrollView ,FlatList} from 'react-native';
 import {styles} from './style'
 import Modal from 'react-native-modal';
 import {ProgressBar} from '@react-native-community/progress-bar-android';
 import CrossSvg from '../../../res/images/svg/cross'
 import { RFValue } from 'react-native-responsive-fontsize';
 import HomeSvg from '../../../res/images/svg/home.svg'
 import AppLogoSvg from '../../../res/images/svg/applogo'
 import KycSvg from '../../../res/images/svg/kyc.svg'
 import RBSheet from "react-native-raw-bottom-sheet";
 import MyStateSvg from '../../../res/images/svg/myState.svg'
 import ContactUsSvg from '../../../res/images/svg/contactUs.svg'
 import FAQsSvg from '../../../res/images/svg/FAQs.svg'
 import HowToPlaySvg from '../../../res/images/svg/howToPlay.svg'
 import LogOutSvg from '../../../res/images/svg/logOut.svg'
 import PointSystemSvg from '../../../res/images/svg/pointSystem.svg'
 import PrivacySvg from '../../../res/images/svg/privacy.svg'
 import ReferearnSvg from '../../../res/images/svg/referEarn.svg'
 import UpdateSvg from '../../../res/images/svg/update.svg'
 import WalletSvg from '../../../res/images/svg/wallet.svg'
 import ForwardSvg from '../../../res/images/svg/forward.svg'
 import CheckUpdateSvg from '../../../res/images/svg/checkUpdate.svg'
 import {Colors} from '../../../res/style/color'
import { fonts } from '../../../res/style/fonts';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchUSERApi} from '../../redux/actions/userAction'
import { widthPercentageToDP, heightPercentageToDP } from '../../../src/component/React Native Responsive Screen'
import {useDispatch, useSelector} from 'react-redux';
import { api_link } from '../../../res/constants'
import { getApiSerive } from '../../utills/getDataService'
import RNFS from 'react-native-fs'
import RNApkInstallerN from 'react-native-apk-installer-n';
import Entypo from 'react-native-vector-icons/Entypo'
import LoginLogo from '../../../res/images/svg/loginlogo';
import VersionNumber from 'react-native-version-number';
import {fetchDrawerSwitcher} from '../../redux/actions/gameSwitcherAction'
//var RNFS = require('react-native-fs'); 
var version=VersionNumber.appVersion;
 class drawerContents extends Component {


     constructor() {
         super();
         this.state = {
         isVerified:'',
         versionAvailable:false,
         description:'',
         downloadProgress:'',
         isModalVisible:false,
         downloadProgressText:''
        };
     }
     getVerificationStatusFromApi=()=>{
      getApiSerive
      .getApiClass(
          api_link.walletAmountApi + this.props.userSuccess.user_id,
      )
      .then((res) => {

        if(res.data.email_status =='1' && res.data.is_pan_verify=='4' && res.data.is_bank_verify=='4'){
         
          this.setState({isVerified:'1'})
          
        }



      });

     }
     _toggleModal = () => {
      this.setState({isModalVisible: !this.state.isModalVisible});
     
    };
     downLoad =()=>{
      console.log('this')
      const filePath =  RNFS.DocumentDirectoryPath + '/CrickPro.apk';
      const download = RNFS.downloadFile({
          fromUrl: 'https://cric.one/cric.one-latest.apk',
          toFile: filePath,
          progress: res => {
            //console.log('actual res is'.res)
            this.setState({downloadProgress:((res.bytesWritten / res.contentLength).toFixed(2))}),
            this.setState({downloadProgressText:((res.bytesWritten / res.contentLength)*100).toFixed(0)})
            
              console.log(this.state.downloadProgress);
          },
          progressDivider: 1
      });
       
      download.promise.then(result => {
          if(result.statusCode == 200){
              RNApkInstallerN.install(filePath)
              console.log('i am installed')
              this._toggleModal()
      
          }
      });
      
    
      
    
     }
     
    readData = async () => {
      try {
        const newVersion = await AsyncStorage.getItem('@newVersion')
        let parsed = JSON.parse(newVersion);  
        console.log('i am parsed read data',parsed.token)
        if (parsed.token!=version) {
          this.setState({versionAvailable:true})
          this.setState({description:parsed.note})
         console.log('new version iss',this.state.description)
        }
      } catch (e) {
        console.log('Failed to fetch the data from storage')
      }
    }
     componentDidMount(){
      this.readData(),
      
      this.getVerificationStatusFromApi()
     }
    
 
     render() {
         return (
             <View style={styles.sideMenuContainer}>
               <View style={{marginTop:10,marginLeft:20}}>  
                   <HomeSvg 
                    height={45} width={45}
                  ></HomeSvg>
                  </View>
                    {/* 1 */}
                    <ScrollView >
                    <View>
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25}}>
                
                  <View style={{flexDirection:'row',marginLeft:15}}>
                      
                  <KycSvg style={styles.logoimage}
                    height={20} width={20}></KycSvg>
                    <View style={{marginLeft:18,marginTop:0.5}}>
                    <Text style={{fontFamily:fonts['DMSans-Medium'],fontSize:RFValue(16),color:Colors.white}}>KYC</Text>
                    </View>
                   
                    </View>



                    <View style={{flexDirection:'row',marginRight:15,marginTop:-4}}>
                      {this.state.isVerified==1?( <LinearGradient start={{ x: 0, y: 0.9 }} end={{ x: 0.9, y: 1 }} style={styles.confirmtag} colors={[Colors.green, Colors.green]}>
          
          <Text style={ {fontFamily:fonts['DMSans-Bold'],fontSize: RFValue(10),color:Colors.darkGrey}}>
         Verified
          </Text>
       

        </LinearGradient>):
                    <LinearGradient start={{ x: 0, y: 0.9 }} end={{ x: 0.9, y: 1 }} style={styles.confirmtag} colors={[Colors.white, Colors.white]}>
          
          <Text style={ {fontFamily:fonts['DMSans-Bold'],fontSize: RFValue(10),color:Colors.darkGrey}}>
         Not Verified
          </Text>
       

        </LinearGradient>
      }
     
      <TouchableOpacity
      onPress={()=>{this.props.navigation.navigate('VerifyAccount',{type:"drawer"})}}
      ><ForwardSvg style={styles.logoimage}
                    height={20} width={20}></ForwardSvg></TouchableOpacity>
        
                  </View>
                  </View>
                  
                  {/* 2 */}
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:23}}>
                  <View style={{flexDirection:'row',marginLeft:15}}>
                      
                  <MyStateSvg style={styles.logoimage}
                    height={20} width={20}></MyStateSvg>
                    <TouchableOpacity
                    onPress={()=>{this.props.navigation.navigate('MyStats')}}
                    style={{marginLeft:18,marginTop:0.5}}>
                    <Text style={{fontFamily:fonts['DMSans-Medium'],fontSize:RFValue(16),color:Colors.white}}>
                        My Stats
                        </Text>
                    </TouchableOpacity>
                   
                    </View>



                
                  </View>
                {/* 3 */}

                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25}}>
                  <View style={{flexDirection:'row',marginLeft:15}}>
                      
                  <ReferearnSvg style={styles.logoimage}
                    height={20} width={20}></ReferearnSvg>
                    <TouchableOpacity 
                    onPress={()=>{this.props.navigation.navigate('ReferFriend')}}
                    style={{marginLeft:18,marginTop:0.5}}>
                    <Text style={{fontFamily:fonts['DMSans-Medium'],fontSize:RFValue(16),color:Colors.white}}>
                        Refer {'&'} Earn</Text>
                    </TouchableOpacity>
                   
                    </View>

                  </View>
                  {/* 4 */}
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25}}>
                  <View style={{flexDirection:'row',marginLeft:15}}>
                      
                  <HowToPlaySvg style={styles.logoimage}
                    height={20} width={20}></HowToPlaySvg>
                    <TouchableOpacity 
                     onPress={()=>{this.props.navigation.navigate('HowToPlay')}}
                    
                    style={{marginLeft:18,marginTop:0.5}}>
                    <Text style={{fontFamily:fonts['DMSans-Medium'],fontSize:RFValue(16),color:Colors.white}}>
                        How To Play</Text>
                    </TouchableOpacity>
                   
                    </View>

                  </View>
                  {/* 5 */}
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25}}>
                  <View style={{flexDirection:'row',marginLeft:15}}>
                      
                  <PointSystemSvg style={styles.logoimage}
                    height={20} width={20}></PointSystemSvg>
                    <TouchableOpacity 
                     onPress={()=>{this.props.navigation.navigate('PointSystem')}}
                    
                    style={{marginLeft:18,marginTop:0.5}}>
                    <Text style={{fontFamily:fonts['DMSans-Medium'],fontSize:RFValue(16),color:Colors.white}}>
                        Point System</Text>
                    </TouchableOpacity>
                   
                    </View>

                  </View>
                  {/* 6 */}
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25}}>
                  <View style={{flexDirection:'row',marginLeft:15}}>
                      
                  <CheckUpdateSvg style={styles.logoimage}
                    height={20} width={20}></CheckUpdateSvg>
                    <TouchableOpacity 
                     onPress={()=>{this.props.navigation.navigate('CheckForUpdate')}} 
                    
                    style={{marginLeft:18,marginTop:0.5}}>
                    <Text style={{fontFamily:fonts['DMSans-Medium'],fontSize:RFValue(16),color:Colors.white}}>
                       Check for Updates</Text>
                    </TouchableOpacity> 
                   
                    </View>

                  </View>
                  {/* 7 */}
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25}}>
                  <View style={{flexDirection:'row',marginLeft:15}}>
                      
                  <WalletSvg style={styles.logoimage}
                    height={20} width={20}></WalletSvg>
                    <TouchableOpacity
                     onPress={()=>{this.props.navigation.navigate('VerifyAccount',{type:"drawer"})}} 
                    style={{marginLeft:18,marginTop:0.5}}>
                    <Text style={{fontFamily:fonts['DMSans-Medium'],fontSize:RFValue(16),color:Colors.white}}>
                        Wallet</Text>
                    </TouchableOpacity>
                   
                    </View>

                  </View>
                  {/* support */}
                  <View style={{marginTop:30,marginLeft:15}}>
                      <Text style={{fontFamily:fonts['DMSans-Bold'],color:Colors.grayMedium,fontSize:RFValue(14)}}>SUPPORT</Text>
                      </View>
                      {/* 1 */}
                      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                  <View style={{flexDirection:'row',marginLeft:15}}>
                      
                  <ContactUsSvg style={styles.logoimage}
                    height={20} width={20}></ContactUsSvg>
                    <TouchableOpacity 
                     onPress={()=>{this.props.navigation.navigate('ContactUs')}} 
                    
                    style={{marginLeft:18,marginTop:0.5}}>
                    <Text style={{fontFamily:fonts['DMSans-Medium'],fontSize:RFValue(16),color:Colors.white}}>
                        Contact Us</Text>
                    </TouchableOpacity>
                   
                    </View>

                  </View>
                  {/* 2 */}
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25}}>
                  <View style={{flexDirection:'row',marginLeft:15}}>
                      
                  <FAQsSvg style={styles.logoimage}
                    height={20} width={20}></FAQsSvg>
                    <TouchableOpacity 
                    onPress={()=>{this.props.navigation.navigate('FAQ')}} 
                    
                    style={{marginLeft:18,marginTop:0.5}}>
                    <Text style={{fontFamily:fonts['DMSans-Medium'],fontSize:RFValue(16),color:Colors.white}}>
                        FAQs</Text>
                    </TouchableOpacity>
                   
                    </View>

                  </View>
                  {/* legal */}
                  <View style={{marginTop:30,marginLeft:15}}>
                      <Text style={{fontFamily:fonts['DMSans-Bold'],color:Colors.grayMedium,fontSize:RFValue(14)}}>LEGAL</Text>
                      </View>
                      {/* 1 */}
                      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                  <View style={{flexDirection:'row',marginLeft:15}}>
                      
                  <PrivacySvg style={styles.logoimage}
                    height={20} width={20}></PrivacySvg>
                    <TouchableOpacity 
                    onPress={()=>{this.props.navigation.navigate('TermsAndPolicy')}} 
                    
                    style={{marginLeft:18,marginTop:0.5}}>
                    <Text style={{fontFamily:fonts['DMSans-Medium'],fontSize:RFValue(16),color:Colors.white}}>
                       Terms {'&'} Privacy</Text>
                    </TouchableOpacity>
                   
                    </View>

                  </View>
                  {/* 2 */}
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30,marginBottom:20}}>
                  <View style={{flexDirection:'row',marginLeft:15}}>

                  
                  <LogOutSvg style={styles.logoimage}
                    height={20} width={20}></LogOutSvg>
                      <TouchableOpacity
                      onPress={async()=>{
await AsyncStorage.removeItem('@userDataAsync');
this.props.fetchDrawerSwitcher(2)
                        var data=''
this.props.fetchUSERApi(data)
this.props.navigation.reset({ index: 0, routes: [{ name: 'login', },], })
                      }}
                      > 
                    <View style={{marginLeft:18,marginTop:0.5}}>
                    <Text style={{fontFamily:fonts['DMSans-Medium'],fontSize:RFValue(16),color:Colors.white}}>
                        Log Out</Text>
                    </View>
                    </TouchableOpacity> 
                   
                    </View>

                  </View>
                  <View style={{marginLeft:18,marginTop:0.5,flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                    <Text style={{fontFamily:fonts['DMSans-Medium'],fontSize:RFValue(16),color:Colors.grayMedium}}>
                       version {version}</Text>
                       {this.state.versionAvailable?
                       <View style={{marginRight:10}}>
                        
                       <TouchableOpacity 
                          onPress={()=> {this.RBSheet.open()}}

                       style={{backgroundColor:Colors.orange,borderRadius:12,padding:3}}>
                       <Text style={{fontFamily:fonts['DMSans-Medium'],fontSize:RFValue(12),color:Colors.white,padding:3}}>Update</Text></TouchableOpacity>
                       </View>
                     : <View style={{marginRight:10}}>
                        
                     <View style={{backgroundColor:Colors.grayMedium,borderRadius:12,padding:3,}}>
                     <Text style={{fontFamily:fonts['DMSans-Medium'],fontSize:RFValue(12),color:Colors.white,padding:3,}}>Updated</Text></View>
                     </View>}
                        </View>
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
                          <Text style={styles.modalItemText}>We've Upgrade our App!</Text>
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
                data={this.state.description}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40,marginTop:15 }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                  
                    return (

                      <View style={{flexDirection:'row'}}>
                        <Entypo name='dot-single' size={20}></Entypo>
                     <Text style={styles.upgradeText}>{item}</Text>
         
</View>


                      // <View>
                      // <Text style={styles.upgradeText}>{item}</Text>
                      // </View>
                    );
                  }}
                         />
                        
                           
                      </View>
                     
                      </View>
                      <Text>me</Text>
                      <TouchableOpacity 
                      onPress={()=>{
                        this.downLoad(),
                        this._toggleModal(),
                        this.RBSheet.close()
                      }
                      }
                       style={styles.upgradeButton}><Text style={styles.upgradeButtonText}>UPGRADE</Text></TouchableOpacity>
                    
        </RBSheet>







                  <View>
        <Modal 
        isVisible={this.state.isModalVisible}>
        <View style={{backgroundColor:Colors.white,height:heightPercentageToDP(19)}}>
          
        <View style={{padding:5,marginLeft:7,marginTop:15}}>
            <Text style={styles.modalItemText}>The cric.one experience just got awesome! Downloading...!</Text>
            </View>
        
         <View >
           
        <View style={{padding:16}}>
        <ProgressBar
          styleAttr="Horizontal"
          color={Colors.orange}
          indeterminate={false}
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


                  </ScrollView>
             </View>
         );
     }
 }
 const mapStateToProps = (state) => ({
  userSuccess:state.userR.userSuccess,
});

const mapDispatchToProps = {
  fetchUSERApi,
  fetchDrawerSwitcher,
};

export default connect(mapStateToProps, mapDispatchToProps)(drawerContents);