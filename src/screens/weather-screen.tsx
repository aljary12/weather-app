import React from 'react';
import Box from '../components/box';
import Text from '../components/text';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamList} from '../navigator/root-navigator';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import NavBar from '../components/nav-bar';
import {SafeAreaView} from 'react-native-safe-area-context';

type Navigation = NativeStackNavigationProp<RootParamList>;
type Route = RouteProp<RootParamList, 'weather'>;

function WeatherScreen() {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();

  const {city} = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 24,
        gap: 20,
        backgroundColor: '#FFFFFF',
      }}>
      <NavBar back title="Weather" />
      <Text>WeatherScreen</Text>
    </SafeAreaView>
  );
}

export default WeatherScreen;
