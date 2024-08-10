import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
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
    <View style={styles.container}>
      {children}
    </View>
  )
};

export default memo(PageContainer);
