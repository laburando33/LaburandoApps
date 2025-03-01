'use client';

import React from 'react';
import { View } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const IconsLoader: React.FC = () => {
  return (
    <View style={{ display: 'none' }}>
      <Ionicons name="ios-information-circle" size={0} />
      <FontAwesome name="info-circle" size={0} />
      <MaterialIcons name="info" size={0} />
    </View>
  );
};

export default IconsLoader;