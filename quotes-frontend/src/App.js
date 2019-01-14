import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Home from "./components/home";
import Quote from "./components/quoteController";
import NewQuote from "./components/newQuoteController";
import NoMatch from "./components/noMatch";

export default () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quotes/new" component={NewQuote} />
        <Route exact path="/quotes/:quoteId" component={Quote} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};
