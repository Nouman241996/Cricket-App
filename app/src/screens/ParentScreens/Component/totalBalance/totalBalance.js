import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { styles } from './style';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../../../res/style/color'
//import CustomButton from '../../../../component/widgets/button/button'
import CustomButton from '../../../../component/widgets/button/button'
import { NavigationContainer } from '@react-navigation/native';
const TotalBalance = ({Button,navigation, screenType,amount,loader}) => {

  const totalBalance=()=>{

    return(
<View style={styles.container}  >
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:15}}>
              <Text style={styles.totalBalanceText}>TOTAL BALANCE</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
             {loader ? <Text style={styles.totalBalancePriceText}>₹{amount}</Text>: <ActivityIndicator
          color={Colors.orange}
          style={{height: '10%', width: 50,marginTop:10}}
        />}
             
          </View>
        
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:15, marginBottom:15, width:'100%'}}>
          {screenType=='addcash'? null: <CustomButton 
             text={'+ Add Cash'}
             color={Colors.orange}
             widthButton='40%'
             textColor={Colors.white}
             type={'parent'}
             onPress={()=>{
               loader?
              navigation.navigate('addCash',
              {
                totalAmount: amount,
                
              }
              ):null
             }}
             />}
             
          </View>
      </View>
       
    )
  }
  return(
    <View >
    {totalBalance()}
    </View>
      
  )
  
  }
  export default TotalBalance;