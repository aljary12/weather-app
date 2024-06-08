import {create} from 'zustand';

interface HistoryState {
  cities: string[];
  addCity: (city: string) => void;
}

export const useHistoryState = create<HistoryState>()(set => ({
  cities: [],
  addCity: city =>
    set(state => {
      let cities = state.cities.concat(city);

      if (cities.length > 5) {
        cities = cities.slice(1);
      }

      return {cities: cities};
    }),
}));
