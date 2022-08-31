import React, { useEffect } from 'react';
import { LogBox, StatusBar } from 'react-native';
import Navigation from './src/navigation/NavigationContainer';
import { Container } from './src/shared/components';
import { hydrateStores, MobxStoreProvider } from './src/stores';
import { Host, } from 'react-native-portalize';
import FlashMessage from "react-native-flash-message";

LogBox.ignoreAllLogs();

const App = () => {

  useEffect(() => {
    hydrateStores();
  }, [])

  return (
    <MobxStoreProvider>
      <Host>
        <Container>
          <StatusBar barStyle={'light-content'} />
          <Navigation />
          <FlashMessage position="top" />
        </Container>
      </Host>
    </MobxStoreProvider>
  );
};

export default App;
