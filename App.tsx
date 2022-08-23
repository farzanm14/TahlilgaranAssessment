import React from 'react';
import { LogBox, SafeAreaView, StatusBar, useColorScheme } from 'react-native';
LogBox.ignoreAllLogs();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </SafeAreaView>
  );
};

export default App;
