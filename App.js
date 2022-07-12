import React, { Fragment, useEffect } from 'react';
import { StatusBar, LogBox, Text } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux"
import { store, persistor } from './app/src/redux/createStore';
import StackRoute from './app/src/router/stackRoutes';
import {Colors} from './app/res/style/color'
import { StyleProvider, Container, Root } from 'native-base'
import './app/res/translations/IMLocalize'

// console.disableYellowBox = true
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
const App = () => {

  // useEffect(() => {
  //     SplashScreen.hide();
  // }, [])

  return (
    <Fragment>
        <Root>
      <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}></PersistGate>
              <StatusBar barStyle="light-content" backgroundColor={Colors.orange} />
              <StackRoute />
              </Provider>
              </Root>
    </Fragment>
  );
};
export default App;
