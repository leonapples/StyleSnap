import React, { memo } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../utils/constants';

/**
 * The bottom navigation bar that is displayed at the bottom of the app.
 *
 * @param props {BottomTabBarProps}
 * @returns {JSX.Element} the TabBar component.
 */
const TabBar = (props: BottomTabBarProps): JSX.Element => {
  const { state, navigation } = props;

  const currentTab = state.routes[state.index].name;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.left}
        activeOpacity={1}
        onPress={() => navigation.navigate('WardrobeTab')}
      >
        <Icon
          name="checkroom"
          type="material"
          size={35}
          color={
            currentTab === 'WardrobeTab' ? colors.accent : colors.background
          }
          containerStyle={styles.iconLeft}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.right}
        activeOpacity={1}
        onPress={() => navigation.navigate('MemoriesTab')}
      >
        <Icon
          name="today"
          type="material"
          size={35}
          color={
            currentTab === 'MemoriesTab' ? colors.accent : colors.background
          }
          containerStyle={styles.iconRight}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.center}
        activeOpacity={1}
        onPress={() => navigation.navigate('TodayTab')}
      >
        <Icon
          name="add"
          type="material"
          size={60}
          color={
            currentTab === 'TodayTab' ? colors.foreground : colors.background
          }
          containerStyle={styles.iconCenter}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    backgroundColor: colors.foreground,
    height: 75,
    position: 'absolute',
    width: '50%',
    left: 0,
    bottom: 0,
  },
  center: {
    backgroundColor: colors.accent,
    borderRadius: 60,
    height: 100,
    position: 'absolute',
    width: '35%',
    bottom: -10,
  },
  right: {
    backgroundColor: colors.foreground,
    height: 75,
    position: 'absolute',
    width: '50%',
    right: 0,
    bottom: 0,
  },
  iconLeft: {
    top: 18,
    right: '15%',
  },
  iconRight: {
    top: 18,
    left: '15%',
  },
  iconCenter: {
    top: 15,
  },
});

export default memo(TabBar);
