import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen(){

    const dummyAction = () => {
            Alert.alert("Action trigger!");
        }

    return (
        <View style = {styles.container}>
            <View style={styles.login}>
                <Text style={styles.textTitle} >
                 {"Look for a club/bar!"}
                </Text>
                <Text style={styles.textTitle} >
                 {"What music type are you looking for?"}
                </Text>
                <Text style={styles.textTitle} >
                 {"What theme are you looking for?"}
                </Text>
                <Text style={styles.textTitle} >
                 {"Max distance from you?"}
                </Text>
                <Text style={styles.textTitle} >
                 {"At what time do you plan to go?"}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1,},
    login: {flex: 1, backgroundColor: 'white',  justifyContent: 'space-around'},
    

    textTitle: {fontSize: 25, fontWeight: '700', margin: 10}
})