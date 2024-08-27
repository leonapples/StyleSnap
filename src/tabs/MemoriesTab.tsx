import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MemoriesPage from '../pages/MemoriesPage';
import OutfitPage from '../pages/OutfitPage';
import ItemDetailsPage from '../pages/ItemDetailsPage';

const Stack = createStackNavigator();

const MemoriesTab = () => {
  return (
    <Stack.Navigator
      initialRouteName='MemoriesPage'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="MemoriesPage" component={MemoriesPage} />
      <Stack.Screen name="OutfitPage" component={OutfitPage} options={{ presentation: 'modal' }}/>
      <Stack.Screen name="ItemDetailsPage" component={ItemDetailsPage} options={{ presentation: 'modal' }}/>
    </Stack.Navigator>
  );
}

export default memo(MemoriesTab);
