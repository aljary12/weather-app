import {FlatList, ListRenderItem, View} from 'react-native';
import React from 'react';
import Text from '../components/text';
import {useHistoryState} from '../stores/history-store';
import {SafeAreaView} from 'react-native-safe-area-context';

function HomeScreen() {
  const cities = useHistoryState(state => state.cities);

  const renderItem: ListRenderItem<string> = ({item}) => {
    return <Text>{item}</Text>;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={cities}
        renderItem={renderItem}
        keyExtractor={item => item}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: (cities || []).length > 0 ? 'flex-start' : 'center',
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
