import React, { memo } from 'react';
import { StyleSheet, TextInput, Alert } from 'react-native';
import { Icon } from 'react-native-elements'
import { useData } from './DataProvider';
import { colors } from '../utils/constants';

const PopUpHeader = (props: any) => {
  const {
    itemId,
    navigation,
    value,
    onChangeText,
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
          onPress: () => {
            deleteItem(itemId);
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
        value={value}
        onChangeText={onChangeText}
        placeholder="NEW ITEM"
      /> 
      <Icon
        name='delete'
        type='material'
        color={colors.foreground}
        size={35}
        containerStyle={styles.deleteIcon}
        onPress={deleteOnPress}
      />
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
    letterSpacing: 7,
    paddingTop: 5,
    marginBottom: 20,
  },
  deleteIcon: {
    position: 'absolute',
    top: 20,
    right: 25,
  },
});

export default memo(PopUpHeader);
