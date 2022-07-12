import { icons } from '../../../res/constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { styles } from './style'
import { widthPercentageToDP, heightPercentageToDP } from '../React Native Responsive Screen'
import { Colors } from '../../../res/style/color'
import { globalStyles } from '../../../res/style/appStyle'

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
FlatList


} from 'react-native';

import { ImageBackground } from 'react-native';
import {fonts} from '../../../res/style/fonts'
class GroundViewPlayersList extends Component {

    constructor(props) {
        super(props);

    }



    render() {


        return (

            <>
           
                 <View style={{ flexDirection: 'row', justifyContent: 'center',alignItems:'center',alignContent:'center' }}>
                        {this.props.data.length==0?
                        null:<Text style={styles.cricketerNameText}>{this.props.playertype}</Text>  
                    }
                    </View>
                    <View style={{ justifyContent: 'center',alignItems:'center',alignContent:'center' }}>
                        <FlatList
                            data={this.props.data}
                            renderItem={({ item }) => (
                                <>
                                <View style={{ alignContent: 'center', alignItems: 'center', marginRight: 12, marginTop:8,  width: 80, }}>
                                    <Image source={{uri: item.image}} style={{ height: 80, width: 60 }} />
                                    <View style={{ backgroundColor: item.team_number==1? Colors.white:Colors.darkGrey, justifyContent: 'center', alignContent: 'center', alignItems: 'center',  borderRadius: 8, height: 40,width:'100%',padding:2, marginTop:-8, }}>

                                        <Text numberOfLines={1} style={{ fontSize: RFValue(10, 580), textAlign: 'center', width: 80,fontFamily: fonts['DMSans-Medium'],fontWeight:'400', color:item.team_number==1? Colors.darkGrey:Colors.highLight, }}>{item.player_shortname}</Text>
                                        <Text style={{ fontSize: RFValue(10, 580),fontFamily: fonts['DMSans-Medium'],fontWeight:'700',color:item.team_number==1? Colors.darkGrey:Colors.highLight, }}>{this.props.pointType==="point"?item.total_points+' PTS':item.credit_points+' CR'}</Text>
                                        
                                    </View>
                                    
                                    {this.props.screenType=="captains" && this.props.captainId==item.playerid? <View style={{backgroundColor:Colors.darkGrey,borderRadius:100,borderWidth:2,borderColor:Colors.white,height:20,width:20,alignItems:'center',marginTop:-6,alignContent:'center',justifyContent:'center'}}>
                                        <Text style={{color:Colors.white,fontSize:RFValue(8),fontFamily: fonts['DMSans-Medium'],}}>C</Text>
                                    </View>:null }
                                {this.props.screenType=="captains" && this.props.viceCaptainId==item.playerid? 
                                    <View style={{backgroundColor:Colors.darkGrey,
                                    borderRadius:100,
                                    borderWidth:2,
                                    borderColor:Colors.white,
                                    height:20,
                                    width:20,
                                    alignItems:'center',
                                    alignContent:'center',
                                    justifyContent:'center',
                                    marginTop:-6,
                                    
                                    }}>
                                        
                                        <Text style={{color:Colors.white,fontSize:RFValue(8),fontFamily: fonts['DMSans-Medium'],}}>VC</Text>
                                    </View>:null }
                                   
                                   
                                    
                                </View>
                               
                                </>
                            )}
                            //Setting the number of column
                            numColumns={3}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>

               </>

           



        )
    }
}
export default GroundViewPlayersList;


