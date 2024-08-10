import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WardrobePage from '../pages/WardrobePage';

const Stack = createStackNavigator();

const WardrobeTab = () => {
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

export default memo(WardrobeTab);
