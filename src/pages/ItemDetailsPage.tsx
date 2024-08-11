import React, { memo, useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import PopUpHeader from '../components/PopUpHeader';
import PageContainer from '../components/PageContainer';
import InputField from '../components/InputField';
import { useData } from '../components/DataProvider';
import { colors } from '../utils/constants';

const ItemDetailsPage = (props: any) => {
  const {
    route,
    navigation,
  } = props;

  const { addItem, updateItem } = useData();

  const [itemLocal, setItemLocal] = useState(route.params?.item);
  const newItem = route.params?.newItem;

  const onChangeText = (name: any, value: any) => {
    setItemLocal({ ...itemLocal, [name]: value });
  };

  return (
    <PageContainer paddingTop={20}>
      <PopUpHeader navigation={navigation} value={itemLocal?.name} onChangeText={(value: any) => onChangeText("name", value)} />
      <ScrollView style={styles.scroll}>
        <InputField value={itemLocal?.brand} onChangeText={(value: any) => onChangeText("brand", value)} fieldName="Brand"/>
        <InputField value={itemLocal?.price} onChangeText={(value: any) => onChangeText("price", value)} fieldName="Price"/>
        <InputField height={200} multiline={true} value={itemLocal?.notes} onChangeText={(value: any) => onChangeText("notes", value)} fieldName="Notes"/>
      </ScrollView>
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => {
          newItem ? addItem(itemLocal) : updateItem(itemLocal)
          navigation.goBack();
        }}
      >
        <Text style={styles.text}>
          { newItem ? 'ADD ITEM' : 'UPDATE ITEM' }
        </Text>
      </TouchableOpacity>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  scroll: {
    width: '100%',
  },
  button: {
    backgroundColor: colors.accent,
    borderRadius: 60,
    height: 60,
    position: 'absolute',
    width: '70%',
    bottom: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: '60%',
    textAlign: 'center', 
    color: colors.background, 
    fontSize: 30, 
    fontWeight: '300', 
    textTransform: 'uppercase', 
    letterSpacing: 7
  },
});

export default memo(ItemDetailsPage);
