import { useStore } from "@nanostores/react";

import { LoginContainer, DashboardContainer } from "@/pages";

import { router } from "@/components/Router/router.ts";
import { useEffect } from "react";
import { redirectPage } from "@nanostores/router";

export const Router = () => {
  const page = useStore(router);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      redirectPage(router, "login");
    }
  }, []);

  switch (page?.route) {
    case "home":
      return <DashboardContainer />;
    case "login":
      return <LoginContainer />;
    default:
      return <>404</>;
  }
};
