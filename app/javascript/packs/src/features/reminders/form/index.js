import React from "react";
import Datetime from "react-datetime";
import { Formik, Field, ErrorMessage } from "formik";
import { INITIAL_REMINDER_FORM } from "../../../utils/constants/intialValues";
import { REMINDER_ADD_SCHEMA } from "../../../utils/validators/reminder";
import moment from "moment";

const ReminderForm = ({ handleSubmit, reminder, history }) => {
  const disableSubmit = ({ title, text, scheduled_time }) =>
    !title || !text || !scheduled_time;

  const createReminder = (e, values, errors) => {
    e.preventDefault();

    const { title, text, scheduled_time } = values;
    if (title && text && scheduled_time && Object.keys(errors).length === 0) {
      reminder ? handleSubmit(reminder.id, values) : handleSubmit(values);
    }
  };

  const validDate = date => {
    return date.isAfter(moment());
  };

  return (
    <Formik
      initialValues={reminder || INITIAL_REMINDER_FORM}
      validationSchema={REMINDER_ADD_SCHEMA}
    >
      {({ values, errors, handleChange, handleBlur }) => (
        <form onSubmit={e => createReminder(e, values, errors)}>
          <div>
            <label htmlFor="title">Title</label>
            <Field
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <ErrorMessage name="title" />
          </div>
          <div>
            <label htmlFor="text">Text</label>
            <Field
              type="textarea"
              name="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.text}
            />
            <ErrorMessage name="text" />
          </div>
          <div>
            <Field
              name="scheduled_time"
              render={fieldProps => (
                <Datetime
                  {...fieldProps}
                  selected={values.scheduled_time}
                  defaultValue={moment(values.scheduled_time)}
                  isValidDate={validDate}
                  onChange={date =>
                    fieldProps.form.setFieldValue("scheduled_time", date)
                  }
                />
              )}
            />
            <ErrorMessage name="scheduled_time" />
          </div>
          <div>
            <button disabled={disableSubmit(values)} type="submit">
              Submit
            </button>
            <button onClick={() => history.goBack()}>Cancel</button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ReminderForm;
