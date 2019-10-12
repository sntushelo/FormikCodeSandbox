import React from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

import "../../styles.css";

const PurchaseOrderForm = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form>
      <div>
        <h2>Purchase Order Form</h2>
        <table>
          <tbody>
            <tr>
              <td>Department:</td>
              <td>
                <Field component="select" name="department">
                  <option value="received">Public Works</option>
                  <option value="inProgress">Health</option>
                  <option value="submitted">Prasa</option>
                </Field>
              </td>
            </tr>
            <tr>
              <td>RFQ Reference No.:</td>
              <td>
                <Field
                  name="rfqRefNo"
                  type="text"
                  placeholder="RFQ Reference No."
                />
              </td>
            </tr>
            <tr>
              <td>Upload File:</td>
              <td>
                <Field name="filePath" type="text" placeholder="File Path" />
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <button disabled={isSubmitting}>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Form>
  );
};

const FormikPurchaseOrder = withFormik({
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
})(PurchaseOrderForm);

export default FormikPurchaseOrder;
