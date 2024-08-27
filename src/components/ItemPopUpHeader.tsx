import React, { memo } from 'react';
import { StyleSheet, TextInput, Alert } from 'react-native';
import { Icon } from 'react-native-elements'
import { useData } from './DataProvider';
import * as FileSystem from 'expo-file-system';
import { colors } from '../utils/constants';

const ItemPopUpHeader = (props: any) => {
  const {
    item,
    navigation,
    onChangeText,
    editable,
    newItem,
  } = props;

  const { deleteItem } = useData();

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
            await deleteItem(item.id);
            navigation.goBack();
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <>
      <Icon
        name='close'
        type='material'
        color={colors.foreground}
        size={35}
        containerStyle={styles.exitIcon}
        onPress={() => navigation.goBack()}
      />
      <TextInput
        style={styles.textInput}
        value={item?.name}
        onChangeText={onChangeText}
        placeholder="NEW ITEM"
        editable={editable}
      /> 
      {!newItem &&editable && <Icon
        name='delete'
        type='material'
        color={colors.foreground}
        size={35}
        containerStyle={styles.deleteIcon}
        onPress={deleteOnPress}
      />}
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
