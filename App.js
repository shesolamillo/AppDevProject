import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar, useColorScheme } from 'react-native';
//import React from 'react';
//import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
//import AppNavigationNi from './src/navigations';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import rootSaga from './src/app/sagas';
import configureStore from './src/app/reducers';
import AuthNav from './src/navigations/AuthNav';
import MainNav from './src/navigations/MainNav';

const { store, persistor, runSaga } = configureStore();
runSaga(rootSaga);

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#000000', true);
    }
    StatusBar.setBarStyle('dark-content', true);
  }, [isDarkMode]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer >
            {isAuthenticated ? (
              <MainNav />
            ) : (
              <AuthNav setIsAuthenticated={setIsAuthenticated} />
            )}
          </NavigationContainer>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
