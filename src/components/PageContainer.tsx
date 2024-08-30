import React, { memo } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { colors } from '../utils/constants';

interface PageContainerProps {
  // amount of padding to add above the container
  paddingTop?: number;
  children: JSX.Element[];
}

/**
 * Component that wraps children in a container with a top padding.
 *
 * @param props {PageContainerProps}
 * @returns {JSX.Element} the PageContainer component.
 * @example
 * return (
 *  <PageContainer paddingTop={50}>
 *    {children}
 *  </PageContainer>
 * );
 */
const PageContainer = (props: PageContainerProps): JSX.Element => {
  const { paddingTop = 70, children } = props;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      paddingTop: paddingTop,
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
  );
};

export default memo(PageContainer);
