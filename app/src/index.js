import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./state/reducer";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Fact from "./components/Fact";
import "./index.css";

const logger = ({ getState }) => next => action => {
  console.log("Dispatching action:", action);
  next(action);
};

let store = createStore(appReducer, applyMiddleware(logger, thunk));

function App() {
  return (
    <div className="app">
      <Header />
      <Fact />
    </div>
  );
}

const rootElement = document.getElementById("root");


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

