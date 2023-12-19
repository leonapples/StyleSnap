import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WardrobePage } from '../pages';

const Stack = createStackNavigator();

export default function WardrobeTab() {
  return (
    <Stack.Navigator
      initialRouteName='WardrobePage'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="WardrobePage" component={WardrobePage} />
    </Stack.Navigator>
  );
}

