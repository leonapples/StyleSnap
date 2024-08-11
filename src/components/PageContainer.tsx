import React, { memo } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { colors } from '../utils/constants';

const PageContainer = (props: any) => {
  const {
    paddingTop,
    children,
  } = props;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      paddingTop: paddingTop || 70,
    },
  });

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={0}
    >
      {children}
    </KeyboardAvoidingView>
  )
};

export default memo(PageContainer);
