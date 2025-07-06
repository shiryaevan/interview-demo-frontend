import { router } from "@/components/Router/router";
import { openPage, redirectPage } from "@nanostores/router";

export const useRouter = () => {
  return { router, openPage, redirectPage };
};
