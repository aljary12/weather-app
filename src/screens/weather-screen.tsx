import React, {useEffect} from 'react';
import Box from '../components/box';
import Text from '../components/text';
import {RootParamList} from '../navigator/root-navigator';
import {RouteProp, useRoute} from '@react-navigation/native';
import NavBar from '../components/nav-bar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useQuery} from '@tanstack/react-query';
import api from '../api';
import {useHistoryState} from '../stores/history-store';
import {Image, StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import WeatherData from '../components/weather-data';

type Route = RouteProp<RootParamList, 'weather'>;

function WeatherScreen() {
  const route = useRoute<Route>();

  const {city} = route.params;

  const addWeather = useHistoryState(state => state.addWeather);

  const {
    data: weather,
    error,
    isFetching,
  } = useQuery({
    queryKey: ['weather', city.toLocaleLowerCase()],
    queryFn: () => api.weather.getCityWeather({q: city}),
  });

  useEffect(() => {
    if (weather) {
      addWeather(weather);
    }
  }, [weather]);

  return (
    <SafeAreaView style={styles.screen}>
      <NavBar back title="Weather" />
      {isFetching ? (
        <Box fill center>
          <ActivityIndicator size="large" />
        </Box>
      ) : error || !weather ? (
        <Box fill center style={{gap: 12}}>
          <Icon name="search-off" size={96} color="#F75555" />
          <Text size="h5" weight="bold">
            {city} doesn't exist
          </Text>
          <Text size="large">Please update your search</Text>
        </Box>
      ) : (
        <Box fill style={{gap: 12}}>
          {/** Header */}
          <Box row style={{justifyContent: 'space-between'}}>
            <Box style={{gap: 12}}>
              <Text size="h6" weight="bold">
                {weather.name}, {weather.sys.country}
              </Text>
              <Text size="h4">{Math.floor(weather.main.temp)}°</Text>
              <Text weight="semiBold">
                {weather.weather[0].main}, {weather.weather[0].description}
              </Text>
            </Box>
            <Image
              source={{
                uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
              }}
              style={{width: 56, height: 56}}
            />
          </Box>

          <Text size="medium">
            {Math.floor(weather.main.temp_max)}° /{' '}
            {Math.floor(weather.main.temp_min)}° Feels like{' '}
            {Math.floor(weather.main.feels_like)}°
          </Text>

          <Box row style={{gap: 12}}>
            {/** Wind */}
            <WeatherData
              icon="air"
              title="Wind"
              body={`${weather.wind.speed} m/s`}
            />

            {/** Humidity */}
            <WeatherData
              icon="water-drop"
              title="Humidity"
              body={`${weather.main.humidity}%`}
            />
          </Box>

          <Box row style={{gap: 12}}>
            {/** Pressure */}
            <WeatherData
              icon="compress"
              title="Pressure"
              body={`${weather.main.pressure} hPa`}
            />

            {/** Visibility */}
            <WeatherData
              icon="visibility"
              title="Visibility"
              body={
                weather.visibility >= 10000
                  ? 'Unlimited'
                  : `${weather.visibility / 1000} km`
              }
            />
          </Box>

          <Box row style={{gap: 12}}>
            {/** Clouds */}
            <WeatherData
              icon="cloud"
              title="Clouds"
              body={`${weather.clouds.all}%`}
            />

            {/** Placeholder */}
            <WeatherData
              icon="visibility"
              title=""
              body=""
              style={{opacity: 0}}
            />
          </Box>
        </Box>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    gap: 20,
    backgroundColor: '#F9F9F9',
  },
});

export default WeatherScreen;
