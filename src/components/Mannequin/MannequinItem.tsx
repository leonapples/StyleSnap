import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useData } from '../DataProvider';
import { colors } from '../../utils/constants';
import {
  ClothingCategory,
  Outfit,
  ExistingClothingItem,
} from '../../utils/schemas';
import { Icon } from 'react-native-elements';
import { NavigationProp } from '@react-navigation/native';
import {
  MemoriesStackParamList,
  TodayStackParamList,
} from '../../utils/navigatorTypes';

interface MannequinItemProps {
  // Human-readable category name that the item is assigned to
  category: string;

  // Optional category key for when names overlap
  keyId?: string;

  // Outfit who's item to display
  outfit: Outfit;

  // Whether this is a part of today's outfit
  today: boolean;
  navigation:
    | NavigationProp<TodayStackParamList, 'TodayPage'>
    | NavigationProp<MemoriesStackParamList, 'OutfitPage'>;
}

/**
 * Component that displays and allows editing of one item of an outfit.
 *
 * @component
 * @param props {MannequinItemProps}
 * @returns {JSX.Element}
 * @example
 * return (
 *  <MannequinItem
 *    category="outerwear"
 *    outfit={outfit}
 *    today={today}
 *    navigation={navigation}
 *  />
 * )
 */
const MannequinItem = (props: MannequinItemProps) => {
  const { category, keyId, outfit, today, navigation } = props;
  const { items, updateTodaysOutfit } = useData();

  const key = keyId || category;

  // Type guard for checking if the key is a valid clothing category
  const isClothingCategory = (key: string): key is ClothingCategory => {
    const validKeys: ClothingCategory[] = [
      'headwear',
      'top',
      'bottom',
      'footwear',
      'outerwear',
      'accessory1',
      'accessory2',
      'accessory3',
      'fragrance',
    ];
    return validKeys.includes(key as ClothingCategory);
  };

  // Looking up the item in the items array with the key
  let item: ExistingClothingItem | undefined;
  if (isClothingCategory(key)) {
    const itemId = outfit[key];
    item = items.find((item: ExistingClothingItem) => item.id === itemId);
  }

  // Navigate with type checks
  // This is needed, because this component is designed to be used in both TodayPage and OutfitPage
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigate = (screen: string, obj: any) => {
    if ('navigate' in navigation) {
      if (
        (navigation as NavigationProp<TodayStackParamList, 'TodayPage'>)
          .navigate
      ) {
        (
          navigation as NavigationProp<TodayStackParamList, 'TodayPage'>
        ).navigate(screen, obj);
      }
      if (
        (navigation as NavigationProp<MemoriesStackParamList, 'OutfitPage'>)
          .navigate
      ) {
        (
          navigation as NavigationProp<MemoriesStackParamList, 'OutfitPage'>
        ).navigate(screen, obj);
      }
    }
  };

  const onPress = () => {
    if (item) {
      navigate('ItemDetailsPage', { item, editable: false });
    } else if (today) {
      navigate('WardrobePopupPage', { category, key: keyId });
    }
  };

  const styles = StyleSheet.create({
    container: {
      width: '65%',
      marginBottom: 8,
      alignItems: 'center',
    },
    remove: {
      position: 'absolute',
      right: -10,
      top: -10,
      zIndex: 1,
    },
    removeIcon: {
      backgroundColor: colors.midground,
      borderRadius: 1000,
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
      borderRadius: 10,
      width: '100%',
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: item ? 1 : 0.75,
    },
  });

  return (
    <View style={styles.container}>
      {item && today && (
        <TouchableOpacity style={styles.remove}>
          <Icon
            name="close"
            type="material"
            color={colors.foreground}
            size={25}
            containerStyle={styles.removeIcon}
            onPress={() => updateTodaysOutfit(keyId || category, null)}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        activeOpacity={1}
        style={styles.square}
        onPress={onPress}
      >
        {item?.imageUrl ? (
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={styles.image}
          />
        ) : (
          <Text style={styles.text}>
            {item ? item?.name || 'NO IMAGE' : today && 'ADD +'}
          </Text>
        )}
      </TouchableOpacity>
      <Text style={styles.text} numberOfLines={1}>
        {category}
      </Text>
    </View>
  );
};

export default memo(MannequinItem);
