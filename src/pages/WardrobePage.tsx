import React, { memo } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import MainHeader from '../components/MainHeader';
import PageContainer from '../components/PageContainer';
import WardrobeGrid from '../components/WardrobeGrid';
// import { colors } from '../utils/constants';

const WardrobePage = (props: { navigation: any; }) => {
  const {
    navigation
  } = props;
  
  return (
    <PageContainer>
      <MainHeader text="YOUR WARDROBE" />
      <WardrobeGrid navigation={navigation} />
    </PageContainer>
  );
}

export default memo(WardrobePage);
