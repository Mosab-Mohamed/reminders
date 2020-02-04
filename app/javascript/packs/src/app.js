import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./features/homepage";
import Reminders from "./features/reminders";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/reminders" render={props => <Reminders {...props} />} />
          <Route path="/" render={props => <Reminders {...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
