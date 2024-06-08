import React, {useEffect} from 'react';
import Box from '../components/box';
import Text from '../components/text';
import {RootParamList} from '../navigator/root-navigator';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import NavBar from '../components/nav-bar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useQuery} from '@tanstack/react-query';
import api from '../api';
import {useHistoryState} from '../stores/history-store';
import {StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
      ) : error ? (
        <Box fill center style={{gap: 12}}>
          <Icon name="close-circle-outline" size={96} color="red" />
          <Text size="h5" weight="bold">
            {city} doesn't exist
          </Text>
          <Text size="large">Please update your search</Text>
        </Box>
      ) : (
        <Text>{weather?.name}</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    gap: 20,
    backgroundColor: '#FFFFFF',
  },
});

export default WeatherScreen;
