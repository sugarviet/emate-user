"use client";

import { create } from "zustand";
import axios from "axios";
import { persist, createJSONStorage } from "zustand/middleware";
import { FAKE_TOKEN } from "@/constants/fakeToken";
import urlcat from "urlcat";
import { BASE_URL, GET_INITIAL_CHAT_LIST_USER } from "@/constants/url";

export const useCurrentUserInfoStore = create(
  persist(
    (set, get) => ({
      currentUserInfo: {},
      storeCurrentUserInfo: (currentUser) =>
        set((state) => ({
          currentUserInfo: currentUser,
        })),
    
    }),
    {
      name: "current-user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
