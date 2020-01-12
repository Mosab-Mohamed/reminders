import React, { useState } from "react";

const RemindersList = props => {
  const [reminders, setReminder] = useState([
    {
      title: "Test",
      text: "Teeseeesst",
      scheduledTime: new Date().toISOString(),
      id: 1
    }
  ]);

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
