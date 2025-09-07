import { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, Switch, Text, View, Button } from "react-native";
import { useAppContext } from "../../AppContext";
import { schedulePushNotification } from "../../utils/notifications";
import { getNotificationsEnabled, setNotificationsEnabled as saveNotificationPreference } from "../../utils/storage";
import * as Notifications from 'expo-notifications';

export default function Settings() {
  const { darkMode, setDarkMode } = useAppContext();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  useEffect(() => {
    const loadPreference = async () => {
      const preference = await getNotificationsEnabled();
      setNotificationsEnabled(preference);
    };
    loadPreference();
  }, []);

  const handleNotificationToggle = async (value: boolean) => {
    setNotificationsEnabled(value);
    await saveNotificationPreference(value);
    if (!value) {
      await Notifications.cancelAllScheduledNotificationsAsync();
    }
  };

  const bgColor = darkMode ? "bg-gray-900" : "bg-gray-50";
  const cardColor = darkMode ? "bg-gray-800" : "bg-white";
  const textColor = darkMode ? "text-gray-100" : "text-gray-900";
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <SafeAreaView className={`flex-1 ${bgColor}`}>
      <ScrollView className="flex-1 px-5 py-8">
        <Text className={`text-2xl font-bold ${textColor} mb-8`}>Settings</Text>

        <View className={`${cardColor} rounded-2xl shadow-lg p-5 mb-6`}>
          <Text className={`text-lg font-semibold ${textColor} mb-4`}>Preferences</Text>
          
          <View className="flex-row items-center justify-between mb-5">
            <Text className={`${subTextColor} text-base`}>Enable Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={handleNotificationToggle}
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

        <View className={`${cardColor} rounded-2xl shadow-lg p-5 mb-6`}>
          <Text className={`text-lg font-semibold ${textColor} mb-4`}>Developer</Text>
          <Button title="Test Notification" onPress={async () => { await schedulePushNotification(); }} />
        </View>

        <View className={`${cardColor} rounded-2xl shadow-lg p-5`}>
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