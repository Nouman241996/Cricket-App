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

import RemovebtnSvg from '../../../res/images/svg/removebtn.svg'
import AddbtnSvg from '../../../res/images/svg/addbtn.svg'
import { fonts } from '../../../res/style/fonts'
class PlayersListTag extends Component {

    constructor(props) {
        super(props);

       

    }



    render() {
        
  
        return (

            <FlatList
                vertical={true}
                showsHorizontalScrollIndicator={false}
                data={this.props.data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40, }}
                renderItem={({ item, index }) => {
                   if((this.props.teamLength==11) 
                   || (item.player_desigination === 'Batsman' && (!this.props.maxLimit) || (item.player_desigination === 'Batsman' && this.props.count==6) )
                   || (item.player_desigination === 'Bowler' && (!this.props.maxLimit) || (item.player_desigination === 'Bowler' && this.props.count==6))
                   || (item.player_desigination === 'All Rounder' && (!this.props.maxLimit) || (item.player_desigination === 'All Rounder' &&this.props.count==4))
                   || (item.player_desigination ==='Wicket Keeper' && (!this.props.maxLimit) || (item.player_desigination ==='Wicket Keeper'&& this.props.count==4)))
                   {
                       console.log("count",this.props.count)
                       console.log("max limit",this.props.maxLimit)
                       console.log('desired players are full, logic success')
                   }
                    return (
                        <View>

                            <TouchableOpacity 
                           
                            onPress={() => this.props.callback(item)} activeOpacity={.9} key={index}
                                style={item.is_select == false ? [styles.teamCrad,
                                    {
                                    backgroundColor: (this.props.teamLength==11) 
                                    || (item.player_desigination === 'Batsman' && (!this.props.maxLimit) || (item.player_desigination === 'Batsman' && this.props.count==6) )
                                    || (item.player_desigination === 'Bowler' && (!this.props.maxLimit) || (item.player_desigination === 'Bowler' && this.props.count==6))
                                    || (item.player_desigination === 'All Rounder' && (!this.props.maxLimit) || (item.player_desigination === 'All Rounder' &&this.props.count==4))
                                    || (item.player_desigination ==='Wicket Keeper' && (!this.props.maxLimit) || (item.player_desigination ==='Wicket Keeper'&& this.props.count==4))


                                ? Colors.greyOut:Colors.white}] : styles.teamCardSelected}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{
                                        width: 35,
                                        height: 20,
                                        alignItems: 'center',
                                        backgroundColor: Colors.darkGrey,
                                        justifyContent: 'center',
                                        borderBottomRightRadius: 10,
                                        borderTopRightRadius: 10,


                                    }}>
                                        <Text
                                            style={{
                                                fontSize: RFValue(8),
                                                fontFamily: fonts['DMSans-Medium'],
                                                fontWeight: '400',
                                                color: Colors.white
                                            }}
                                        >{item.team_short_name}</Text>
                                    </View>

                                    <Image source={item.image ? { uri: item.image } : null} style={{ height: 80, width: 70, marginLeft: 15 }} />

                                </View>
                                <View style={{ flexDirection: 'column', marginTop: 20, marginBottom: 15 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        {/* {item.playing_status==1?
                                        <View style={{width:10,height:10,borderRadius:10,backgroundColor:Colors.greenLight,marginRight:5}}> 

                                        </View>
                                        :null} */}
                                        <Text numberOfLines={1} style={{
                                            paddingBottom: 5, fontSize: RFValue(10, 580), width: 130, fontFamily: fonts['DMSans-Medium'],
                                            fontWeight: '400',
                                        }}>{item.name}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', }}>
                                        <View>
                                            <Text style={styles.statText}>S.BY</Text>
                                            <Text style={styles.statScoreText}>{item.selection_percent}%</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.statText}>PTS</Text>
                                            <Text style={styles.statScoreText}>{item.player_points}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.statText}>CR</Text>
                                            <Text style={styles.statScoreText}>{item.credit_points}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                    <View style={styles.addButtonView}>
                                        {item.is_select == false ?
                                            <AddbtnSvg />
                                            : <RemovebtnSvg />


                                        }
                                    </View>

                                    {this.props.isOut==1?
                                    <View style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: item.playing_status == 1 ? Colors.positive : Colors.basicRed,
                                        borderRadius: 20,
                                        marginBottom: 5,
                                        marginRight: 10
                                    }}>
                                        <Text style={{
                                            fontSize: RFValue(8),
                                            fontFamily: fonts['DMSans-Medium'],
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            paddingTop: 3,
                                            paddingBottom: 3,

                                            color: item.playing_status == 1 ? Colors.darkGrey : Colors.white
                                        }}>
                                            {item.playing_status == 1 ? "In" : "Out"}
                                        </Text>
                                   
                                    </View>:null}
                                </View>
                            </TouchableOpacity>




                        </View>


                    );
                }}
                ListEmptyComponent={() =>
                    <View
                        activeOpacity={10}>
                        <Text style={styles.stauts}>No Team Record Found!</Text>
                        <Text style={styles.stautsNext}>There is no team Record Found.</Text>
                    </View>

                }
                enableEmptySections={true}
                keyExtractor={(item, index) => index.toString()}
            />


        )
    }
}
export default PlayersListTag;


