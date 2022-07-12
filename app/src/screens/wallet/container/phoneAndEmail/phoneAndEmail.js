import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableHighlight,
  Dimensions,
  TextInput
} from 'react-native';
import { styles } from './style';
import MainHeader from '../../../../component/mainHeaderComponent/Mainheader'
import TotalBalance from '../../components/totalBalance/totalBalance'
import AmountCard from '../../components/amountCards/amountCard'
import InfoSvg from '../../../../../res/images/svg/infosvg'
import ArrowLeftSvg from '../../../../../res/images/svg/arrowLeftSvg'
import CustomButton from '../../../../component/widgets/button/button'
import { Colors } from '../../../../../res/style/color'
import BackSvg from '../../../../../res/images/svg/back.svg'
import UploadSvg from '../../../../../res/images/svg/uploadsvg.svg'
import { TabRouter } from 'react-navigation';
import LabelText from '../../../../component/widgets/label/label'
import InputTextBox from '../../../../component/widgets/inputText/inputText'
import VerificationCard from '../../components/verificationCard/verificationCard'
import VerfiedSvg from '../../../../../res/images/svg/verifiedsvg'
import NotVerfiedSvg from '../../../../../res/images/svg/notVerifiedSvg'
import DeleteSvg from '../../../../../res/images/svg/deletesvg'
import EditPanSvg from '../../../../../res/images/svg/editPanSvg'
import CrossSvg from '../../../../../res/images/svg/cross';
import Modal from 'react-native-modal';
import { fonts } from '../../../../../res/style/fonts'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {postApiSerive} from '../../../../utills/postDataService'
import {api_link} from '../../../../../res/constants'
import ImgToBase64 from 'react-native-image-base64';
import {getApiSerive} from '../../../../utills/getDataService'
import { tinyToastSerive } from '../../../../utills/Toast'
import {Col, Toast} from 'native-base';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useDispatch, useSelector} from 'react-redux';
import {authApiSerive} from '../../../../utills/authServices';


