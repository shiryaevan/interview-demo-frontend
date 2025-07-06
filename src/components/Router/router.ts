import { createRouter } from "@nanostores/router";

// gh-pages base url
const baseUrl = import.meta.env.PROD ? "/interview-demo-frontend" : "";

const routes = {
  home: `${baseUrl}`,
  login: `${baseUrl}/login`,
};

export const router = createRouter(routes);
