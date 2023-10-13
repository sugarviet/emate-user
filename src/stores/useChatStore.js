"use client";

import { create } from "zustand";
import axios from "axios";
import { persist, createJSONStorage } from "zustand/middleware";
import urlcat from "urlcat";
import {
  BASE_URL,
  GET_DETAIL_USER,
  GET_INITIAL_CHAT_LIST_USER,
} from "@/constants/url";

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
      addToContactList: async (user) => {
        const state = get();
        const api = `${BASE_URL}${GET_DETAIL_USER}/${user._id}`;
        let newUserFromRecieve = null;
        const exist = state.listUsers.some(
          (userInList) => userInList._id === user._id
        );
        if (!exist) {
          if (user.from) {
            const {
              data: { metaData },
            } = await axios.get(api);
            newUserFromRecieve = {
              _id: metaData._id,
              name: metaData.name,
              avatar: metaData.avatar,
            };
          }
          const finalUser = newUserFromRecieve ? newUserFromRecieve : user;
          if (!state.selectedUserId) {
            set(() => ({
              listUsers: [finalUser, ...state.listUsers],
              selectedUserId: newUserFromRecieve._id,
              selectedUser: { ...newUserFromRecieve },
            }));
          } else {
            set(() => ({ listUsers: [finalUser, ...state.listUsers] }));
          }
        } else {
          set(() => ({ ...state }));
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
      storeSelectedUser: (selectedUser) =>
        set((state) => ({
          selectedUser: selectedUser,
        })),
      setSelectedUserId: async (user) => {
        const state = get();
        const { data: metaData } = await axios.get(
          `https://emate-af7e6f8fb027.herokuapp.com/message/${user}`,
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
          selectedUserId: user._id,
          selectedUser: user,
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

      setStoreMessage: (newMessage) =>
        set((state) => ({
          currentMsg: [...state.currentMsg, newMessage],
        })),
    }),
    {
      name: "chat-app-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
