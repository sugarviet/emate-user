"use client";

import { create } from "zustand";
import axios from "axios";
import { persist, createJSONStorage } from "zustand/middleware";

export const useChatStore = create(
  persist(
    (set, get) => ({
      count: 0,
      socket: null,
      isLoading: false,
      selectedUser: null,
      messages: [],
      listUsers: [],
      selectedUserId: null,
      firstSelected: false,
      currentUserInfo: {},
      currentMsg: [],



      addToContactList: (user) =>
        set((state) => {
          console.log('current list', state.listUsers);
          const exist = state.listUsers.some((userInList) => userInList.id === user.id)
          if(!exist){
            return ({ listUsers: [user, ...state.listUsers] })
          }else{
            return {...state}
          }
          
        }),

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
      setSelectedUserId: (userId) =>
        set((state) => ({
          selectedUserId: userId,
          firstSelected: true,
        })),
      storeCurrentUser: (currentUser) =>
        set((state) => ({
          currentUserInfo: currentUser,
        })),
        setStoreMessage: (newMessage) => set((state) => ({
          currentMsg: [...state.currentMsg, newMessage]
        }))
      
    }),
    {
      name: "chat-app-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
