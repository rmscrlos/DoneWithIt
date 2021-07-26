import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

import expoPushTokensApi from '../api/expoPushTokens';

export default useNotifications = notificationListener => {
  useEffect(() => {
    registerForPushNotification();

    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotification = async () => {
    try {
      const { granted } = await Notifications.requestPermissionsAsync();
      if (!granted) return;

      const token = (await Notifications.getExpoPushTokenAsync()).data;

      expoPushTokensApi.register(token);
    } catch (err) {
      console.log('Error getting a push token.', err);
    }
  };
};
