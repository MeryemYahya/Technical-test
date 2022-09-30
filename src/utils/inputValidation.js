import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("email invalide")
    .required("L'email est obligatoire"),
  password: Yup.string()
    .required("Mot de passe est obligatoire")
    .min(8, "Mot de passe doit être plus grand que 8 caractères")
    .max(12, "Mot de passe doit être plus petit que 12 caractères"),
});

export default validationSchema