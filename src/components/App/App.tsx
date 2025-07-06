import { Router } from "@/components/Router";
import { Provider } from "react-redux";
import { store } from "@/store/store.ts";

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
