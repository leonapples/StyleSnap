import React, { useEffect, useState } from 'react';
import LoadingScreen from './src/pages/LoadingScreen';
import AppRoot from './src/AppRoot';
import { getPermissions } from './src/utils/camera';
import 'react-native-gesture-handler';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await getPermissions();
      setAppIsReady(true);
    };
    prepare();
  }, []);

  return appIsReady ? <AppRoot /> : <LoadingScreen />;
}
