import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TabBar(props: BottomTabBarProps) {
  const {
    state,
    descriptors,
    navigation
  } = props;

  // const onPress = (route) => {

  // }

  return (
    <View>
      <TouchableOpacity style={styles.left} />
      <TouchableOpacity style={styles.right} />
      <TouchableOpacity style={styles.center} />
    </View>
  );
}

const styles = StyleSheet.create({
  left: {
    backgroundColor: '#8D7B68',
    height: 75,
    position: 'absolute',
    width: '50%',
    left: 0,
    bottom: 0
  },
  right: {
    backgroundColor: '#8D7B68',
    height: 75,
    position: 'absolute',
    width: '50%',
    right: 0,
    bottom: 0
  },
  center: {
    backgroundColor: '#A4907C',
    borderRadius: 60,
    height: 100,
    width: '35%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: -10
  },
});
