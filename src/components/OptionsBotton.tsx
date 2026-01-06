import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
                    <Image 
                        source={item.icon}
                    />
                    <View style={styles.allText}>
                        <Text style={styles.texto} >
                        {item.label}
                        </Text>
                        <Text>
                            {item.description}
                        </Text>
                    </View>
                    
                </TouchableOpacity>
                    

            }
            keyExtractor={(item) => item.id}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    opciones: {height: 70, backgroundColor: 'white', borderColor: 'white', borderWidth: 1, borderBottomColor: 'gray',
        marginLeft: 10, flex: 1, flexDirection: 'row'},
    allText: {marginLeft: 10},
    texto: {fontSize: 22, color: 'black', fontWeight: 'bold'}
})