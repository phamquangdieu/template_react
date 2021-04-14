import React from "react";
import { Route, Router, Switch } from "react-router";
import HomePage from "./module/home/page";
import TestPage from "./module/test";
import { history } from "./redux/configStore";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" component={TestPage} />
      </Switch>
    </Router>
  );
};

export default App;
