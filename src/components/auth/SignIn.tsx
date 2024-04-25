import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SighInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Example: test@gmail.com")
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Enter a valid Password")
    .required("Password is required"),
});

export const SignIn = () => {
  const [error, setError] = useState("");
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={SighInSchema}
        onSubmit={(values) =>
          signInWithEmailAndPassword(auth, values.email, values.password)
            .then((user) => {
              console.log(user);

              setError("");
            })
            .catch((error) => {
              console.error(error);
              setError("couldn't find your account");
            })
        }
      >
        {({ errors, touched }) => (
          <Form>
            <label>
              <Field
                name="email"
                type="email"
                autoComplete="off"
                placeholder="Email"
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </label>
            <label>
              <Field
                name="password"
                type="password"
                autoComplete="off"
                placeholder="Password"
              />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}
            </label>
            <button type="submit">Sign In</button>
            {error && <p>{error}</p>}
          </Form>
        )}
      </Formik>
    </>
  );
};
