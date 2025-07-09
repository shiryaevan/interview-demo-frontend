import { openPage, redirectPage } from "@nanostores/router";

import { router } from "@/components/Router/router";

export const useRouter = () => {
  return { router, openPage, redirectPage };
};
