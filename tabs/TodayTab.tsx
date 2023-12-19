import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TodayPage } from '../pages';

const Stack = createStackNavigator();

export default function TodayTab() {
  return (
    <Stack.Navigator
      initialRouteName='TodayPage'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="TodayPage" component={TodayPage} />
    </Stack.Navigator>
  );
}
