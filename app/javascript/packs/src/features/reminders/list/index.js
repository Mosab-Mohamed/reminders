import React, { useEffect } from "react";
import { fetchAll as fetchAllReminders } from "../../../api/reminder";

const RemindersList = ({ reminders, setReminders }) => {
  useEffect(() => {
    fetchAllReminders().then(response => {
      setReminders(response.data.data.reminders);
    });
  }, [setReminders]);

  return (
    <>
      <h2>Reminders</h2>

      <table>
        <tr>
          <th>Title</th>
          <th>Text</th>
          <th>Scheduled time</th>
        </tr>
        {reminders.map(reminder => (
          <tr key={reminder.id}>
            <td>{reminder.title}</td>
            <td>{reminder.text}</td>
            <td>{reminder.scheduledTime}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default RemindersList;
