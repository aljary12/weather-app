import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {Weather} from '../types/weather';

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
          let weathers = state.weathers.concat(weather);

          if (weathers.length > 5) {
            weathers = weathers.slice(1);
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
