import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WardrobePage from '../pages/WardrobePage';
import ItemDetailsPage from '../pages/ItemDetailsPage';

const Stack = createStackNavigator();

const WardrobeTab = () => {
  return (
    <Stack.Navigator
      initialRouteName='WardrobePage'
      screenOptions={{
        headerShown: false,
        // gestureDirection: 'vertical',
      }}
    >
      <Stack.Screen name="WardrobePage" component={WardrobePage} />
      <Stack.Screen name="ItemDetailsPage" component={ItemDetailsPage} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
  );
};

export default memo(WardrobeTab);
