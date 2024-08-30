import React, { memo } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import { colors } from '../../utils/constants';
import { ClothingItem } from '../../utils/schemas';

interface GridItemProps {
  item: ClothingItem;
  onPress: () => void;
}

/**
 * A component that represents an item displayed as a tile of the WardrobeGrid.
 *
 * @component
 * @param props {GridItemProps}
 * @returns {JSX.Element} the GridItem component.
 * @example
 * return (
 *  <GridItem
 *    item={item}
 *    onPress={onPress}
 *  />
 * )
 */
const GridItem = (props: GridItemProps): JSX.Element => {
  const { item, onPress } = props;

  const { width } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      width: '38%',
      marginBottom: 8,
      alignItems: 'center',
    },
    image: {
      width: '85%',
      height: '85%',
      borderRadius: 10,
    },
    text: {
      color: colors.foreground,
      fontSize: 16,
      fontWeight: '600',
      textTransform: 'uppercase',
      lineHeight: 40,
    },
    square: {
      backgroundColor: colors.midground,
      borderRadius: 0.05 * width,
      width: '100%',
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.square}
        onPress={onPress}
      >
        {item.imageUrl ? (
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={styles.image}
          />
        ) : (
          <Text style={styles.text}>NO IMAGE</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.text} numberOfLines={1}>
        {item.name || '<NO NAME>'}
      </Text>
    </View>
  );
};

export default memo(GridItem);
