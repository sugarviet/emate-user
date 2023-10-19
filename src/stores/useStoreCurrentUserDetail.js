"use client";

import { create } from "zustand";

export const useStoreCurrentUserDetail = create((set) => ({
  userDetail: {
    avatar: "",
    wallet: 0,
    coursePurchased: [],
    role: [],
  },
  setBalance: (balance) => set({ balance: balance }),

  storeUserDetail: (userDetail) =>
    set((state) => {
      console.log("userDetail", userDetail);
      return { userDetail };
    }),

  updateWallet: (money, type) =>
    set((state) => {
      let newMoney = state.userDetail.wallet;
      if (type === "deposit") {
        newMoney += money;
      }
      if (type === "withdraw") {
        newMoney -= money;
      }
      return { userDetail: { ...state.userDetail, wallet: newMoney } };
    }),
}));
