import { create } from "zustand";

export const useModalStore = create((set) => ({
    isDepositModalOpened: false,
    isCompletingInfoNotificationModalOpened: false,

    switchDepositModalState: (opened = !isDepositModalOpened) => set({ isDepositModalOpened: opened }),
    switchCompletingInfoNotificationModalState: (opened = !isCompletingInfoNotificationModalOpened) => set({ isCompletingInfoNotificationModalOpened: opened })
}))