import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../utils/constants';

const PageContainer = (props: any) => {
  const {
    children
  } = props;

  return (
    <View style={styles.container}>
      {children}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingTop: 70
  },
});

export default memo(PageContainer);
