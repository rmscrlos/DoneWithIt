import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const { latitude, longitude } = (
        await Location.getLastKnownPositionAsync()
      ).coords;
      setLocation({ latitude, longitude });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
