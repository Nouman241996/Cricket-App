import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP, heightPercentageToDP } from '../../../src/component/React Native Responsive Screen'

import { styles } from  './style';
import { Colors } from '../../../res/style/color'
import { icons } from '../../../res/constants'
import { RFValue } from 'react-native-responsive-fontsize';
import {fonts} from '../../../res/style/fonts'
import { color } from 'react-native-reanimated';
const subHeader = ({data}) => {

  // console.log("header is",data)
  
  return (
    <View style={{
      backgroundColor: Colors.mainbackground,
      height:heightPercentageToDP(12),
    }}>
      <View style={styles.mainView}>
      <View style={styles.MIdcview}>
       <View style={{flexDirection:'column' }}>
         <View><Text style={styles.teamnameText}>{data.teama.short_name}</Text></View>
         {data.teama.scores?
         <View style={{flexDirection:'row',justifyContent:'center', marginTop:5}}>
           <View >
             <Text style={styles.teamScoreText}>{data.teama.scores?data.teama.scores:0+'/'+0}</Text>
             </View>
             <View style={{marginLeft:10,marginTop:2}}><Text style={{fontSize:RFValue(10)}}>({data.teama.overs?data.teama.overs:0})</Text></View>
            
            
             </View>
              :
              <View style={{marginLeft:2,marginTop:2}}><Text style={{fontSize:RFValue(10),color:Colors.themeGrey}}>Yet To Bat</Text></View>
         }
         </View >
         {/* completed button view start */}
         <LinearGradient start={{ x: 0, y: 0.9 }} end={{ x: 0.9, y: 1 }} colors={['rgba(42,104,11,0.15)', 'rgba(24,0,135,0.15)']}  style={styles.completeButon}>
       <Text style={{fontSize:RFValue(12),fontFamily:fonts['DMSans-Medium'],color:Colors.darkGrey}}>{data.status_str}</Text>
       </LinearGradient> 
       {/* End */}
       <View style={{flexDirection:'column'}}>
         <View style={{alignItems:'flex-end'}}><Text style={styles.teamnameText}>{data.teamb.short_name}</Text></View>
       
         {data.teamb.scores?
         <View style={{flexDirection:'row',marginTop:5}}>
           <View  style={{marginRight:10}}>
             <Text style={styles.teamScoreText}>{data.teamb.scores?data.teamb.scores:0+'/'+0}</Text>
             </View>
             <View style={{marginTop:2}}><Text style={styles.subText}>({data.teamb.overs?data.teamb.overs:0})</Text></View>
             </View>
         :
         <View style={{marginTop:2}}><Text style={[styles.subText,{color:Colors.themeGrey}]}>Yet To Bat</Text></View>
         }
         </View> 

      </View>

<View style={{alignItems:'center',marginTop:12}}><Text style={styles.subText}>{data.status_note}</Text></View>

    </View>
   </View>
  );
};
export default subHeader;
