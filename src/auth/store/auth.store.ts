// store.ts
import type { User } from "@/interfaces/user.interface";
import { create } from "zustand";
import { loginAction } from "../actions/login.action";
import { checkAuthAction } from "../actions/check-auth";
import registerAction from "../actions/register.action";

type AuthStatus = "authenticated" | "not-authenticated" | "checking";

// Define types for state & actions
interface AuthState {
  //properties
  user: User | null;
  token: string | null;
  authStatus: AuthStatus;
  // getters
  isAdmin: () => boolean;
  //actions
  login: (email: string, password: string) => Promise<Boolean>;
  logout: () => void;
  checkAuthStatus: () => Promise<boolean>;
  register: (
    email: string,
    password: string,
    fullname: string,
  ) => Promise<boolean>;
}
// // Create store using the curried form of `create`
// export const useCounterStore = create<Store>()((set) => ({
//   count: 100,
//   inc: () => set((state) => ({ count: state.count + 1 })),
//   dec: () => set((state) => ({ count: state.count - 1 })),
// }));

export const useAuthStore = create<AuthState>()((set, get) => ({
  user: null,
  token: null,
  authStatus: "checking",

  // getters

  isAdmin: () => {
    const role = get().user?.roles || [];
    return role.includes("admin");
  },

  //actions
  login: async (email: string, password: string) => {
    // console.log({ email, password });
    try {
      const data = await loginAction(email, password);
      localStorage.setItem("token", data.token);
      set({ user: data.user, token: data.token, authStatus: "authenticated" });
      return true;
    } catch (error) {
      localStorage.removeItem("token");
      set({ user: null, token: null, authStatus: "not-authenticated" });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null, authStatus: "not-authenticated" });
  },

  checkAuthStatus: async () => {
    try {
      const { token, user } = await checkAuthAction();
      set({
        user: user,
        token: token,
        authStatus: "authenticated",
      });
      return true;
    } catch (error) {
      set({
        user: undefined,
        token: undefined,
        authStatus: "not-authenticated",
      });
      return false;
    }
  },

  register: async (email: string, password: string, fullname: string) => {
    try {
      const data = await registerAction(email, password, fullname);
      localStorage.setItem("token", data.token);
      set({ user: data.user, token: data.token, authStatus: "authenticated" });
      return true;
    } catch (error) {
      localStorage.removeItem("token");
      set({ user: null, token: null, authStatus: "not-authenticated" });
      return false;
    }
  },
}));
