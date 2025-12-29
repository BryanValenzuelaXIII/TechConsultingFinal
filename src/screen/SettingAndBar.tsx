import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import ButtonFoward from "../components/ButtonFoward";
import { FireBaseLogOut } from "../utils/FireBaseLogin";
import { storage } from "../utils/MmkvStorage";

export default function SettingAndBar(){

    const dummyAction = () => {
            Alert.alert("Action trigger!");
        }

    return (
        <View style = {styles.container}>
            <View style={styles.login}>
                <Text style={styles.textTitle} >
                 {"Saved clubs/events!"}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1,},
    login: {flex: 1, backgroundColor: 'white',  alignContent: 'center'},
    botones: {justifyContent: 'center'},
    textTitle: {fontSize: 40, fontWeight: '700', margin: 10}
})