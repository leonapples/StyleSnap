import React, { memo, useState } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import MannequinItem from './MannequinItem';

const Mannequin = (props: any) => {
  const {
    outfit = {},
    editable,
    navigation = {},
  } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.mannequin} source={require('../../assets/mannequin.png')} />
      <View style={styles.columnContainer}>
        <View style={styles.column}>
          <MannequinItem name="outerwear" outfit={outfit} editable={editable} navigation={navigation}/>
          <MannequinItem name="fragrance" outfit={outfit} editable={editable} navigation={navigation}/>
        </View>
        <View style={styles.column}>
          <MannequinItem name="headwear" outfit={outfit} editable={editable} navigation={navigation}/>
          <MannequinItem name="top" outfit={outfit} editable={editable} navigation={navigation}/>
          <MannequinItem name="bottom" outfit={outfit} editable={editable} navigation={navigation}/>
          <MannequinItem name="footwear" outfit={outfit} editable={editable} navigation={navigation}/>
        </View>
        <View style={styles.column}>
          <MannequinItem name="accessory" keyId="accessory1" outfit={outfit} editable={editable} navigation={navigation}/>
          <MannequinItem name="accessory" keyId="accessory2" outfit={outfit} editable={editable} navigation={navigation}/>
          <MannequinItem name="accessory" keyId="accessory3" outfit={outfit} editable={editable} navigation={navigation}/>
        </View>
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mannequin: {
    position: 'absolute',
    left: '50%',
    bottom: '10%',
    transform: [{ translateX: -Dimensions.get('window').width / 4 }],
    width: '50%',
    opacity: 0.1, 
    resizeMode: 'contain',
  },
  columnContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '85%',
    marginBottom: 120,
  },
  column: {
    flexDirection: `column`,
    height: '100%',
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default memo(Mannequin);
