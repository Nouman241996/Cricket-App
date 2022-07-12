import messaging from '@react-native-firebase/messaging';

// const TOPIC = 'Eteachfy';

class FCMService {

    Notification(onInitialNotification) {

        if (this.requestUserPermission()) {
            // this.getToken(onRegister)
            console.log('permission granted');

        } else
            console.log('Not Authorization status:', authStatus);

        this.getInitialNotification(onInitialNotification)

        this.getNotificationOpenedApp(onInitialNotification)

        this.getBackgroundMessageHandler(onInitialNotification)

        this.getSubscribe(onInitialNotification)

        // messaging()
        //     .subscribeToTopic(TOPIC)
        //     .then(() => {
        //         console.log(`Topic: ${TOPIC} Suscribed`);
        //     });

        return () => {
            // unsubscribe;
           // this.getSubscribe(onInitialNotification)
        };
    }

    getToken = (onRegister) => {

        messaging()
            .getToken()
            .then((fcmToken) => {

                onRegister(fcmToken)
                console.log('FCM Token -> ', fcmToken);
            });
    }


    getInitialNotification = (onInitialNotification) => {

        messaging()
            .getInitialNotification()
            .then(async (remoteMessage) => {

                onInitialNotification(remoteMessage, true)
                console.log('remoteMessage', remoteMessage)

            });

    }


    getNotificationOpenedApp = (onInitialNotification) => {

        messaging().onNotificationOpenedApp(async (remoteMessage) => {

            onInitialNotification(remoteMessage, true)

        });

    }

    getBackgroundMessageHandler = (onInitialNotification) => {

        messaging().setBackgroundMessageHandler(
            async (remoteMessage) => {
                onInitialNotification(remoteMessage)

            });
    }


    getSubscribe = (onInitialNotification) => {

        messaging().onMessage(
            async (remoteMessage) => {
                onInitialNotification(remoteMessage, false)
            }
        );
    }

    requestUserPermission = async () => {

        // let userId = auth().currentUser.uid;

        // console.log('userIduserIduserIduserIduserId', userId)
        const authStatus = await messaging().requestPermission();
        console.log('Authorization status(authStatus):', authStatus);
        return (
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL
        );
    };


}
export const fcmService = new FCMService()
