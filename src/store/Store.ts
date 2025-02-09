import { create } from 'zustand'

interface StoreState {
    open: boolean;
}

interface StoreActions {
    setOpen: () => void;
}

export const useStore = create<StoreState & StoreActions>((set) => ({
    open: false,
    setOpen: () => set((state) => ({ open: !state.open })),
}));