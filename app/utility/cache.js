import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (err) {
    console.log(err);
  }
};

const isExpired = item => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, 'minutes') > expiryInMinutes;
};

const get = async key => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      // Command Query Separation (CQS) - command function changes state of data and query gets data. We don't have this to happen at the same time but in this case is okay.
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (err) {
    console.log(err);
  }
};

export default {
  store,
  get,
};
