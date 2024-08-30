import React, { memo } from 'react';
import { StyleSheet, TextInput, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { useData } from './DataProvider';
import * as FileSystem from 'expo-file-system';
import { colors } from '../utils/constants';
import { ClothingItem, ExistingClothingItem } from '../utils/schemas';

interface ItemPopUpHeaderProps {
  // item to be displayed, edited, deleted
  item?: ClothingItem;

  // function that navigates back to the previous screen
  goBack: () => void;

  // function that sets the name of the item
  onChangeText: (text: string) => void;

  // whether or not the item can be edited
  editable: boolean;
}

/**
 * Header component designed for the ItemDetailsPage modal. Allows for changing
 * the name of and deletion of an item.
 *
 * @component
 * @param props {ItemPopUpHeaderProps}
 * @returns {JSX.Element} the ItemPopUpHeader component.
 * @example
 * return (
 *   <ItemPopUpHeader editable={true} item={item} goBack={goBack} onChangeText={onChangeText}/>
 * )
 */
const ItemPopUpHeader = (props: ItemPopUpHeaderProps) => {
  const { item = {}, goBack, onChangeText, editable } = props;

  const { deleteItem } = useData();

  // Type guard to check if item is an ExistingClothingItem
  function isExistingClothingItem(
    item: ClothingItem,
  ): item is ExistingClothingItem {
    return 'id' in item;
  }

  // Brings up pop-up alert confirming deletion of item
  const deleteOnPress = () => {
    Alert.alert(
      'Delete Item',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            if (item?.imageUrl) {
              await FileSystem.deleteAsync(item.imageUrl);
            }
            if (isExistingClothingItem(item)) {
              await deleteItem(item.id);
            }
            goBack();
          },
          style: 'destructive',
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <>
      <Icon
        name="close"
        type="material"
        color={colors.foreground}
        size={35}
        containerStyle={styles.exitIcon}
        onPress={() => goBack()}
      />
      <TextInput
        style={styles.textInput}
        value={item.name}
        onChangeText={onChangeText}
        placeholder="NEW ITEM"
        editable={editable}
      />
      {isExistingClothingItem(item) && editable && (
        <Icon
          name="delete"
          type="material"
          color={colors.foreground}
          size={35}
          containerStyle={styles.deleteIcon}
          onPress={deleteOnPress}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  exitIcon: {
    position: 'absolute',
    top: 20,
    left: 25,
  },
  textInput: {
    width: 239,
    height: 28,
    textAlign: 'center',
    color: colors.foreground,
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: 2,
    paddingTop: 5,
    marginBottom: 20,
  },
  deleteIcon: {
    position: 'absolute',
    top: 20,
    right: 25,
  },
});

export default memo(ItemPopUpHeader);
