import React, { memo } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { TodayStackParamList } from '../utils/navigatorTypes';
import MainHeader from '../components/MainHeader';
import PageContainer from '../components/PageContainer';
import Mannequin from '../components/Mannequin/Mannequin';
import getDate from '../utils/date';
import { useData } from '../components/DataProvider';
import { Outfit } from '../utils/schemas';

interface TodayPageProps {
  navigation: NavigationProp<TodayStackParamList, 'TodayPage'>;
}

/**
 * Home page in the TodayTab stack that displays the user's outfit of the day.
 *
 * @param props {TodayPageProps}
 * @returns {JSX.Element} the TodayPage component.
 */
const TodayPage = (props: TodayPageProps): JSX.Element => {
  const { navigation } = props;

  const { outfits } = useData();
  const today = getDate();
  const todayOutfit =
    outfits.find((outfit: Outfit) => outfit.date === today) || {};

  return (
    <PageContainer>
      <MainHeader text="TODAY'S STYLE" />
      <Mannequin outfit={todayOutfit} today={true} navigation={navigation} />
    </PageContainer>
  );
};

export default memo(TodayPage);
