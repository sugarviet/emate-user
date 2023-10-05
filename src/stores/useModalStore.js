import { create } from "zustand";

export const useModalStore = create((set) => ({
    isDepositModalOpened: true,

    switchDepositModalState: (opened = !isDepositModalOpened) => set(state => ({...state, isDepositModalOpened: opened}))
}))