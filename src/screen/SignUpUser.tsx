import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import TextInputBig from "../components/TextInputBig";
import ButtonFoward from "../components/ButtonFoward";
import { FireBaseSignIn } from "../utils/FireBaseLogin";

export default function SignUpUser(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        await FireBaseSignIn({ email, password });
    };

    const dummyAction = () => {
            Alert.alert("Action trigger!");
        }

    return (
        <View style = {styles.container}>
            <View style={styles.login}>
                <Text style={styles.textTitle} >
                 {"Sign up into your new account!"}
                </Text>
            </View>
            
            <View style={styles.form}>

            <Text style= {styles.textForBox}>
                {"Name"}
            </Text>
            <TextInputBig 
                typeOfText='name'
                placeHolder='Please enter your name'
            />

            <Text style= {styles.textForBox}>
                {"Over 21?"}
            </Text>

            <TextInputBig 
                typeOfText='birthdate'
                placeHolder='Please enter your age'
                keyboardType="number-pad"
            />
            

            <Text style= {styles.textForBox}>
                {"Email address"}
            </Text>
            <TextInputBig 
                typeOfText='emailAddress'
                placeHolder='Please enter email'
                autoCapitalize="none"
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
            <TextInputBig
                typeOfText='password'
                placeHolder='Please re-enter password'
                secureTextEntry= {true}
            />
            <View style= {styles.botonPlace}>
                <ButtonFoward 
                textInside="Sign Up!"
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
    botonPlace: {alignItems: 'center'},
    textForBox: {fontSize: 20, fontWeight: '700', margin: 10},
    textTitle: {fontSize: 40, fontWeight: '700', margin: 10}
})