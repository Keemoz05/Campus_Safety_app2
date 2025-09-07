import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform } from 'react-native';
import { useAppContext } from '../../AppContext';

const Notifications = () => {
  const { darkMode } = useAppContext();
  const bgColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const headerBg = darkMode ? 'bg-purple-900' : 'bg-purple-600';
  const headerText = 'text-2xl font-bold text-white tracking-wider';

  return (
    <SafeAreaView
      className={`flex-1 ${bgColor}`}
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <View className={`pt-12 pb-5 ${headerBg} items-center border-b border-gray-200 shadow`}>
        <Text className={headerText}>Notifications</Text>
      </View>
      <View className="flex-1 justify-center items-center">
        <Text className={`text-lg ${darkMode ? 'text-white' : 'text-gray-700'}`}>
          You have no new notifications.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;