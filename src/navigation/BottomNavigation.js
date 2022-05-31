import React, { lazy } from 'react';
import {Dimensions} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons'

import ModelGroupStack from './Stacks/ModelGroup.stack';
import ModelConceptsStack from './Stacks/ModelConcepts.stack';

const Tab = createBottomTabNavigator();
const { height } = Dimensions.get('screen');

const BottomNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'ModelGroupStack') {
                iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'ModelConceptsStack') {
                iconName = focused ? 'planet' : 'planet-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: 'rgb(120,119,124)',
            headerShown: false,
            tabBarStyle:{
                backgroundColor: '#1e272e',
                borderTopWidth: 0
            },
            tabBarShowLabel: false,
            lazy: false,
            detachInactiveScreens: true
        })}
    >
        <Tab.Screen name="ModelGroupStack" component={ModelGroupStack} />
        <Tab.Screen name="ModelConceptsStack" component={ModelConceptsStack} />
    </Tab.Navigator>
  )
}

export default BottomNavigation