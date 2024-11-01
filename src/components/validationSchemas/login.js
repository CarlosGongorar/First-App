import * as yup from "yup";

export const loginValidationSchena = yup.object().shape({
    email: yup
        .string()
        .email("This is a invalid email address")
        .required("E-mail is required"),
    password: yup
        .string()
        .min(8, "Contraseña debe tener al menos 8 caracteres")
        .required("Contraseña es requerida")
})