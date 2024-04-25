import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Example: test@gmail.com")
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Enter a valid Password")
    .required("Password is required"),
});

export const SignUp = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(() => {
              if (auth.currentUser !== null) {
                updateProfile(auth.currentUser, { displayName: values.name });
              }
            })
            .catch((error) => {
              console.error("Error creating user:", error);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label>
              <Field
                name="name"
                type="text"
                autoComplete="off"
                placeholder="Name"
              />
              {errors.name && touched.name && <div>{errors.name}</div>}
            </label>
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
            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
