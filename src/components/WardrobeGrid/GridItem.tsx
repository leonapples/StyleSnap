import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { colors } from '../../utils/constants';

const GridItem = (props: any) => {
  const {
    item,
    navigation,
  } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        activeOpacity={1}
        style={styles.square}
        onPress={() => console.log('Inspect Item')}
      >
        <Image 
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text 
        style={styles.text}
        numberOfLines={1}
      >
        Item Name
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '38%',
    marginBottom: 8,
    alignItems: 'center',
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
    borderRadius: 20,
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default memo(GridItem);
