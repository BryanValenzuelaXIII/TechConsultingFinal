import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    data: any[]
}

export default function OptionsBotton({ data }: Props) {
    return (
        <View>
            <FlatList
            data={data}
            renderItem={
                ({ item }) => 
                <TouchableOpacity style={styles.opciones} 
                    onPress={item.execute}>
                    <Text style={styles.texto} >
                        {item.label}
                    </Text>
                </TouchableOpacity>
                    

            }
            keyExtractor={(item) => item.id}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    opciones: {height: 50, backgroundColor: 'white', borderColor: 'white', borderWidth: 1, borderBottomColor: 'gray',
        marginLeft: 10
     },
    texto: {fontSize: 24, color: 'gray'}
})