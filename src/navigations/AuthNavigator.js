import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  Login  from '../screens/auth/Login';
import Register  from '../screens/auth/Register';
import  ForgotPassword  from '../screens/auth/ForgotPassword';
// import  { Login, Register, ForgotPassword}  from '../screens';
import { ROUTES } from "../constants"
import BottomTabNavigator from './BottomTabNavigator'
const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator 
        screenOptions={{
            headerBackTitleVisible: false
        }}
        initialRouteName={ROUTES.HOME}
        >
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name={ROUTES.LOGIN} component={Login}
            />
            <Stack.Screen 
            name={ROUTES.REGISTER} component={Register} 
            /> 
            <Stack.Screen 
            name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} 
            /> 
            <Stack.Screen options={{
                headerShown: false,
                headerBackTitleVisible: false
            }}
                name={ROUTES.HOME} component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;