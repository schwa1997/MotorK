import { create } from "zustand";

import data from "./data/data.json";

const useStore = create((set) => ({
  carData: data,
  setCarData: (newData) => set({ carData: newData }),
  search: false,
  setSearch: (state) => set({ search: state }),
  searchText: "",
  setSearchText: (text) => set({ searchText: text }),
  searchOption: "0",
  setSearchOption: (text) => set({ searchOption: text }),
}));

export default useStore;
