import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import PageContainer from '../components/PageContainer';
import Mannequin from '../components/Mannequin/Mannequin';
import { useData } from '../components/DataProvider';
import { Icon } from 'react-native-elements';
import { colors } from '../utils/constants';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { MemoriesStackParamList } from '../utils/navigatorTypes';
import { Outfit } from '../utils/schemas';

interface OutfitPageProps {
  navigation: NavigationProp<MemoriesStackParamList, 'OutfitPage'>;
  route: RouteProp<MemoriesStackParamList, 'OutfitPage'>;
}

/**
 * Modal that displays an outfit for the selected day.
 *
 * @component
 * @param props {OutfitPageProps}
 * @returns {JSX.Element} the OutfitPage component.
 * @example
 * <Stack.Screen name="OutfitPage" component={OutfitPage} options={{ presentation: 'modal' }}/>
 */
const OutfitPage = (props: OutfitPageProps): JSX.Element => {
  const { navigation, route } = props;

  const { outfits } = useData();
  const date = route?.params?.date;
  const outfit = outfits.find((outfit: Outfit) => outfit.date === date) || {};

  return (
    <PageContainer paddingTop={20}>
      <Text style={styles.text}>{date}</Text>
      <Icon
        name="close"
        type="material"
        color={colors.foreground}
        size={35}
        containerStyle={styles.exitIcon}
        onPress={() => navigation.goBack()}
      />
      <Mannequin outfit={outfit} today={false} navigation={navigation} />
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

export default memo(OutfitPage);
