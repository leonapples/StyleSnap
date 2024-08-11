import React, { memo } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { colors } from '../utils/constants';

const InputField = (props: any) => {
  const {
    height,
    multiline,
    fieldName,
    onChangeText,
    value,
  } = props;

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'flex-start',
      marginTop: 16,
    },
    text: {
      width: '100%',
      height: 28, 
      color: colors.foreground, 
      fontSize: 24, 
      fontWeight: '400', 
      textAlign: 'left',
      marginLeft: 40,
      textTransform: 'uppercase', 
      lineHeight: 40,
      letterSpacing: 7,
      zIndex: 1,
    },
    input: {
      backgroundColor: colors.midground, 
      color: colors.foreground, 
      fontSize: 24, 
      alignSelf: 'center',
      width: '90%',
      height: height || 50, 
      borderRadius: 30,
      marginTop: -12,
      paddingTop: multiline ? 20 : 0,
      paddingLeft: 20,
    },
  });
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{fieldName}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        multiline={multiline}
      />
    </View>
  );
};

export default memo(InputField);
