import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import ButtonFoward from "../components/ButtonFoward";
import { FireBaseLogOut } from "../utils/FireBaseLogin";
import { storage } from "../utils/MmkvStorage";

export default function Settings(){

    const fakeLogin = () => {
        storage.set('user.isGuest', false);
    }

    const handleLogOut = () => {
        FireBaseLogOut();
    }
    const dummyAction = () => {
            Alert.alert("Action trigger!");
        }

    return (
        <View style = {styles.container}>
            <View style={styles.login}>
                <Text style={styles.textTitle} >
                 {"Saved (heart)"}
                </Text>
            </View>

            <View style={styles.botones}>
                <ButtonFoward 
                    textInside="Log out!"
                    pressAction={handleLogOut}
                />
                <ButtonFoward 
                    textInside="fake Sign In!"
                    pressAction={fakeLogin}
                />
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