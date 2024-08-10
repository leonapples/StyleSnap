import React, { memo } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import MainHeader from '../components/MainHeader';
import PageContainer from '../components/PageContainer';
// import { colors } from '../utils/constants';

const MemoriesPage = (props: { navigation: any; }) => {
  const {
    navigation
  } = props;
  
  return (
    <PageContainer>
      <MainHeader text="DAILY MEMORIES" />
    </PageContainer>
  );
}

export default memo(MemoriesPage);
