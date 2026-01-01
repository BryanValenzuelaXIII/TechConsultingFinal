import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
    sub: string
}

export default function SubTitle({sub}: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {sub}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {margin: 10, backgroundColor: 'white'},
    text : {fontSize: 25, color: 'darkviolet', fontWeight: '400'}
})