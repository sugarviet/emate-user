import { create } from 'zustand'


export const useWallet = create((set) => ({
    balance: 0,

    setBalance: (balance) => set({ balance: balance }),
    widthRaw: (value) => set({ balance: balance - value })
}))
