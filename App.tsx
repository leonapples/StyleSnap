import React, { useEffect, useState  } from 'react';
import LoadingScreen from './src/pages/LoadingScreen';
import AppRoot from './src/AppRoot';
import 'react-native-gesture-handler';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setAppIsReady(true), 1500);
  }, []);

  return (
    appIsReady ? <AppRoot /> : <LoadingScreen /> 
  );
}
