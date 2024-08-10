import React, { memo } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import PageContainer from '../components/PageContainer';
// import { colors } from '../utils/constants';

const TodayPage = (props: { navigation: any; }) => {
  const {
    navigation
  } = props;
  
  return (
    <PageContainer>
      <Header text="TODAY'S STYLE" />
    </PageContainer>
  );
}

export default memo(TodayPage);
