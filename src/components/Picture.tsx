import React, { memo, useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import { Icon } from 'react-native-elements'
import { colors } from '../utils/constants';

const Picture = (props: any) => {
  const {
    picture,
    setPicture,
  } = props;

  const cameraRef = useRef<any>(null);
  const [front, setFront] = useState(false);

  const takePic = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        const uri = `${FileSystem.documentDirectory}${photo.uri.split('/').pop()}`;
        await FileSystem.moveAsync({
          from: photo.uri,
          to: uri,
        });
        setPicture(uri);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const deletePic = async () => {
    await FileSystem.deleteAsync(picture);
    setPicture(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {picture ? 
          <Image source={{ uri: picture }} style={styles.camera} /> : 
          <CameraView style={styles.camera} facing={front ? 'front' : 'back'} ref={cameraRef} /> 
        }
      </View>
      <View style={styles.buttons}>
        { !picture && <TouchableOpacity
          onPress={() => setFront(!front)}
        >
          <Icon
            name='cameraswitch'
            type='material'
            size={35}
            color={colors.accent}
            style={styles.icon}
          />
        </TouchableOpacity> }
        <TouchableOpacity
          onPress={picture ? deletePic : takePic}
        >
          {picture ? 
            <Icon
              name='replay'
              type='material'
              size={35}
              color={colors.accent}
              style={styles.icon}
            /> :
            <Icon
              name='camera'
              type='font-awesome'
              size={35}
              color={colors.accent}
              style={styles.icon}
            />
          }
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    marginTop: 20,
    width: '80%', 
    borderRadius: 30,
    overflow: 'hidden',
    aspectRatio: 1,
  },
  camera: {
    flex: 1,
  },
  buttons: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icon: {
    marginTop: 15,
  }
});

export default memo(Picture);
