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
import VerfiedSvg from '../../../../../res/images/svg/verifiedsvg'
import NotVerfiedSvg from '../../../../../res/images/svg/notVerifiedSvg'

const VerificationCard = ({ headingText, phoneno, email, icon, verifyStatus, containerColor, containerBorder, onpressAction }) => {

  const verifyCard = () => {

    return (
      <View style={{
        backgroundColor: containerColor,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 15,
        marginTop: 8,
        borderWidth: containerBorder,
        borderColor: Colors.darkGrey,
        justifyContent:'space-between',
        alignItems:'center'
      }}>

        <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15, marginRight: 15, justifyContent: 'space-between', marginBottom: 15, }}>
          <View>
            {verifyStatus == 1 ? <VerfiedSvg /> : <NotVerfiedSvg />}

          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.headingText}>{headingText}</Text>
            {email == null ? <Text style={styles.subHeadingText}>{phoneno}</Text> : <Text numberOfLines={2}  style={[styles.subHeadingText,{width: verifyStatus==1? '100%': 150}]}>{email}</Text>}


          </View>

         
        </View>
      
        {verifyStatus != 1 ? 
        <View style={{width:'25%',marginRight:15}}>
          <CustomButton
            text={'VERIFY'}
            color={Colors.orange}
            textColor={Colors.white}
            widthButton='100%'
            onPress={onpressAction}
          /> 
          </View>: <CustomButton
            widthButton='0%'
          />

          }
      
       

      </View>

    )
  }
  return (
    <View >
      {verifyCard()}
    </View>

  )

}
export default VerificationCard;