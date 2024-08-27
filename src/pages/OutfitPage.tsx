import React, { memo } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PageContainer from '../components/PageContainer';
import Mannequin from '../components/Mannequin/Mannequin';
import { useData } from '../components/DataProvider';
import { Icon } from 'react-native-elements';
import { colors } from '../utils/constants';

const OutfitPage = (props: any) => {
  const {
    navigation,
    route
  } = props;

  const { outfits } = useData();
  const date = route?.params?.date;
  const outfit = outfits.find((outfit: any) => outfit.date === date) || {};
  
  return (
    <PageContainer paddingTop={20}>
      <Text style={styles.text}>{date}</Text>
      <Icon
        name='close'
        type='material'
        color={colors.foreground}
        size={35}
        containerStyle={styles.exitIcon}
        onPress={() => navigation.goBack()}
      />
      <Mannequin outfit={outfit} editable={false} navigation={navigation}/>
    </PageContainer>
  );
}

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
