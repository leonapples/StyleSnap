import React, { memo } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GridItem from './GridItem';
import AddItem from './AddItem';
import { colors } from '../../utils/constants';

const WardrobeGrid = (props: any) => {
  const {
    items
  } = props;
  
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={[colors.background + 'FF', colors.background + '00']}
        style={styles.topGradient}
      />
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={styles.scroll}
      >
        <View style={styles.container}>
          <AddItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: -20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 90,
  },
  scroll: {
    marginBottom: 90,
  },
  topGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 25,
    zIndex: 1,
  },
})

export default memo(WardrobeGrid);
