import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Image,
    ActivityIndicator,
    RefreshControl,
    TextInput,
   

} from 'react-native';
import { styles } from './style';
import { Colors } from '../../../../../res/style/color'
import BackSvg from '../../../../../res/images/svg/back.svg'
import CopyBtnSvg from '../../../../../res/images/svg/copysvg'
import DashedLine from 'react-native-dashed-line';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Clipboard from '@react-native-clipboard/clipboard';
import {useDispatch, useSelector} from 'react-redux';
import {Col, Toast} from 'native-base';
import analytics from '@react-native-firebase/analytics';
const ReferFriend = (props) => {
    useEffect(() => {
        analytics().logEvent('referal', {       
            description: "referal opened by user"
            })
       
       
      
    }, []);
    
    const userData = useSelector(
        (state) => state.userR.userSuccess,
      );
  
    // const [refCode,setReferCode]=useState(userData.referral_code)
  
    const mainheader = () => {
        return (
            <View style={styles.mainheader}>
                <TouchableOpacity
                    onPress={() => { props.navigation.goBack() }}
                >
                    <BackSvg
                        style={styles.backBtn}
                        height={15} width={15}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>
                    REFER A FRIEND
        </Text>
                <Text>

                </Text>
            </View>
        )
    }

    const referCodeInput = () => {
        return (
            <>
                 <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 35 }}>

                    <Text style={styles.codeText}>YOUR CODE</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: -10 }}>

                    <View style={styles.searchSection}>

                        <TextInput
                            style={styles.inputTextStyle}
                            placeholder={userData.referral_code}
                           
                            value={userData.referral_code}
                            editable={false}
                            //onChangeText={text => setReferCode(text.replace(/\s/g, ''))}
                            // length={10}

                        />
                        <TouchableOpacity
                                    onPress={()=>{ Clipboard.setString(userData.referral_code),
                                        Toast.show({
                                            style: {backgroundColor: Colors.orange},
                                            text:'Code Copied to Clipboard',
                                            duration: 1000,
                                            position:'bottom'
                                          });}}
                        >
                            <CopyBtnSvg style={{ marginRight: 20 }} />
                        </TouchableOpacity>


                    </View>
                </View>

            </>
        )
    }

    const referalAmounatContainer = () => {
        return (
            <View style={{ marginTop: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.referText}>
                        Get Upto
    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.referTextAmount}>
                        ₹100
    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.referText}>
                        on every referral
    </Text>
                </View>
            </View>


        )

    }
    const bonusContainer = () => {
        return (

            <View style={{ marginTop: 35 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.bonusText}>
                    Get the bonus in 3 easy steps
                    </Text>
                </View>
                
               <View style={{marginTop:20,flexDirection:'row',alignItems:'center',justifyContent:'center',}}> 
               <View style={styles.notSelectedTags}>
                        <Text style={{color: Colors.white,fontSize: RFValue(10),}}>
                          1
                        </Text>
                      </View>
               <View style={{width:'22%'}}>
               <DashedLine dashLength={8} dashThickness={1} dashGap={8} dashColor={Colors.darkGrey} dashStyle={{ borderRadius: 5 }} />
              
               </View>
               
               <View style={styles.notSelectedTags}>
                        <Text style={{fontSize: RFValue(10),color: Colors.white}}>
                         2
                        </Text>
                </View>
                      <View style={{width:'22%'}}>
               <DashedLine dashLength={8} dashThickness={1} dashGap={8} dashColor={Colors.darkGrey} dashStyle={{ borderRadius: 5 }} />
              
               </View>
               <View style={styles.notSelectedTags}>
                        <Text style={{fontSize: RFValue(10),color: Colors.white}}>
                         3
                        </Text>
                      </View>
               </View>
               <View style={{marginTop:0,flexDirection:'row',justifyContent:'center',}}> 
               <View style={{width:"20%"}}>
               <Text style={[styles.progressBarText,{ textAlign:'left',}]}>Share your code
                with friends</Text>
               </View>
               
               <View style={{width:"20%"}}>
               <Text style={[styles.progressBarText,{ textAlign:'center',}]}>Ensure your friend registers
                on Pro Pick 11</Text>
               </View>
               
               <View style={{width:"20%"}}>
               
               <Text style={[styles.progressBarText,{ textAlign:'right',}]}>Get extra cash every time they deposit</Text>
               </View>
              
               </View>
                
                <View style={{ flexDirection: 'row', justifyContent: 'center',marginLeft:40,marginRight:40, marginTop: 50}}>
                    
                    <Text style={styles.contextText}>
                    Refer your friends and earn up to Rs. 100!
Your friend gets instant Rs. 50 on sign up using your referral code. You get Extracash worth 5% of the total amount deposited by your friend (upto Rs. 100). 
                    </Text>
                </View>
                
            </View>
        )
    }

    return (

        <SafeAreaView style={styles.container}>

            {mainheader()}
            {referalAmounatContainer()}
            {referCodeInput()}
            {bonusContainer()}
        </SafeAreaView>

    )

}
export default ReferFriend;