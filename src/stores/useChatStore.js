"use client";

import { create } from "zustand";
import axios from "axios";
import { persist, createJSONStorage } from "zustand/middleware";
import { FAKE_TOKEN } from "@/constants/fakeToken";

export const useChatStore = create(
  persist(
    (set, get) => ({
      count: 0,
      socket: null,
      isLoading: false,
      selectedUser: null,
      messages: [],
      listUsers: [
        { id: 1, name: "Mike", image: "", email: "viet123@gmail.com" },
      ],
      selectedUserId: null,
      firstSelected: false,
      currentUserInfo: {},
      currentMsg: [],

      addToContactList: (user) =>
        set((state) => {
          const exist = state.listUsers.some(
            (userInList) => userInList.id === user.id
          );
          console.log("user", user);
          console.log("existing user", exist);
          if (!exist) {
            let newUserFromRecieve = null;

            if (user.from) {
              axios
                .get(
                  "http://localhost:8080/getDetail/651a6949baf2f58aa1cb63a8",
                  {
                    headers: {
                      Authorization: `Bearer ${FAKE_TOKEN}`,
                    },
                  }
                )
                .then(function (response) {
                  console.log("Data:", response.data);
                  newUserFromRecieve = {
                    id: response.data.metaData._id,
                    name: response.data.metaData.name,
                    image: "",
                  };

                  if (!state.selectedUserId) {
                    selectedUserId = user.id;
                    selectedUser = user;
                    console.log("Im here");
                  } else {
                    state.selectedUserId = user.id;
                    state.selectedUser = user;
                    console.log("Im there");
                  }
                })
                .catch(function (error) {
                  console.error("Error:", error);
                });

             

            }

            const finalUser = newUserFromRecieve ? newUserFromRecieve : user;

            console.log("finalUser", finalUser);

            return { listUsers: [finalUser, ...state.listUsers] };
          } else {
            return { ...state };
          }
        }),
      addToContactListByReceive: (id) =>
        set(async (state) => {
          const exist = state.listUsers.some(
            (userInList) => userInList.id == id
          );
          console.log("exists", exist);

          if (!exist) {
            const {
              data: { metaData },
            } = await axios.get(
              "http://localhost:8080/getDetail/651a6949baf2f58aa1cb63a8",
              {
                headers: {
                  Authorization: `Bearer ${state.currentUserInfo.token}`,
                },
              }
            );

            console.log("metaData", metaData);

            const user = {
              id: metaData._id,
              name: metaData.name,
              image: "",
            };
            console.log("state.selectedId", state.selectedUserId);

            if (!state.selectedUserId) {
              selectedUserId = user.id;
              selectedUser = user;
              console.log("Im here");
            } else {
              state.selectedUserId = user.id;
              state.selectedUser = user;
              console.log("Im there");
            }

            console.log("return phase");

            return { listUsers: [user, ...state.listUsers] };
          } else {
            return { ...state };
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
