import React from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import ButtonFoward from "../components/ButtonFoward";
import { FireBaseLogOut } from "../utils/FireBaseLogin";
import { storage } from "../utils/MmkvStorage";

const backImage = require('../../assets/savedBackground.png');

export default function Saved(){

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
            <ImageBackground source={backImage}  style={styles.image}>
                <View style={styles.login}>
                    <Text style={styles.textTitle} >
                    {"Saved clubs/events!"}
                    </Text>
                    <Text style={styles.textSubTitle}>
                        {"Clubs                              ^"}
                    </Text> 
                    <Text style={styles.textSubTitle}>
                        {"Events                            ^"}
                    </Text>
                </View>
            </ImageBackground>
            

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
    login: {flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.7)',  alignContent: 'center'},
    botones: {justifyContent: 'center'},
    image: {flex: 1, justifyContent: 'center',},
    textSubTitle: {fontSize: 30, fontWeight: '700', margin: 10},
    textTitle: {fontSize: 40, fontWeight: '700', margin: 10}
})