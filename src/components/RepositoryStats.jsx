import React from "react"
import { View} from "react-native"
import StyledText from "./StyledText"

const RepositoryStats = props => {
    return (
    <View flexDirection="row" justifyContent="space-around">
        <View>
            <StyledText align="center" fontWeight="bold">Email: </StyledText>
            <StyledText align="center">{props.email}</StyledText>
        </View>
        <View>
            <StyledText align="center" fontWeight="bold">Telefono: </StyledText>
            <StyledText align="center">{props.telefono}</StyledText>    
        </View>     
        
    </View>
    )
}

export default RepositoryStats