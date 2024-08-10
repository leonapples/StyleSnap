import React from 'react';
import { StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import Animated, { FadeIn } from "react-native-reanimated";
import { colors } from '../utils/constants';

const LoadingScreen = () => {
  return (
    <Animated.View 
      style={styles.container}
      entering={FadeIn}
    >
      <Logo />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  }
});

export default LoadingScreen;
