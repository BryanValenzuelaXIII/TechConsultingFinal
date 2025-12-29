import React, { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import TextInputBig from "../components/TextInputBig";
import ButtonFoward from '../components/ButtonFoward';
import { FireBaseLog } from "../utils/FireBaseLogin";

const backImage = require('../../assets/WelcomeImage.jpg')

export default function LoginScreen(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        await FireBaseLog({ email, password });
    };

    return (
        <View style = {styles.container}>
            <ImageBackground source={backImage}  style={styles.image}>
                <View style={styles.login}>
                <Text style={styles.textTitle} >
                 {"Login into your\naccount!"}
                </Text>
            </View>
            
            <View style={styles.form}>
            <Text style= {styles.textForBox}>
                {"Email"}
            </Text>
            <TextInputBig 
                typeOfText='emailAddress'
                placeHolder='Please enter email'
                onChangeText={setEmail}
            />
            <Text style= {styles.textForBox}>
                {"Password"}
            </Text>
            <TextInputBig
                typeOfText='password'
                placeHolder='Please enter password'
                secureTextEntry= {true} 
                onChangeText={setPassword}
            />
            <View style= {styles.botonPlace}>
                <ButtonFoward 
                textInside="Login!"
                pressAction={handleSignUp}
            />
            </View>
            

            </View>
            </ImageBackground>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1,},
    image: {flex: 1, justifyContent: 'center',},
    login: {flex: 1,  justifyContent: 'flex-end'},
    form: {flex: 3, backgroundColor: 'rgba(255, 255, 255, 0.7)', borderTopLeftRadius: 40,
            justifyContent: 'center', 
    },
    botonPlace: {alignItems: 'center', marginTop: 50},
    textForBox: {fontSize: 25, fontWeight: '700', margin: 10},
    textTitle: {fontSize: 50, fontWeight: '700', margin: 10, color: 'white'}
})