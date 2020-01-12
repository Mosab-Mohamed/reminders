import * as Yup from "yup";
import { DATE_REGEX } from "../../constants/regex";

export const REMINDER_ADD_SCHEMA = Yup.object().shape({
  title: Yup.string().required("Reminder title is required"),
  text: Yup.string().required("Reminder text is required"),
  scheduledTime: Yup.date()
    .required("Scheduled time is required")
    .nullable(),
  scheduledTime: Yup.string()
    .matches(DATE_REGEX, "Date is invalid")
    .nullable()
});
