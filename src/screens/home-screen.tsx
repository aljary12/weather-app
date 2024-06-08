import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
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

type Navigation = NativeStackNavigationProp<RootParamList>;

function HomeScreen() {
  const navigation = useNavigation<Navigation>();

  const weathers = useHistoryState(state => state.weathers);

  const [city, setCity] = useState('');

  const renderItem: ListRenderItem<Weather> = ({item}) => {
    return <Text>{item.name}</Text>;
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
