import { create } from "zustand";

export const useCartStore = create((set) => ({
    selectedCourses: [],
    purchasingCourses: [],
    total: 0,

    setSelectedCourses: (courses) => set({ selectedCourses: courses }),
    setPurchasingCourses: (courses) => set({ purchasingCourses: courses }),
    setTotal: (value) => set({ total: value })
}))