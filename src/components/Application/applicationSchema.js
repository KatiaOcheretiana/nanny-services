import * as Yup from "yup";

export const applicationSchema = Yup.object().shape({
  address: Yup.string().required("Address is required"),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, "Invalid number format (e.g., +380980000000)")
    .required("Phone number is required"),
  age: Yup.number().required("Age is required"),
  time: Yup.string()
    .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format")
    .required("Time is required"),
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Example: test@gmail.com")
    .email("Invalid email")
    .required("Email is required"),
  name: Yup.string().required("Parent's name is required"),
  comment: Yup.string(),
});
