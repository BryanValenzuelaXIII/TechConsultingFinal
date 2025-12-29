import React from "react";
import { Alert, Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonFoward from '../components/ButtonFoward';
import { useNavigation } from "@react-navigation/native";
import { storage } from "../utils/MmkvStorage";

const backImage = require('../../assets/WelcomeImage.jpg') //pass in props

export default function WelcomeScreen({ setIsGuest }){

    const navigation = useNavigation();

        const goToLogin = () => {
            navigation.navigate("LoginScreen");
        };

        const goToSignup = () => {
            navigation.navigate("SignUpUser");
        };

        const goToMain = () => {
            storage.set('user.isGuest', true);
            console.log(storage.getBoolean('user.isGuest'));
            setIsGuest(true);
        };

    const dummyAction = () => {
        Alert.alert("Action trigger!");
    }

    return (
        <View style = {styles.container}>
            <ImageBackground source={backImage}  style={styles.image}>
                <View style={styles.welcoming}>
                <Text style={styles.textTitle}>
                    {amazingText}
                </Text>
            </View>

            <View style={styles.options}>

                <View style={styles.login}>
                    <ButtonFoward 
                    textInside="Login!"
                    pressAction={goToLogin}
                    />
                </View>
                
                <View style={styles.signIn}>
                    <ButtonFoward 
                        textInside="Sign up!"
                        pressAction={goToSignup}
                        />
                </View>
                

                <View style={styles.guest}>
                   {
                //     <Button 
                //     title="Continue as a guest"
                //     onPress={goToMain}
                // />
                   } 
                   <TouchableOpacity
                        onPress={goToMain}
                        
                        >
                            <Text style={styles.texto}>
                                {"Continue as a guest"}
                            </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            </ImageBackground>
        </View>
    )
}

const amazingText = 'Let\'s find a club that fits you!';

const styles = StyleSheet.create({
    container: {flex: 1,},
    
    image: {flex: 1, justifyContent: 'center',},
    welcoming: {flex: 3, justifyContent: 'flex-end'},
    options: {flex: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            alignItems: 'center',
            borderTopLeftRadius: 40,},
    textTitle: {fontSize: 85, fontWeight: '700', marginLeft: 10, color: 'azure'},
    login: {marginTop: 40,},
    signIn: {marginTop: 15},
    guest: {marginTop: 60, marginBottom: 10, },
    texto: {color: 'darkviolet', fontWeight: '600'}

})