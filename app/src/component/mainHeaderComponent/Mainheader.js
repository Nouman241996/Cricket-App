import React ,{ Component} from 'react';
import
{
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions, 
    Button,
    TouchableHighlight,

} from 'react-native';
import { icons } from '../../../res/constants';
import HomeSvg from '../../../res/images/svg/home.svg'
import MenuSvg from '../../../res/images/svg/menu.svg'
import SearchSvg from '../../../res/images/svg/search.svg'
import { useTranslation } from 'react-i18next';
import {fetchDrawerSwitcher} from '../../redux/actions/gameSwitcherAction'
import {styles} from './style'
import {Colors} from '../../../res/style/color'
import { fonts } from '../../../res/style/fonts'
import {useDispatch} from 'react-redux'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";




  const Maintopbar = (props) => {

    const dispatch = useDispatch()

    const LANGUAGES = [
      { code: 'en', label: 'English' },
      { code: 'hi', label: 'Hindi' }
    ];
 
    const { i18n } = useTranslation();
    const selectedLanguageCode = i18n.language;

    const setLanguage = code => {
      return i18n.changeLanguage(code);
    };

  const openDrawer = () =>{
    dispatch(fetchDrawerSwitcher(2))
    props.navigation.toggleDrawer()
}

 
    return(
      <>  
        <View style={styles.mainheader}>
           <TouchableOpacity 
           onPress={()=>{
            openDrawer()
           }}
           >
              <MenuSvg 
                    // style={styles.barimage}
                    height={20} width={20}
                  ></MenuSvg>

            </TouchableOpacity>  
            <TouchableOpacity 
            style={{justifyContent:'center',alignItems:'center'}}
            activeOpacity={1} >
                  <HomeSvg 
                    style={styles.logoimage}
                    height={40} width={40}
                  ></HomeSvg>

            </TouchableOpacity> 
            <TouchableOpacity
            onPress={()=>{
              // props.navigation.navigate("myTeams")
            }}
            
            >

{/* 
<View style={{  flexDirection: 'row', }} >
                            <TouchableOpacity
                            onPress={()=> setLanguage(LANGUAGES[0].code)}
                            style={styles.segmentLeftStyle}
                            >
                            <Text numberOfLines={1} style={[styles.languageTextStyle,{ color:selectedLanguageCode===LANGUAGES[0].code?Colors.orange:Colors.black,}]}>ENG</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                            onPress={()=> setLanguage(LANGUAGES[1].code)}
                            style={styles.segmentRightStyle}>
                          <Text numberOfLines={1} style={[styles.languageTextStyle,{color:selectedLanguageCode===LANGUAGES[1].code?Colors.orange:Colors.black}]}>HIN</Text>
                            </TouchableOpacity>
                       
                        </View> */}

                        
                    


                  {/* <SearchSvg 
                  onPress={()=>{
                    // props.navigation.navigate('testscreen')
                    setLanguage(LANGUAGES[0].code)
                  }}
                    style={styles.searchimage}
                    height={20} width={20}
                  ></SearchSvg> */}
       </TouchableOpacity> 
       
        
        </View>

      </>
        )
    
}

export default Maintopbar;