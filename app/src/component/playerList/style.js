
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../res/style/color'
import { fonts } from '../../../res/style/fonts'




export const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 24,

    },

    // heading:
    // {
    //     fontWeight: 'bold',
    //     fontSize: RFValue(13, 580),
    //     marginLeft: 14,

    // },
    // Main Header Styling Start
    mainHeader:
    {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    barImage:
    {
        marginTop: 18,
        width: 20,
        height: 15,
        marginLeft: 15
    },
    mainHeaderHeading: {
        fontSize: RFValue(12),
        fontWeight: '700'
    },

    nextButton: {
        backgroundColor: Colors.grayMedium,
        borderRadius: 30,
        padding: 12,
        height: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',

    },
    nextButtonSelected: {
        backgroundColor: Colors.orange,
        borderRadius: 30,
        padding: 12,
        height: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',


    },
    // Main Header Styling End

    // progress bar style start
    progressBar1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        marginLeft: 15
    },

    circleSelected: {
        borderRadius: 100,
        backgroundColor: Colors.darkGrey,
        height: 10,
        width: '3%'
    },
    progressBar2: {
        backgroundColor: Colors.black,
        height: 2,
        width: '22%',
        borderRadius: 10,

    },
    circleUnSelected: {
        borderRadius: 100,
        backgroundColor: Colors.white,
        height: 10,
        width: '3%'
    },
    progressBarTextView: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 5,
        marginRight: 15,
        justifyContent: 'space-between'
    },
    ProgressBarText: {
        fontSize: RFValue(10)
    },
    // progress bar style end

    buildTeamHeadingView: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
        justifyContent: 'space-between'
    },
    buildTeamText: {
        fontWeight: 'bold',
        fontSize: RFValue(20),
    },
    maxSelectedTeam: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 10,
        marginRight: 0,
        justifyContent: 'center'
    },
    // end
    // selected reset player
    selectedResetMainView: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 10,
        marginRight: 15,
        justifyContent: 'space-between'
    },
    SelectedplayerText: {
        fontSize: RFValue(10)
    },
    vsView: {
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 10
    },
    countryVsCountryText: style = {
        fontSize: RFValue(12)
    },
    resetText: {
        fontSize: RFValue(16),
        color: Colors.orange
    },
    //end
    // cricketer button strat
    cricketerMainView: {
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 15
    },
    cricketerButtonView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    cricketTagContianer:
    {

        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row'
    },

    cricketTagsSelected: {
        height: 60,
        width: 60,
        backgroundColor: Colors.orange,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',

    },
    cricketTags: {
        height: 60,
        width: 60,
        backgroundColor: Colors.white,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',

    },



    notSelectedTags:
    {
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'black',
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginLeft: -15,


    },
    cricketerButtonText: {
        fontSize: RFValue(10)
    },
    // end
    loaderViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    loaderStyle: {
        height: '50%',
        width: '50%',
        marginTop: 15
    },


    listMainView: {
        flex: 1,
        backgroundColor: Colors.mainbackground
    },
    pickCricketerLimitView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15
    },
    teamCrad: {
        flexDirection: 'row',
        //backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,

        borderRadius: 15,
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    teamCardGreyOut: {
        flexDirection: 'row',
        backgroundColor: Colors.black,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,

        borderRadius: 15,
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    teamCardSelected: {
        flexDirection: 'row',
        backgroundColor: '#D1C6A8',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        borderRadius: 15,
        justifyContent: 'space-between',


    },
    statText: {
        paddingRight: 30,
        paddingBottom: 5,
        fontSize: RFValue(10),
        fontFamily: fonts['DMSans-Medium'],
        fontWeight:'400',
        color:Colors.darkGrey
    },
    statScoreText: {
        paddingRight: 30,
        paddingBottom: 5,
        fontSize: RFValue(12),
        fontFamily: fonts['DMSans-Medium'],
        fontWeight:'700',
        color:Colors.darkGrey
    },
    addButtonView: {



        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 12,
        marginRight: 10,


    },
    stauts: {
        marginTop: '25%',
        // fontFamily: fonts['Gotham-Bold'],
        fontSize: RFValue(16),
        letterSpacing: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        color: Colors.NewBackgroundColor,
        // lineHeight: 12
    },
    stautsNext: {
        width: 300,
        marginTop: 8,
        // fontFamily: fonts['Gotham-Medium'],
        fontSize: RFValue(12),
        letterSpacing: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        color: Colors.lightgray,
        textAlign: 'center',
        lineHeight: 20
    },


    swipeUpDownMainView: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        height: '5%'
    },
    swipeUpDownOpened: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '5%'
    },
    yourteamMainView: {
        flexDirection: 'row',
        height: '84%'
    },
    yourTeamGround13: {
        flexDirection: 'column',
        height: '100%',
        width: '20%',
        backgroundColor: '#5BDC68'
    },
    yourTeamGround24: {
        flexDirection: 'column',
        height: '100%',
        width: '20%',
        backgroundColor: '#6DE979'
    },
    yourTeamGroundMid: {
        flexDirection: 'column',
        height: '100%',
        width: '20%',
        backgroundColor: '#5BDC68',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    keeperView: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'center',
        width: '100%'
    },
    cricketerNameText: {
        color: Colors.white,
        fontSize: RFValue(12)
    },
    keeperDataView: {
        flexDirection: 'row',
        // backgroundColor:'',
        justifyContent: 'space-evenly',
        position: 'absolute',
        top: 12,
        left: 5,
        right: 5
    },
    bar: {
        backgroundColor: 'black',
        height: 2,
        width: '47%',
        borderRadius: 10,

    },

    barwhite: {
        backgroundColor: 'white',
        height: 2,
        width: '22%',
        borderRadius: 10,

    },




});

