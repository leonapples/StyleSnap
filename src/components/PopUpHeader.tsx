import React, { memo } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements'
import { colors } from '../utils/constants';

const PopUpHeader = (props: any) => {
  const {
    navigation,
    value,
    onChangeText,
  } = props;

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
    textTransform: 'uppercase', 
    lineHeight: 40,
    letterSpacing: 7
  }
});

export default memo(PopUpHeader);
