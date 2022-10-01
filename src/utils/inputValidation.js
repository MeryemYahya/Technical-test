import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email required"),
  password: Yup.string()
    .required("Password required")
    .min(8, "Password must be longer than 8 characters")
    .max(12, "Password must be less than 12 characters"),
});

export default validationSchema