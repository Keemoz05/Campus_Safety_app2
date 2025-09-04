import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useDarkMode } from '../../DarkModeContext';

const CampusMaps = () => {
  const { darkMode } = useDarkMode();
  const bgColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const headerBg = darkMode ? 'bg-blue-900' : 'bg-blue-600';
  const headerText = 'text-2xl font-bold text-white tracking-wider';

  const mapImageUrl = 'https://via.placeholder.com/300x300.png?text=Campus+Map';

  return (
    <View className={`flex-1 ${bgColor}`}>
      <View className={`pt-12 pb-5 ${headerBg} items-center border-b border-gray-200 shadow`}>
        <Text className={headerText}>Campus Map</Text>
      </View>
      <View className="flex-1 justify-center items-center">
        <Image source={{ uri: mapImageUrl }} style={{ width: 300, height: 300 }} contentFit="contain" />
      </View>
    </View>
  );
};

export default CampusMaps;
