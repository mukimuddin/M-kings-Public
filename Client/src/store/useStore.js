import { create } from 'zustand';

const useStore = create((set) => ({
  // Counter state
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),

  // Theme state
  isDarkMode: true,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

  // User preferences
  userPreferences: {
    animations: true,
    notifications: true
  },
  updatePreferences: (preferences) => 
    set((state) => ({ 
      userPreferences: { ...state.userPreferences, ...preferences }
    })),

  // Loading state
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
}));

export default useStore; 