import React, { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import TextInputBig from "../components/TextInputBig";
import ButtonFoward from "../components/ButtonFoward";
import { FireBaseSignIn } from "../utils/FireBaseLogin";
import Dropdown from "../components/DropDownOptions";
import FilterModal from "../components/FilterModal";
import FillterAge from "../components/FillterAge";

const backImage = require('../../assets/WelcomeImage.jpg')

export default function SignUpUser(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [activeModal, setActiveModal] = useState<"age" | null>(null);

    const handleSignUp = async () => {
        await FireBaseSignIn({ email, password });
    };

    const dummyAction = () => {
            Alert.alert("Action trigger!");
        }

    return (
        <View style = {styles.container}>
            <ImageBackground source={backImage}  style={styles.image}>
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
                {"Age"}
            </Text>
            <FillterAge
                        
                        value={age}
                        onPress={() => setActiveModal("age")}
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

            <FilterModal
                    visible={activeModal == "age"}
                    title="Select your age"
                    options={["<18", "18-21", "21+"]}
                    onSelect={setAge}
                    onClose={() => setActiveModal(null)}
                  />
            

            </View>
            </ImageBackground>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1,},
    login: {flex: 1,  justifyContent: 'flex-end'},
    image: {flex: 1, justifyContent: 'center',},
    form: {flex: 3, backgroundColor: 'rgba(255, 255, 255, 0.7)', borderTopLeftRadius: 40,
            justifyContent: 'center', 
    },
    botonPlace: {alignItems: 'center'},
    textForBox: {fontSize: 20, fontWeight: '700', margin: 10, },
    textTitle: {fontSize: 40, fontWeight: '700', margin: 10, color: 'white'}
})