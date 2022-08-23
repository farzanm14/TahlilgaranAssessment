import React from 'react';
import { LogBox, SafeAreaView, StatusBar } from 'react-native';
import Navigation from './src/navigation/NavigationContainer';
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
