import React from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

import "../../styles.css";

import RfqItems from "../rfqItems";
import Store from '../../store';

const RfqForm = ({ values, errors, touched, isSubmitting}) => {
  return (
    <Form>
      <div>
        <h2>RFQs Details Form</h2>
        <table>
          <tbody>
            <tr>
              <td>Department:</td>
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
              <td>
                <label>
                Set as a high priority RFQ to be attended to ASAP
                </label>
              </td>
              <td>
                <Field
                  name="isHighPriority"
                  type="checkbox"
                  checked={values.isHighPriority}
                />
              </td>
            </tr>
            <tr>
              <td>Reference No.:</td>
              <td>
                <Field
                  name="referenceNum"
                  type="text"
                  placeholder="Referencem"
                />
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
          </tbody>
        </table>
      </div>
    </Form>
  );
};

const FormikRfq = withFormik({
  mapPropsToValues({ department, dateReceived, dueDate, isHighPriority, referenceNum, status }) {
    return {
      department: department || "",
      dateReceived: dateReceived || "",
      dueDate: dueDate || "",
      isHighPriority: isHighPriority || false,
      referenceNum: referenceNum || "",
      status: status || "received"
    };
  },
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === "sivu@tbe.com") {
        setErrors({ email: "email is taken broO!" });
      } else {
        //console.log('There are no errors')
        //resetForm();
        console.log(values);
      }
      
      setSubmitting(false);
    }, 2000);
  }
})(RfqForm);

export default FormikRfq;
