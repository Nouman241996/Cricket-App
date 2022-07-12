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
import CustomButton from '../../../../component/widgets/button/button'
import InfoSvg from '../../../../../res/images/svg/infosvg'
import { Icon } from 'native-base';
import Tooltip from 'react-native-walkthrough-tooltip';
const AmountCard = ({title,amount,icon,verifyHeading,verifySubheading,verified,navigation,loader,toolTipText,actionOnpress}) => {

  const amountCard=()=>{
const [toolTipVisible,setToolTipVisible]=useState(false)
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:15,marginLeft:15,marginRight:15, marginBottom:15, alignItems:'center'}}>
            <View style={{flexDirection:'column',}}>
              <Text style={styles.totalBalanceText}>{title}</Text>
              {loader?  <Text style={styles.totalBalancePriceText}>₹{amount}</Text>: <ActivityIndicator
          color={Colors.orange}
          style={{height: 25, width: 25,}}
        /> }
             
          </View>
         
          {verified==1 && title=='WINNINGS' ?
          
           <CustomButton 
           text={'WITHDRAW'}
           color={amount<=0?Colors.blue: Colors.positive}
           textColor={amount<=0?Colors.white:Colors.black}
           widthButton='30%'
          onPress={amount<=0?null:actionOnpress}
          
           />
           : 
           
           <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
         
           <View style={{marginRight:15,justifyContent:'center'}}>
             
        <Text style={styles.verifyAccountHeadingText}>{verifyHeading}</Text>
          <TouchableOpacity
          disabled={loader? false:true}
           onPress={()=>{
             
            navigation.navigate('mobileAndPhone')
          }}
          >
          <Text style={styles.verifyAccountText}>{verifySubheading}</Text>
          </TouchableOpacity>
          </View>
          <View >
          <Tooltip
             contentStyle={{backgroundColor:Colors.darkGrey}}
            isVisible={toolTipVisible}
            content={<Text style={{color:Colors.white}}>{toolTipText}</Text>}
            placement="top"
            onClose={() => setToolTipVisible(false)}
          >
            
          <TouchableOpacity 
           onPress={() => 
            setToolTipVisible(true)
          }
         >
                       <Text>{icon} </Text></TouchableOpacity>
          </Tooltip>
        
          
            
            </View>
       </View>
          }
          
           
           
          </View>

        </View>
       
    )
  }
  return(
    <View >
    {amountCard()}
    </View>
      
  )
  
  }
  export default AmountCard;