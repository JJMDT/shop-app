import { tesloApi } from "@/api/teslaApi";
import type { AuthResponse } from "../interfaces/auth.response";

export const checkAuthAction = async (): Promise<AuthResponse> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  try {
    const { data } = await tesloApi.get<AuthResponse>("auth/check-status");
    localStorage.setItem("token", data.token);
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    localStorage.removeItem("token");
    throw new Error("Token expired or not valid");
  }
};
