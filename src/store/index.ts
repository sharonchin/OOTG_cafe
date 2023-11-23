"use client";

import { FilteredCafe } from "@/lib/types";
import { create } from "zustand";

type Store = {
  authUser: FilteredCafe | null;
  requestLoading: boolean;
  setAuthUser: (cafe: FilteredCafe | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
  reset: () => void;
};

const useStore = create<Store>((set) => ({
  authUser: null,
  requestLoading: false,
  setAuthUser: (cafe) => set((state) => ({ ...state, authUser: cafe })),
  setRequestLoading: (isLoading) =>
    set((state) => ({ ...state, requestLoading: isLoading })),
  reset: () => set({ authUser: null, requestLoading: false }),
}));

export default useStore;
