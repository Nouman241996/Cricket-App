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
import {fonts} from '../../../res/style/fonts';
import { useTranslation } from 'react-i18next';
const ContestMyteam = (props) => {
  const { t } = useTranslation();
  // console.log("status:",props.data.batsman)
  
  
  return (
    <View style={styles.myteamContainer}>
    <View style={styles.teamNameAndBtnsView}>
      <Text style={styles.teamBasicText}>
      {props.data.team_name?props.data.team_name:t('common:teamShort')}{props.data.team_name?<Text style={{fontSize:RFValue(6)}}>{t('common:teamShort')} {props.index+2-1}</Text>:props.index+2-1}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{marginTop:5,marginRight:3}}><Text style={styles.pointsText}>{t('common:points')}:</Text></View>
        <View><Text style={styles.points}>{props.data.points}</Text></View>
      </View>
    </View>
    <View style={styles.teamCandVcImagesView}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={{uri:props.data.captainImage}} style={{ height: 60, width: 60,resizeMode: 'contain' }} />
        <View style={{marginTop:5}}>
          <Text style={styles.TeamText}>{props.data.captainName}</Text>
          <Text style={styles.TeamCodeText}>{t('common:captainTag')}</Text>
        </View>
      </View > 
      <View style={{ flexDirection: 'row' }}>
        <Image source={{uri:props.data.vcaptainImage}} style={{ height: 60, width: 60,resizeMode: 'contain' }} />
        <View style={{marginTop:5}}>
          <Text  style={styles.TeamText}>{props.data.vcaptainName}</Text>
          <Text style={styles.TeamCodeText}>{t('common:vCaptainTag')}</Text>
        </View>
      </View>

    </View>



    <View style={styles.cricketerMainView}>
                  <View style={styles.cricketerButtonView}>


                    <View style={styles.cricketTagContianer}>

                   
                                                
                      <TouchableOpacity activeOpacity={0.9}>
                      
                        <LinearGradient style={styles.cricketTags} colors={[Colors.crickettagcolor1,Colors.crickettagcolor2, Colors.crickettagcolor3]}
                                                >
                          <View>
                            <Image
                              style={{
                                tintColor: 'black',
                                height: 15,
                                width: 15,
                              }}
                              source={icons.wicket}
                            />
                          </View>

                          </LinearGradient>
                        
                      </TouchableOpacity>
                     
                      <View style={styles.notSelectedTags}>
                        <Text style={{color: Colors.white, fontSize: 8, fontFamily: fonts['DMSans-Medium'],}}>
                          {props.data.wicketLength}
                        </Text>
                      </View>
                    </View>
                    
                    
                    
                    <View>
                      <Text style={styles.cricketerButtonText}>
                      {t('common:wicketKeeper')}
                      </Text>
                    </View>
                  </View>






                  <View style={styles.cricketerButtonView}>
                    <View style={styles.cricketTagContianer}>
                      <TouchableOpacity activeOpacity={0.9}>
                        <LinearGradient style={styles.cricketTags} colors={[Colors.crickettagcolor1,Colors.crickettagcolor2, Colors.crickettagcolor3]}>


                          <View>
                            <Image
                              style={{
                                tintColor: 'black',
                                height: 15,
                                width: 15,
                              }}
                              source={icons.bats}
                            />
                          </View>



                        </LinearGradient>
                      </TouchableOpacity>
                      <View style={styles.notSelectedTags}>
                        <Text style={{color: Colors.white, fontSize: 8, fontFamily: fonts['DMSans-Medium'],}}>
                          {props.data.batsman}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.cricketerButtonText}>{t('common:Batsman')}</Text>
                    </View>
                  </View>

                  <View style={styles.cricketerButtonView}>
                    <View style={styles.cricketTagContianer}>
                      <TouchableOpacity activeOpacity={0.9}>
                      
                        <LinearGradient style={styles.cricketTags} colors={[Colors.crickettagcolor1,Colors.crickettagcolor2, Colors.crickettagcolor3]}>

                          <View>
                            <Image
                              style={{
                                tintColor: 'black',
                                height: 15,
                                width: 15,
                              }}
                              source={icons.batball}
                            />
                          </View>

                     </LinearGradient>
                      </TouchableOpacity>
                      <View style={styles.notSelectedTags}>
                        <Text style={{color: Colors.white, fontSize: 8}}>
                          {props.data.allRounderLength}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.cricketerButtonText}>
                      {t('common:allRounder')}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.cricketerButtonView}>
                    <View style={styles.cricketTagContianer}>
                      <TouchableOpacity activeOpacity={0.9}>
                     

                        <LinearGradient style={styles.cricketTags} colors={[Colors.crickettagcolor1,Colors.crickettagcolor2, Colors.crickettagcolor3]}>


                          <View>
                            <Image
                              style={{
                                tintColor: 'black',
                                height: 15,
                                width: 15,
                              }}
                              source={icons.balls}
                            />
                          </View>




                    </LinearGradient>
                      </TouchableOpacity>
                      <View style={styles.notSelectedTags}>
                        <Text style={{color: Colors.white, fontSize: 8}}>
                          {props.data.bowlerLength}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.cricketerButtonText}>{t('common:Bowler')}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.teamNamesView}>
                  <View style={{paddingRight: 20}}>
                    <Text style={[styles.teamTagsText,{fontSize: RFValue(12, 580),fontFamily: fonts['DMSans-Bold'],}]}>{props.data.teamOneName} - {props.data.teamOneLength}</Text>
                  </View>
                  <View>
                    <Text style={[styles.teamTagsText,{fontSize: RFValue(12, 580),fontFamily: fonts['DMSans-Bold'],}]}>{props.data.teamTwoName} - {props.data.teamTwoLength}</Text>
                  </View>
                </View>
  







    {/* <View style={styles.cricketerMainView}>

      {props.data.Teams.map((status, index) => (

        <View key={index} style={styles.cricketerButtonView}>
          <View style={styles.cricketTagContianer}>
            <TouchableOpacity activeOpacity={0.9}  >
              <LinearGradient colors={['#FFFFFF', '#FEEDE2','#DFF4FF']} style={styles.cricketTags}>
                <View>
                  <Image style={{ tintColor: 'black', height: 20, width: 20 }} source={status.imgpath} />
                </View>

              </LinearGradient>
            </TouchableOpacity>
            <View style={styles.notSelectedTags}>
              <Text style={styles.notSelectedTagsText}>0</Text>
            </View>



          </View>
          <View>
            <Text style={styles.cricketerButtonText}>{status.name}</Text>
          </View>
        </View>

      ))}

    </View>
  */}
  </View>

  );
};
export default ContestMyteam;
