import React, { memo, useMemo, useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { CameraView } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import { Icon } from 'react-native-elements';
import { colors } from '../utils/constants';

interface PictureProps {
  // url of the image to be displayed. if null, the camera will be displayed
  imageUrl?: string | null;

  // function that sets the url of the image
  setImageUrl: (url: string | null) => void;

  // whether or not the image can be edited
  editable: boolean;
}

/**
 * Component that covers functionality related to taking and displaying an image (picture)
 * of a given clothing item.
 *
 * @component
 * @param props {PictureProps}
 * @returns {JSX.Element} the Picture component.
 * @example
 * return (
 *   <Picture editable={true} imageUrl={imageUrl} setImageUrl={setImageUrl}/>
 * )
 */
const Picture = (props: PictureProps): JSX.Element => {
  const { imageUrl = null, setImageUrl, editable } = props;

  const cameraRef = useRef<CameraView>();
  const [isFront, setIsFront] = useState(false);

  const takePic = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        let uri: string | null = null;
        if (photo) {
          uri = `${FileSystem.documentDirectory}${photo.uri.split('/').pop()}`;
          await FileSystem.moveAsync({
            from: photo?.uri,
            to: uri,
          });
        }
        setImageUrl(uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deletePic = async () => {
    setImageUrl(null);
  };

  const Display = useMemo(() => {
    if (imageUrl) {
      return <Image source={{ uri: imageUrl }} style={styles.camera} />;
    } else {
      if (editable) {
        return (
          <CameraView
            style={styles.camera}
            facing={isFront ? 'front' : 'back'}
            // @ts-expect-error - CameraView does not accept a ref
            ref={cameraRef}
          />
        );
      } else {
        return null;
      }
    }
  }, [imageUrl, editable, isFront]);

  const Buttons = useMemo(() => {
    let buttonList;

    if (!imageUrl) {
      buttonList = (
        <>
          <TouchableOpacity
            key="switchCamera"
            onPress={() => setIsFront(!isFront)}
          >
            <Icon
              name="cameraswitch"
              type="material"
              size={35}
              color={colors.accent}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity key="takePic" onPress={takePic}>
            <Icon
              name="camera"
              type="font-awesome"
              size={35}
              color={colors.accent}
              style={styles.icon}
            />
          </TouchableOpacity>
        </>
      );
    } else {
      buttonList = (
        <TouchableOpacity key="redoPic" onPress={deletePic}>
          <Icon
            name="replay"
            type="material"
            size={35}
            color={colors.accent}
            style={styles.icon}
          />
        </TouchableOpacity>
      );
    }

    if (editable) {
      return <View style={styles.buttons}>{buttonList}</View>;
    } else {
      return null;
    }
  }, [imageUrl, editable, isFront, takePic, deletePic]);

  return (
    <View style={styles.container}>
      {Display}
      {Buttons}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 20,
    width: '80%',
    aspectRatio: 1,
  },
  buttons: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icon: {
    marginTop: 15,
  },
});

export default memo(Picture);
