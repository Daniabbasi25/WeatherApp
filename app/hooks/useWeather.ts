import { useState, useEffect } from 'react';
import axios from 'axios';
import { setWeatherStates, startloading, useReduxDispatch } from 'store';

interface WeatherData {
  weather?:WeatherData
  errorMsg: string | null;
}

const useWeather = (latitude: number, longitude: number): WeatherData => {
  const [weather, setWeather] = useState<WeatherData>({
   weather:undefined,
    errorMsg: null,
  });
const dispatch=useReduxDispatch()
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        dispatch(startloading())
        const apiKey = '9bb86820f4ef450387253008240406';

        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?q=${latitude},${longitude}&key=${apiKey}`
        );
        dispatch(setWeatherStates(response.data))
     
        setWeather({
          weather:response.data,
          errorMsg: null,
        });
      } catch (error: any) {

        setWeather((prevState) => ({
          ...prevState,
          errorMsg: error.message,
        }));
      }
    };

    if (latitude && longitude) {
      fetchWeather();
    }
  }, [latitude, longitude]);

  return weather;
};

export default useWeather;
