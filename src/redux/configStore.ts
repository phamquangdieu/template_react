import { createBrowserHistory, History } from "history";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { applyMiddleware, compose, createStore } from "redux";
import { createRootReducer } from "./reducer";
import { routerMiddleware } from "connected-react-router";
import persistStore from "redux-persist/es/persistStore";

export const history: History = createBrowserHistory();

const composeEnhancers =
  (typeof window !== "undefined" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
};

export default function configureStore(preloadedState: any) {
  const persistedReducer = persistReducer(
    persistConfig,
    createRootReducer(history)
  );

  const store = createStore(
    persistedReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );

  const persitor = persistStore(store);

  return { store, persitor };
}
