import React, { memo } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GridItem from './GridItem';
import AddItem from './AddItem';
import { useData } from '../DataProvider';
import { colors } from '../../utils/constants';
import { ExistingClothingItem } from '../../utils/schemas';

interface WardrobeGridProps {
  // Whether to show the Add Item tile
  addItem?: boolean;

  // Callback for when an item tile is pressed
  onPressItem?: (item: ExistingClothingItem) => void;

  // Callback for when Add Item tile is pressed
  onPressAddItem?: () => void;
}

/**
 * Component that pulls data for all items in the user's Wardrobe from the database, and
 * displays them in a scrollable grid.
 *
 * @component
 * @param props {WardrobeGridProps}
 * @returns {JSX.Element} the WardrobeGrid component.
 * @example
 * returns (
 *  <WardrobeGrid
 *    addItem={true}
 *    onPressItem={onPressItem}
 *    onPressAddItem={onPressAddItem}
 *  />
 * )
 */
const WardrobeGrid = (props: WardrobeGridProps): JSX.Element => {
  const {
    addItem = true,
    onPressItem = () => {},
    onPressAddItem = () => {},
  } = props;

  const { items } = useData();

  const content = items.map((item: ExistingClothingItem) => (
    <GridItem key={item.id} item={item} onPress={() => onPressItem(item)} />
  ));

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={[colors.background + 'FF', colors.background + '00']}
        style={styles.topGradient}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.container}>
          {addItem && <AddItem onPress={onPressAddItem} />}
          {content}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
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
});

export default memo(WardrobeGrid);
