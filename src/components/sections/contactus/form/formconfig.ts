import * as Yup from "yup";

export const initialValues = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});