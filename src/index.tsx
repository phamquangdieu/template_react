import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore, { history } from "./redux/configStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from "connected-react-router";
import ConnectedIntlProvider from "./module/intl/component/ConnectedIntlProvider";
import { setLocale } from "./module/intl/redux/intlReducer";

const { store, persitor } = configureStore({});

store.dispatch(setLocale("vi"));

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persitor}>
      <ConnectedRouter history={history}>
        <ConnectedIntlProvider>
          <App />
        </ConnectedIntlProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
