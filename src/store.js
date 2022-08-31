import create from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

const store = (set) => ({
  isLogin: false,
  loading: false,
  hasErrors: false,
  data: [],
  name: "",
  email: "",
  password: "",
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setIsLogin: (isLogin) => set({ isLogin }),

  // fetch: async (e) => {
  //   set(() => ({ loading: true }));

  //   try {
  //     const response = await axios.get("http://localhost:3001/user");

  //     set((state) => ({ data: (state.data = response.data), loading: false }));
  //     console.log(response.data);
  //   } catch (err) {
  //     set(() => ({ hasErrors: true, loading: false }));
  //   }
  // },
});

const useStore = create(
  process.env.NODE_ENV !== "production" ? devtools(store) : store
);

export default useStore;
