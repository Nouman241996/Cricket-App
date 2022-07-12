import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  RefreshControl
} from 'react-native';
import { styles } from './style';
import Modal from 'react-native-modal';


const DashBoard = (props) => {
    const [modal, setModal] = React.useState(false);
 
return(

    <Modal
    style={{
      backgroundColor: 'rgba(0,0,0,0.5)',
      margin: 0,
    }}
    onBackButtonPress={() => setModalVisible(false)}
    onBackdropPress={() => setModalVisible(false)}
    visible={isModalVisible}
    transparent
    animationType="slide"
    onRequestClose={() => toggleModal()}
    hardwareAccelerated
  >

    <View style={styles.ViewBackground}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <TouchableOpacity

          onPress={() => toggleModal()}>
          <CrossSvg height={20} width={20}></CrossSvg>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
        <Text style={{ fontSize: RFValue(16, 580), fontFamily: fonts['DMSans-Bold'] }}>
          Confirm to Verify
            </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15, marginBottom: 10, }}>
        <Text style={{ fontSize: RFValue(10, 580), fontFamily: fonts['DMSans-Medium'] }}>
          Verification link sent. Please check
          your email.
            </Text>
      </View>
    </View>

  </Modal>

   )

}
export default DashBoard;