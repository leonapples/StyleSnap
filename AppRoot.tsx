import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WardrobeTab, TodayTab, MemoriesTab } from './tabs';
import { TabBar } from './components'
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default function AppRoot() {

  const Tab = createBottomTabNavigator();

  const renderTabBar = (props: BottomTabBarProps) => {
    return <TabBar {...props}/>;  
  }

  return (
    <View
      style={styles.container}
    >
      <Animated.View 
        entering={FadeIn.duration(1000)}
        exiting={FadeOut}
        style={styles.animated}
      >
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="TodayTab"
            tabBar={renderTabBar}
            screenOptions={{ headerShown: false }}
          >
            <Tab.Screen name="WardrobeTab" component={WardrobeTab} />
            <Tab.Screen name="TodayTab" component={TodayTab} />
            <Tab.Screen name="MemoriesTab" component={MemoriesTab} />        
          </Tab.Navigator>
        </NavigationContainer>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1DEC9',
    height: '100%',
    width: '100%'
  },
  animated: {
    height: '100%',
    width: '100%'
  }
});