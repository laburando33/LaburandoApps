'use client';

import React from 'react';
import { View, Text } from 'react-native';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <View>
      <Text>Client Layout</Text>
      {children}
    </View>
  );
};

export default ClientLayout;