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
import { useState } from "react";
import sprite from "../../../images/sprite.svg";
import { useMutation } from "@tanstack/react-query";
import nanniesService from "../../../services/nannies.service";
import toast from "react-hot-toast";
import { SignupSchema } from "../schema";

export type UserType = {
  name?: string;
  email: string;
  password: string;
};

type SignUpPropsType = {
  onRequestClose: () => void;
};

export const SignUp = ({ onRequestClose }: SignUpPropsType) => {
  const [showPassword, setShowPassword] = useState(false);
  const toogleShowPassword = () => setShowPassword(!showPassword);

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: nanniesService.register,
    onSuccess: () => {
      onRequestClose();
      toast.success("Successfully registered! Welcome!");
    },
  });

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
        onSubmit={(values) => mutate(values)}
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
