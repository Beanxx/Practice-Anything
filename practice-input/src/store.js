import create from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

const store = (set) => ({
  data: [],
  name: "",
  email: "",
  password: "",

  isName: false,
  isEmail: false,
  isPassword: false,

  nameMessage: "",
  emailMessage: "",
  passwordMessage: "",

  isLogin: false,
  loading: false,
  hasErrors: false,

  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),

  setIsName: (isName) => set({ isName }),
  setIsEmail: (isEmail) => set({ isEmail }),
  setIsPassword: (isPassword) => set({ isPassword }),

  setNameMessage: (nameMessage) => set({ nameMessage }),
  setEmailMessage: (emailMessage) => set({ emailMessage }),
  setPasswordMessage: (passwordMessage) => set({ passwordMessage }),

  setIsLogin: (isLogin) => set({ isLogin }),

  // axios get 요청
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
