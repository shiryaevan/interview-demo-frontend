import { redirectPage } from "@nanostores/router";
import type { Middleware } from "@reduxjs/toolkit";

import { router } from "@/components/Router/router";

interface RejectedAction {
  type: string;
  payload: {
    status: number;
  };
}

export const authMiddleware: Middleware = () => (next) => (action) => {
  const typedAction = action as RejectedAction;
  if (
    typedAction?.type?.endsWith("/rejected") &&
    typedAction?.payload?.status === 401
  ) {
    console.warn("⛔ Unauthorized: redirecting to login");
    localStorage.removeItem("token");
    redirectPage(router, "login");
  }

  return next(action);
};
