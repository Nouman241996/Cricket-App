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
  TextInput
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { styles } from './style';
import { Colors } from '../../../../../res/style/color'
import BackSvg from '../../../../../res/images/svg/back.svg'
import ArrowUpSvg from '../../../../../res/images/svg/arrowup.svg'
import ArrowDowmSvg from '../../../../../res/images/svg/modelclosebtn.svg'
import { api_link } from '../../../../../res/constants'
import { getApiSerive } from '../../../../utills/getDataService'
import { globalStyles } from '../../../../../res/style/appStyle'
import CustomButton from '../../../../component/widgets/button/button'
import { useDispatch, useSelector } from 'react-redux';
//import { widthPercentageToDP, heightPercentageToDP } from '../../React Native Responsive Screen'
const RecentTransaction = (props) => {

  const [activeSections, setactiveSections] = useState('')
  const [isOpen, setisOpen] = useState(false)
  const [isLoad, setIsLoad] = useState(false)
  const [SECTIONS, setSections] = useState([])
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(100)
  const [id, setId] = useState('')
  const [sliceData, setSliceData] = useState(0)
  const [sliceDataLimit, setSliceDataLimit] = useState(10)
  const [apiData, setApiData] = useState()
  const [viewMoreLoader, setViewMoreLoader] = useState(false)
  const [isActiveArd, setIsActiveArd] = useState(false)
  const [refreshing, setRefreshing] = React.useState(false);
  const [emptyList,setEmptyList]=useState(false)
  const userData = useSelector(
    (state) => state.userR.userSuccess,
  );
  const getRecentTransaction = () => {
    getApiSerive
      .getApiClass(
        api_link.recentTransactionsApi + userData.user_id,
      )
      .then((res) => {
        if(res.data=='' || res.data==null || res.data==[])
        {
          setEmptyList(true)

        }
        else{
          setApiData(res.data)
          setSections(res.data.slice(sliceData, sliceDataLimit))
  
          setIsLoad(true)
        }
       
      });
  }
  useEffect(
    () => {

      getRecentTransaction()

      //setIsLoading(true);

      // props.route.params.match_id_c




    }, []);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = React.useCallback(() => {

    setRefreshing(true);
  
    getRecentTransaction()
    wait(1000).then(() => setRefreshing(false));
  }, []);


  const _renderSectionTitle = (section) => {
    return (
      <View >
        {/* <Text>{section.content}</Text> */}
      </View>
    );
  };
  const _renderHeader = (section, index, isActive) => {


    return (
      <View style={isActive ? styles.headerActive : styles.header}>
        <Text style={[styles.headerText, { color: section.type == "credit" || section.type == "winning" || section.type == "bonus" ? Colors.green : Colors.basicRed }]}>{section.type == "credit" || section.type == "winning" || section.type == "bonus" ? "+" : "-"} ₹{section.amount}</Text>
        <Text style={[styles.headerText, { textAlign: 'center' }]}>{section.transaction_mode.toUpperCase()}</Text>
        {isActive ?
          <ArrowUpSvg /> :
          <ArrowDowmSvg />

        }

      </View>
    );
  };

  const _renderContent = (section) => {
    return (
      <>
        <View style={styles.content}>
          {section.type == "debit" ? <Text style={styles.contentText} >

            An amount of INR {section.amount} has been deducted from your wallet for joining Pro Pick 11 Contest {section.contest_name == null ? null : section.contest_name}.
         </Text> : null}
          {section.type == "credit" ? <Text style={styles.contentText} >
            Wallet Recharge Completed. An amount of Rs. {section.amount} has been added to your wallet.
         </Text> : null}
          {section.type == "winning_debit" && section.withdrow_request != '1' ?
            <Text style={styles.contentText} >
              An amount of Rs. {section.amount} has been deducted from
          your wallet for joining ProPick11-CONTEST
           {section.contest_name == null ? null : section.contest_name}</Text>
            : null
          }

          {section.type == "winning_debit" && section.withdrow_request == '1' ? <Text style={styles.contentText} >
            An amount of Rs. {section.amount} has been withdrawl from
           your wallet </Text> : null}
          {section.type == "winning" ? <Text style={styles.contentText} >
            You've won an amount of Rs. {section.amount} in a ProPick11 - CONTEST  {section.contest_name == null ? null : section.contest_name}</Text> : null}

          {section.type == "bonus" ? <Text style={styles.contentText} >
            Welcome to world of fantasy cricket - ProPick11! We've added a Extra Cash of amount Rs.{section.amount} to get you started. Play wisely.
</Text> : null}


          {/* <Text style={styles.contentText} >
         
         An amount of INR {section.amount} has been deducted from your wallet for joining Pro Pick 11 Contest {section.contest_name}.
         </Text> */}
          <Text style={styles.timeText} >Transaction Time: {section.created_date}</Text>
        </View>


      </>
    );
  };

  const _updateSections = (activeSections) => {
    setactiveSections(activeSections)
    setIsActiveArd(activeSections)


   

  };
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
          MY TRANSACTIONS
        </Text>
        <Text>

        </Text>
      </View>
    )
  }
  const viewMore = () => {
    //setSliceData(sliceData+10)
    setSliceDataLimit(sliceDataLimit + 10)
    let limit = sliceDataLimit + 10
    setSections(apiData.slice(sliceData, limit))
    setViewMoreLoader(true)
    setTimeout(function () { setViewMoreLoader(false) }, 1000)
  }
  const recentTransactionsList = () => {
    return (
      <>
      
        <View style={{ marginLeft: 20, marginRight: 20, }}>
          {isLoad ? <Accordion
            sections={SECTIONS}
            activeSections={activeSections}
            renderSectionTitle={_renderSectionTitle}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            onChange={_updateSections}
            // underlayColor={Colors.white}
            sectionContainerStyle={{ marginTop: 15 }}
          /> : <ActivityIndicator
            color={Colors.orange}
            style={{ height: 50, width: 50, alignSelf: 'center', alignItems: 'center' }}
          />}

        </View>

        {viewMoreLoader ? <ActivityIndicator
          color={Colors.orange}
          style={{ height: 50, width: 50, alignSelf: 'center', alignItems: 'center' }}
        /> : null}
        {isLoad ?
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            {SECTIONS.length > 8 ? <CustomButton
              text={'LOAD MORE'}
              color={Colors.orange}
              textColor={Colors.white}
              widthButton='35%'
              onPress={() => { viewMore() }}
            /> : null}
          </View>
          : null}
      </>
    )
  }

  return (

    <SafeAreaView style={styles.container}>
      {mainheader()}

{emptyList? <View
          style={{ justifyContent: 'center', alignSelf: 'center', height:'50%' }}
          activeOpacity={10}>
         <Text style={[globalStyles.stautsLiist]}>No Record Found!</Text>
          <Text style={globalStyles.stautsNextList}>There are no recent transactions.</Text>
        </View>:
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        contentContainerStyle={{ paddingBottom: 60 }}>
        {recentTransactionsList()}


      </ScrollView>

      }


    </SafeAreaView>

  )

}
export default RecentTransaction;