import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    TextInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#999",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
    },
    error :{
        borderColor: "red"
    }
})

const StyledTextInput = ({ style = {}, error, ...props}) =>{
    const inputStyle = [
        styles.TextInput,
        error && styles.error,  // Add error style if error prop is truthy
        style 
    ]

    return <TextInput style={inputStyle} {...props}/>
}

export default StyledTextInput;