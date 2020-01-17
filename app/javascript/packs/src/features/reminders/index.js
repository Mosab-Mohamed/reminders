import React, { useState } from "react";

import { Switch, Route, useHistory } from "react-router-dom";
import ReminderForm from "./form";
import RemindersList from "./list";
import {
  create as createReminder,
  deleteReminder,
  updateReminder
} from "../../api/reminder";

const Reminder = ({ match, url, location }) => {
  const [reminders, setReminders] = useState([]);

  const history = useHistory();

  const handleSubmit = values => {
    createReminder(values)
      .then(() => history.push("/reminders"))
      .catch(err => {
        console.log({ err });
      });
  };

  const handleEdit = (id, values) => {
    updateReminder(id, values)
      .then(() => history.push("/reminders"))
      .catch(err => {
        console.log({ err });
      });
  };

  const handleDeleteReminder = id => {
    deleteReminder(id)
      .then(() =>
        setReminders(prevReminders => prevReminders.filter(r => r.id !== id))
      )
      .catch(err => console.log({ err }));
  };

  return (
    <>
      <Switch>
        <Route
          exact
          path={`${match.url}/new`}
          render={props => (
            <ReminderForm {...props} handleSubmit={handleSubmit} />
          )}
        />
        <Route
          exact
          path={`${match.url}/:id/edit`}
          render={props => (
            <ReminderForm
              {...props}
              handleSubmit={handleEdit}
              reminder={location.state.reminder}
            />
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
              deleteReminder={handleDeleteReminder}
            />
          )}
        />
      </Switch>
    </>
  );
};

export default Reminder;
