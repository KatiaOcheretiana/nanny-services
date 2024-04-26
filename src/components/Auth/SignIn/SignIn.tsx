import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../firebase";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Container,
  ErrorText,
  FieldForm,
  FormFiels,
  IconEye,
  Label,
  TextDescription,
  Title,
} from "../Auth.styled";
import sprite from "../../../images/sprite.svg";

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
  // const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const toogleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Container style={{ height: "489px" }}>
      <Title>Log In</Title>
      <TextDescription>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </TextDescription>
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

              // setError("");
            })
            .catch((error) => {
              console.error(error);
              // setError("couldn't find your account");
            })
        }
      >
        {({ errors, touched }) => (
          <FormFiels>
            <Label>
              <FieldForm
                name="email"
                type="email"
                autoComplete="off"
                placeholder="Email"
              />
              {errors.email && touched.email && (
                <ErrorText>{errors.email}</ErrorText>
              )}
            </Label>
            <Label>
              <FieldForm
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                placeholder="Password"
              />

              <IconEye width="20px" height="20px" onClick={toogleShowPassword}>
                <use
                  href={
                    showPassword
                      ? `${sprite}#icon-show-eye`
                      : `${sprite}#icon-not-show-eye`
                  }
                ></use>
              </IconEye>

              {errors.password && touched.password && (
                <ErrorText>{errors.password}</ErrorText>
              )}
            </Label>
            <Button type="submit">Log In</Button>
          </FormFiels>
        )}
      </Formik>
    </Container>
  );
};
