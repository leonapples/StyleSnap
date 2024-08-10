import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TodayPage from '../pages/TodayPage';

const Stack = createStackNavigator();

const TodayTab = () => {
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

export default memo(TodayTab);
