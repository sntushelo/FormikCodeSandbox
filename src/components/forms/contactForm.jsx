import React from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

import "../styles.css";

const ContactForm = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form>
      <div>
        <h2>Contact Form</h2>
        <table>
          <tr>
            <td>Department:</td>
            <td>
              <Field name="department" type="text" placeholder="department" />
            </td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>
              <Field name="name" type="text" placeholder="Name" />
            </td>
          </tr>
          <tr>
            <td>Contact Number:</td>
            <td>
              <Field name="cellNumber" type="text" placeholder="Cell Number" />
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <Field name="email" type="text" placeholder="email" />
            </td>
          </tr>
        </table>
      </div>
    </Form>
  );
};

const FormikContact = withFormik({
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
})(ContactForm);

export default FormikContact;
