import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Details, ModelGroup } from '../../screens';

const Stack = createNativeStackNavigator();

const ModelGroupStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="ModelGroup" component={ModelGroup} />
    </Stack.Navigator>
  )
}

export default ModelGroupStack;