import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import { AppState } from "../../../redux/reducer";
import viMessages from "../vi.json";
import enMessages from "../en.json";

function getMessages(locale: string) {
  if (locale === "vi") {
    return viMessages as Record<string, string>;
  }
  return enMessages as Record<string, string>;
}

function mapStateToProps(state: AppState) {
  return {
    locale: state.intl.locale,
    messages: getMessages(state.intl.locale),
  };
}

export default connect(mapStateToProps)(IntlProvider);
