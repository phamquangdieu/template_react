import { ActionType, createCustomAction, getType } from "typesafe-actions";

export interface IntlState {
  readonly locale: string;
}

const setLocaleAction = createCustomAction("setLocale", (locale: string) => ({
  locale,
}));

export const setLocale = (locale: string) => {
  localStorage.setItem("lang", locale);
  return setLocaleAction(locale);
};

const actions = { setLocale };

type Action = ActionType<typeof actions>;

export default function intlReducer(
  state: IntlState = { locale: "en" },
  action: Action
) {
  switch (action.type) {
    case getType(setLocaleAction):
      return { ...state, locale: action.locale };
    default:
      return state;
  }
}
