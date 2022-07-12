
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {fonts} from '../../../../res/style/fonts';
import {Colors} from '../../../../res/style/color'
 const SLIDER_WIDTH = Dimensions.get('window').width + 0;
 const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)



export const styles = StyleSheet.create({

   

      // couselCards styling 


      headingCrousel:
      {
        fontWeight:'bold',
        fontSize: 13,
        marginLeft:12,
        marginTop:26
  
      },
   mainView:{flex:1,marginLeft:9 },
   headinText:{fontFamily: fonts['DMSans-Bold'],fontStyle:'normal' ,letterSpacing: 0.5,color:Colors.white,fontSize: RFValue(30)},
      

  
});

