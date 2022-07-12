import React, { Component } from 'react';
import { SafeAreaView,Platform, TextInput, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, Image, Dimensions, Button, TouchableHighlight, ActivityIndicator, FlatList, RefreshControl } from 'react-native';


import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { Colors } from '../../../../res/style/color'
import { fonts } from '../../../../res/style/fonts'


import { widthPercentageToDP, heightPercentageToDP } from '../../../component/React Native Responsive Screen'



export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    textboxfieldd:{
        fontFamily:fonts['DMSans-Medium'],
        fontSize:RFValue(2),
    },
    CrossIcon: {
        color: Colors.orange,
        position: 'absolute',
        top: 17,
        right: 7,
        fontSize: 26,
       
        padding: 10
    },
    profileMainView:
    { alignSelf: 'center', padding: 20,marginLeft:25 },
    dobView:{
        height: 43,
        width: widthPercentageToDP(92),
        padding: 12,
        borderWidth: 1,
        borderRadius: 10, alignSelf: 'center',
        backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between'
    },
    genderMainView:{ flexDirection: 'row', padding: 12, justifyContent: 'space-around' },

    genderButton:{ borderRadius: 10,
        width: '25%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderWidth: 1,
    },
    genderButtonText:{
        fontFamily: fonts['DMSans-Medium'],
        fontSize: RFValue(12),
        fontFamily: fonts['DMSans-Medium'],
        fontStyle: 'normal',
        letterSpacing: 1,

        color: Colors.black,
    },
    saveButton:{
        backgroundColor: Colors.blue ,
       
        borderRadius: 13,
        width: widthPercentageToDP(40),
        height: 37,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        
    },
    editButtonView:{
        height:24,width:50,marginTop:20,padding:2,marginRight:15,borderRadius:10,borderWidth:2,borderColor:Colors.orange
    },
    editButtonText:{
        
        color:Colors.orange,
        fontFamily: fonts['DMSans-Medium'],
    fontSize: RFValue(13),
   
    
    fontStyle: 'normal',textAlign:'center'
    },
    saveText:{
        fontFamily: fonts['DMSans-Medium'],
        fontSize: RFValue(14),
        fontFamily: fonts['DMSans-Medium'],
        fontStyle: 'normal',
        letterSpacing: 1,

        color: Colors.white,
    },
    avatarText:{
        
        fontSize: RFValue(10),
        fontFamily: fonts['DMSans-Medium'],
        fontStyle: 'normal',
        letterSpacing: 1,

        color: Colors.grayMedium,
    },

    DatePikerMOdal: {
        paddingBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,

        backgroundColor: Colors.darkGrey,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.7,
        shadowRadius: 5,
    },
    LibraryPiker: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
 Continue: {
        backgroundColor: Colors.orange,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        borderRadius: 100,
        width: widthPercentageToDP("60%"),
        height: 45
    },
    ContinueText: {
        fontSize: 14,
        fontFamily: fonts['DMSans-Bold'],
        color: Colors.white,
        textTransform: "uppercase",
        paddingTop: Platform.OS == "android" ? 0 : 3
    },
    modalItem: {
        flexDirection: "row",
        marginHorizontal: 15,
        paddingVertical: 15,
        alignItems: 'center',
        borderBottomColor: Colors.black,
        borderBottomWidth: 1
    },
    modalItemText: {
        fontFamily: fonts['DMSans-Bold'],
        fontSize: 14,
        paddingLeft: 10,
        color: Colors.white,
    },
    spinner: {
        alignSelf: 'center',
        position: 'absolute',
        // top: '36%',
        marginBottom: 20,

    },
    ImageSelect: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 60,
        borderColor:Colors.mainbackground,
        borderWidth:2
        // elevation: 10,
        // shadowColor: 'rgba(0,0,0,0.8)',
        // shadowOffset: { width: 0, height: 5 },
        // shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.7,
        // shadowRadius: 5,
    },
    avatarImageSelect: {
        alignSelf: 'center',
        width: 90,
        height: 90,
        borderRadius: 60,
        borderColor:Colors.mainbackground,
        borderWidth:2
        // elevation: 10,
        // shadowColor: 'rgba(0,0,0,0.8)',
        // shadowOffset: { width: 0, height: 5 },
        // shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.7,
        // shadowRadius: 5,
    },


});

