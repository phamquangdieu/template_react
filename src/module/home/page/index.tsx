import { push } from "connected-react-router";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
// import { setLocale } from "../../intl/redux/intlReducer";

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <FormattedMessage id="hello" />
      <button onClick={() => dispatch(push("/test"))}>change lang</button>
    </div>
  );
};

export default HomePage;
