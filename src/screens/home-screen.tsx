import {FlatList, ListRenderItem, View} from 'react-native';
import React from 'react';
import Text from '../components/text';
import {useHistoryState} from '../stores/history-store';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputForm from '../components/input-form';
import {Weather} from '../types/weather';

function HomeScreen() {
  const weathers = useHistoryState(state => state.weathers);

  const renderItem: ListRenderItem<Weather> = ({item}) => {
    return <Text>{item.name}</Text>;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 24,
        gap: 20,
        backgroundColor: '#FFFFFF',
      }}>
      <InputForm title="Search city" placeholder="City" />
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
    <View style={{justifyContent: 'center', alignItems: 'center', gap: 12}}>
      <Text size="h5" weight="bold">
        Empty
      </Text>
      <Text size="large">You don't have any past search</Text>
    </View>
  );
};

export default HomeScreen;
