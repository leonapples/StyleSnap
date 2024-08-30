import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TodayPage from '../pages/TodayPage';
import WardrobePopupPage from '../pages/WardrobePopupPage';
import ItemDetailsPage from '../pages/ItemDetailsPage';
import { TodayStackParamList } from '../utils/navigatorTypes';

const Stack = createStackNavigator<TodayStackParamList>();

/**
 * Component representing the middle tab, containing the user's outfit of the day.
 *
 * @component
 * @returns {JSX.Element} the TodayTab component.
 * @example
 * <Tab.Screen name="TodayTab" component={TodayTab} />
 */
const TodayTab = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="TodayPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TodayPage" component={TodayPage} />
      <Stack.Screen
        name="WardrobePopupPage"
        component={WardrobePopupPage}
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen
        name="ItemDetailsPage"
        component={ItemDetailsPage}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};

export default memo(TodayTab);
