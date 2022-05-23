import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing } from '../screens'

import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Landing"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
            <Stack.Screen name="Landing" component={Landing} />
        </Stack.Navigator>
    )
}

export default MainStackNavigator
