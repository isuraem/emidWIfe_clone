import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  WelcomeExercise  from '../screens/home/exercise/WelcomeExercise';
import  HealthFormExercise  from '../screens/home/exercise/HealthFormExercise';
import  MainMenuExercise  from '../screens/home/exercise/MainMenuExercise';
import  ExerciseView  from '../screens/home/exercise/ExerciseView';
import {COLORS, ROUTES} from "../constants"
const Stack = createStackNavigator();

function ExerciseNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerBackTitleVisible: false,
      headerShown: false
    }}
    initialRouteName={ROUTES.EXERCISE_MAIN_MENU}>
      <Stack.Screen name={ROUTES.EXERCISE_WELCOME} component={WelcomeExercise} />
      <Stack.Screen name={ROUTES.EXERCISE_FORM} component={HealthFormExercise} />
      <Stack.Screen name={ROUTES.EXERCISE_MAIN_MENU} component={MainMenuExercise} />
      <Stack.Screen name={ROUTES.EXERCISE_VIEW} component={ExerciseView} />
    </Stack.Navigator>
  );
}
export default ExerciseNavigator;