import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import intlReducer, { IntlState } from "../module/intl/redux/intlReducer";

export interface AppState {
  intl: IntlState;
}

export function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    intl: intlReducer,
  });
}
