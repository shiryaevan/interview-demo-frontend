import { Login } from "@/features/auth/Login";
import { type LoginRequest, OpenAPI } from "@/api";
import { useLoginMutation } from "@/services/api.ts";
import { useDispatch } from "react-redux";
import { setToken } from "@/features/auth/Login/authSlice.ts";
import { useRouter } from "@/hooks/useRouter.ts";
import { useEffect, useState } from "react";

export const LoginContainer = () => {
  const dispatch = useDispatch();
  const [login, { error }] = useLoginMutation();
  const { router, redirectPage } = useRouter();
  const [authError, setAuthError] = useState<string>();

  const onSubmitHandler = async (data: LoginRequest) => {
    const res = await login(data).unwrap();
    dispatch(setToken(res.token));
    OpenAPI.TOKEN = res.token;
    localStorage.setItem("token", res.token);
    redirectPage(router, "home");
  };

  useEffect(() => {
    error && "message" in error && error.message && setAuthError(error.message);
  }, [error]);

  return <Login onSubmit={onSubmitHandler} authError={authError} />;
};
