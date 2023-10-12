import { message } from "antd";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create(
    persist(
        (set, get) => ({
            selectedCourses: [],
            purchasingCourses: [],
            total: 0,
            addToSelectedCourses: (course) => set(state => {
                if (state.selectedCourses.some(c => c._id === course._id)) {
                    message.warning("Bạn đã thêm khóa học này rồi")
                    return { selectedCourses: state.selectedCourses };
                }

                return { selectedCourses: [...state.selectedCourses, course] }
            }),
            removeFromSelectedCourses: (course) => set(state => ({ selectedCourses: state.selectedCourses.filter(c => c._id !== course._id) })),
            setSelectedCourses: (courses) => set({ selectedCourses: courses }),
            cleanUpSelectedCourse: () => set(state => { selectedCourses: state.selectedCourses.filter(c => state.purchasingCourses.includes(c)) }),
            setPurchasingCourses: (courses) => set({ purchasingCourses: courses }),
            cleanUpPurchasingCourses: () => set({ purchasingCourses: [] }),
            setTotal: (value) => set({ total: value }),
        }),
        {
            name: "current-cart-storage",
            storage: createJSONStorage(() => sessionStorage),
        },
    )
)