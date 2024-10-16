import React from "react"
import {FlatList, View, Text} from "react-native"
import repositories from "../data/repositories.js"

const RepositoryList = () => {
    return(
        <FlatList 
        data={repositories} 
        renderItem={({item: repo}) => (
            <View key={repo.id}>
                <Text>Id: {repo.id}</Text>
                <Text>Nombre: {repo.nombre}</Text>
                <Text>Email: {repo.email}</Text>
                <Text>Telefono: {repo.telefono}</Text>
            </View>
        )}
        />
    )
}

export default RepositoryList