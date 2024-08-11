import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

let cameraPermission;
let mediaLibraryPermission;

const getPermissions = async () => {
  const cameraStatus = await Camera.requestCameraPermissionsAsync();
  cameraPermission = cameraStatus.status === 'granted';
  const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
  mediaLibraryPermission = mediaLibraryStatus.status === 'granted';
};

export { cameraPermission, mediaLibraryPermission, getPermissions };
