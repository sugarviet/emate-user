"use client";

import { create } from "zustand";
import axios from "axios";
import { persist, createJSONStorage } from "zustand/middleware";
import urlcat from "urlcat";
import { BASE_URL, GET_INITIAL_CHAT_LIST_USER } from "@/constants/url";

export const useChatStore = create(
  persist(
    (set, get) => ({
      count: 0,
      isLoading: false,
      selectedUser: null,
      messages: [],
      listUsers: [],
      selectedUserId: null,
      firstSelected: false,
      currentUserInfo: {},
      currentMsg: [],
      userChatting: null,
      initializeDataListUser: async () => {
        const state = get();
        const { data: metaData } = await axios.get(
          urlcat(BASE_URL, GET_INITIAL_CHAT_LIST_USER),
          {
            headers: {
              "x-client-id": state.currentUserInfo?._id,
              "x-client-refreshtoken": state.currentUserInfo?.refreshToken,
              "x-client-accesstoken": state.currentUserInfo?.token,
            },
          }
        );
        set(() => ({ listUsers: metaData.metaData }));
      },
      addToContactListSend: async (newUser) => {
        const state = get();
        const exist = state.listUsers.some(
          (userInList) => userInList._id === newUser.to
        );
        if (exist) {
          set(() => ({ ...state }));
        } else {
          set(() => ({
            listUsers: [newUser, ...state.listUsers],
          }));
        }
      },
      addToContactListReceive: async (newUser) => {
        const state = get();
        const exist = state.listUsers.some(
          (userInList) => userInList._id === newUser.from
        );
        if (exist) {
          set(() => ({ ...state }));
        } else {
          set(() => ({
            listUsers: [newUser, ...state.listUsers],
          }));
        }
      },
      increaseCount: () =>
        set((state) => ({
          count: state.count + 1,
        })),
      storeChattedUsers: (listUser = []) =>
        set((state) => ({
          listUsers: listUser,
        })),
      storeSelectedUser: async (selectedUser) => {
        const state = get();
        const { data: metaData } = await axios.get(
          `https://emate-af7e6f8fb027.herokuapp.com/message/${selectedUser._id}`,
          {
            headers: {
              "x-client-id": state.currentUserInfo?._id,
              "x-client-refreshtoken": state.currentUserInfo?.refreshToken,
              "x-client-accesstoken": state.currentUserInfo?.token,
            },
          }
        );
        set((state) => ({
          currentMsg: metaData === undefined ? [] : metaData.metaData,
          firstSelected: true,
          selectedUser: selectedUser,
        }));
      },
      storeCurrentUser: (currentUser) =>
        set((state) => ({
          currentUserInfo: currentUser,
        })),
      setStoreWhenRecieveMsg: (newMsg) =>
        set((state) => ({
          currentMsg: newMsg === undefined ? [] : newMsg,
        })),

      setStoreMessage: (newMessage) => {
        const state = get();
        set(() => ({
          currentMsg: [...state.currentMsg, newMessage],
        }));
      },
    }),
    {
      name: "chat-app-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
