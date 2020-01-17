import Axios from "axios";
import { BASE_URL } from "../utils/constants/baseURL";

const axios = Axios.create({
  baseURL: BASE_URL
});

export const fetch = reminderId =>
  axios({
    url: `reminders/${reminderId}`
  });

export const fetchAll = () =>
  axios({
    url: "reminders"
  });

export const create = reminder =>
  axios({
    method: "post",
    url: "reminders",
    data: {
      reminder
    }
  });

export const updateReminder = (reminderId, reminder) =>
  axios({
    method: "patch",
    url: `/reminders/${reminderId}`,
    data: {
      reminder
    }
  });

export const deleteReminder = reminderId =>
  axios({
    method: "delete",
    url: `/reminders/${reminderId}`
  });
