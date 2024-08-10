import React, { memo } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import PageContainer from '../components/PageContainer';
import WardrobeGrid from '../components/WardrobeGrid';
// import { colors } from '../utils/constants';

const WardrobePage = (props: { navigation: any; }) => {
  const {
    navigation
  } = props;
  
  return (
    <PageContainer>
      <Header text="YOUR WARDROBE" />
      <WardrobeGrid />
    </PageContainer>
  );
}

export default memo(WardrobePage);
