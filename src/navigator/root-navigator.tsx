import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home-screen';
import WeatherScreen from '../screens/weather-screen';

export type RootParamList = {
  home: undefined;
  weather: {city: string};
};

const Stack = createNativeStackNavigator<RootParamList>();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
