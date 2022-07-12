import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../../res/style/color'
import { widthPercentageToDP, heightPercentageToDP } from '../../../component/React Native Responsive Screen'
import { fonts } from '../../../../res/style/fonts';


export const styles = StyleSheet.create({
  //My contests style


  container: {
    flex: 1,
    backgroundColor: Colors.white
    // justifyContent: "center",
    // alignItems: "center"
  },
  myContestMain: {
    marginBottom: 70,
    marginTop: 10,
  },

  matchstatusbartext: {
    fontWeight: '500',
    fontSize: RFValue(10, 580),
    fontFamily: fonts['DMSans-Medium'],
    fontStyle: 'normal',
    letterSpacing: 1,
    //marginLeft:11,
    color: Colors.darkGrey,
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  Allstatusbartext: {
    //fontWeight:'bold',
    fontSize: RFValue(10, 580),
    fontFamily: fonts['DMSans-Medium'],
    fontStyle: 'normal',
    letterSpacing: 1,
    //marginLeft:11,
    color: Colors.darkGrey,
  },

  tabbarView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.mainbackground,
    height: 45,
  },
  tabbarStyle: {
    borderRadius:30,
    // padding:10,
    height:30,
    paddingLeft:15,
    paddingRight:15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
  },
  loader_style: {
    marginTop: 10,
    justifyContent: 'center'
  },
 
  bottomButtonVieww:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
    marginBottom: 20,
    marginLeft:15,
    marginRight:15
   
  },
  buildteamtagLeft: {
    backgroundColor: Colors.orange,
    borderRadius: 50,
    width:'100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

  },
  buildteamtagtext: {
  
    fontFamily: fonts['DMSans-Medium'],
    fontSize: RFValue(9, 580),
        fontFamily: fonts['DMSans-Medium'],
        fontStyle:'normal',
        letterSpacing:1,

    color: Colors.white,
  },
  buildteamtag: {
    backgroundColor: Colors.orange,
    borderRadius: 30,

    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
 



  //My team style


  teamContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.mainbackground,

    borderRadius: 25,
    width: '92%',
    marginTop: '5%',


  },
  teamTagsText: {
    color: Colors.darkGrey,
    fontFamily: fonts['DMSans-Medium'],
  },
  editBtnstyle: {
    paddingRight: 40,
  },
  cricketerMainView: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',

  },
  cricketerButtonView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

  },
  notSelectedTags:
  {
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'black',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: -10,


  },
  cricketerButtonText: {
    fontSize: RFValue(10),
    fontFamily: fonts['DMSans-Medium'],
  },
  cricketTagContianer:
  {

    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row'
  },
  cricketTags: {
    height: 45,
    width: 45,
    backgroundColor: Colors.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',


  },
  teamNameAndBtnsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15
  },
  teamCandVcImagesView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15
  },
  teamNamesView:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
    marginTop: '5%'
  },




  // my contest style

  contestFullHeader: {
    height: 110,
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
    // justifyContent:'center',
    // alignItems:'center',
    // padding:25,
    backgroundColor: Colors.darkGrey,
  },

  jointag: {
    backgroundColor: Colors.blue,
    borderRadius:25,
    // padding:10,
    height:30,
    paddingLeft:15,
    paddingRight:15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
  
    


  },
  confirmtag: {
    


    borderRadius:25,
    // padding:10,
    height:25,
    paddingLeft:8,
    paddingRight:8,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
    


  },
  bar: {
    backgroundColor: Colors.orange,
    height: 8,

    borderRadius: 10,
  },
  barwhite: {
    backgroundColor: Colors.white,
    height: 8,

    borderRadius: 10,
  },
  buildteamtag: {
    backgroundColor: Colors.orange,
    borderRadius: 30,
    padding: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 20,
    


  },
  stickyView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    borderRadius: 10,
  },

  line_1: {
    backgroundColor: Colors.black,
    height: 2,
    width: '47%',
    borderRadius: 10,
  },
  line_2: {
    backgroundColor: Colors.white,
    height: 2,
    width: '23.5%',
    borderRadius: 10,
  },
  line_3: {
    backgroundColor: Colors.white,
    height: 2,
    width: '23.5%',
    borderRadius: 10,
  },
  loader_style: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '2%',
    // marginBottom: '25%',
  },
  textColor: {
    color: Colors.white,
    fontFamily: fonts['DMSans-Medium'],
  },
  contestFullText: {
    fontSize: RFValue(8, 580), marginLeft: 10, marginTop: 3,
    fontFamily: fonts['DMSans-Medium'],
  },
  textPrice: {
    color: Colors.orange,
    fontFamily: fonts['DMSans-Medium'],
  },
  teamContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.mainbackground,

    borderRadius: 25,
    width: '92%',
    marginTop: '5%',


  },
 
  cricketerMainView: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',

  },
  cricketerButtonView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

  },
  notSelectedTags:
  {
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: Colors.darkGrey,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: -10,


  },
  cricketerButtonText: {
    fontSize: RFValue(10),
    fontFamily: fonts['DMSans-Medium'],
    color: Colors.darkGrey
  },
  cricketTagContianer:
  {

    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row'
  },
  cricketTags: {
    height: 45,
    width: 45,
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',


  },
  teamNameAndBtnsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15
  },
  teamCandVcImagesView: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
     justifyContent:'space-evenly',
    marginTop: 15,
    marginLeft:10,
    marginRight:10
  },
  teamNamesView:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
    marginTop: '5%'
  },

  containerJoinView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  prizePoolView: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop: 13,
    marginRight: 10,
    marginLeft: 10,
  },
  poolBarView:{flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginTop:20,marginRight:10,marginLeft:10},
  barView:
  {flexDirection:'row',
  alignItems:'center', marginTop:10,marginRight:20,marginLeft:20,
  backgroundColor: Colors.white,
  borderRadius: 10,
},
contestFullBody: {
  marginTop: 20,
  marginLeft: 15
},

  teamRow: { marginLeft: 25, marginRight: 25 },
  textgrayColor: {
    color: Colors.darkGrey,
    fontFamily: fonts['DMSans-Medium'],
  },
  teamBodylist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  horizonalLine: {
    width: '100%',
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
  },
  bottomItems:
    { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 15 },


    imagesView:{
      flexDirection:'row',
      flex:1,
      alignItems:'center', 
      justifyContent:'space-evenly',
      //  marginTop:20,
      height:35,
       backgroundColor:Colors.highLight,
      //  borderBottomLeftRadius:20,
      //  borderBottomRightRadius:20,
      
      },
    

      swipeUpDownOpened:{
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        width:'100%',
        height:50,
        borderRadius:20,
       
    },
 ViewBackground: {
      alignSelf: 'center',
      padding: 10,
      width: widthPercentageToDP(80),
      justifyContent: 'center',
      backgroundColor: Colors.mainbackground,
      borderRadius: 10,
      elevation: 2,
      shadowColor: 'rgba(0,0,0,0.8)',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.7,
      shadowRadius: 5,
      
    },
        buildteamtag:{
        backgroundColor: Colors.orange,
        borderRadius:30,
        padding:10,
        height:35,
        width:100,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        
    },
    buildteamtagtext:{
        fontSize: RFValue(10, 580),
        color:'white',
    },

});



