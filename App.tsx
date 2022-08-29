import React, { useEffect } from 'react';
import { LogBox, StatusBar } from 'react-native';
import Navigation from './src/navigation/NavigationContainer';
import { Container } from './src/shared/components';
import { hydrateStores, MobxStoreProvider } from './src/stores';

LogBox.ignoreAllLogs();

const App = () => {

  useEffect(() => {
    hydrateStores();
  }, [])

  return (
    <MobxStoreProvider>
      <Container>
        <StatusBar barStyle={'light-content'} />
        <Navigation />
      </Container>
    </MobxStoreProvider>
  );
};

export default App;
