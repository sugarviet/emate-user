import { create } from 'zustand'


export const useStoreMentorDetail = create((set) => ({
    mentor: null,

    setStoreMentor: (mentor) => set({ mentor: mentor })
}))
