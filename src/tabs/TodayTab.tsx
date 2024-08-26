import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TodayPage from '../pages/TodayPage';
import WardrobePopupPage from '../pages/WardrobePopupPage';
import ItemDetailsPage from '../pages/ItemDetailsPage';

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
      <Stack.Screen name="WardrobePopupPage" component={WardrobePopupPage} options={{ presentation: 'modal' }} />
      <Stack.Screen name="ItemDetailsPage" component={ItemDetailsPage} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
  );
}

export default memo(TodayTab);
