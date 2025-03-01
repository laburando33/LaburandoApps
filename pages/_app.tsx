import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { loadAsync } from 'expo-font';
import * as Icons from '@expo/vector-icons';
import dynamic from 'next/dynamic';

const DynamicIconsLoader = dynamic(() => import('../components/IconsLoader'), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    loadAsync({
      ...Icons.Ionicons.font,
      ...Icons.FontAwesome.font,
      ...Icons.MaterialIcons.font,
    }).catch((error) => {
      console.warn('Error loading icon fonts:', error);
    });
  }, []);

  return (
    <SafeAreaProvider>
      <DynamicIconsLoader />
      <Component {...pageProps} />
    </SafeAreaProvider>
  );
}

export default MyApp;