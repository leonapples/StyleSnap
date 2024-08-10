import React, { memo } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import PageContainer from '../components/PageContainer';
// import { colors } from '../utils/constants';

const MemoriesPage = (props: { navigation: any; }) => {
  const {
    navigation
  } = props;
  
  return (
    <PageContainer>
      <Header text="DAILY MEMORIES" />
    </PageContainer>
  );
}

export default memo(MemoriesPage);
