import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
import { useState } from "react";
import sprite from "../../../images/sprite.svg";

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

type SignUpPropsType = {
  onRequestClose: () => void;
};

export const SignUp = ({ onRequestClose }: SignUpPropsType) => {
  const [showPassword, setShowPassword] = useState(false);
  const toogleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Container>
      <Title>Registration</Title>
      <TextDescription>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </TextDescription>
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
                onRequestClose();
              }
            })
            .catch((error) => {
              console.error("Error creating user:", error);
            });
        }}
      >
        {({ errors, touched }) => (
          <FormFiels>
            <Label>
              <FieldForm
                name="name"
                type="text"
                autoComplete="off"
                placeholder="Name"
              />
              {errors.name && touched.name && (
                <ErrorText>{errors.name}</ErrorText>
              )}
            </Label>
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
            <Button type="submit">Sign Up</Button>
          </FormFiels>
        )}
      </Formik>
    </Container>
  );
};
