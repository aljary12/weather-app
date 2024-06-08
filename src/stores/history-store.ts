import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {Weather} from '../types/weather';
import _ from 'lodash';

interface HistoryState {
  weathers: Weather[];
  addWeather: (weather: Weather) => void;
}

export const useHistoryState = create<HistoryState>()(
  persist(
    set => ({
      weathers: [],
      addWeather: weather =>
        set(state => {
          let weathers: Weather[] = [];

          const index = _.findIndex(state.weathers, {id: weather.id});

          if (index !== -1) {
            // If the id exists, create a new array with the updated data
            weathers = _.cloneDeep(state.weathers);
            weathers[index] = weather;
          } else {
            // If the id does not exist, add data to the array
            weathers = _.concat(state.weathers, weather);
          }

          if (weathers.length > 5) {
            weathers = _.slice(weathers, 1);
          }

          return {weathers};
        }),
    }),
    {
      name: 'history-store', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
