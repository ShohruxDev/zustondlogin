import { create } from "zustand";

const useStore = create((set) => ({
  users: [],
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true", 

  login: () => {
    localStorage.setItem("isAuthenticated", "true");
    set({ isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem("isAuthenticated");
    set({ isAuthenticated: false });
  },

  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  deleteUser: (index) =>
    set((state) => ({
      users: state.users.filter((_, i) => i !== index),
    })),
  updateUser: (index, updatedUser) =>
    set((state) => ({
      users: state.users.map((user, i) => (i === index ? updatedUser : user)),
    })),
}));

export default useStore;




