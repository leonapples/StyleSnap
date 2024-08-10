import React, { memo } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GridItem from './GridItem';
import AddItem from './AddItem';
import { useData } from '../DataProvider';
import { colors } from '../../utils/constants';

const WardrobeGrid = (props: any) => {
  const {
    navigation,
  } = props;

  const { items } = useData();
  
  const content = items.map((item: any) => <GridItem key={item.id} item={item} navigation={navigation} />);

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
          <AddItem navigation={navigation}/>
          {content}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: -20,
    width: '100%',
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
