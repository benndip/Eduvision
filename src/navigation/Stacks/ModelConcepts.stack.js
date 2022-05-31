import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ModelConceptsHome } from '../../screens';

const Stack = createNativeStackNavigator();

const ModelConceptsStack = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name="ModelConceptsHome" component={ModelConceptsHome} />
    </Stack.Navigator>
  )
}

export default ModelConceptsStack;