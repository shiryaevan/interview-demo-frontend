import { useStore } from "@nanostores/react";

import { router } from "./router";
import { LoginContainer } from "@/pages";

export const Router = () => {
  const page = useStore(router);

  switch (page?.route) {
    case "home":
      return <>Dashboard</>;
    case "login":
      return <LoginContainer />;
    default:
      return <>404</>;
  }
};
