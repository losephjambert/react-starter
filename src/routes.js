import React from "react";
import { Switch, Route } from "react-router-dom";

import { LandingPage } from "./components";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  );
}
