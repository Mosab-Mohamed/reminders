import * as Yup from "yup";
import { DATE_REGEX } from "../../constants/regex";

export const REMINDER_ADD_SCHEMA = Yup.object().shape({
  title: Yup.string().required("Reminder title is required"),
  text: Yup.string().required("Reminder text is required"),
  scheduled_time: Yup.date()
    .required("Scheduled time is required")
    .nullable(),
  scheduled_time: Yup.date()
    .required("Scheduled time is required")
    .min(new Date(), "Scheduled time cannot be in the past")
});
