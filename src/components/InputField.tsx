import React, { memo } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { colors } from '../utils/constants';

interface InputFieldProps {
  // height of the input field
  height?: number;

  // whether the input field should be multiline
  multiline?: boolean;

  // label for the input field
  fieldName: string;

  // function that is called when the text in the input field changes
  onChangeText: (text: string) => void;

  // text or value the input field
  text?: string;

  // whether the input field should be editable
  editable?: boolean;
}

/**
 * Component that displays a text input with a label.
 *
 * @component
 * @param props {InputFieldProps}
 * @returns {JSX.Element} the InputField component.
 * @example
 * return (
 *  <InputField editable={true} height={200} multiline={true} text={text} onChangeText={onChangeText} fieldName="Field"/>
 * )
 */
const InputField = (props: InputFieldProps): JSX.Element => {
  const {
    height = 50,
    multiline = false,
    fieldName,
    onChangeText,
    text,
    editable,
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
      height: height,
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
        value={text}
        multiline={multiline}
        editable={editable}
      />
    </View>
  );
};

export default memo(InputField);
