import { useState } from "react";
import { Formik } from "formik";

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
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import nanniesService from "../../../services/nannies.service";
import { SighInSchema } from "../schema";

type SignInPropsType = {
  onRequestClose: () => void;
};

export const SignIn = ({ onRequestClose }: SignInPropsType) => {
  const [showPassword, setShowPassword] = useState(false);
  const toogleShowPassword = () => setShowPassword(!showPassword);

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: nanniesService.logIn,
    onSuccess: () => {
      toast.success("Welcome!");
      onRequestClose();
    },
    onError: () => {
      toast.error("Your email or password is wrong! Please try again.");
    },
  });

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
        onSubmit={(values) => mutate(values)}
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
