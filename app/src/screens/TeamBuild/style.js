
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { color } from 'react-native-reanimated';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Colors} from '../../../res/style/color'
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
    mainHeaderHeading:{
        fontSize: RFValue(10), color: Colors.darkGrey, fontWeight: '700', fontFamily: fonts['DMSans-Bold'],
    },
    
    nextButton: {
        backgroundColor: Colors.grayMedium,
        borderRadius: 30,
        padding: 14,
        height: 8,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',

    },
    nextButtonSelected: {
        backgroundColor: Colors.orange,
        borderRadius: 30,
        padding: 14,
        height: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        

    },
    // Main Header Styling End

    // progress bar style start
    progressBar1:{
        flexDirection:'row',
        alignItems:'center',
         marginRight:15,
         marginLeft:15
        },
  
    circleSelected:{ 
        borderRadius: 100, 
        backgroundColor: Colors.darkGrey,
        height:10,
        width:'3%'
    },
    progressBar2:{
        backgroundColor:Colors.black,
        height:2,
        width:'22%',
        borderRadius:10,

    },
    circleUnSelected:{
         borderRadius: 100,
          backgroundColor: Colors.white,
          height:10,
          width:'3%'
        },
    progressBarTextView:{ 
        flexDirection: 'row',
         marginLeft: 15, 
         marginTop: 5, 
         marginRight: 15,
         justifyContent:'space-between' 
        },
    backModaltext:{
        fontFamily: fonts['DMSans-Medium'],
        fontSize: RFValue(9, 580),
            fontFamily: fonts['DMSans-Medium'],
            fontStyle:'normal',
            letterSpacing:1,
    
        color: Colors.white,
    },
    backModalGobacktext:{
       
        fontSize: RFValue(12, 580),
            fontFamily: fonts['DMSans-Bold'],
            fontStyle:'normal',
            letterSpacing:1,
    
        color: Colors.darkGrey,
    },
    backModaltextView: {
        backgroundColor: Colors.orange,
        borderRadius: 50,
        width:'100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    
      },
    ProgressBarText:{
        fontSize:RFValue(10),
        color:Colors.darkGrey
    },
    // progress bar style end

    buildTeamHeadingView:{ 
        flexDirection: 'row', 
        marginLeft: 15, 
        marginTop: 15,
         marginRight: 15, 
         justifyContent: 'space-between' ,
        
        },
        buildTeamText: {
            fontWeight: '700',
            fontSize: RFValue(18),
            color:Colors.darkGrey,
            fontFamily: fonts['DMSans-Medium'],
        },
        buildTeamTextCR: {
            fontWeight: '500',
            fontSize: RFValue(15),
            color:Colors.darkGrey,
            fontFamily: fonts['DMSans-Medium'],
            paddingTop:6,
        },
        maxSelectedTeam:{
             flexDirection: 'row',
              marginLeft: 15, 
              marginTop: 10,
               marginRight: 0, 
               justifyContent: 'center' 
            },
            // end
            // selected reset player
            selectedResetMainView:{
                 flexDirection: 'row',
                  marginLeft: 15, 
                  marginTop: 15,
                   marginRight: 15, 
                   justifyContent: 'space-between' 
                },
                SelectedplayerText:{ 
                    fontSize: RFValue(8),
                    color:Colors.darkGrey,
                    fontFamily: fonts['DMSans-Medium'],
                    fontWeight:'400'
                   
                },
                SelectedplayerTextHeading:{ 
                    fontSize: RFValue(12),
                    color:Colors.darkGrey,
                    fontFamily: fonts['DMSans-Medium'],
                    fontWeight:'700'
                },
                vsView:{
                    flexDirection:'row',
                    marginRight:10,
                    marginLeft:10
                },
                countryVsCountryText:{
                    fontSize:RFValue(12),
                    color:Colors.darkGrey,
                    fontFamily: fonts['DMSans-Medium'],
                    fontWeight:'700'

                },
                countryVsCountryTextVS:{
                    fontSize:RFValue(12),
                    color:Colors.darkGrey,
                    fontFamily: fonts['DMSans-Medium'],
                    fontWeight:'700'


                },
                resetText:{ 
                    fontSize: RFValue(12),
                     color: Colors.orange ,
                     fontFamily: fonts['DMSans-Medium'],
                     fontWeight:'500',
                     letterSpacing: .5
                    },
                    //end
                    // cricketer button strat
                    cricketerMainView:{
                        flexDirection: 'row',
                         marginLeft: 15,
                          marginRight: 15,
                           marginTop: 15, 
                           justifyContent: 'space-between',
                            alignItems: 'center',
                        alignContent: 'center', 
                        marginBottom: 15
                    },
                    cricketerButtonView:{
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
        borderWidth:2,
        borderColor:Colors.white
        

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
    cricketerButtonText:{ 
        fontSize: RFValue(10) ,
        color:Colors.darkGrey,
        fontFamily: fonts['DMSans-Medium'],
        fontWeight:'400',
    },
    // end
    loaderViewStyle:{
        flex: 1 ,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
      },
      loaderStyle:{
          height:'50%',
          width:'50%', 
          marginTop:15
        },


listMainView:{ 
    flex: 1,
     backgroundColor:Colors.mainbackground 
    },
pickCricketerLimitView:{
    flexDirection:'row',
     justifyContent: 'center', 
     marginTop: 10,
     marginLeft:15,
     marginRight:15 ,
     marginBottom:10,
     alignContent:'center',
     alignItems:'center'
    },
    teamCrad: {
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 25,
        justifyContent: 'space-evenly',
        height: 120,

    },
    teamCardSelected: {
        flexDirection: 'row',
        backgroundColor: '#D1C6A8',
        margin: 8,
        borderRadius: 25,
        justifyContent: 'space-evenly',
        height: 120,

    },
    statText:{ 
        paddingRight: 30, 
        paddingBottom: 5 ,
        fontSize:RFValue(10)
    },
    statScoreText:{ 
        paddingRight: 30, 
        paddingBottom: 5 ,
        fontSize:RFValue(12)
    },
    addButtonView: {
        backgroundColor: 'black',
        borderRadius: 50,
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 12,
        marginRight: 5,
        

    },


    swipeUpDownMainView:{
       flexDirection:'row',
        justifyContent:'center',
        width:'100%',
        alignContent:'center',
        alignItems:'center',
       
        backgroundColor:Colors.white,
        height:50,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
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
    yourteamMainView:{ 
       flex:1,
        flexDirection:'row',
        width:'100%'
       
    },
   yourTeamGround13:{
       flexDirection:'column', 
       height:'100%',
       width:'20%',
       backgroundColor:'#5BDC68'
    },
    yourTeamGround24:{
        flexDirection:'column',
         height:'100%',
         width:'20%',
         backgroundColor:'#6DE979'
        },
        yourTeamGroundMid:{
            flexDirection:'column',
             height:'100%',
             width:'20%',
             backgroundColor:'#5BDC68',
             alignItems:'center',
             alignContent:'center',
             justifyContent:'center'
            },
            keeperView:{
                flexDirection:'row',
                justifyContent:'center',
                position:'absolute',
                alignItems:'center',
                width:'100%'
            },
            cricketerNameText:{ 
                top:5,
                color:Colors.white,
                fontSize:RFValue(12)
            },
            keeperDataView:{
                flexDirection:'row', 
                // backgroundColor:'',
                justifyContent:'space-evenly',
                position:'absolute',
                top:17,
                left:5,
                right:5
            },
      bar:{
        backgroundColor:'black',
        height:2,
        width:'47%',
        borderRadius:10,

    },
   
    barwhite:{
        backgroundColor:'white',
        height:2,
        width:'22%',
        borderRadius:10,

    },
    seperatorStyle:{ width:'100%',  
    backgroundColor:Colors.white, 
    height:2
}



    
});

