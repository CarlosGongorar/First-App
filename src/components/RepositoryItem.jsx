import React from "react"
import {Image, View, Text, StyleSheet} from "react-native"
import StyledText from "./StyledText.jsx"
import RepositoryStats from "./RepositoryStats.jsx"
import theme from "../theme.js"

// ParseThousands
const RepositoryItemHeader = ({img, nombre, language} ) => (
    <View style={{flexDirection: "row", alignItems: "center"}}>
        <Image style={styles.image} source={{uri: img}}></Image>
        <View>
            <StyledText color="primary" fontSize="subheading" fontWeight="bold">Nombre: {nombre}</StyledText>
            <StyledText style={styles.language}> Hola</StyledText>
        </View>
    </View>
)

const RepositoryItem = (props) => (
    <View key={props.id} style = {styles.container}>
        <RepositoryItemHeader{... props}/>
        <RepositoryStats {... props}/>
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

    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-start",
        borderRadius: 5,
        overflow: "hidden",
        marginTop: 5
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 4
    }
})

export default RepositoryItem