import React, { memo } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { colors } from '../utils/constants';

const InputField = (props: any) => {
  const {
    height,
    multiline,
    fieldName,
    onChangeText,
    editable,
    value,
  } = props;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      justifyContent: 'flex-start',
      marginTop: 16,
    },
    text: {
      width: '100%',
      height: 30, 
      color: colors.foreground, 
      fontSize: 24, 
      fontWeight: '400', 
      textAlign: 'left',
      marginLeft: '8%',
      textTransform: 'uppercase', 
      lineHeight: 40,
      letterSpacing: 7,
      zIndex: 1,
    },
    input: {
      backgroundColor: colors.midground, 
      color: colors.foreground, 
      fontSize: 20, 
      alignSelf: 'center',
      width: '90%',
      height: height || 50, 
      borderRadius: 30,
      marginTop: -12,
      paddingTop: multiline ? 20 : 0,
      paddingLeft: 20,
      paddingRight: 20,
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
        editable={editable}
      />
    </View>
  );
};

export default memo(InputField);
