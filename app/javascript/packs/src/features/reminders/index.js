import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewReminderForm from "./form";
import RemindersList from "./list";

const Reminder = ({ match }) => {
  const handleSubmit = (event, values) => {
    event.preventDefault();
    console.log({ values });
  };

  return (
    <>
      <Switch>
        <Route
          exact
          path={`${match.url}/new`}
          render={props => (
            <NewReminderForm {...props} handleSubmit={handleSubmit} />
          )}
        />
        <Route
          exact
          path={`${match.url}/`}
          render={props => <RemindersList {...props} />}
        />
      </Switch>
    </>
  );
};

export default Reminder;
