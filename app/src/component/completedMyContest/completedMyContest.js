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
import { globalStyles } from '../../../res/style/appStyle';
import { styles } from './style';
import { Colors } from '../../../res/style/color'
import { icons } from '../../../res/constants'
import { RFValue } from 'react-native-responsive-fontsize';
import { fonts } from '../../../res/style/fonts'
import ArrowDownSvg from '../../../res/images/svg/arrowdown.svg';
import PeopleSvg from '../../../res/images/svg/peoplesvg';
import StarSvg from '../../../res/images/svg/starsvg';
import WinnerSvg from '../../../res/images/svg/winnersvg';
import WarningSvg from '../../../res/images/svg/warning.svg';
import Tooltip from 'react-native-walkthrough-tooltip';
import { useTranslation } from 'react-i18next';
const completedMyContest = ({ data,index }) => {
  const { t } = useTranslation();
  const [selectedID, setSelectedID] = useState('')
  const [ind, setInd] = useState(2)
  const [totalTeam, setTotalTeam] = useState(2);
  const [constValue, setConstValue] = useState(2)
  const [collapsed, setCollapsed] = useState(true);
  const [toolTipVisible, setToolTipVisible] = useState(false);
  const [toolTipId, setToolTipId] = useState('');
  const [toolTipCancled, setToolTipCancled] = useState(false);

  // console.log("atafa",data)

  return (
    <View style={styles.viewCenter}>
      <View style={styles.teamContainer}>
        <View style={[styles.contestFullHeader, { backgroundColor: Colors.mainbackground }]}>

          <View style={styles.prizePoolView}>
            <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textColor, { fontSize: RFValue(12, 580), color: Colors.darkGrey }]}>
            {t('common:prizePool')}
            </Text>
            <View style={{ marginLeft: 10 }}>
              <Text style={[styles.textPrice, { fontSize: RFValue(16), fontFamily: fonts['DMSans-Bold'], color: data.activate_status==1 ?Colors.orange:Colors.grey }]}>
                ₹ {data.prize_pool}

              </Text>
            </View>
            </View>
            {data.activate_status==0 ?
            <Tooltip
                contentStyle={{ backgroundColor: Colors.darkGrey }}
                isVisible={toolTipCancled}
                content={<Text style={{ color: Colors.white, fontFamily: fonts['DMSans-Medium'] }}>{'This Contest did not go live because the slots were not filled'}</Text>}
                placement="top"
                onClose={() => { setToolTipCancled(false) }}
              >
            <TouchableOpacity 
            onPress={() =>{
              setToolTipCancled(!toolTipCancled)
            }}
            style={{flexDirection:'row',marginLeft:10,backgroundColor:Colors.orange,padding:7,borderRadius:20}}>
           
              <WarningSvg
              style={{marginTop:2,}}
              />
              <Text style={{color:Colors.white,textAlign:'center',fontSize: RFValue(10, 580),marginLeft:5}}>Cancelled</Text>
         
            </TouchableOpacity>
            </Tooltip>
            :null}
          </View>
          {/* progress bar Text*/}

          <View style={styles.poolBarView}>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: RFValue(10, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Medium'], }}>{(data.total_team - data.join_team)} {t('common:spotLeft')}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', marginRight: 10 }}>
              <Text style={{ fontSize: RFValue(10, 580), color: Colors.grayMedium, fontFamily: fonts['DMSans-Medium'], }}> {data.total_team} {t('common:spots')} </Text>

            </View>
          </View>
          {/* progress bar view */}
          <View style={styles.barView}>
            <Text style={[styles.bar, { width: parseFloat((data.join_team / data.total_team) * 100) > 100 ? '100%' : parseFloat((data.join_team / data.total_team) * 100) + '%',backgroundColor:data.activate_status==1 ?Colors.orange:Colors.grey }]}>.</Text>

          </View>




          {/* <View style={styles.prizewinnerView}>
            
            
          </View> */}
        </View>
        {/* stars */}
        <View style={[styles.imagesView,{borderBottomLeftRadius:data.activate_status==1?0:20,borderBottomRightRadius:data.activate_status==1?0:20}]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <PeopleSvg />
            <Text style={{ marginLeft: 3, fontSize: RFValue(8, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Medium'], }}>{data.max_team == 1 ? t('common:singleEntry') :  t('common:upTo') +' '+ data.max_team  +' '+ t('common:teams')}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <StarSvg />
            <Text style={{ marginLeft: 3, fontSize: RFValue(8, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Medium'], }}>₹{data.firstprize == null ? 0 : data.firstprize} {t('common:topPrize')}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <WinnerSvg />
            <Text style={{ marginLeft: 3, fontSize: RFValue(8, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Medium'], }}>{data.win + '% '+t('common:winners')}</Text>
          </View>
          {data.contest_type == 'confirm' ?
            <View style={{ flexDirection: 'row', }}>
              <Tooltip
                contentStyle={{ backgroundColor: Colors.darkGrey }}
                isVisible={toolTipId == data.contest_id ? toolTipVisible : false}
                content={<Text style={{ color: Colors.white, fontFamily: fonts['DMSans-Medium'] }}>{data.contest_type == 'confirm' ? t('common:cToolTipText')
                :t('common:ucToolTipText')}</Text>}
                placement="top"
                onClose={() => { setToolTipVisible(false) }}
              >

                <TouchableOpacity
                  onPress={() =>
                  // this.setState({toolTipId:data.contest_id,toolTipVisible:!toolTipVisible })
                  {
                    setToolTipId(data.contest_id),
                    setToolTipVisible(!toolTipVisible)
                  }
                  }
                  style={{ alignItems: 'center', backgroundColor: Colors.confirmLight, borderRadius: 50, height: 20, width: 20, justifyContent: 'center', alignContent: 'center' }}>
                  <Text style={{ fontSize: RFValue(8, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Medium'], }}>{t('common:confirmTag')}</Text>
                </TouchableOpacity>
              </Tooltip>

            </View> :
            <View style={{ flexDirection: 'row', }}>

              <Tooltip
                contentStyle={{ backgroundColor: Colors.darkGrey }}
                isVisible={toolTipId == data.contest_id ? toolTipVisible : false}
                content={<Text style={{ color: Colors.white, fontFamily: fonts['DMSans-Medium'] }}>{data.contest_type == 'confirm'  ? t('common:cToolTipText')
                :  t('common:ucToolTipText')}</Text>}
                placement="top"
                onClose={() => { setToolTipVisible(false) }}
              >

                <TouchableOpacity
                  onPress={() =>
                  // this.setState({toolTipId:data.contest_id,toolTipVisible:!toolTipVisible })
                  {
                    setToolTipId(data.contest_id),
                    setToolTipVisible(!toolTipVisible)
                  }
                  }
                  style={{ alignItems: 'center', backgroundColor: Colors.confirmLight, borderRadius: 50, height: 20, width: 20, justifyContent: 'center', alignContent: 'center' }}>
                  <Text style={{ fontSize: RFValue(8, 580), color: Colors.darkGrey, fontFamily: fonts['DMSans-Medium'], }}>{t('common:unConfirmTag')}</Text>
                </TouchableOpacity>
              </Tooltip>


            </View>
          }
        </View>
{data.activate_status==1?
<View>
        <View style={styles.contestFullBody}>
          <Text style={[styles.textgrayColor, { fontSize: RFValue(10), fontFamily: fonts['DMSans-Medium'] }]}>
          {t('common:yourTeams')}
          </Text>
        </View>

        {/* Team in Rows */}
        {data.team.slice(0, data.my_team_id == selectedID ? ind : constValue).map((res, index, arr) => (

          <View
            key={index}
          >
            <View style={styles.teamRow}>
              <View style={styles.teamBodylist}>
                <Text
                  style={

                    {
                      fontSize: RFValue(10), fontFamily: fonts['DMSans-Bold'], color: Colors.black, letterSpacing: 0.5
                    }}>
                 {res.team_name?res.team_name:t('common:teamShort')} {res.team_name?<Text style={{fontSize:RFValue(6)}}>{t('common:teamShort')} {index+2-1}</Text>:index+2-1} 
                </Text>
                {data.team[index].winning_amount!=0 ? (
                  <View style={styles.wontag}><Text style={{ fontFamily: fonts['DMSans-Medium'], fontSize: RFValue(10), color: Colors.darkGrey }}>{t('common:youWon')} ₹{data.team[index].winning_amount}</Text></View>
                ) : null}
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ marginRight: 15 }}>

                    <Text
                      style={[
                        styles.textgrayColor,
                        { fontSize: RFValue(10, 580), letterSpacing: 0.5 },
                      ]}>
                      {data.team[index].points}
                    </Text>
                  </View>

                  <View >

                    <Text
                      style={[
                        styles.textgrayColor2,
                        { fontSize: RFValue(10, 580), letterSpacing: 0.5 },
                      ]}>
                      <Text style={{ color: Colors.grayMedium }}>#</Text> {data.team[index].rank}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {arr.length - 1 === index ? null

              :
              <View style={[styles.horizonalLine, { marginTop: 15 }]} />


            }


          </View>
        ))}

        {data.team.length > 2 ?

          <TouchableOpacity
            onPress={() => {
              setCollapsed(!collapsed)
              setSelectedID(data.my_team_id)

              if (collapsed) {
                setInd(data.team.length)
                setTotalTeam(data.team.length)
              } else {
                setInd(2)
                setTotalTeam(2)

              }

            }}
          >
            <View style={styles.bottomItems}>

              <ArrowDownSvg
                style={styles.editBtnstyle}
                height={6}
                width={6}></ArrowDownSvg>
              <Text style={{ color: Colors.grayMedium, fontFamily: fonts['DMSans-Medium'], fontSize: RFValue(12), letterSpacing: 0.5 }}>
                {/* {data.team.length - totalTeam?+ data.team.length - totalTeam:0} TEAMS */}
                {data.my_team_id == selectedID? +data.team.length - totalTeam:+data.team.length - 2} {t('common:teams')}
                </Text>

            </View>
          </TouchableOpacity>
          :

          <View style={{ margin: 10 }}></View>
        }




</View>
:null}



      </View>



    </View>

  );
};
export default completedMyContest;
