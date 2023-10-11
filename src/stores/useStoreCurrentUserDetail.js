"use client";

import { create } from "zustand";
import axios from "axios";
import { persist, createJSONStorage } from "zustand/middleware";
import { FAKE_TOKEN } from "@/constants/fakeToken";
import urlcat from "urlcat";
import { BASE_URL, GET_INITIAL_CHAT_LIST_USER } from "@/constants/url";

// export const useStoreCurrentUserDetail = create({
    //   userDetail : {
    //     avatar: "",
    //     wallet: 0,
    //     coursePurchased: [],
    //     role: []
    //   },
      // userDetail: null,
      // storeUserDetail: (userDetail) =>
      //   set((state) => {
      //     console.log('userDetail' , userDetail);
      //     return { userDetail }
      //   }),
  
      // });

      export const useStoreCurrentUserDetail = create((set) => ({
       
    
        userDetail : {
        avatar: "",
        wallet: 0,
        coursePurchased: [],
        role: []
      },
    setBalance: (balance) => set({ balance: balance }),

      storeUserDetail: (userDetail) =>
        set((state) => {
          console.log('userDetail' , userDetail);
          return { userDetail }
        }),

        updateWallet: (money, type) => set((state) => {
          let newMoney = state.userDetail.wallet;
          if(type === 'deposit'){
            newMoney += money;
          }
          if(type === 'withdraw'){
            newMoney -= money;
          }
          return {userDetail: {...state.userDetail, wallet: newMoney}}
        })
    }))
    
