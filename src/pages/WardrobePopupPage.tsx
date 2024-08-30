import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import PageContainer from '../components/PageContainer';
import { useData } from '../components/DataProvider';
import { colors } from '../utils/constants';
import { Icon } from 'react-native-elements';
import WardrobeGrid from '../components/WardrobeGrid';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { TodayStackParamList } from '../utils/navigatorTypes';
import { ExistingClothingItem } from '../utils/schemas';

interface WardrobePopupPageProps {
  route: RouteProp<TodayStackParamList, 'WardrobePopupPage'>;
  navigation: NavigationProp<TodayStackParamList, 'WardrobePopupPage'>;
}

/**
 * Modal that displays the user's wardrobe and allows them to select an item
 * to add to the outfit of the day.
 *
 * @component
 * @param props {WardrobePopupPageProps}
 * @returns {JSX.Element} the WardrobePopupPage component.
 * @example
 * <Stack.Screen name="WardrobePopupPage" component={WardrobePopupPage} options={{ presentation: 'modal' }}/>
 */
const WardrobePopupPage = (props: WardrobePopupPageProps): JSX.Element => {
  const { navigation, route } = props;

  const { updateTodaysOutfit } = useData();
  const { category, key } = route.params;
  if (!category) {
    navigation.goBack();
  }

  const onPressItem = async (item: ExistingClothingItem) => {
    await updateTodaysOutfit(key || category, item.id);
    navigation.goBack();
  };

  return (
    <PageContainer paddingTop={20}>
      <Text style={styles.text}>{category}</Text>
      <Icon
        name="close"
        type="material"
        color={colors.foreground}
        size={35}
        containerStyle={styles.exitIcon}
        onPress={() => navigation.goBack()}
      />
      <WardrobeGrid addItem={false} onPressItem={onPressItem} />
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    width: 239,
    height: 28,
    textAlign: 'center',
    color: colors.foreground,
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: 7,
    paddingTop: 5,
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  exitIcon: {
    position: 'absolute',
    top: 20,
    left: 25,
  },
});

export default memo(WardrobePopupPage);
