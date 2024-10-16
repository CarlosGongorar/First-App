import React from "react"
import {View, Text, StyleSheet} from "react-native"
import StyledText from "./StyledText.jsx"

const RepositoryItem = (props) => (
    <View key={props.id} style = {styles.container}>
        <StyledText color="primary" fontSize="subheading" fontWeight="bold">Nombre: {props.nombre}</StyledText>
        <StyledText>Email: {props.email}</StyledText>
        <StyledText>Telefono: {props.telefono}</StyledText>
    </View>
)

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong: {
        color: "#c0392b",
        fontWeight: "bold",
        marginBottom: 5

    }
})

export default RepositoryItem