import React, { memo, useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import PageContainer from '../components/PageContainer';
import { useData } from '../components/DataProvider';
import { colors } from '../utils/constants';
import { Icon } from 'react-native-elements'
import WardrobeGrid from '../components/WardrobeGrid';

const WardrobePopupPage = (props: any) => {
  const {
    navigation,
    route,
  } = props;

  const { updateTodaysOutfit } = useData();

  const { name, key } = route.params;

  const onPressItem = async (item: any) => {
    await updateTodaysOutfit(key || name, item?.id);
    navigation.goBack();
  };

  return (
    <PageContainer paddingTop={20}>
      <Text style={styles.text}>{name}</Text>
      <Icon
        name='close'
        type='material'
        color={colors.foreground}
        size={35}
        containerStyle={styles.exitIcon}
        onPress={() => navigation.goBack()}
      />
      <WardrobeGrid 
        addItem={false}
        onPressItem={onPressItem}
      />
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
