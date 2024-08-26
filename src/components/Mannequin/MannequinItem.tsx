import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import { useData } from '../DataProvider';
import { colors } from '../../utils/constants';
import { Icon } from 'react-native-elements';

const MannequinItem = (props: any) => {
  const {
    name,
    keyId,
    outfit,
    editable,
    navigation,
  } = props;

  const { items, updateTodaysOutfit } = useData();

  const itemId = outfit[keyId || name];
  const item = items.find((item: any) => item.id === itemId);

  const onPress = () => {
    if (!editable) {
      return;
    }

    if (item) {
      navigation.navigate('ItemDetailsPage', { item, newItem: false })
    }
    else {
      navigation.navigate('WardrobePopupPage', { name, key: keyId });
    }
  }

  const styles = StyleSheet.create({
    container: {
      width: '65%',
      marginBottom: 8,
      alignItems: 'center',
    },
    remove: {
      position: 'absolute',
      right: -10,
      top: -10,
      zIndex: 1,
    },
    removeIcon: {
      backgroundColor: colors.midground,
      borderRadius: 1000,
    },
    image: {
      width: '85%',
      height: '85%',
      borderRadius: 10,
    },
    text: {
      color: colors.foreground, 
      fontSize: 16, 
      fontWeight: '600', 
      textTransform: 'uppercase', 
      lineHeight: 40,
    },
    square: {
      backgroundColor: colors.midground,
      borderRadius: 10,
      width: '100%',
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: item ? 1 : 0.75,
    }
  });

  return (
    <View style={styles.container}>
      { item &&<TouchableOpacity style={styles.remove}>
        <Icon
          name='close'
          type='material'
          color={colors.foreground}
          size={25}
          containerStyle={styles.removeIcon}
          onPress={() => updateTodaysOutfit(keyId || name, null)}
        />
      </TouchableOpacity> }
      <TouchableOpacity
        activeOpacity={1}
        style={styles.square}
        onPress={onPress}
      >
        {item?.imageUrl ? <Image 
          source={{
            uri: item.imageUrl
          }}
          style={styles.image}
        /> :
        <Text style={styles.text}> {item ? item?.name || 'NO IMAGE' : 'ADD +'} </Text>}
      </TouchableOpacity>
      <Text
        style={styles.text}
        numberOfLines={1}
      >
        {name}
      </Text>
    </View>
  );
}

export default memo(MannequinItem);
