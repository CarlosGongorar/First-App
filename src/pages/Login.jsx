import React from 'react';
import { Formik, useField } from 'formik';
import { StyleSheet, View, Button} from 'react-native';
import StyledTextInput from '../components/StyledTextInput';
import StyledText from "../components/StyledText"
import { loginValidationSchena } from '../components/validationSchemas/login';

const initialValues = {
    email: "",
    password: ""
}

const styles = StyleSheet.create({
    error: {
        color: "red",
        marginBottom: 20,
    },
    form: {
        margin: 12
    }
})

const FormikInputValue = ({ name, ...props}) =>{
    const [field, meta, helpers] = useField(name)
    return (
        <>
        <StyledTextInput error={meta.error} value = {field.value} onChangeText={value => helpers.setValue(value)} {...props}/>
            {meta.error && <StyledText style={styles.error}>
                {meta.error}
            </StyledText>}
        </>
    )
}

/* Manual Validation
const validate = values => {
    const errors ={}

    if (!values.email) {
        errors.email = "E-mail is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,4}$/i.
    test(values.email)) {
        errors.email = "Invalid email address"
    }
    console.log(errors)
    
    return errors
}
*/

export default function LogInPage() {
    return <Formik validationSchema={loginValidationSchena} initialValues={initialValues} onSubmit={values => console.log(values)}>
        {({handleSubmit}) => {
            return <View style={styles.form}>
                <FormikInputValue name="email" placeholder='E-mail' />
                <FormikInputValue name="password" placeholder='Password' secureTextEntry/>
                <Button onPress={handleSubmit} title='Log In'/>
            </View>
        }}
    </Formik>
}