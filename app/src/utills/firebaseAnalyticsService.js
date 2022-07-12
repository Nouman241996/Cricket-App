import analytics from '@react-native-firebase/analytics';
// const TOPIC = 'Eteachfy';

class AnalyticsService {

      sendAnaylytics= async (screenName,description)=>{
        await analytics().logEvent(screenName, {       
          description: description
         
        })
    }

      
    
       
}
export const analyticsService = new AnalyticsService()
