import React from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

import "../../styles.css";

import RfqItems from "../rfqItems";

const RfqForm = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form>
      <div>
        <h2>RFQs Details Form</h2>
        <table>
          <tr>
            <td>Date Received:</td>
            <td>
              <Field name="department" type="text" placeholder="Department" />
            </td>
          </tr>
          <tr>
            <td>Date Received:</td>
            <td>
              <Field
                name="dateReceived"
                type="text"
                placeholder="Date Received"
              />
            </td>
          </tr>
          <tr>
            <td>Due Date:</td>
            <td>
              <Field name="dueDate" type="text" placeholder="Due Date" />
            </td>
          </tr>
          <tr>
            <td>Reference No.:</td>
            <td>
              <Field name="referenceNum" type="text" placeholder="Referencem" />
            </td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>
              <Field component="select" name="status">
                <option value="received">Received</option>
                <option value="inProgress">In Progress</option>
                <option value="submitted">Submitted</option>
              </Field>
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <button disabled={isSubmitting}>Save</button>
            </td>
          </tr>
        </table>
        <div>
          <RfqItems />
        </div>
      </div>
    </Form>
  );
};

const FormikRfq = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || false,
      plan: plan || "free"
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(9)
      .required()
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === "sivu@tbe.com") {
        setErrors({ email: "email is taken broO!" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(RfqForm);

export default FormikRfq;