const { width, height } = Dimensions.get('window')
const MobileandEmail = (props) => {

  const [statusTypeData, setStatusTypeData] = useState([
    { id: '0', name: 'MOBILE & EMAIL', subname: 'Not Verified' },
    { id: '1', name: 'PAN CARD', subname: 'Not Verified' },
    { id: '2', name: 'BANK ACCOUNT', subname: 'Not Verified' },

  ]);
  const [setClick, isSetClick] = useState(false);
  const [isSelect, setIsSelect] = useState(0);
  const [panCardNo, setpanCardNo] = useState('');
  const [tabID, setTabId] = useState('0');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPhoneModalVisible, setIsPhoneModalVisible] = useState(false);
  
  const [circleImage, setCircleImage] = React.useState('');
  const [FullModecircleImage, setFullModecircleImage] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [Loader, setLoader] = React.useState(false);
  const [bankDocument, setBankDocument] = useState('')
  const [panImage,setPanImage]=useState('')
  const [bankDocImage,setBankDocImage]=useState('')
  const [panCardData,setpanCardData]=useState([])
  const [panCardStatus,setPanCardStatus]=useState(0)
  const [panPosted,setpanPosted]=useState(false)
  const [isLoad,setIsLoad]=useState(false)
  const [code, setCode] = useState('');
  const [focus, setFocus] = useState(true);
  const [apiVerificationCode,setApiVerificationCode]=useState('')
  const [bankAccountNo,setBankAccountNo]=useState('')
  const [reBankAccountNo,setReBankAccountNo]=useState('')
  const [ifscCode,setIfscCode]=useState('')
  const [bankname,setBankName]=useState('')
  const [branchname,setBranchName]=useState('')
  const [userAccountName,setUserAccountName]=useState('')
  const [userState,setUserState]=useState('')

  const [emptybankAccountNo,setEmptyBankAccountNo]=useState(false)
  const [emptyreBankAccountNo,setEmptyReBankAccountNo]=useState(false)
  const [emptyifscCode,setEmptyIfscCode]=useState(false)
  const [emptybankname,setEmptyBankName]=useState(false)
  const [emptybranchname,setEmptyBranchName]=useState(false)
  const [emptyuserAccountName,setEmptyUserAccountName]=useState(false)
  const [emptyuserState,setEmptyUserState]=useState(false)
  const [emptybankDocument, setEmptyBankDocument] = useState(false)

  const [emailPhoneVerified,setEmailPhoneVerified]=useState(0)
  const [panCardStatusVerified,setPanCardStatusVerified]=useState(0)
  const [bankAccountVerified,setBankAccountVerified]=useState(0)
  const [apiLoader,setApiLoader]=useState(false)
  const [panImageLoader,setPanImageLoader]=useState(false)
  const [isPanModalVisible, setIsPanModalVisible] = useState(false);
  const [panPostedStatus,setPanPostedStatus]=useState('');
  const [invalidPan , setInvalidPan]=useState(false);
  const [emptyPan ,setEmptyPan]=useState(false);
  const [bankDetailsPosted,setBankDetailsPosted]=useState(false);
  const [isBankModal,setIsBankModal]=useState(false);
  const [inValidIfscCode,setInvalidIfscCode]=useState(false)
  const [inValidAccountNo,setInvalidBankAccountNo]=useState(false)
  const [bankDataFromApi,setBankDataFromApi]=useState([])
  const [panStatus,setPanStatus]=useState(0)
  const [bankStatus,setBankStatus]=useState(0)
  const [emailAdded,setEmailAdded]=useState('')
  const [userEmail,setUserEmail]=useState('')
  const [isValidEmail,setIsValidEmail]=useState(false)
  const [isEmailPosted,setIsEmailPosted]=useState(true)
  const [emailError,setEmailError]=useState(false)
  const [emailFailed,setEmailFailed]=useState(false)
  const [otpCode,setOtpCode]=useState('')
  const [isPhoneVerified,setIsPhoneVerified]=useState(0)
  const [phoneVerifyError,setPhoneVerifyError]=useState(false)
  const [panFailureReason,setPanFailureReason]=useState('')
  const [bankFailureReason,setBankFailureReason]=useState('')
  const userData = useSelector(
    (state) => state.userR.userSuccess,
  );
  const fetchPanData=()=>{
    getApiSerive
    .getApiClass(
      api_link.getPanCardApi+userData.user_id,
    )
    .then((res) => {
      
      setPanCardStatus(res.data[0].pancard_status)
      setpanCardData(res.data)
      
      setIsLoad(true)
     
    });
  }
  const getWalletDetailsFromApi=()=>{
    const currentDate = new Date();
const timestamp = currentDate.getTime();
    getApiSerive
    .getApiClass(
      api_link.walletAmountApi+userData.user_id+'&v='+timestamp,
    )
    .then((res) => {
    setApiLoader(true)
    setEmailPhoneVerified(res.data.email_status)
    setPanCardStatusVerified(res.data.pan_status)
    setBankAccountVerified(res.data.bank_status)
    setEmailAdded(res.data.user_email)
    setIsPhoneVerified(res.data.mobile_status)
    setPanFailureReason(res.data.pancard_reason)
    setBankFailureReason(res.data.bank_reason)
    
    });
  }
  const getVerficationCode=()=>{
    getApiSerive
    .getApiClass(
      api_link.getVerficationCodeApi+userData.user_id,
    )
    .then((res) => {
      
    setApiVerificationCode(res.data.code)
    console.log('otp code', res.data.code)
     
    });
  }

  const getBankAccountDetails=()=>{
    getApiSerive
    .getApiClass(
      api_link.getBankDetailApi+userData.user_id,
    )
    .then((res) => {
    
      setBankDataFromApi(JSON.stringify(res.data))
   
      if(res.data[0].acc_no=='' || res.data[0].acc_no==null)
      {
        setBankDetailsPosted(false)
      }
      else{
        setBankDetailsPosted(true)
        setBankStatus(res.data[0].is_bank_verify)
        setBankAccountNo(res.data[0].acc_no)
        setReBankAccountNo(res.data[0].acc_no)
        setIfscCode(res.data[0].ifsc_code)
        setBankName(res.data[0].bank_name)
        setBranchName(res.data[0].branch_address)
        setUserState(res.data[0].state)
        setUserAccountName(res.data[0].user_acc_name)
        setBankDocImage(res.data[0].bank_image)
        //setBankDocument(JSON.stringify(res.data[0].bank_image)) 
       
        ImgToBase64.getBase64String(res.data[0].bank_image)
        .then(base64String => {
          setBankDocument(base64String)
         
         
         }
         ).catch(err => console.log(err))
       
      }
    });
  }
  const getPanCardDataFromApi=()=>{
    getApiSerive
    .getApiClass(
      api_link.getPanCardApi+userData.user_id,
    )
    .then((res) => {
      if(res.data[0].pan_number=='' || res.data[0].pan_number==null)
      {
        setpanPosted(false)
      }
      else{
        setPanStatus(res.data[0].is_pan_verify)
        setpanPosted(true)
        setPanImageLoader(true)
        setPanCardStatus(res.data[0].pancard_status) 
        setpanCardNo(res.data[0].pan_number)
         setPanImage(res.data[0].pancard_image)
         ImgToBase64.getBase64String(res.data[0].pancard_image)
      .then(base64String => {
        setCircleImage(base64String)
       
       
       }
       )
      .catch(err => console.log(err));
      }
     
      setpanCardData(res.data)
      setIsLoad(true)
     
    });
  }
  useEffect(
   
    () => {
      getPanCardDataFromApi()
      getBankAccountDetails()
      getWalletDetailsFromApi()
     
    
        
      }, []);

  function secondTabBarOnClick(id, name) {
   
   
    if(id==0 )
    {
     
      setTabId(id);
    }
    else if(id==1 && emailPhoneVerified==1 && isPhoneVerified==1)
    {
      getWalletDetailsFromApi()
      setTabId(id);
    }
    else if(id==2 && panCardStatusVerified!=0 && emailPhoneVerified==1)
    {
      getWalletDetailsFromApi() 
      setTabId(id);
    }


  }
  const deletePanDataFromAPi=()=>{
     tinyToastSerive.showLoadingToast('Deleting pancard details...')
     postApiSerive.postApiClass(api_link.uploadPanCardDetailsApi, {"user_id":userData.user_id,"name":"test","document_number":'',"state":"sialkot","dob":"28-02-2009","type":"Pan","document": ''}).then((res) => {
      setPanPostedStatus("Pan Details Deleted Successfully")
      setIsPanModalVisible(true)
    
      tinyToastSerive.hideToast()
      

   });
  }
  const validatePanCardNumber=(text)=>{
    Toast.hide()
    setInvalidPan(false)
   
    let regex =  /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(format.test(text)){
      setInvalidPan(true)
    } 
   
    if(text.length==10){
    
      if (!regex.test(text)) {
        // Toast.show({
        //   style: {backgroundColor: Colors.basicRed},
        //   text: 'Invalid Pan Card no',
        //   duration: 3000,
        //   position:'top'
        // });
        setInvalidPan(true)
      }
      
    }
    

   

  }
  const validatePanCardNumberOnBlur=(text)=>{
    Toast.hide()
    setInvalidPan(false)
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(format.test(text)){
      setInvalidPan(true)
    } 
   
    let regex =  /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
  
   
   
    if(text.length>0)
    {
      if (!regex.test(text)) {
        // Toast.show({
        //   style: {backgroundColor: Colors.basicRed},
        //   text: 'Invalid Pan Card no',
        //   duration: 3000,
        //   position:'top'
        // });
        setInvalidPan(true)
      }
    }
      
    
    

   

  }
  function validatePanCardNo() {
   
    let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

    if (regex.test(panCardNo) && circleImage!='') {

     
      tinyToastSerive.showLoadingToast('Uploading pancard details...')
      postApiSerive.postApiClass(api_link.uploadPanCardDetailsApi, {"user_id":userData.user_id,"name":"test","document_number":panCardNo,"state":"sialkot","dob":"28-02-2009","type":"Pan","document": circleImage}).then((res) => {
        const parseData=JSON.parse(res)
        
         if(parseData.status=="success")
         {
       
        setPanPostedStatus("Pan Details Posted Successfully")
       
        setpanPosted(true)
        //fetchPanData()
        getWalletDetailsFromApi()
        setIsPanModalVisible(true)
     
         }
         tinyToastSerive.hideToast() 
         getPanCardDataFromApi()
     });
      return true;

    }
    if(circleImage=='')
    {
      Toast.show({
        style: {backgroundColor: Colors.orange},
        text: 'Please upload pancard image.',
        duration: 3000,
      });
    }
    else{
    
   setEmptyPan(true)
  }
   
    return false;
  }
  function validatePanCardNoButton() {
   
    let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

    if (regex.test(panCardNo) ) {

     
      
      return true;

    }
    
    return false;
  }



  function openCamera(type) {
    setModal(false)
    ImagePicker.openCamera({
      cropping: true,
      //cropperCircleOverlay: true,

      freeStyleCropEnabled: true,
    }).then(response => {
     

      let file = {
        name: new Date() + '.jpg',
        type: 'image/jpeg',
        uri:
          Platform.OS === 'android'
            ? response.path
            : response.path.replace('file://', ''),
      };


      let image = {
        name: new Date() + '.jpg',
        type: 'image/jpeg',
        uri:
          Platform.OS === 'android'
            ? response.path
            : response.path.replace('file://', ''),
      };
      if (type == 'PAN') {
        setPanImage(image.uri)
        ImgToBase64.getBase64String(image.uri)
        .then(base64String => 
          setCircleImage(base64String)
         
         ) 
        .catch(err => doSomethingWith(err));
      
      

      }
      else {
        setBankDocImage(image.uri)
        ImgToBase64.getBase64String(image.uri)
        .then(base64String => {
          setBankDocument(base64String)
       
      }
          
         )
        .catch(err => console.log(err));
       
       
      }
      setModal(false)

      setLoader(true)




    });

  }
  function openGallery(type) {
    setModal(false)
    ImagePicker.openPicker({
      cropping: true,

      //cropperCircleOverlay: true,
      freeStyleCropEnabled: true
    }).then(response => {
     

      let file = {
        name: new Date() + '.jpg',
        type: 'image/jpeg',
        uri:
          Platform.OS === 'android'
            ? response.path
            : response.path.replace('file://', ''),
      };


      let image = {
        name: new Date() + '.jpg',
        type: 'image/jpeg',
        uri:
          Platform.OS === 'android'
            ? response.path
            : response.path.replace('file://', ''),

      };
      if (type == 'PAN') {
        setPanImage(image.uri)
        ImgToBase64.getBase64String(image.uri)
        .then(base64String => 
          setCircleImage(base64String)
         )
        .catch(err => doSomethingWith(err));
       
      

      }
      else {
        setBankDocImage(image.uri)
        ImgToBase64.getBase64String(image.uri)
        .then(base64String => 
          setBankDocument(base64String)
          
         )
        .catch(err => doSomethingWith(err));
       
      
      
      }
      setModal(false)

   
      setLoader(true)
    



    });
  }
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setIsEmailPosted(true)
  }
  const togglePhoneModal = () => {
    setIsPhoneModalVisible(!isPhoneModalVisible)
    
  }


  function onSubmitPanCard() {

    if (panCardNo.length < 16) {
      return false;
    }
    else {
      return true;
    }

  }
  
  const verifyEmailCode=(code)=>{
    setEmailFailed(false)
    if(code==apiVerificationCode)
    {
      setModalVisible(false)
      setCode('')
      postApiSerive.postApiClass(api_link.emailVerificationStatus,{"user_id":userData.user_id,emailstatus:'1'}).
      then((res) => {
        
       
        getWalletDetailsFromApi()
       });
    
     getWalletDetailsFromApi()
      return true;
    }
    else{
   
      Toast.show({
        style: {backgroundColor: Colors.orange},
        text: 'Invalid Code',
        duration: 2000,
      });
      setEmailFailed(true)
      return false;
    }
  }

  const mainheader = () => {
    return (
      <View style={styles.mainheader}>
        <TouchableOpacity
          onPress={() => { props.navigation.goBack() }}
        >
          <BackSvg
            style={styles.backBtn}
            height={15} width={15}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          VERIFY YOUR ACCOUNT
        </Text>
        <Text>

        </Text>
      </View>
    )
  }
  const topBAr = () => {
    return (

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginLeft: 5, marginRight: 5 }}>


        {statusTypeData.map((status, index) => (
          <TouchableOpacity
            disabled={status.name == '' ? true : false}
            activeOpacity={0.9}
            key={index}
            onPress={() => secondTabBarOnClick(status.id, status.name)}>
            <View
              style={[
                styles.selectedTab,
                { backgroundColor: tabID == status.id ? Colors.orange : null, padding: status.name == 'PAN' ? 0 : 0 },
              ]}>
              <View style={{ margin: 10 }}>

                <Text

                  style={
                    [
                      styles.matchstatusbartext,
                      {
                        color:
                          tabID == status.id ? Colors.white : Colors.grayMedium,
                      },
                    ]}>
                  {status.name.toUpperCase()}
                </Text>
                {status.subname == '' ? null :
                  <Text
                    style={[
                      styles.matchstatusbarSubtext,
                      {
                        color:
                          tabID == status.id ? Colors.white : Colors.grayMedium,
                      },
                    ]}>
                      {status.name=='MOBILE & EMAIL'? 
                    emailPhoneVerified==1 &&  isPhoneVerified==1  && status.name=='MOBILE & EMAIL'? 'Verified': status.subname
                  :null
                  }
                   {status.name=='PAN CARD'? 
                    panCardStatusVerified==4 && status.name=='PAN CARD'? 'Verified': status.subname
                  :null
                  }
                   {status.name=='BANK ACCOUNT'? 
                    bankAccountVerified==4 && status.name=='BANK ACCOUNT'? 'Verified': status.subname
                  :null
                  }
                  </Text>}

              </View>
            </View>
          </TouchableOpacity>
        ))}

      </View>

    )

  }
  const editBankInformation = (editype) => {
    return (
      <>
     {!isLoad? <ActivityIndicator
      color={Colors.orange}
      style={{height: 50, width: 50,alignSelf:'center',alignItems:'center'}}
    /> :  <>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, alignItems: 'center' }}>
    
      <View>
        <Text style={styles.editInfoText}>BANK ACCOUNT NO </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
       onPress={()=>{setBankDetailsPosted(false)}}
        ><EditPanSvg style={{ marginRight: 10 }} /></TouchableOpacity>
       
        <TouchableOpacity       
        onPress={
          ()=>{
            deleteBankDetails()
          }
          
       }
        ><DeleteSvg /></TouchableOpacity>

      </View>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, alignItems: 'center', marginTop: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.cardPlaceHolder}>{bankAccountNo.slice(0, 6)} ************</Text>
        {bankAccountVerified==4? 
        <View
          style={[styles.verificationTagFailed,{backgroundColor:Colors.positive}]}>
          <Text style={[styles.verificationTagTextFailed,{color:Colors.black}]} > Verified</Text>
        </View>:null} 
        {bankAccountVerified ==1 ?
        <LinearGradient start={{ x: 0, y: 0.9 }} end={{ x: 0.9, y: 1 }} colors={[Colors.headerBackground1, Colors.headerBackground2]}
          style={styles.verificationTag}>
          <Text style={styles.verificationTagText} >Pending Verification</Text>
        </LinearGradient>
        :null}
        {bankAccountVerified==3?
        <View
          style={styles.verificationTagFailed}>
          <Text style={styles.verificationTagTextFailed} > Verification Failed</Text>
        </View>:null}
      </View>

    </View>
    
    
    {bankAccountVerified==3 ?reasonForFailure('bank'):null}
  </> }
    </>
    )
  }
  const editInformation = (editype) => {
    return (
      <>
     {!isLoad? <ActivityIndicator
      color={Colors.orange}
      style={{height: 50, width: 50,alignSelf:'center',alignItems:'center'}}
    /> :  <>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, alignItems: 'center' }}>
    
      <View>
        <Text style={styles.editInfoText}>{editype=="pan"? "PAN CARD NO":"BANK ACCOUNT NO"}  </Text>
      </View> 
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
        onPress={()=>{setpanPosted(false)}}
        ><EditPanSvg style={{ marginRight: 10 }} /></TouchableOpacity>
       
        <TouchableOpacity       
        onPress={
          ()=> {setpanPosted(false),setCircleImage(''), setpanCardNo(''),deletePanDataFromAPi(), setEmptyPan(false)
        }}
        ><DeleteSvg /></TouchableOpacity>

      </View>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, alignItems: 'center', marginTop: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.cardPlaceHolder}>{panCardData[0].pan_number==null || panCardData[0].pan_number==''? "*****":panCardData[0].pan_number.slice(0, 5)} *****</Text>
        {panCardStatusVerified==4? 
        <View
          style={[styles.verificationTagFailed,{backgroundColor:Colors.positive}]}>
          <Text style={[styles.verificationTagTextFailed,{color:Colors.black}]} > Verified</Text>
        </View>:null} 
        {panCardStatusVerified ==1 ?
        <LinearGradient start={{ x: 0, y: 0.9 }} end={{ x: 0.9, y: 1 }} colors={[Colors.headerBackground1, Colors.headerBackground2]}
          style={styles.verificationTag}>
          <Text style={styles.verificationTagText} >Pending Verification</Text>
        </LinearGradient>
        :null}
        {panCardStatusVerified==3?
        <View
          style={styles.verificationTagFailed}>
          <Text style={styles.verificationTagTextFailed} > Verification Failed</Text>
        </View>:null}

      </View>

    </View>
    
    
    {panCardStatusVerified==3 ? reasonForFailure() :null}
  </> }
    </>
    )
  }
  
  const reasonForFailure = (type) => {
    return (
      <>
        <View style={{ flexDirection: 'column', marginLeft: 15, marginRight: 15, marginTop: 15, }}>
          <Text style={styles.reasonHeaderText}>Reason:</Text>
          <Text style={styles.reasonParaText} >

            {type=='bank'? bankFailureReason:panFailureReason }
          </Text>
        </View>

      </>
    )
  }

  const phoneEmailContainer = () => {
    return (
      <>
        <VerificationCard
          headingText={isPhoneVerified==1?'Your mobile number is verified':'Your mobile no is not verified'}
          phoneno={userData.mobile}
          icon={isPhoneVerified==1? <VerfiedSvg /> : <NotVerfiedSvg />}
          containerColor={Colors.positive}
          verifyStatus={isPhoneVerified}
          containerBorder={isPhoneVerified==1?0:0.8}
          containerColor={isPhoneVerified==1?Colors.positive:null}
          onpressAction={() => { sendOtpCode(),togglePhoneModal() }}


        />
        <VerificationCard
          headingText={emailPhoneVerified==1?'Your email is verified':'Your email is not verified'}
          email={emailAdded==null? 'Register your email':emailAdded}
          icon={emailPhoneVerified==1? <VerfiedSvg />:<NotVerfiedSvg />}
          containerBorder={emailPhoneVerified==1?0:0.8}
          containerColor={emailPhoneVerified==1?Colors.positive:null}
          verifyStatus={emailPhoneVerified}
          onpressAction={() => {
            if(emailAdded==null){
             
              toggleModal()
            }
            else{
              toggleModal(),
              getVerficationCode()
            }
           
           }}
        />



      </>
    )
  }
  const sendOtpCode=()=>{
    postApiSerive.postApiClass(api_link.changePhoneOtpApi,{"user_id":userData.user_id,mobile:userData.mobile}).
    then((res) => {
      
     
      
     });
  }
  const postUserCode=(code)=>{
   setPhoneVerifyError(false)
   
    //tinyToastSerive.showLoadingToast('Verifying...')
   
    authApiSerive.authApiClass(api_link.postUserOtp,{"user_id":userData.user_id,"mobile":userData.mobile,"otp":code}).
    then((res) => {

      var dataJson = JSON.parse(res);
     
      if(dataJson.message=="Number verification not done"){
        setPhoneVerifyError(true)
        
        getWalletDetailsFromApi()
      }
      else{
        togglePhoneModal()
        setOtpCode('')
        getWalletDetailsFromApi()
        setPhoneVerifyError(false)
        Toast.show({
          style: {backgroundColor: Colors.basicRed},
          text: dataJson.message,
          duration: 2500,
          position:'top'
        });
      }
     

     });

     
    
  }
  const panBarContainer = () => {
    return (
      <>
        <LabelText
          text={'PAN CARD NO'}
        />
        {/* <View style={{borderWidth:invalidPan?1:0,borderColor:invalidPan? Colors.basicRed:null}}>

        */}
        <InputTextBox
          placeholdertext={'Enter PAN Card Number'}
          value={panCardNo}
          onChangeText={(text) => {setpanCardNo(text.replace(/\s/g, '')),validatePanCardNumber(text),setEmptyPan(false)}}
          length={10}
          onBlurFunction={()=>{
            validatePanCardNumberOnBlur(panCardNo)
          }}
          borderCol={invalidPan || emptyPan? Colors.basicRed:Colors.darkGrey}
          
        />
        
         {/* </View> */}
         {invalidPan? <LabelText
          text={'Invalid Pan Card Number'}
          textColor={Colors.basicRed}
        />:null}
        {emptyPan? <LabelText
          text={'Enter a valid pan number'}
          textColor={Colors.basicRed}
        />:null}
        {circleImage !=''? null:
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          
          <CustomButton
            text={'UPLOAD PAN CARD'}
            color={Colors.blue}
            textColor={Colors.white}
            widthButton='60%'
            icon={<UploadSvg />}
            iconStyles={{ marginRight: 15 }}
            onPress={() => { 
              var res=validatePanCardNoButton()
              console.log(res)
              if(res){setModal(true)}
              else{
                console.log('invalid')
              } }}
          />
 
        </View>
  }
        {circleImage==''? null :
        
       <View style={{flexDirection:'row',justifyContent:'center'}}>
       
       
        <TouchableOpacity onPress={()=>{setFullModecircleImage(true)}}><Image source={circleImage?{ uri: panImage }:  null}  style={circleImage? styles.ImageSelect:null } />
               </TouchableOpacity> 
        <TouchableOpacity
        onPress={()=>{setCircleImage('')}}
        style={{marginLeft:-10}}
        >
        <CrossSvg/>
            </TouchableOpacity> 
        </View>
        
       
    }


      </>
    )
  }

