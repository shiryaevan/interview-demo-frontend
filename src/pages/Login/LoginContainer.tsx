import { Login } from "@/features/auth/Login";
import type { LoginRequest } from "@/api";
import { useLoginMutation } from "@/services/api.ts";
import { useDispatch } from "react-redux";
import { setToken } from "@/features/auth/Login/authSlice.ts";
import { useRouter } from "@/hooks/useRouter.ts";

export const LoginContainer = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const { router, redirectPage } = useRouter();

  const onSubmitHandler = async (data: LoginRequest) => {
    const res = await login(data).unwrap();
    dispatch(setToken(res.token));
    localStorage.setItem("token", res.token);
    redirectPage(router, "home");
  };

  return <Login onSubmit={onSubmitHandler} />;
};
