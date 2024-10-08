import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WardrobeTab from './tabs/WardrobeTab';
import TodayTab from './tabs/TodayTab';
import MemoriesTab from './tabs/MemoriesTab';
import TabBar from './components/TabBar';
import DataProvider from './components/DataProvider';
import Animated, { FadeIn } from 'react-native-reanimated';
import { colors } from './utils/constants';

const Tab = createBottomTabNavigator();

/**
 * Root component of the application.
 *
 * @component
 * @returns {JSX.Element} the root component.
 * @example
 * return (
 *   <AppRoot />
 * );
 */
const AppRoot = (): JSX.Element => {
  return (
    <Animated.View style={styles.container} entering={FadeIn.duration(1000)}>
      <DataProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="TodayTab"
            tabBar={(props) => <TabBar {...props} />}
            screenOptions={{ headerShown: false }}
          >
            <Tab.Screen name="WardrobeTab" component={WardrobeTab} />
            <Tab.Screen name="TodayTab" component={TodayTab} />
            <Tab.Screen name="MemoriesTab" component={MemoriesTab} />
          </Tab.Navigator>
        </NavigationContainer>
      </DataProvider>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default AppRoot;
