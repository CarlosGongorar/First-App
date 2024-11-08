import React, { useState, useEffect } from "react"
import {FlatList, Text} from "react-native"
import RepositoryItem from "./RepositoryItem.jsx"

const RepositoryList = () => {

    const [repositories, setRepositories] = useState(null)
    const fecthRepositories = async () => {
        const response = await globalThis.fetch("http://localhost:5000/api/repositories")
        const json = await response.json()
        setRepositories(json)
    }

    useEffect(() => {
        fecthRepositories()
    }, [])

    const repositoriesNodes = repositories
    ? repositories.edges.map(edge => edge.node) : []

    return(
        <FlatList 
        data={repositoriesNodes} 
        ItemSeparatorComponent={() =><Text></Text>}
        renderItem={({item: repo}) => (
            <RepositoryItem {... repo}/>
        )}
        />
    )
}

export default RepositoryList