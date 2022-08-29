import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import Navigation from './src/navigation/NavigationContainer';
import { Container } from './src/shared/components';
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Container>
      <StatusBar barStyle={'light-content'} />
      <Navigation />
    </Container>
  );
};

export default App;
