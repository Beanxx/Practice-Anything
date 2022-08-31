import create from "zustand";
import { devtools } from "zustand/middleware";
// import axios from "axios";

const store = (set) => ({
  isLogin: false,
  name: "",
  email: "",
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setIsLogin: (isLogin) => set({ isLogin }),
});

const useStore = create(
  process.env.NODE_ENV !== "production" ? devtools(store) : store
);

export default useStore;
