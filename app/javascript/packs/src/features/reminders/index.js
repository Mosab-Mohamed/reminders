import React, { useState } from "react";

import { Switch, Route } from "react-router-dom";
import NewReminderForm from "./form";
import RemindersList from "./list";
import { create as createReminder } from "../../api/reminder";

const Reminder = ({ match }) => {
  const [reminders, setReminders] = useState([]);

  const handleSubmit = (event, values) => {
    event.preventDefault();
    createReminder(values);
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
          render={props => (
            <RemindersList
              {...props}
              reminders={reminders}
              setReminders={setReminders}
            />
          )}
        />
      </Switch>
    </>
  );
};

export default Reminder;
