import React, { memo, useMemo, useState } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import {
  MemoriesStackParamList,
  TodayStackParamList,
  WardrobeStackParamList,
} from '../utils/navigatorTypes';
import { StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import ItemPopUpHeader from '../components/ItemPopUpHeader';
import PageContainer from '../components/PageContainer';
import InputField from '../components/InputField';
import Picture from '../components/Picture';
import * as FileSystem from 'expo-file-system';
import { useData } from '../components/DataProvider';
import { colors } from '../utils/constants';
import { ClothingItem, ExistingClothingItem } from '../utils/schemas';

interface ItemDetailsPageProps {
  route:
    | RouteProp<WardrobeStackParamList, 'ItemDetailsPage'>
    | RouteProp<TodayStackParamList, 'ItemDetailsPage'>
    | RouteProp<MemoriesStackParamList, 'ItemDetailsPage'>;
  navigation:
    | NavigationProp<WardrobeStackParamList, 'ItemDetailsPage'>
    | NavigationProp<TodayStackParamList, 'ItemDetailsPage'>
    | NavigationProp<MemoriesStackParamList, 'ItemDetailsPage'>;
}

/**
 * Page in the stack that displays the details of and allows editing of a clothing item.
 * Built to be rendered as a modal.
 *
 * @component
 * @param props {ItemDetailsPageProps}
 * @returns {JSX.Element} the ItemDetailsPage component.
 * @example
 * <Stack.Screen name="ItemDetailsPage" component={ItemDetailsPage} options={{ presentation: 'modal' }} />
 */
const ItemDetailsPage = (props: ItemDetailsPageProps): JSX.Element => {
  const { route, navigation } = props;

  const { item, editable = true } = route.params || {};

  const [itemLocal, setItemLocal] = useState(item || {});
  const { addItem, updateItem } = useData();

  // Type guard to check if item is an ExistingClothingItem
  function isExistingClothingItem(
    item: ClothingItem,
  ): item is ExistingClothingItem {
    return 'id' in item;
  }

  const onChange = (name: string, value: string | null) => {
    setItemLocal({ ...itemLocal, [name]: value });
  };

  const Button = useMemo(() => {
    const onPress = async () => {
      if (isExistingClothingItem(itemLocal)) {
        // if image was changed, delete old image from file system
        if (itemLocal?.imageUrl != item?.imageUrl && item?.imageUrl) {
          await FileSystem.deleteAsync(item?.imageUrl);
        }
        updateItem(itemLocal);
      } else {
        addItem(itemLocal);
      }
      navigation.goBack();
    };

    if (editable) {
      return (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={onPress}
        >
          <Text style={styles.text}>
            {!isExistingClothingItem(itemLocal) ? 'ADD ITEM' : 'UPDATE ITEM'}
          </Text>
        </TouchableOpacity>
      );
    } else {
      return <></>;
    }
  }, [itemLocal, editable, navigation, addItem, updateItem]);

  return (
    <PageContainer paddingTop={20}>
      <ItemPopUpHeader
        editable={editable}
        item={itemLocal}
        goBack={navigation.goBack}
        onChangeText={(value: string) => onChange('name', value)}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scroll}
      >
        <Picture
          editable={editable}
          imageUrl={itemLocal.imageUrl}
          setImageUrl={(value: string | null) => onChange('imageUrl', value)}
        />
        <InputField
          editable={editable}
          text={itemLocal.brand}
          onChangeText={(value: string) => onChange('brand', value)}
          fieldName="Brand"
        />
        <InputField
          editable={editable}
          text={itemLocal.price}
          onChangeText={(value: string) => onChange('price', value)}
          fieldName="Price"
        />
        <InputField
          editable={editable}
          height={200}
          multiline={true}
          text={itemLocal.notes}
          onChangeText={(value: string) => onChange('notes', value)}
          fieldName="Notes"
        />
      </ScrollView>
      {Button}
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
    letterSpacing: 7,
  },
});

export default memo(ItemDetailsPage);
