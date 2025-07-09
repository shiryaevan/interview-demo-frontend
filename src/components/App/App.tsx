import { Provider } from "react-redux";

import { Router } from "@/components/Router/Router.tsx";
import { store } from "@/store/store.ts";

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
