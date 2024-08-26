import React, { memo } from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
import MainHeader from '../components/MainHeader';
import PageContainer from '../components/PageContainer';
import Mannequin from '../components/Mannequin/Mannequin';
import getDate from '../utils/date';
import { useData } from '../components/DataProvider';
// import { colors } from '../utils/constants';

const TodayPage = (props: { navigation: any; }) => {
  const {
    navigation
  } = props;

  const { outfits } = useData();
  const today = getDate();
  const todayOutfit = outfits.find((outfit: any) => outfit.date === today) || {};
  
  return (
    <PageContainer>
      <MainHeader text="TODAY'S STYLE" />
      <Mannequin outfit={todayOutfit} editable={true} navigation={navigation}/>
    </PageContainer>
  );
}

export default memo(TodayPage);
