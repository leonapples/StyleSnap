import React, { memo } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { WardrobeStackParamList } from '../utils/navigatorTypes';
import MainHeader from '../components/MainHeader';
import PageContainer from '../components/PageContainer';
import WardrobeGrid from '../components/WardrobeGrid';
import { ExistingClothingItem } from '../utils/schemas';

interface WardrobePageProps {
  navigation: NavigationProp<WardrobeStackParamList, 'WardrobePage'>;
}

/**
 * Home page in the WardrobeTab stack that displays all the items in the user's Wardrobe.
 *
 * @component
 * @param props {WardrobePageProps}
 * @returns {JSX.Element} the WardrobePage component.
 * @example
 * <Stack.Screen name="WardrobePage" component={WardrobePage} />
 */
const WardrobePage = (props: WardrobePageProps): JSX.Element => {
  const { navigation } = props;

  // Navigate to ItemDetailsPage with the item
  const onPressItem = (item: ExistingClothingItem) => {
    navigation.navigate('ItemDetailsPage', { item, editable: true });
  };

  // Navigate to ItemDetailsPage with no item (creates new item)
  const onPressAddItem = () => {
    navigation.navigate('ItemDetailsPage', { editable: true });
  };

  return (
    <PageContainer>
      <MainHeader text="YOUR WARDROBE" />
      <WardrobeGrid onPressItem={onPressItem} onPressAddItem={onPressAddItem} />
    </PageContainer>
  );
};

export default memo(WardrobePage);
