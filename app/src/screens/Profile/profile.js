import React, { Component,useEffect, useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, Image, Dimensions, Button, TouchableHighlight, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import {icons,api_link} from '../../../res/constants';
import {Toast} from 'native-base';
import MainHeader from '../../component/mainHeaderComponent/Mainheader';
import ImagePicker from 'react-native-image-crop-picker';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { connect } from "react-redux"
import ProfileSvg from '../../../res/images/svg/profile.svg'
import EditSvg from '../../../res/images/svg/edit.svg'
import DateSvg from '../../../res/images/svg/date.svg'
import EditCircleSvg from '../../../res/images/svg/editCircle.svg'
import EditProfileSvg from '../../../res/images/svg/editProfile.svg'
import { styles } from './style'
import {useDispatch, useSelector} from 'react-redux';
import { Colors } from '../../../res/style/color'
import { fonts } from '../../../res/style/fonts'
import InputText from '../../component/widgets/inputText/inputText'
import Label from '../../component/widgets/label/label'
import { globalStyles } from '../../../res/style/appStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../component/widgets/button/button'
import DropDownPicker from 'react-native-dropdown-picker';
import {tinyToastSerive} from '../../utills/Toast';
import { widthPercentageToDP, heightPercentageToDP } from '../../component/React Native Responsive Screen'
import Modal from 'react-native-modal'
import moment from "moment";
import GetApiService, {getApiSerive} from '../../utills/getDataService';
import DatePicker from 'react-native-date-picker'
import ImgToBase64 from 'react-native-image-base64';
import {fetchUSERApi} from '../../redux/actions/userAction'
import { useIsFocused } from '@react-navigation/native';
import {postApiSerive} from '../../utills/postDataService';
import { Value } from 'react-native-reanimated';
// import { Dropdown } from 'react-native-material-dropdown';

import analytics from '@react-native-firebase/analytics';

const profile = (props) => {
    const isFocused = useIsFocused();
    // const [data, setData] =useState([{
    //     value: 'Banana',
    //   }, {
    //     value: 'Mango',
    //   }, {
    //     value: 'Pear',
    //   }]);
    const [name, setName] =useState('');
    const [email, setEmail] =useState('');
    const [phone, setPhone] =useState('');
    const [address, setAddress] =useState('');
    const [profileLoader, setProfileLoader] =useState(false);
    const [selected, setSelected] =useState('male');
    const [date, setDate] =useState(false);
    const[monthDate,setMonthDoc]=React.useState(moment(new Date()).format("YYYY-MM-DD"));
    const[CurrentDate,setCurrentDate]=React.useState(new Date());
    const [modal, setModal] =React.useState(false);
    const [Loader, setLoader] =useState(false);
    const [circleImage, setCircleImage] =useState('');
    const [uriState, setUriState] =useState('');
    const [emailVal, setEmailVal] = useState(false);
    const [phoneVal, setPhoneVal] = useState(false);
    const [FullModecircleImage, setFullModecircleImage] =useState(false);
    const [open, setOpen] =useState(false);
  const [value, setValue] =useState(null);
  const [items, setItems] =useState([]);
// city state
const [openCity, setOpenCity] =useState(false);
const [valueCity, setValueCity] =useState('');
const [cityName, setCityName] =useState('');
const [stateName, setStateName] =useState('');
const [itemsCity, setItemsCity] =useState([]);
const [loading, setLoading] = useState(false);
 const [cityLoading, setcityLoading] = useState(false);
 const [bImage,setBimage]=useState(null);
 const [editText, setEditText] = useState(false);
 const [test, setTest] = useState(false);

// city state end
const dispatch = useDispatch();
const userData = useSelector(
    (state) => state.userR.userSuccess,
  ); 
 

function postImage (image){
    tinyToastSerive.showLoadingToast('Saving Profile Image');
    var rawData = {
        profile_image:image,
        user_id:userData.user_id
      }
    
    postApiSerive.postApiClass(api_link.profileImage,rawData).then((res) => {
       
        var dataJson = JSON.parse(res);
       
        tinyToastSerive.hideToast()
        if(dataJson.message==="Profile Updated Successfully" ){
          
            getShowProfile()
          
        Toast.show({
            style: {backgroundColor: Colors.green},
            text: dataJson.message,
            duration: 2000,
            position: 'Top',
          });
        }else{
            tinyToastSerive.hideToast()
        }
    })
}

function postProfile (){
    if (!email) {
        setEmailVal(true);
      } 
      else if (!phone){
          setPhoneVal(true)
      }
      else {
        tinyToastSerive.showLoadingToast('Updating data');
    var rawData = {
        
        mobile:phone,
        name:name,
        email:email,
        dob:monthDate,
        gender:selected,
        address:address,
        city:valueCity,
        //pincode:,
        state:value,
        user_id:userData.user_id
      }
 console.log('data i am going to post',rawData)
    postApiSerive.postApiClass(api_link.profile,rawData).then((res) => {
       
        var dataJson = JSON.parse(res);
        
        tinyToastSerive.hideToast()
        if(dataJson.message==="User profile update successfully" ){
            setEditText(false)
            getShowProfile()
        Toast.show({
            style: {backgroundColor: Colors.green},
            text: dataJson.message,
            duration: 2000,
            position: 'Top',
          });
         }
       
    })
      }
}

function clickCity(value){
    setLoading(true)
    console.log('value is',value)
   
    getApiSerive.getApiClass(api_link.city+'='+value).then((res) => {
        // var dataJson = JSON.parse(res); 
    // if(res.data.value==value){
     setItemsCity(res.data)
     console.log('city data is',res.data)
    
     setLoading(false)
  

});
  }

  function clickState(){
   
    console.log('state url is',api_link.countryState)
    setcityLoading(true)
    getApiSerive.getApiClass(api_link.countryState).then((res) => {
       // var dataJson = JSON.parse(res);
       setItems(res.data)
        setcityLoading(false)

});
  }

  

function getShowProfile(){

console.log(' get profile url is',api_link.showProfile+'='+userData.user_id)

    getApiSerive.getApiClass(api_link.showProfile+'='+userData.user_id).then((res) => {
        //var dataJson = JSON.parse(res);
       //setItems(dataJson.data)
      // setcityLoading(false)
  
      setBimage(res.data.image)
      setName(res.data.name)
          setEmail(res.data.email)
          setPhone(res.data.mobile)
          setAddress(res.data.address)
          setValueCity(res.data.city)
         setCityName(res.data.city_name)
         setStateName(res.data.state_name)
          setValue(res.data.state)
          setSelected(res.data.gender)
          setUriState(res.data.image)
          if(res.data.dob)
          {
          setMonthDoc(res.data.dob)
          }
          else{
            setMonthDoc("Select Date")
          }
         
       setProfileLoader(false)
          dispatch(fetchUSERApi(res.data))
        
    });

}





 useEffect(() => {
    analytics().logEvent('profile', {       
        description: "profile opened by user"
        })
    setProfileLoader(true)
     clickState()
     getShowProfile()
    setEditText(false)
    
  
}, [isFocused]);





    function set(data) {
        setSelected(data)
        
    }
  

    function openCamera() {
        setModal(false)
        ImagePicker.openCamera({
            cropping: true,
            cropperCircleOverlay: true,
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
            setBimage(image.uri)
            ImgToBase64.getBase64String(image.uri)
            .then(base64String => {
              setCircleImage(base64String)
              postImage(base64String)
            }
             )
            
            .catch(err => console.log(err));
          
           
            setModal(false)
            //setCircleImage(image.uri)
            setLoader(true)
          

         
               
        });

    }
    function openGallery() {
        setModal(false)
        ImagePicker.openPicker({
            cropping: true,
            cropperCircleOverlay: true,
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
            setBimage(image.uri)
            ImgToBase64.getBase64String(image.uri)
            .then(base64String => {
              setCircleImage(base64String)
              postImage(base64String)}
             )
            .catch(err => console.log(err));
          
          
            setModal(false)
          
            setLoader(true)

                
        

        });
    }
 function onValueChange (value) {
        
          setSelected(value)
      
    }
 
    return (

        <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1, }}>

            <MainHeader
                navigation={props.navigation}
            />
          
                {/* profile image */}
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View><Text></Text></View>
                   
                <View style={styles.profileMainView}>
                   
               <TouchableOpacity disabled={true} onPress={()=>{}}><Image source={{uri: bImage} }  style={styles.ImageSelect } />
               </TouchableOpacity> 
                    <View style={{ position: 'absolute', marginTop: 89, marginLeft: 95 }}>
                    <TouchableOpacity onPress ={()=>{props.navigation.navigate('profileImage')}}><EditCircleSvg height={25} width={25}></EditCircleSvg></TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', marginTop: 96.5, marginLeft: 104, }}>
                    <TouchableOpacity onPress ={()=>{props.navigation.navigate('profileImage')}}><EditSvg height={10} width={10}></EditSvg></TouchableOpacity>
                    </View>
                </View>
                {/* edit button */}
                
                <TouchableOpacity  style={styles.editButtonView} onPress ={()=>{
                     
                    setEditText(true)
                  //  profileLoader(true)
                    
                    
                    
                    }}>
                    <Text style={styles.editButtonText}>Edit</Text>
                    </TouchableOpacity>
                   
                </View>
                {profileLoader ?
        <ActivityIndicator
          color={Colors.orange}
          style={{ height: '10%', width: 20,alignSelf:'center',marginRight:40 }}
        />
        :
                <ScrollView style={{marginBottom:40}}>
                {/* Name */}
                <Label text={'Name'}></Label>
               
                <InputText

                    editable={editText}
                    value={name}
                    onChangeText={text => setName(text)}
                    placeholdertext={'Enter Your Name'}
                    placeholderTextColor={editText?Colors.grayMedium:Colors.black}
                    borderCol={editText?Colors.orange:Colors.black}
                   

                />
               
                {/* Email */}
                <Label text={'EMAIL'}></Label>
                <View>
                <InputText
                editable={editText}
                    Typetext={'email-address'}
                    value={email}
                    onChangeText={text => {setEmail(text),setEmailVal(false)}}
                    placeholdertext={'Enter Email'}
                    placeholderTextColor={editText?Colors.grayMedium:Colors.black}
                    borderCol={editText?Colors.orange:Colors.black}

                />
                {emailVal ? (
                  <Text
                    style={{
                      marginTop: 4,
                      fontFamily: fonts['DMSans-Regular'],
                      fontSize: 12,
                      color: Colors.absent,
                    }}>
                    * Please fill this field
                  </Text>
                ) : null}
                </View>
                {/* Phone number */}
                <Label text={'PHONE'}></Label>
                <View>
                <InputText
                    editable={editText}
                    Typetext={'phone-pad'}
                    value={phone}
                    onChangeText={text => {setPhone(text) , setPhoneVal(false)}}
                    placeholdertext={'Enter Phone Number'}
                    placeholderTextColor={editText?Colors.grayMedium:Colors.black}
                    borderCol={editText?Colors.orange:Colors.black}


                />
                {phoneVal ? (
                  <Text
                    style={{
                      marginTop: 4,
                      fontFamily: fonts['DMSans-Regular'],
                      fontSize: 12,
                      color: Colors.absent,
                    }}>
                    * Please fill this field
                  </Text>
                ) : null}
                </View>
                {/* DOB */}
                <Label text={'DOB'}></Label>
                <View style={{ padding: 4, }}>
                <View style={[styles.dobView,{borderColor:editText?Colors.orange:Colors.black}]}>
                    {!monthDate?<Text style={{ color: editText?Colors.grayMedium:Colors.black,
        fontSize: RFValue(12),
        fontFamily:fonts['DMSans-Medium'] }}>select date</Text> :
                 <Text style={{ color: Colors.black,
        fontSize: RFValue(12),
        fontFamily:fonts['DMSans-Medium'] }}>{monthDate}</Text> }
                 {editText?
                   
                <TouchableOpacity onPress ={()=>setDate(true) }><DateSvg style={{ marginTop: 4 }}>
                            </DateSvg></TouchableOpacity>
               :null}

</View>
</View>         
                {/* select gender */}
                <Label text={'SELECT GENDER'}></Label>
                <View style={styles.genderMainView}>
                    <TouchableOpacity disabled={!editText}
                        onPress={() => {
                            
                            set('male')
                        }}
                        style={[styles.genderButton,{
                            backgroundColor: selected == 'male' ? Colors.orange : Colors.white,
                            borderColor: selected == 'male' || editText ? Colors.orange : Colors.black,
                           }]}

                    >
                        <Text style={[styles.genderButtonText,{color: selected == 'male' ? Colors.white : Colors.black,}]}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  disabled={!editText}
                    onPress={() => {
                        set('female')
                    }} style={[styles.genderButton,{
                        backgroundColor: selected == 'female' ? Colors.orange : Colors.white,
                        borderColor: selected == 'female'|| editText  ? Colors.orange : Colors.black,
                        
                    }]}

                    >
                        <Text style={[styles.genderButtonText,{color: selected == 'female' ? Colors.white : Colors.black,}]}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={!editText}
                        onPress={() => {
                            set('binary')


                        }}


                        style={[styles.genderButton,{
                            backgroundColor: selected == 'binary' ? Colors.orange : Colors.white,
                            borderColor: selected == 'binary' || editText ? Colors.orange : Colors.black,
                            
                        }]}

                    >
                        <Text style={[styles.genderButtonText,{color: selected == 'binary' ? Colors.white : Colors.black,}]}>Non Binary</Text>
                    </TouchableOpacity>
                </View>
                {/* Address */}
                <Label text={'ADDRESS'}></Label>
                <InputText

                    editable={editText}
                    value={address}
                    onChangeText={text => setAddress(text)}
                    placeholdertext={'Enter Address'}
                    placeholderTextColor={editText?Colors.grayMedium:Colors.black}
                    borderCol={editText?Colors.orange:Colors.black}

                />
                {/* State */}


                <Label text={'STATE'}></Label>


{/* start drop down */}
{editText?
<View style={{padding:12,marginBottom:valueCity?0:15}} > 

 <DropDownPicker

style={{height: 43,
    width:widthPercentageToDP(92),
    padding:12,
    borderWidth: 1,
  borderRadius:10,
  alignSelf:'center',
  marginBottom:open==true?120:0,
  borderColor:editText?Colors.orange:Colors.black

}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      defaultValue={value}
      onPress={(open) => { 
        setOpenCity(false)
          setOpen(open)
      }
        }
      listMode="SCROLLVIEW"
      bottomOffset={100}
      dropDownContainerStyle={{
        backgroundColor: Colors.white,
        marginBottom:700,
        height:120,
        width:widthPercentageToDP(92),
        marginLeft:4,
        borderColor:Colors.orange
      
      }}
      defaultNull
      placeholder={stateName?stateName:"Select State"}
      placeholderStyle={{
        color: stateName?Colors.black:Colors.grayMedium,
        fontSize: RFValue(12),
        fontFamily:fonts['DMSans-Medium']
        
      }}
      textStyle={{
        fontSize: RFValue(12),
        color: Colors.black
       ,fontFamily:fonts['DMSans-Medium']
      }}
      modalProps={{
        animationType: "fade"
      }}
      onChangeValue={(value) => {
       
        
         clickCity(value);
      }}
    
     
      loading={cityLoading}
      
      closeAfterSelecting={true}
    /> 
    </View>

:

<InputText
 placeholdertext={'Select State'}
 placeholderTextColor={editText?Colors.grayMedium:Colors.black}
editable={editText}
value={stateName}
borderCol={editText?Colors.orange:Colors.black}

/>
}



{/* city drop down  */}

<Label text={'CITY'}></Label>

{value && editText==true?
<View style={{padding:12}} > 

<DropDownPicker
style={{height: 43,
    width:widthPercentageToDP(92),
    padding:12,
    borderWidth: 1,
  borderRadius:10,alignSelf:'center',marginBottom:openCity==true?90:15,borderColor:editText?Colors.orange:Colors.black}}
      open={openCity}
      value={valueCity}
      items={itemsCity.flat()}
      setOpen={setOpenCity}
      setValue={setValueCity}
      setItems={setItemsCity}
      onPress={(open) => {
          setOpenCity(open)
          setOpen(false)
        }}
        onOpen={(open)=>{

        }}
          
      listMode="SCROLLVIEW"
      bottomOffset={100}
      dropDownContainerStyle={{
        backgroundColor: Colors.white,
        marginBottom:700,
        height:120,
        width:widthPercentageToDP(92),
        marginLeft:4,
        borderColor:Colors.orange
      
      }}
      
      placeholder={cityName?cityName:"Select City"}
      placeholderStyle={{
        color: cityName?Colors.black:Colors.grayMedium,
        fontSize: RFValue(12),
        fontFamily:fonts['DMSans-Medium']
        
      }}
      textStyle={{
        fontSize: RFValue(12),
        color: Colors.black
       ,fontFamily:fonts['DMSans-Medium']
      }}
      modalProps={{
        animationType: "fade"
      }}
     
    loading={loading}
    />
</View>
:
<View style={{marginBottom:14}}>
<InputText
 placeholdertext={'Select City'}
 placeholderTextColor={editText?Colors.grayMedium:Colors.black}
editable={editText}
value={cityName}
borderCol={editText?Colors.orange:Colors.black}

/>
</View>
}



                {editText?
                <View style={{marginRight:10,marginLeft:10,padding:12,marginTop:10,marginBottom:10,flexDirection:'row',justifyContent:'space-between'}}>

                <TouchableOpacity
                       onPress={() => {
                        setOpenCity(false)
                        setOpen(false)
                           setEditText(false)
                          // clickCity(value)
                           getShowProfile()
                       

                    }}

                        style={[styles.saveButton,{backgroundColor:Colors.red}]}

                    >
                        <Text style={styles.saveText}>cancel</Text>
                    </TouchableOpacity>
                   
                <TouchableOpacity
                       onPress={() => {
                       
                        setDate(false),
                        setOpenCity(false),
                        setOpen(false),
                        postProfile()}}
                     style={styles.saveButton}
                    >
                        <Text style={styles.saveText}>save</Text>
                    </TouchableOpacity>
                    
                    
                    </View>
                    :null}
            </ScrollView>
}
            {/* date model */}

            <Modal
                    style={{
                        justifyContent: 'flex-end',
                        margin: 0,
                    }}
                    onBackButtonPress={() => setDate(false)}
                    onBackdropPress={() => setDate(false)}
                    visible={date}
                    transparent
                    animationType="slide"
                    onRequestClose={() => setDate(false)}
                    hardwareAccelerated
                >

                    <View style={styles.DatePikerMOdal}>

                        <DatePicker
                            style={styles.LibraryPiker}
                            textColor={Colors.white}
                            date={Platform.OS == "ios" ? "" : CurrentDate}
                            onDateChange={date =>{ setMonthDoc(moment(date).format("YYYY-MM-DD"))}}
                            mode={'date'}
                            fadeToColor={Colors.darkGrey}
                          
                        />


                        <TouchableOpacity
                            onPress={() => {
                                setDate(false)
                            }}>
                            <View style={styles.Continue}>
                                <Text style={styles.ContinueText}>Done</Text>
                            </View>
                        </TouchableOpacity>
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
                            onPress={() => openCamera()}
                            style={{ borderBottomColor: Colors.white, borderBottomWidth: 1 }}>

                            <View style={styles.modalItem}>
                                <Icon name="camera" size={25} style={{ color: Colors.grayMedium }} />
                                <Text style={styles.modalItemText}>Camera</Text>
                            </View>

                        </TouchableHighlight>


                        <TouchableHighlight
                            underlayColor="#ddd"
                            style={{ borderBottomColor: Colors.white, borderBottomWidth: 1 }}
                            onPress={() => openGallery()}>

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

                        <Image source={{uri: bImage} }
                            style={{
                                flex: 1,
                                resizeMode: "contain", // or 'stretch'
                                width: '100%',
                                height: '100%'
                            }} />

                        <Icon
                            onPress={() => setFullModecircleImage(false)}
                            name="minus-circle"
                            style={styles.CrossIcon}
                        />
                    </View>
                </Modal>
                {/* <Modal
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        margin: 0,
                    }}
                    visible={Loader}
                    transparent
                    animationType="slide"
                    hardwareAccelerated>

                    <View style={globalStyles.LOADER}>
                        <View style={globalStyles.Spinner}>
                            <Spinner style={styles.spinner} isVisible={true} size={28} type={"Circle"} color={Colors.Motivationcolor} />

                        </View>
                    </View>
                </Modal> */}
        </SafeAreaView>
    );
};
export default profile;
