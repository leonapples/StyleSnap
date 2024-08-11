import React, { memo, useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import PopUpHeader from '../components/PopUpHeader';
import PageContainer from '../components/PageContainer';
import InputField from '../components/InputField';
import Picture from '../components/Picture';
import { useData } from '../components/DataProvider';
import { colors } from '../utils/constants';

const ItemDetailsPage = (props: any) => {
  const {
    route,
    navigation,
  } = props;

  const { addItem, updateItem } = useData();

  const [itemLocal, setItemLocal] = useState(route.params?.item);
  console.log(itemLocal);
  const newItem = route.params?.newItem;

  const onChange = (name: any, value: any) => {
    setItemLocal({ ...itemLocal, [name]: value });
  };

  return (
    <PageContainer paddingTop={20}>
      <PopUpHeader itemId={itemLocal?.id} navigation={navigation} value={itemLocal?.name} onChangeText={(value: any) => onChange("name", value)} />
      <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>
        <Picture picture={itemLocal?.imageUrl} setPicture={(value: any) => onChange("imageUrl", value)}/>
        <InputField value={itemLocal?.brand} onChangeText={(value: any) => onChange("brand", value)} fieldName="Brand"/>
        <InputField value={itemLocal?.price} onChangeText={(value: any) => onChange("price", value)} fieldName="Price"/>
        <InputField height={200} multiline={true} value={itemLocal?.notes} onChangeText={(value: any) => onChange("notes", value)} fieldName="Notes"/>
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
  scrollContent: {
    paddingBottom: 200,
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
    width: 250,
    textAlign: 'center', 
    color: colors.background, 
    fontSize: 30, 
    fontWeight: '300', 
    textTransform: 'uppercase', 
    letterSpacing: 7
  },
});

export default memo(ItemDetailsPage);