const deleteBankDetails=()=>{
 
  tinyToastSerive.showLoadingToast('Deleting Bank details...')
  setBankAccountNo('')
        setReBankAccountNo('')
        setBankAccountNo('')
        setIfscCode('')
        setBankName('')
        setBranchName('')
        setUserState('')
        setUserAccountName('')
        setBankDocImage('')
        setBankDocument('') 
  postApiSerive.postApiClass(api_link.uploadBankDetailsApi,
      {
      "user_id":userData.user_id,
      "ifsc_code":'',
      "branch_address":'',
      "bank_name":'',
      "acc_no":'',
      "user_acc_name":'',
      "document":'',
      "state": ''}).
     
     
      then((res) => {
        tinyToastSerive.hideToast()
        setBankDetailsPosted(false)    
        setIsBankModal(true)    
        
     });
}

  const postbankDetails=()=>{

    let ifscRegex =  /^[a-zA-Z]{4}[0][A-Z0-9]{6}$/;
   
   
     
      if (!ifscRegex.test(ifscCode)) {
        // Toast.show({
        //   style: {backgroundColor: Colors.basicRed},
        //   text: 'Invalid Pan Card no',
        //   duration: 3000,
        //   position:'top'
        // });
      
      }
      
  
   if(bankAccountNo.length<9 ||  bankAccountNo=='')
    {

      
      setEmptyBankAccountNo(true)
    }
    else if(reBankAccountNo.length<9 || reBankAccountNo==''){
      
      setEmptyReBankAccountNo(true)
    }
    else if (!ifscRegex.test(ifscCode) || ifscCode=='') {
      // Toast.show({
      //   style: {backgroundColor: Colors.basicRed},
      //   text: 'Invalid IFSC code',
      //   duration: 3000,
      //   position:'top'
      // });
    setEmptyIfscCode(true)
    }
    else if( bankname==''){
      // Toast.show({
      //   style: {backgroundColor: Colors.basicRed},
      //   text: 'bank name is empty',
      //   duration: 3000,
      //   position:'top'
      // });
      setEmptyBankName(true)
    }
    else if( branchname==''){
      // Toast.show({
      //   style: {backgroundColor: Colors.basicRed},
      //   text: 'branch name is empty',
      //   duration: 3000,
      //   position:'top'
      // });
      setEmptyBranchName(true)
    }
    else if( userState==''){
      // Toast.show({
      //   style: {backgroundColor: Colors.basicRed},
      //   text: 'State is empty',
      //   duration: 3000,
      //   position:'top'
      // });
      setEmptyUserState(true)
    }
    else if( userAccountName==''){
      // Toast.show({
      //   style: {backgroundColor: Colors.basicRed},
      //   text: 'user account name is empty',
      //   duration: 3000,
      //   position:'top'
      // });
      setEmptyUserAccountName(true)
    }
    else if( bankDocument==''){
      Toast.show({
        style: {backgroundColor: Colors.basicRed},
        text: 'upload document image ',
        duration: 3000,
        position:'top'
      });
      setEmptyBankDocument(true)
    }
    else{
     
    tinyToastSerive.showLoadingToast('Posting Bank details...')
    postApiSerive.postApiClass(api_link.uploadBankDetailsApi,
      {
      "user_id":userData.user_id,
      "ifsc_code":ifscCode,
      "branch_address":branchname,
      "bank_name":bankname,
      "acc_no":bankAccountNo,
      "user_acc_name":userAccountName,
      "document":bankDocument,
      "state": userState}).
     
     
      then((res) => {

        const parseData=JSON.parse(res)
       
        if(parseData.status=="success")
        {
        
        setBankDetailsPosted(true)    
        setIsBankModal(true)  
        getBankAccountDetails()  
        }
        tinyToastSerive.hideToast()
      
     });
    }
}
const verifyReAccountNo=(text)=>{
 
  setInvalidBankAccountNo(false)
  if(text.length>=9 )
  {
   
    if(text!=bankAccountNo )
    {
      setInvalidBankAccountNo(true)
     
    }
  }

}
const verifyAccountNo=(text)=>{
 
  setInvalidBankAccountNo(false)
  if(text.length>=9 )
  {
   
    if(reBankAccountNo.length!=0)
    {
      if(text!=reBankAccountNo )
      {
        setInvalidBankAccountNo(true)
       
      }
    }
    
  }

}
const validateIfscCode=(text)=>{
  
 setInvalidIfscCode(false)
   
  
    let regex =  /^[a-zA-Z]{4}[0][A-Z0-9]{6}$/;
   
    if(text.length==11){
     
      if (!regex.test(text)) {
        // Toast.show({
        //   style: {backgroundColor: Colors.basicRed},
        //   text: 'Invalid Pan Card no',
        //   duration: 3000,
        //   position:'top'
        // });
     
       setInvalidIfscCode(true)
      }
      
    }
}
const validateIfscCodeOnBlur=(text)=>{
  
  setInvalidIfscCode(false)
    
   
     let regex =  /^[a-zA-Z]{4}[0][A-Z0-9]{6}$/;
    
    
      
       if (!regex.test(text)) {
         // Toast.show({
         //   style: {backgroundColor: Colors.basicRed},
         //   text: 'Invalid Pan Card no',
         //   duration: 3000,
         //   position:'top'
         // });
      
        setInvalidIfscCode(true)
       }
      
     
 }
  const bankAccountContainer = () => {
    return (
      <ScrollView
        contentContainerStyle={{ paddingBottom: 60 }}
      >

        <LabelText
          text={'ACCOUNT NUMBER'}
        />
        <InputTextBox
          placeholdertext={'Enter Account Number'}
         
          value={bankAccountNo}
          onChangeText={(text) => {setBankAccountNo(text.replace(/[^0-9]/g, '')),setEmptyBankAccountNo(false),verifyAccountNo(text)}}
          onBlurFunction={()=>{
            console.log("on blur bank ",bankAccountNo)
            
            if(bankAccountNo.length<9)
            {
              setEmptyBankAccountNo(true)
            }
           
          }}
          Typetext={'numeric'}
          length={18}

          borderCol={inValidAccountNo || emptybankAccountNo? Colors.basicRed:Colors.darkGrey}

        />
        {inValidAccountNo? 
          <LabelText
          text={'Account number do not match'}
          textColor={Colors.basicRed}
        
        />:null
        }
         {emptybankAccountNo? 
          <LabelText
          text={'Enter a valid account number'}
          textColor={Colors.basicRed}
        
        />:null
        }
        <LabelText
          text={'Re ENTER ACCOUNT NUMBER'}
        
        />
        <InputTextBox
          placeholdertext={'Re Enter Account Number'}
          value={reBankAccountNo}
          onChangeText={(text) => {setReBankAccountNo(text.replace(/[^0-9]/g, '')),verifyReAccountNo(text),setEmptyReBankAccountNo(false)}}
          onBlurFunction={()=>{
            console.log("on blur bank ",reBankAccountNo)
            if(reBankAccountNo.length<9)
            {
              setEmptyReBankAccountNo(true)
            }
           
          }}
          Typetext={'numeric'}
          length={18}
          borderCol={inValidAccountNo || emptyreBankAccountNo? Colors.basicRed:Colors.darkGrey}

        />
        {inValidAccountNo? 
          <LabelText
          text={'Re-Account number do not match'}
          textColor={Colors.basicRed}
        
        />:null
        }
        {emptyreBankAccountNo? 
          <LabelText
          text={'Re-Enter account number'}
          textColor={Colors.basicRed}
        
        />:null
        }
        <LabelText
          text={'IFSC CODE'}
        />
        <InputTextBox
          placeholdertext={'IFSC Code'}
          value={ifscCode}
          onChangeText={(text) => {setIfscCode(text.replace(/\s/g, '')),validateIfscCode(text),setEmptyIfscCode(false)}}
          onBlurFunction={(text)=>{
            console.log("on blur ifsc called",ifscCode)
            validateIfscCodeOnBlur(ifscCode)}}
          borderCol={inValidIfscCode || emptyifscCode? Colors.basicRed:Colors.darkGrey}
          length={11}
        
        

        />
        {emptyifscCode? 
          <LabelText
          text={'Enter a valid IFSC CODE'}
          textColor={Colors.basicRed}
        
        />:null
        }
        {inValidIfscCode? <LabelText 
         textColor={Colors.basicRed}
        text={'Enter a valid IFSC Code'} />:null}
        <LabelText
          text={'BANK NAME'}
        />
        
        <View></View>
        <InputTextBox
          placeholdertext={'Bank Name'}
          value={bankname}
          onChangeText={(text) => {setBankName(text.replace(/[^a-zA-Z ]/g, '')),setEmptyBankName(false)}}
          borderCol={emptybankname? Colors.basicRed:Colors.darkGrey}
          
          // length={13}
        />
         {emptybankname? 
          <LabelText
          text={'Enter a valid Bank name'}
          textColor={Colors.basicRed}
        
        />:null
        }
        <LabelText
          text={'BRANCH NAME'}
        />
        <InputTextBox
          placeholdertext={'Branch Name'}
          value={branchname}
          onChangeText={(text) => {setBranchName(text.replace(/[^a-zA-Z ]/g, '')),setEmptyBranchName(false)}}
          borderCol={emptybranchname? Colors.basicRed:Colors.darkGrey}
          
       />
         {emptybranchname? 
          <LabelText
          text={'Enter a valid Branch name'}
          textColor={Colors.basicRed}
        
        />:null
        }
        <LabelText
          text={'State'}
        />
        <InputTextBox
          placeholdertext={'State'}
          value={userState}
          onChangeText={(text) => {setUserState(text.replace(/[^a-zA-Z ]/g, '')),setEmptyUserState(false)}}
          borderCol={emptyuserState? Colors.basicRed:Colors.darkGrey}
          
        />
         {emptyuserState? 
          <LabelText
          text={'Enter a valid state'}
          textColor={Colors.basicRed}
        
        />:null
        }
        <LabelText
          text={'User Account Name'}
        />
        <InputTextBox
          placeholdertext={'User Account name'}
          value={userAccountName}
          onChangeText={(text) => {setUserAccountName(text.replace(/[^a-zA-Z ]/g, '')),setEmptyUserAccountName(false)}}
          borderCol={emptyuserAccountName? Colors.basicRed:Colors.darkGrey}
          
        />
         {emptyuserAccountName? 
          <LabelText
          text={'Enter a valid user account name'}
          textColor={Colors.basicRed}
        
        />:null
        }
        <LabelText
          text={'UPLOAD BANK DOCUMENT'}
        />
        {emptybankDocument? 
          <LabelText
          text={'Upload Bank Document'}
          textColor={Colors.basicRed}
        
        />:null
        }
        {bankDocImage !=''? null:
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <CustomButton
            text={'UPLOAD BANK DOCUMENT'}
            color={Colors.blue}
            textColor={Colors.white}
            widthButton='92%'
            icon={<UploadSvg />}
            iconStyles={{ marginRight: 15 }}
            onPress={()=>{setModal(true),setEmptyBankDocument(false)}}
          />
        </View>
  }
        {bankDocImage==''? null:
        <View style={{flexDirection:'row',justifyContent:'center'}}>
       
        <TouchableOpacity onPress={()=>{setFullModecircleImage(true)}}><Image source={bankDocument?{ uri: bankDocImage }:  null}  style={bankDocument? styles.ImageSelect:null } />
               </TouchableOpacity> 
               <TouchableOpacity
        onPress={()=>{setBankDocImage('')}}
        style={{marginLeft:-10}}
        >
        <CrossSvg/>
            </TouchableOpacity> 
            </View>
  }
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginLeft: 15, marginRight: 15 }}>
          <Text style={styles.textDescription}>
            Valid documents include Passbook, cheque book, or bank statements.
            Name, IFSC Code and Account Number must be clearly visible
            in the submitted document.
                       </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <CustomButton
            text={'SUBMIT FOR VERIFICATION'}
            color={Colors.orange}
            textColor={Colors.white}
            widthButton='92%'
            onPress={()=>{postbankDetails()}}
          />
        </View>



      </ScrollView>
    )
  }
  const validateUserEmail=(text)=>{
    //let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    var reg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
   
    if (!reg.test(text)) {
   
    
  }
  }
  const postUserEmail=()=>{
    var reg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    setIsEmailPosted(true)
    
    if(userEmail=='')
    {
      // Toast.show({
      //     style: {backgroundColor: Colors.basicRed},
      //     text: 'Enter Email',
      //     duration: 3000,
      //     position:'top'
      //   });
        setEmailError(true)
    }
    else if(!reg.test(userEmail))
    {
      // Toast.show({
      //   style: {backgroundColor: Colors.basicRed},
      //   text: 'Enter a valid Email',
      //   duration: 3000,
      //   position:'top'
      // });
      setEmailError(true)
    }
    else{
      //toggleModal()
      tinyToastSerive.showLoadingToast('Registering Email...')
    
      postApiSerive.postApiClass(api_link.postUserEmailApi, {"user_id":userData.user_id,"email":userEmail,})
      .then((res) => {
        const parseData=JSON.parse(res)
       
       
        
        getWalletDetailsFromApi()
      
       if(parseData.message=="Email not added successfull!")
       {
         //email
      }
      else{
        setIsEmailPosted(true)
        setEmailAdded(userEmail)
        getVerficationCode()
      }
      tinyToastSerive.hideToast()
        Toast.show({
          style: {backgroundColor: Colors.orange},
          text: parseData.message,
          duration: 3000,
          position:'top'
        });
        
      
       
       

  
     });
    
    
    }
  }
  return (
   
    <SafeAreaView


      style={styles.container}>
      {mainheader()}
      {topBAr()}

      {tabID == 1 ?
        <>
      
          <View style={styles.panBarContainer}>
            {panPosted? null: panBarContainer()}
            
            {panPosted? 
            
            editInformation("pan"):null}
          </View>
          {panPosted? null:
          <View style={styles.bottomButtonView}>
            <CustomButton
              text={'SUBMIT'}
              color={Colors.orange}
              textColor={Colors.white}
              widthButton='90%'
              onPress={() => { 
                
                validatePanCardNo() }}
            />


          </View>
}



        </>
        : null
      }
      {tabID == 2 ?
        <>
          <View style={styles.panBarContainer}>
            {bankDetailsPosted ? null:bankAccountContainer()}
              
            {bankDetailsPosted? 
            
            editBankInformation("bank"):null}

          </View>

        </>
        : null
      }
      {tabID == 0?
        <>
        {apiLoader? 
          <View style={styles.panBarContainer}>
            {phoneEmailContainer()}
          </View>
          : <ActivityIndicator
          color={Colors.orange}
          style={{height: 50, width: 50,alignSelf:'center',alignItems:'center'}}
        /> 
         }
        </>
        : null
      }

      <Modal
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          margin: 0,
        }}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => toggleModal()}
        hardwareAccelerated
      >

        <View style={styles.ViewBackground}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity

              onPress={() => toggleModal()}>
              <CrossSvg height={20} width={20}></CrossSvg>
            </TouchableOpacity>
          </View>
          {emailAdded ==null ? 
          <>
          <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
            <Text style={{ fontSize: RFValue(16, 580), fontFamily: fonts['DMSans-Bold'] }}>
           Email Not Found!
                </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
          <TextInput
         style={styles.input}
        onChangeText={(text) => {setUserEmail(text),validateUserEmail(text), setIsEmailPosted(true),setEmailError(false)}}
        value={userEmail}
        placeholder="Enter Email"
        keyboardType="email"
      />
          </View>
          {emailError?  <Text style={{ fontSize: RFValue(9, 580), fontFamily: fonts['DMSans-Bold'] }}>
           Enter a valid email!
                </Text>:null}
          </>
          
          :
          <>
          
          <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
            <Text style={{ fontSize: RFValue(16, 580), fontFamily: fonts['DMSans-Bold'] }}>
              Confirm to Verify
                </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15, marginBottom: 10, }}>
            <Text style={{ fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Medium'] }}>
              Verification link sent. Please check
              your email.
                </Text>
          </View>
          <View style={styles.verifyCode}>
                  <SmoothPinCodeInput
                    placeholder={(Platform.OS == 'ios' ? <Text style={{
                      width: 10,
                      height: 16,
                      opacity: 0.3,
                    }}>*</Text> : null)}
                    animated={false}
                    restrictToNumbers={true}
                    animationFocused={null}
                    containerStyle={[
                      {
                        margin: 10,
                        backgroundColor: Colors.white,
                        borderTopLeftRadius: code.length == 0 ? 25 : 0,
                        borderBottomLeftRadius: code.length == 0 ? 25 : 0,
                        borderTopRightRadius: code.length == 5 ? 25 : 0,
                        borderBottomRightRadius: code.length == 5 ? 25 : 0,
                      }
                    ]}
                    value={code}
                    autoFocus={focus}
                    codeLength={4}
                    cellSpacing={20}
                    cellSize={width / 9}
                    cellStyle={{
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      borderWidth: 2,
                      borderColor: Colors.Courseborder,
                      backgroundColor: Colors.white,

                    }}
                    cellStyleFocused={{
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      borderWidth: 2,
                      borderColor: Colors.orange,
                    }}
                    textStyle={styles.code}
                    textStyleFocused={styles.newFonts}
                    onTextChange={
                      
                      (code) => {
                        setCode(code)
                        setEmailFailed(false)
                        if(code.length==4){
                        verifyEmailCode(code)}
                      }}
                  />
                   <View 
                                   style={{ flexDirection: 'row', justifyContent: 'center', alignItems:'center' }}>
            <Text style={{ fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Bold'] ,color:Colors.grayMedium}}>
             Haven't recieved otp ?  
             </Text>
             <TouchableOpacity
              onPress={()=>{getVerficationCode()}}

             >
             <Text style={{ fontSize: RFValue(8, 580), fontFamily: fonts['DMSans-Bold'] ,color:Colors.basicRed,marginLeft:2}}>
                Resend OTP ? </Text>
             </TouchableOpacity>
            
              
          </View>
                </View>
                {emailFailed?
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15, marginBottom: 10, }}>
            <Text style={{ fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Medium'],color:Colors.basicRed }}>
              Verification Failed
                </Text>
          </View>:null}
               
</>
}
<View style={{ flexDirection: 'row', justifyContent: 'center',}}>
                  {!isEmailPosted? <Text
                  style={styles.emailError}
                  >Email Updated Failed</Text>:null}
                  
                  </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15, marginBottom: 10, }}>
                   {emailAdded==null ?
                    <CustomButton 
                     text={emailAdded==null? 'Add Email':'VERIFY'}
                     color={Colors.orange}
                     textColor={Colors.white}
                     widthButton='50%'
                     onPress={()=>{
                       if(emailAdded==null)
                       {
                        postUserEmail()  

                       
                        //props.navigation.navigate('profile')
                           
                      }
                      
                      
                      }}
                     />:null}

                   
                </View>
        </View>

      </Modal>

      <Modal
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          margin: 0,
        }}
        onBackButtonPress={() => {togglePhoneModal()}}
        onBackdropPress={() => {togglePhoneModal()}}
        visible={isPhoneModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => {togglePhoneModal()}}
        hardwareAccelerated
      >

        <View style={styles.ViewBackground}>
       
        
          <>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity

              onPress={() => togglePhoneModal()}>
              <CrossSvg height={20} width={20}></CrossSvg>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
            <Text style={{ fontSize: RFValue(16, 580), fontFamily: fonts['DMSans-Bold'] }}>
              Confirm to Verify
                </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15, marginBottom: 10, }}>
            <Text style={{ fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Medium'] }}>
              OTP sent. Please check
              your phone.
                </Text>
          </View>
          <View style={styles.verifyCode}>
                  <SmoothPinCodeInput
                    placeholder={(Platform.OS == 'ios' ? <Text style={{
                      width: 10,
                      height: 16,
                      opacity: 0.3,
                    }}>*</Text> : null)}
                    animated={false}
                    restrictToNumbers={true}
                    animationFocused={null}
                    containerStyle={[
                      {
                        margin: 10,
                        backgroundColor: Colors.white,
                        borderTopLeftRadius: code.length == 0 ? 25 : 0,
                        borderBottomLeftRadius: code.length == 0 ? 25 : 0,
                        borderTopRightRadius: code.length == 5 ? 25 : 0,
                        borderBottomRightRadius: code.length == 5 ? 25 : 0,
                      }
                    ]}
                    value={otpCode}
                    autoFocus={focus}
                    codeLength={4}
                    cellSpacing={20}
                    cellSize={width / 9}
                    cellStyle={{
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      borderWidth: 2,
                      borderColor: Colors.Courseborder,
                      backgroundColor: Colors.white,

                    }}
                    cellStyleFocused={{
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      borderWidth: 2,
                      borderColor: Colors.orange,
                    }}
                    textStyle={styles.code}
                    textStyleFocused={styles.newFonts}
                    onTextChange={
                      
                      (code) => {
                        setOtpCode(code)
                       setPhoneVerifyError(false)
                        if(code.length==4)
                        {
                         
                          postUserCode(code)
                          
                      }
                      }}
                  />
                  <TouchableOpacity 
                  onPress={()=>{sendOtpCode()}}
                  style={{ flexDirection: 'row', justifyContent: 'center', }}>
            <Text style={{ fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Bold'] ,color:Colors.grayMedium}}>
             Haven't recieved otp ? 
             <Text style={{ fontSize: RFValue(8, 580), fontFamily: fonts['DMSans-Bold'] ,color:Colors.basicRed}}>
               Resend OTP ? </Text>
                </Text>
          </TouchableOpacity>
          {phoneVerifyError?
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15, marginBottom: 10, }}>
            <Text style={{ fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Medium'],color:Colors.basicRed }}>
              Verification Failed
                </Text>
          </View>:null}
          </View>
                
               
              
               
</>


        </View>

      </Modal>

      {/* images profile */}
      <Modal
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
        onBackButtonPress={() => setModal(false)}
        onBackdropPress={() => setModal(false)}
        visible={modal}
        transparent
        animationType="slide"
        onRequestClose={() => setModal(false)}
        hardwareAccelerated
      >

        <View
          style={{
            backgroundColor: Colors.darkGrey,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            elevation: 2,
            shadowColor: 'rgba(0,0,0,0.8)',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.7,
            shadowRadius: 5,
          }}
        >
          <TouchableHighlight
            underlayColor="#ddd"
            onPress={
              tabID==1? 
              () => openCamera('PAN'):  () => openCamera('BANK')}
            style={{ borderBottomColor: Colors.white, borderBottomWidth: 1 }}>

            <View style={styles.modalItem}>
              <Icon name="camera" size={25} style={{ color: Colors.grayMedium }} />
              <Text style={styles.modalItemText}>Camera</Text>
            </View>

          </TouchableHighlight>


          <TouchableHighlight
            underlayColor="#ddd"
            style={{ borderBottomColor: Colors.white, borderBottomWidth: 1 }}
            onPress={
              tabID==1? 
              () => openGallery('PAN'):  () => openGallery('BANK') }>

            <View style={styles.modalItem}>
              <Icon name="photo" size={25} style={{ color: Colors.grayMedium }} />
              <Text style={styles.modalItemText}>Gallery</Text>
            </View>

          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderBottomColor: Colors.white, borderBottomWidth: 1 }}
            underlayColor="#ddd"
            onPress={() => setModal(false)}>

            <View style={styles.modalItem}>
              <Icon name="close" size={25} style={{ color: Colors.grayMedium }} />
              <Text style={[styles.modalItemText, { color: 'orange' }]}>Cancel</Text>
            </View>

          </TouchableHighlight>
        </View>
      </Modal>
      {/* full view */}
      <Modal
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
        onBackButtonPress={() => setFullModecircleImage(false)}
        onBackdropPress={() => setFullModecircleImage(false)}
        visible={FullModecircleImage}
        transparent
        animationType="slide"
        onRequestClose={() => setFullModecircleImage(false)}
        hardwareAccelerated
      >

        <View style={styles.container}>
        <View   style={{justifyContent:'flex-end',flexDirection:'row',}}>
        <TouchableOpacity 
      
      onPress={() => setFullModecircleImage(false)}
           >
            <CrossSvg />
        </TouchableOpacity>
        </View>
       <View  style={{
             flex:1,
              // or 'stretch'
            }} >
       {tabID==1? <Image source={{ uri: panImage }}
            style={{
              flex:1,
              resizeMode: "contain", // or 'stretch'
            }} /> : <Image source={{ uri: bankDocImage }}
            style={{
              flex: 1,
              resizeMode: "contain", // or 'stretch'
            }} />}
       </View>
         
          
         
          
        </View>
      </Modal>

      <Modal
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          margin: 0,
        }}
        onBackButtonPress={ ()=>{setIsPanModalVisible(false)}}
        onBackdropPress={()=>{setIsPanModalVisible(false)}}
        visible={isPanModalVisible}
        transparent
        animationType="slide"
        onRequestClose={()=>{setIsPanModalVisible(false)}}
        hardwareAccelerated
      >

        <View style={styles.ViewBackground}>
        
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity

              onPress={()=>{setIsPanModalVisible(false)}}>
              <CrossSvg height={20} width={20}></CrossSvg>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
           {/* <HomeSvg /> */}
            </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 12, }}>
            <Text style={{ fontSize: RFValue(14, 580), fontFamily: fonts['DMSans-Bold'] }}>
             Pan Card Status
                </Text>
          </View>
         
        
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8, marginBottom:5, }}>
            
          <Text style={{ fontSize: RFValue(12, 580), fontFamily: fonts['DMSans-Medium'] }}>
              {panPostedStatus}
                </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8, marginBottom:5, }}>
            <CustomButton 
             text={'Back'}
             color={Colors.orange}
             textColor={Colors.white}
             widthButton='25%'
             onPress={()=>{setIsPanModalVisible(false)}}
            />

            </View>
        </View>

      </Modal>

      <Modal
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          margin: 0,
        }}
        onBackButtonPress={ ()=>{setIsBankModal(false)}}
        onBackdropPress={()=>{setIsBankModal(false)}}
        visible={isBankModal}
        transparent
        animationType="slide"
        onRequestClose={()=>{setIsBankModal(false)}}
        hardwareAccelerated
      >

        <View style={styles.ViewBackground}>
        
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity

              onPress={()=>{setIsBankModal(false)}}>
              <CrossSvg height={20} width={20}></CrossSvg>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
           {/* <HomeSvg /> */}
            </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 12, }}>
            <Text style={{ fontSize: RFValue(14, 580), fontFamily: fonts['DMSans-Bold'] }}>
            Bank Details Status
                </Text>
          </View>
         
        
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8, marginBottom:5, }}>
            
          <Text style={{ fontSize: RFValue(12, 580), fontFamily: fonts['DMSans-Medium'] }}>
             Bank Details Posted successfully
                </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8, marginBottom:5, }}>
            <CustomButton 
             text={'Back'}
             color={Colors.orange}
             textColor={Colors.white}
             widthButton='25%'
             onPress={()=>{setIsBankModal(false)}}
            />

            </View>
        </View>

      </Modal>


        </SafeAreaView>
  )

}
export default MobileandEmail;