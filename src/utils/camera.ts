import { Camera } from 'expo-camera';

// Boolean representing whether the user has granted camera permissions
let cameraPermission: boolean;

/**
 * Requests camera permissions from the user, and sets the cameraPermission boolean based
 * on the user's response.
 *
 * @return {Promise<void>}
 * @example
 * await getPermissions();
 * console.log(cameraPermission);
 */
const getPermissions = async (): Promise<void> => {
  const cameraStatus = await Camera.requestCameraPermissionsAsync();
  cameraPermission = cameraStatus.status === 'granted';
};

export { cameraPermission, getPermissions };
