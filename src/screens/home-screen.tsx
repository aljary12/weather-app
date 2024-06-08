import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Text from '../components/text';
import {useHistoryState} from '../stores/history-store';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputForm from '../components/input-form';
import {Weather} from '../types/weather';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamList} from '../navigator/root-navigator';
import NavBar from '../components/nav-bar';
import Box from '../components/box';
import {format} from 'date-fns';

type Navigation = NativeStackNavigationProp<RootParamList>;

function HomeScreen() {
  const navigation = useNavigation<Navigation>();

  const weathers = useHistoryState(state => state.weathers);

  const [city, setCity] = useState('');

  const renderItem: ListRenderItem<Weather> = ({item}) => {
    const date = new Date(item.dt * 1000);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('weather', {city: item.name})}>
        <Box row center-y style={{gap: 4}}>
          <Box fill style={{gap: 4}}>
            <Text>{item.name}</Text>
            <Text size="x-small">
              {format(date, 'EEE, dd MMM yyyy, hh:mm:ss a')}
            </Text>
          </Box>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
            }}
            style={{width: 36, height: 36}}
          />
          <Text>{Math.floor(item.main.temp)}°</Text>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <NavBar title="Home" />
      <InputForm
        title="Search city"
        placeholder="City"
        onChangeText={setCity}
        rightIcon={{
          name: 'search',
          onPress: () => {
            if (city) {
              navigation.navigate('weather', {city});
            }
          },
        }}
      />
      <FlatList
        data={weathers}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: (weathers || []).length > 0 ? 'flex-start' : 'center',
          gap: 20,
          paddingBottom: 24,
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Empty />}
      />
    </SafeAreaView>
  );
}

const Empty = () => {
  return (
    <Box center style={{gap: 12}}>
      <Text size="h5" weight="bold">
        Empty
      </Text>
      <Text size="large">You don't have any past search</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    gap: 20,
    backgroundColor: '#FFFFFF',
  },
});

export default HomeScreen;
