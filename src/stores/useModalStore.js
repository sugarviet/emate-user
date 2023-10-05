import { create } from "zustand";

export const useModalStore = create((set) => ({
    isDepositModalOpened: false,

    switchDepositModalState: (opened = !isDepositModalOpened) => set(state => ({...state, isDepositModalOpened: opened}))
}))