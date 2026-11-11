import { tesloApi } from "@/api/teslaApi";
import type { AuthResponse } from "../interfaces/auth.response";

export const registerAction = async (
  email: string,
  password: string,
  fullName: string,
): Promise<AuthResponse> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>("/auth/register", {
      email: email,
      password: password,
      fullName: fullName,
    });
    console.log("register", data);
    return data;
  } catch (error) {
    console.log("algo salio mal", error);
    throw error;
  }
};
export default registerAction;
