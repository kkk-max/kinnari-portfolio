import React, { Component } from "react";
import { toast } from "react-toastify";
import { Provider as ReduxProvider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./redux/reducers";
import Routes from "./Routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";
import { setupInterceptors } from "./redux/actions/api";

toast.configure();

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

setupInterceptors(store); 

class App extends Component {
  render() {
    return (
      <>
        <ReduxProvider store={store}>
          <Routes />;
        </ReduxProvider>
      </>
    );
  }
}

export default App;
