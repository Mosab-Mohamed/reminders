import React from "react";
import Datetime from "react-datetime";
import { Formik, Field } from "formik";
import { INITIAL_REMINDER_FORM } from "../../../utils/constants/intialValues";
import { REMINDER_ADD_SCHEMA } from "../../../utils/validators/reminder";

const ReminderForm = props => {
  const { handleSubmit, reminder } = props;

  return (
    <Formik
      initialValues={reminder || INITIAL_REMINDER_FORM}
      validationSchema={REMINDER_ADD_SCHEMA}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <form onSubmit={e => handleSubmit(e, values)}>
          <div>
            <label htmlFor="title">Title</label>
            <Field
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && errors.title}
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
            {errors.text && touched.text && errors.text}
          </div>
          <Field
            name="scheduledTime"
            render={fieldProps => (
              <Datetime
                {...fieldProps}
                selected={values.scheduledTime}
                onChange={date =>
                  fieldProps.form.setFieldValue("scheduledTime", date)
                }
              />
            )}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default ReminderForm;
