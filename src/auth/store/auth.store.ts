// store.ts
import type { User } from "@/interfaces/user.interface";
import { create } from "zustand";
import { loginAction } from "../actions/login.action";

// Define types for state & actions
interface AuthState {
  //properties
  user: User | null;
  token: string | null;
  //actions
  login: (email: string, password: string) => Promise<Boolean>;
}
// // Create store using the curried form of `create`
// export const useCounterStore = create<Store>()((set) => ({
//   count: 100,
//   inc: () => set((state) => ({ count: state.count + 1 })),
//   dec: () => set((state) => ({ count: state.count - 1 })),
// }));

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  token: null,

  login: async (email: string, password: string) => {
    console.log({ email, password });
    try {
      const data = await loginAction(email, password);
      localStorage.setItem("token", data.token);
      set({ user: data.user, token: data.token });
      return true;
    } catch (error) {
      localStorage.removeItem("token");
      set({ user: null, token: null });
      return false;
    }
  },
}));
