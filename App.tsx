import React, { useCallback, useEffect, useState } from 'react';
import { LoadingScreen } from './pages';
import { default as AppRoot } from './AppRoot';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setAppIsReady(true);
    }
    prepare();
  }, []);

  return (
    appIsReady ? <AppRoot /> : <LoadingScreen /> 
  );
}