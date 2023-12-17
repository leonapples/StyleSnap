import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default function TabBar(props: BottomTabBarProps) {
  const {
    state,
    navigation
  } = props;

  const currentTab = state.routes[state.index].name;

  const onPress = (route: any) => {
    navigation.navigate(route);
  }

  return (
    <View>
      <TouchableOpacity style={styles.left} 
        activeOpacity={0.9}
        onPress={() => onPress("WardrobeTab")}
      >
        <Icon
          name='checkroom'
          type='material'
          size={35}
          color={currentTab === "WardrobeTab" ? '#A4907C' : '#F1DEC9'}
          containerStyle={styles.iconLeft}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.right}
        activeOpacity={0.9}
        onPress={() => onPress("MemoriesTab")}
      >
        <Icon
          name='today'
          type='material'
          size={35}
          color={currentTab === "MemoriesTab" ? '#A4907C' : '#F1DEC9'}
          containerStyle={styles.iconRight}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.center}
        activeOpacity={0.9}
        onPress={() => onPress("TodayTab")}
      >
        <Icon
          name='add'
          type='material'
          size={60}
          color={currentTab === "TodayTab" ? '#8D7B68' : '#F1DEC9'}
          containerStyle={styles.iconCenter}
        />
      </TouchableOpacity>
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
  iconLeft: {
    top: 17,
    right: 28
  },
  iconRight: {
    top: 17,
    left: 28
  },
  iconCenter: {
    top: 15
  }
});
