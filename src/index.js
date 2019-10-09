import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

import "./styles.css";

//const App = ({ values, handleChange, handleSubmit }) => {
const App = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field name="email" type="email" placeholder="Email" />
      </div>
      <br />
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field name="password" type="password" placeholder="Password" />
      </div>
      <br />
      <label>
        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
        Subscribe to our newsletter
      </label>
      <br />
      <Field component="select" name="plan">
        <option value="free">Free</option>
        <option value="premium">Premium</option>
      </Field>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
};

const FormikApp = withFormik({
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
  handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
    setTimeout(() => {
      if(values.email === 'sivu@tbe.com'){
        setErrors({email: 'email is taken broO!'})
      }else{
        resetForm()
      }
    }, 2000)
  }
})(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<FormikApp  />, rootElement);

/* <div className="App">
      <h4>Hello Formik with HTML tags</h4>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
     */
