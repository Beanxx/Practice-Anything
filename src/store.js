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
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setIsLogin: (isLogin) => set({ isLogin }),

  fetch: async (e) => {
    set(() => ({ loading: true }));

    try {
      const response = await axios.get("http://localhost:3001/user");
      set((state) => ({ data: (state.data = response.data), loading: false }));
      console.log(response.data);
    } catch (err) {
      set(() => ({ hasErrors: true, loading: false }));
    }

    // e.preventDefault();

    // const response = await axios
    //   .post("http://localhost:3001/user")
    //   .then((res) => console.log(res.data))
    //   .then(() => alert("signup success"))
    //   // .then(() => setIsLogin(true))
    //   .catch((err) => console.log(err.response.message));
  },
});

const useStore = create(
  process.env.NODE_ENV !== "production" ? devtools(store) : store
);

export default useStore;
