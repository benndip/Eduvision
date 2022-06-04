import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing, Login, Signup, Onboarding, Home, Details, ModelGroup } from '../screens'

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Landing"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="ModelGroup" component={ModelGroup} />
        </Stack.Navigator>
    )
}

export default MainStackNavigator
