import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import TextInputBig from "../components/TextInputBig";
import ButtonFoward from '../components/ButtonFoward';
import { FireBaseLog } from "../utils/FireBaseLogin";

export default function LoginScreen(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dummyAction = () => {
            Alert.alert("Action trigger!");
        }

    const handleSignUp = async () => {
        await FireBaseLog({ email, password });
    };

    return (
        <View style = {styles.container}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1,},
    login: {flex: 1, backgroundColor: 'white',  justifyContent: 'flex-end'},
    form: {flex: 3, backgroundColor: 'lightblue', borderTopLeftRadius: 40,
            justifyContent: 'center', 
    },
    botonPlace: {alignItems: 'center', marginTop: 50},
    textForBox: {fontSize: 25, fontWeight: '700', margin: 10},
    textTitle: {fontSize: 50, fontWeight: '700', margin: 10}
})