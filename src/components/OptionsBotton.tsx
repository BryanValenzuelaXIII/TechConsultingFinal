import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    data: any[]
}

export default function OptionsBotton({ data }: Props) {
    return (
        <FlatList
        data={data}
        renderItem={
            ({ item }) => 
            <TouchableOpacity style={styles.opciones} >
                <Text style={styles.texto} >
                    {item.label}
                </Text>
            </TouchableOpacity>
                

        }
        keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    opciones: {height: 50, backgroundColor: 'purple', borderColor: 'black' },
    texto: {fontSize: 24}
})