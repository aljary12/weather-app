import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

interface HistoryState {
  cities: string[];
  addCity: (city: string) => void;
}

export const useHistoryState = create<HistoryState>()(
  persist(
    set => ({
      cities: [],
      addCity: city =>
        set(state => {
          let cities = state.cities.concat(city);

          if (cities.length > 5) {
            cities = cities.slice(1);
          }

          return {cities: cities};
        }),
    }),
    {
      name: 'history-store', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
