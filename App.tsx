import React from 'react';
import { LogBox, SafeAreaView, StatusBar } from 'react-native';
import Navigation from './src/navigation/NavigationContainer';
import SplashScreen from './src/screens/auth/SplashScreen';
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
