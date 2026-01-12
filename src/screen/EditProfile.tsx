import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import FormText from "../components/FormText";
import TextInputBig from "../components/TextInputBig";
import ButtonFoward from "../components/ButtonFoward";
import { useNavigation } from "@react-navigation/native";

function EditProfile(){

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCofirm, setPasswordConfirm] = useState('')
    const [eraseFav, setErase] = useState('') //should be a bool
    const navigation = useNavigation();

    function dummyFunction(){
        Alert.alert("Successful change")
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <View style={styles.boxForm}>
                 <FormText 
                requireText="Change name"
                />
                <TextInputBig 
                    typeOfText="name"
                    placeHolder="Change username"
                    onChangeText={setName}
                />
                <FormText 
                    requireText="Change password"
                />
                <TextInputBig 
                    typeOfText="password"
                    placeHolder="New password"
                    onChangeText={setPassword}
                />
                <FormText 
                    requireText="Confirm password"
                />
                <TextInputBig 
                    typeOfText="password"
                    placeHolder="Confirm password"
                    onChangeText={setPasswordConfirm}
                />
                <FormText 
                    requireText="Erase favorite list"
                />
                 <TextInputBig 
                    typeOfText="fullStreetAddress"
                    placeHolder="Are you sure?"
                    onChangeText={setErase}
                />
            </View>
             <View style={styles.botones}>
                <ButtonFoward 
                textInside="Change preferences"
                pressAction={dummyFunction}
            />
            </View>

        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {flex: 1},
    boxForm: {margin: 20, borderWidth: 1, borderRadius: 13, padding: 13, elevation: 13, backgroundColor: 'white'},
    botones: { alignItems: 'center', marginTop: 'auto', paddingBottom: 20},
})