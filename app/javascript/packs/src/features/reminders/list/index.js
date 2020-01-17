import React, { useEffect } from "react";
import { fetchAll as fetchAllReminders } from "../../../api/reminder";

const RemindersList = ({
  reminders,
  setReminders,
  history,
  deleteReminder
}) => {
  useEffect(() => {
    fetchAllReminders().then(response => {
      setReminders(response.data.data.reminders);
    });
  }, [setReminders]);

  return (
    <>
      <h2>
        Reminders (total of {reminders.length} reminders){" "}
        <button onClick={() => history.push("reminders/new")}>
          Create new
        </button>
      </h2>

      <table border="2">
        <tr>
          <th>Title</th>
          <th>Text</th>
          <th>Scheduled time</th>
          <th>Actions</th>
        </tr>
        {reminders.map(reminder => (
          <tr key={reminder.id}>
            <td>{reminder.title}</td>
            <td>{reminder.text}</td>
            <td>{reminder.scheduled_time}</td>
            <td>
              <button
                onClick={() =>
                  history.push({
                    pathname: `reminders/${reminder.id}/edit`,
                    state: { reminder }
                  })
                }
              >
                Edit
              </button>
              <button onClick={() => deleteReminder(reminder.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default RemindersList;
