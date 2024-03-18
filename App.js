import * as React from 'react';
import { SafeAreaView, Text, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  AuthNavigator  from "./src/navigations/AuthNavigator"
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;