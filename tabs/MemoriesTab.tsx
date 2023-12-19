import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MemoriesPage } from '../pages';

const Stack = createStackNavigator();

export default function MemoriesTab() {
  return (
    <Stack.Navigator
      initialRouteName='MemoriesPage'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="MemoriesPage" component={MemoriesPage} />
    </Stack.Navigator>
  );
}
