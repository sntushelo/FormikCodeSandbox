import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

import "../styles.css";

const Item = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form>
      <div>
        <h2>Item Form</h2>
        <table>
          <tr>
            <td>Name:</td>
            <td>
              <Field name="name" type="text" placeholder="Name" />
            </td>
          </tr>
          <tr>
            <td>Quantity:</td>
            <td>
              <Field name="quantity" type="text" placeholder="Quantity" />
            </td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>
              <Field name="price" type="text" placeholder="Price" />
            </td>
          </tr>
          <tr>
            <td>Markup (15% of item price):</td>
            <td>
              <Field name="markUp" type="text" placeholder="15% Mark Up" />
            </td>
          </tr>
        </table>
      </div>
    </Form>
  );
};

export default Item;
