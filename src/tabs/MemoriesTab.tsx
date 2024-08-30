import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MemoriesPage from '../pages/MemoriesPage';
import OutfitPage from '../pages/OutfitPage';
import ItemDetailsPage from '../pages/ItemDetailsPage';
import { MemoriesStackParamList } from '../utils/navigatorTypes';

const Stack = createStackNavigator<MemoriesStackParamList>();

/**
 * Component representing the last tab from the left, containing the user's outfit memories (past outfits).
 *
 * @component
 * @returns {JSX.Element} the MemoriesTab component.
 * @example
 * <Tab.Screen name="MemoriesTab" component={MemoriesTab} />
 */
const MemoriesTab = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="MemoriesPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MemoriesPage" component={MemoriesPage} />
      <Stack.Screen
        name="OutfitPage"
        component={OutfitPage}
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

export default memo(MemoriesTab);
