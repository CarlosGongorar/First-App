import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme.js"

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSize.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeight.normal
    },
    colorPrimary:{
        color: theme.colors.primary
    },
    colorSecondary:{
        color: theme.colors.secondary
    },
    bold: {
        fontWeight: theme.fontWeight.bold
    },
    subheading: {
        fontSize: theme.fontSize.subheading
    },
    textAlignCenter: {
        textAlign: "center"
    },
    flexDirection: {
        flexDirection: "row"
    },
    justifyContent: {
        justifyContent: "space-around"
    }
})

export default function StyledText ({children, color, fontSize, align, flexDirection, justifyContent, fontWeight, style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        justifyContent === "space-around" && styles.justifyContent,
        flexDirection === "row" && styles.flexDirection,
        align === "center" && styles.textAlignCenter,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontWeight === "bold" && styles.bold,
        fontSize === "subheading" && styles.subheading,
        style
    ]
    
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}