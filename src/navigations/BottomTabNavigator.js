import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import  Wallet  from '../screens/home/Wallet';
import  Settings  from '../screens/home/Settings';
import  WelcomeExercise  from '../screens/home/exercise/WelcomeExercise';
// import  { Home, Wallet, Settings, WelcomeExercise}  from '../screens';
import ExerciseNavigator from './ExerciseNavigator'
import {COLORS, ROUTES} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import CustomTabBarButton from '../components/CustomTabBarButton';
import CustomTabBar from '../components/CustomTabBar';
import Logo from '../assets/icons/fitness1.svg';
import Logo1 from '../assets/icons/fitness2.svg';
import { Button, TextInput, View,SafeAreaView,KeyboardAvoidingView} from 'react-native';
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    // <KeyboardAvoidingView>
    <Tab.Navigator
    tabBar={props => <CustomTabBar {...props} />}
    screenOptions={({route}) =>({
      tabBarHideOnKeyboard: true,
      headerShown: false,
      tabBarStyle: styles.tabBarStyle,
      tabBarInactiveTintColor: COLORS.dark, 
      tabBarActiveTintColor: COLORS.primary,
      tabBarShowLabel:false,
      tabBarIcon: ({color, size, focused}) =>
      {
        if (route.name === ROUTES.HOME_TAB) {
          return focused ? <Icon name='home' size={22} color={color} /> :<Icon name='home-outline' size={22} color={color} />;
         } else if (route.name === ROUTES.EXERCISE_HOME) {
           return focused ? <Logo1 width={22} height={22} /> : <Logo width={22} height={22} /> ;
         } else if (route.name === ROUTES.WALLET) {
           return focused ? <Icon name='wallet' size={22} color={color} /> :<Icon name='wallet-outline' size={22} color={color} />;
         } else if (route.name === ROUTES.SETTINGS) {
           return focused ? <Icon name='notifications-sharp' size={22} color={color} /> :<Icon name='notifications-outline' size={22} color={color} />;
         }
      }
    })}>
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home} 
      options={{
        tabBarButton: props => <CustomTabBarButton {...props} />,
      }}
      />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} 
      options={{
        tabBarButton: props => <CustomTabBarButton {...props} />,
      }}/>
      <Tab.Screen name={ROUTES.WALLET} component={Wallet} 
      options={{
        tabBarButton: props => <CustomTabBarButton {...props} />,
      }}/>
      <Tab.Screen options={{
        headerShown: false,
        headerBackTitleVisible: false,
        tabBarButton: props => <CustomTabBarButton {...props} />,
      }}
       name={ROUTES.EXERCISE_HOME} component={ExerciseNavigator} />
    </Tab.Navigator>
    // </KeyboardAvoidingView>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderTopWidth: 0,
    borderColor: COLORS.white,
    bottom: 5,
    right: 10,
    left: 10,
    height: 58
  },
  mr7: {
    color: COLORS.primary,
    stroke: COLORS.primary,
    fill: COLORS.primary
  }
})