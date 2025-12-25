import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import ButtonFoward from '../components/ButtonFoward';
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen(){

    const navigation = useNavigation();

        const goToLogin = () => {
            navigation.navigate("LoginScreen");
        };

        const goToSignup = () => {
            navigation.navigate("SignUpUser");
        };

    const dummyAction = () => {
        Alert.alert("Action trigger!");
    }

    return (
        <View style = {styles.container}>
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
                    <Button 
                    title="Continue as a guest"
                    onPress={dummyAction}
                />
                </View>
                
            </View>
        </View>
    )
}

const amazingText = 'Welcome to \nAmazing\napp!';

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'white'},
    welcoming: {flex: 3, justifyContent: 'flex-end'},
    options: {flex: 2,
            backgroundColor: 'lightblue',
            alignItems: 'center',
            borderTopLeftRadius: 40,},
    textTitle: {fontSize: 85, fontWeight: '700', marginLeft: 10},
    login: {marginTop: 40},
    signIn: {marginTop: 15},
    guest: {marginTop: 80}

})