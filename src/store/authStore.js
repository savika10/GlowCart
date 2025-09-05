import {create} from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  loading: false,

  login: (userData) => {
    set({
      user: userData,
      isLoggedIn: true,
      loading: false,
    });
  },

  logout: () => {
    set({
      user: null,
      isLoggedIn: false,
      loading: false,
    });
  },

  register: (userData) => {
    set({
      user: userData,
      isLoggedIn: true,
      loading: false,
    });
  },

  setLoading: (loading) => set({loading}),
}));