import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Tasks from "./components/Tasks";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Tasks />
      </div>
    </Provider>
  );
}

export default App;
