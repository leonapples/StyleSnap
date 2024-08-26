import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../utils/constants';

const MainHeader = (props: any) => {
  const {
    text
  } = props;

  return <Text style={styles.text}>{text}</Text>
}

const styles = StyleSheet.create({
  text: {
    width: 239,
    height: 90, 
    marginBottom: -15,
    textAlign: 'center', 
    color: colors.foreground, 
    fontSize: 35, 
    fontWeight: '300', 
    textTransform: 'uppercase', 
    lineHeight: 40,
    letterSpacing: 7
  },
});

export default memo(MainHeader);
