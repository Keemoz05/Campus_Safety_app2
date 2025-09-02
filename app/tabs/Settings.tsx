import { useState } from "react";
import { SafeAreaView, ScrollView, Switch, Text, View } from "react-native";

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const bgColor = darkMode ? "bg-gray-900" : "bg-gray-50";
  const cardColor = darkMode ? "bg-gray-800" : "bg-white";
  const textColor = darkMode ? "text-gray-100" : "text-gray-900";
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <SafeAreaView className={`flex-1 ${bgColor}`}>
      <ScrollView className="flex-1 px-4 py-6">
        <Text className={`text-2xl font-bold ${textColor} mb-6`}>Settings</Text>

        <View className={`${cardColor} rounded-2xl shadow-md p-4 mb-4`}>
          <Text className={`text-lg font-semibold ${textColor} mb-2`}>Preferences</Text>
          
          <View className="flex-row items-center justify-between mb-4">
            <Text className={`${subTextColor} text-base`}>Enable Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
          </View>

          <View className="flex-row items-center justify-between">
            <Text className={`${subTextColor} text-base`}>Dark Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
            />
          </View>
        </View>

        <View className={`${cardColor} rounded-2xl shadow-md p-4`}>
          <Text className={`text-lg font-semibold ${textColor} mb-2`}>About</Text>
          <Text className={`${subTextColor} text-base mb-1`}>
            Campus Safety App v1.0
          </Text>
          <Text className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Your University. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}