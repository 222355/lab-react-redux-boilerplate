import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./Reducer";
import ReduxLikeCounter from "./ReduxLikeCounter";

const store = createStore(Reducer);
export default function App() {
  return (
    <Provider store={store}>
      <ReduxLikeCounter />
    </Provider>
  );
}
