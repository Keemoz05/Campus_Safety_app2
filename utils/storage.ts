
import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTIFICATIONS_ENABLED_KEY = 'notifications_enabled';

export const setNotificationsEnabled = async (value: boolean) => {
  try {
    await AsyncStorage.setItem(NOTIFICATIONS_ENABLED_KEY, JSON.stringify(value));
  } catch (e) {
    console.error('Failed to save notification preference.', e);
  }
};

export const getNotificationsEnabled = async (): Promise<boolean> => {
  try {
    const value = await AsyncStorage.getItem(NOTIFICATIONS_ENABLED_KEY);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.error('Failed to load notification preference.', e);
  }
  // Default to true if no preference is set
  return true;
};
