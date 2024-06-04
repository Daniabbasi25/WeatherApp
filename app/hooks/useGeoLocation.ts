import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

interface LocationData {
  latitude: number;
  longitude: number;
  errorMsg: string | null;
}

const useGeolocation = (): LocationData => {
  const [location, setLocation] = useState<LocationData>({
    latitude: 0,
    longitude: 0,
    errorMsg: null,
  });

  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setLocation((prevState) => ({
            ...prevState,
            errorMsg: 'Permission to access location was denied. Please enable it in settings.',
          }));
          return;
        }

        let { coords } = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
          errorMsg: null,
        });
      } catch (error:any) {
        setLocation((prevState) => ({
          ...prevState,
          errorMsg: error.message,
        }));
      }
    };

    getLocation();
  }, []);

  return location;
};

export default useGeolocation;
