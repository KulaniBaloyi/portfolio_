import { create } from "zustand";

const useFilter = create((set) => ({
  filter: false,
  toggleFilter: () => {
    set((state) => ({ filter: !state.filter }));
  },
}));

export default useFilter;
