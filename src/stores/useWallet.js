import { create } from 'zustand'


export const useWallet = create((set) => ({
    balance: 700000,

    setBalance: (balance) => set({ balance: balance }),
    widthRaw: (value) => set(state => ({ balance: state.balance - value }))
}))
