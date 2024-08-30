import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WardrobePage from '../pages/WardrobePage';
import ItemDetailsPage from '../pages/ItemDetailsPage';
import { WardrobeStackParamList } from '../utils/navigatorTypes';

const Stack = createStackNavigator<WardrobeStackParamList>();

/**
 * Component representing the first tab from the left, containing the user's Wardrobe.
 * Meaning, their collection of clothing items.
 *
 * @component
 * @returns {JSX.Element} the WardrobeTab component.
 * @example
 * <Tab.Screen name="WardrobeTab" component={WardrobeTab} />
 */
const WardrobeTab = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="WardrobePage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="WardrobePage" component={WardrobePage} />
      <Stack.Screen
        name="ItemDetailsPage"
        component={ItemDetailsPage}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};

export default memo(WardrobeTab);
