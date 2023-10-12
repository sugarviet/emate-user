"use client";

import { create } from "zustand";
import axios from "axios";
import { persist, createJSONStorage } from "zustand/middleware";
import { FAKE_TOKEN } from "@/constants/fakeToken";
import urlcat from "urlcat";
import { BASE_URL, GET_DETAIL_USER, GET_INITIAL_CHAT_LIST_USER } from "@/constants/url";

export const useChatStore = create(
  persist(
    (set, get) => ({
      count: 0,
      socket: null,
      isLoading: false,
      selectedUser: null,
      messages: [],
      listUsers: [
        
      ],
      selectedUserId: null,
      firstSelected: false,
      currentUserInfo: null,
      currentMsg: [],
      initializeDataListUser: async() => {
        const state = get();
        console.log('state.c', state.currentUserInfo._id);

        console.log('refresh',state.currentUserInfo?.refreshToken);
        console.log('access', state.currentUserInfo?.token);

        const {data: metaData} = await axios
        .get(
          urlcat(BASE_URL, GET_INITIAL_CHAT_LIST_USER),
          {
            headers: {
              "x-client-id": state.currentUserInfo?._id,
              "x-client-refreshtoken" : state.currentUserInfo?.refreshToken,
              "x-client-accesstoken" : state.currentUserInfo?.token,
            },
          },
        )
          console.log('res', metaData.metaData);

          set(() => ({ listUsers: metaData.metaData }));

      },
      // initializeDataListUser: () =>
      //   set((state) => {
      //     console.log('current user info', state.currentUserInfo);
      //     axios
      //           .get(
      //             urlcat(BASE_URL, GET_INITIAL_CHAT_LIST_USER),
      //             {
      //               accessToken: state.currentUserInfo?.token,
      //               refreshToken: state.currentUserInfo?.refreshToken
      //             },
      //             {
      //               headers: {
      //                 Authorization: `Bearer ${FAKE_TOKEN}`,
      //                 "x-client-id": state.currentUserInfo?.id,
      //                 "x-client-refreshtoken" : state.currentUserInfo?.refreshToken,
      //                 "x-client-accesstoken" : state.currentUserInfo?.token,
      //               },
                    
      //             },
                  

      //           )
      //           .then(function (response) {
      //             console.log("Data:", response.data);
      //           })
      //           .catch(function (error) {
      //             console.error("Error:", error);
      //           });
      //     return { listUsers: state.listUsers }
      //   }),

      // addToContactList: (user) =>
      //   set((state) => {
      //     const exist = state.listUsers.some(
      //       (userInList) => userInList.id === user.id
      //     );
    
      //     const api = `${BASE_URL}${GET_DETAIL_USER}/${state.currentUserInfo.id}`
      //     if (!exist) {
      //       let newUserFromRecieve = null;

      //       if (user.from) {
      //         axios
      //           .get(
      //             api,
      //             {
      //               headers: {
      //                 Authorization: `Bearer ${FAKE_TOKEN}`,
      //               },
      //             }
      //           )
      //           .then(function (response) {
      //             console.log("Data:", response.data);
      //             newUserFromRecieve = {
      //               id: response.data.metaData._id,
      //               name: response.data.metaData.name,
      //               avatar: "",
      //             };

      //             // if (!state.selectedUserId) {
      //             //   console.log('im here');
      //             //   state.selectedUserId = newUserFromRecieve.id;
      //             //   state.selectedUser = {...newUserFromRecieve};
      //             // }
      //           })
      //           .catch(function (error) {
      //             console.error("Error:", error);
      //           });
      //       }

      //       console.log('newUserFromRecieve', newUserFromRecieve);
      //       console.log('user', user);
      //       console.log('state.selectedUserId', state.selectedUserId);
      //       console.log('newUserFromRecieve', newUserFromRecieve);
      //       const finalUser = newUserFromRecieve ? newUserFromRecieve : user;

      //       console.log("finalUser", finalUser);

      //       if(!state.selectedUserId){
      //         return {
      //           listUsers: [finalUser, ...state.listUsers],
      //           selectedUserId: newUserFromRecieve.id,
      //           selectedUser: {...newUserFromRecieve},
      //         }
      //       }else {
      //         return { 
      //           listUsers: [finalUser, ...state.listUsers],
      //          };
      //       };

      //       // return { 
      //       //   // listUsers: [finalUser, ...state.listUsers],
      //       //   listUsers: [finalUser, ...state.listUsers],
      //       //  };
      //     } else {
      //       return { ...state };
      //     }
      //   }),
        addToContactList: async(user) => {
          const state = get();
          const api = `${BASE_URL}${GET_DETAIL_USER}/${user._id}`

          // const {data: {metaData}} = await axios.get(api);
          let newUserFromRecieve = null;

          const exist = state.listUsers.some(
            (userInList) => userInList._id === user._id
          );  
          if (!exist) {
            if (user.from) {
              const {data: {metaData}} = await axios.get(api);

                console.log('res', metaData);
                newUserFromRecieve = {
                  _id: metaData._id,
                  name: metaData.name,
                  avatar: metaData.avatar
                }
            }

            const finalUser = newUserFromRecieve ? newUserFromRecieve : user;

            console.log("finalUser", finalUser);

            if(!state.selectedUserId){
              set(() => ({ listUsers: [finalUser, ...state.listUsers], selectedUserId: newUserFromRecieve._id, selectedUser: {...newUserFromRecieve} }));
            }else {
              
                set(() => ({ listUsers: [finalUser, ...state.listUsers] }));
          
            };
          } else {
            // return { ...state };
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
      setSelectedUserId: (user) =>
        set((state) => ({
          selectedUserId: user._id,
          firstSelected: true,
          selectedUser: user
        })),
      storeCurrentUser: (currentUser) =>
        set((state) => ({
          currentUserInfo: currentUser,
        })),

      setStoreWhenRecieveMsg: (newMsg) => set((state) => ({
          currentMsg: newMsg === undefined ? [] : newMsg
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
