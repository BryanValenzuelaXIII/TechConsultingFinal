import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import FormText from "../components/FormText";
import TextInputBig from "../components/TextInputBig";
import ButtonFoward from "../components/ButtonFoward";

function EditPreferences(){

    const [music, setMusic] = useState('')
    const [distance, setDistance] = useState('')
    const [cost, setCost] = useState('')
    const [age, setAge] = useState('')

    function dummyFunction(){
        console.log("dummy function inside editpreferences")
    }

    return(
        <View style={styles.container}>
            <View style={styles.boxForm}>
                 <FormText 
                requireText="What music you'll like to hear?"
                />
                <TextInputBig 
                    typeOfText="name"
                    placeHolder="Name of the bar"
                    onChangeText={setMusic}
                />
                <FormText 
                    requireText="Distance?"
                />
                <TextInputBig 
                    typeOfText="fullStreetAddress"
                    placeHolder="location"
                    onChangeText={setDistance}
                />
                <FormText 
                    requireText="Free cover?"
                />
                 <TextInputBig 
                    typeOfText="fullStreetAddress"
                    placeHolder="location"
                    onChangeText={setCost}
                />
                <FormText 
                    requireText="Age?"
                />
                 <TextInputBig 
                    typeOfText="fullStreetAddress"
                    placeHolder="location"
                    onChangeText={setAge}
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

export default EditPreferences

const styles = StyleSheet.create({
    container: {flex: 1},
    boxForm: {margin: 20, borderWidth: 1, borderRadius: 13, padding: 13, elevation: 13, backgroundColor: 'white'},
    botones: { alignItems: 'center', marginTop: 'auto', paddingBottom: 20},
})