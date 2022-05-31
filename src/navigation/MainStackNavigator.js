import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing, Login, Signup, Onboarding } from '../screens'

import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="BottomNavigation"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
        </Stack.Navigator>
    )
}

export default MainStackNavigator
