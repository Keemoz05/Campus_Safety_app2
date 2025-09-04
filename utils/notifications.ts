
import * as Notifications from 'expo-notifications';
import { getNotificationsEnabled } from './storage';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
        shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function schedulePushNotification() {
  const notificationsEnabled = await getNotificationsEnabled();
  if (!notificationsEnabled) {
    console.log('Notifications are disabled. Not scheduling notification.');
    return;
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Test Notification",
      body: 'This is a test notification from the Campus Safety App.',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}
