import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
    requireText: string
}

export default function FormText({requireText}: Props){
    return (
        <View>
            <Text style={styles.text}>
                {requireText}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {fontSize: 20, marginTop: 5, marginHorizontal: 10, fontWeight: "600", color: 'darkviolet'}
})