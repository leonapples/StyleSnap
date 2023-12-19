import { StyleSheet } from 'react-native';
import { Logo } from '../components';
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default function LoadingScreen() {
  return (
    <Animated.View 
      style={styles.container}
      entering={FadeIn}
      exiting={FadeOut}
    >
      <Logo />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1DEC9',
    alignItems: 'center',
  }
});