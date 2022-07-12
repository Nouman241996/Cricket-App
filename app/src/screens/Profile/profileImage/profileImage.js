import React, { Component, useEffect, useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, Image, Dimensions, Button, TouchableHighlight, ActivityIndicator, FlatList, RefreshControl } from 'react-native';

import analytics from '@react-native-firebase/analytics';
import { Colors } from '../../../../res/style/color'
//import MainHeaderFromDrawer from '../../../../../drawerContent/component/header/header'
import MainHeader from '../../drawerContent/component/header/header';
import { icons,api_link } from '../../../../res/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../../component/widgets/button/button';
import CamSvg from '../../../../res/images/svg/camSvg'
import Modal from 'react-native-modal'
import ImagePicker from 'react-native-image-crop-picker';
import ImgToBase64 from 'react-native-image-base64';
import { styles } from './style';
import {postApiSerive} from '../../../utills/postDataService';
import {tinyToastSerive} from '../../../utills/Toast';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUSERApi} from '../../../redux/actions/userAction'
import GetApiService, {getApiSerive} from '../../../utills/getDataService';
import {Toast} from 'native-base';
const profileImage = (props) => {

    const [modal, setModal] = React.useState(false);
    const [bImage, setBimage] = useState(null);
    const [circleImage, setCircleImage] = useState('');
    const [loader,setLoader]=useState(false)
    const dispatch = useDispatch();
    const userData = useSelector(
        (state) => state.userR.userSuccess,
      ); 
    function getShowProfile(){

        console.log(' get profile url is',api_link.showProfile+'='+userData.user_id)
        
            getApiSerive.getApiClass(api_link.showProfile+'='+userData.user_id).then((res) => {
               
          
              setBimage(res.data.image)
             
                 
              
                  dispatch(fetchUSERApi(res.data))
                
            });
        
        }

        useEffect(() => {
            
             getShowProfile()
           
            
          
        }, []);
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
    
    const postAvatarImage=(image)=>{
        console.log(image)
        tinyToastSerive.showLoadingToast('Saving Profile Image');
        var rawData = {
            image:image,
            user_id:userData.user_id
          }
        
        postApiSerive.postApiClass(api_link.avatarImagesApi,rawData).then((res) => {
           
            var dataJson = JSON.parse(res);
           console.log('response',dataJson)
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
            //setLoader(true)




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
                    postImage(base64String)
                }
                )
                .catch(err => console.log(err));


            setModal(false)

            //setLoader(true)




        });
    }

    const profileImageView = () => {
        return (
            <>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                    <Image
                    style={styles.ImageSelect }
                    source={{uri:bImage}} />
                </View>
            </>

        )
    }

    const selectAvatar=(image)=>{
        console.log(image)
        ImgToBase64.getBase64String(image)
        .then(base64String => {
            setCircleImage(base64String)
            console.log("converted image",base64String)
            //postImage(base64String)
        }
        )
        .catch(err => console.log(err));

    }
    const imagesView = (img1, img2, img3,gender) => {
        return (
            <>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>
                    <TouchableOpacity
                        onPress={() => {
                            postAvatarImage(gender+'1.png'),
                            console.log("i am image 1")
                        }}
                    >
                        <Image style={styles.avatarImageSelect} source={img1} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            postAvatarImage(gender+'2.png'),
                            console.log("i am image 2")
                        }}
                    >
                        <Image style={styles.avatarImageSelect} source={img2} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            postAvatarImage(gender+'3.png'),
                            console.log("i am image 3")
                        }}
                    >
                        <Image style={styles.avatarImageSelect} source={img3} />
                    </TouchableOpacity>

                </View>
            </>

        )
    }
    const uploadButton = () => {
        return (
            <>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>

                    <CustomButton
                        text={'  OR UPLOAD A PICTURE'}
                        icon={<CamSvg />}
                        color={Colors.orange}
                        textColor={Colors.white}
                        widthButton='80%'
                        onPress={() => {
                            setModal(true)
                        }}
                    />

                </View>
            </>

        )
    }
    return (



        <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1, }}>
            <MainHeader
                navigation={props.navigation}
                screenName={'CHANGE PROFILE PICTURE'}
            />
            {profileImageView()}
            <View
                style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}
            >
                <Text
                    style={styles.avatarText}
                >SELECT AN AVATAR</Text>
            </View>
            {imagesView(icons.profileImage2, icons.profileImage3, icons.profileImage4,'m')}
            {imagesView(icons.profileImage5, icons.profileImage6, icons.profileImage7,'f')}
            {uploadButton()}

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


        </SafeAreaView>
    );
};
export default profileImage;
