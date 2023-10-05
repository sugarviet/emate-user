import { create } from 'zustand'
import axios from 'axios'

export const useChatStore = create((set) => ({
    count: 0,
    selectedUser: null,
    messages: [],
    listUsers: [],
    selectedUserId: null,
    firstSelected: false,
    currentUserInfo: null,

    increaseCount: () => set(state => ({
        count: state.count + 1
    })),
    storeChattedUsers: (listUser = []) => set((state) => ({
        listUsers: listUser
    })),
    storeSelectedUser: (selectedUser) => set((state) => ({
        selectedUser: selectedUser
    })),
    setSelectedUserId: (userId) => set(state => ({
        selectedUserId: userId,
        firstSelected: true
    })),
    storeCurrentUser: (currentUser) => set(state => ({
        currentUserInfo: currentUser
    }))
}))