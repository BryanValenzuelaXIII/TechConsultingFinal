import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import TextInputBig from "../components/TextInputBig";
import ButtonFoward from "../components/ButtonFoward";
import {storeDocumentWithId} from "../utils/FireBaseStore"
import FormText from "../components/FormText";

function AddBar() {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [musicType, setMusicType] = useState('');
    const [operationHours, setOperationHours] = useState('');
    const [age, setAge] = useState('')

    const bar = {
        name: name,
        location: location,
        musicType: musicType,
        operationHours: operationHours,
        songsListed: ["Apology", "zouk", 'perro negro', 'Con calma', 'sun flowers']
    }

    function submit(){
        storeDocumentWithId('Bars', name, bar);
        
    }

    return(
        <View style={styles.container}>
            <View style= {styles.boxForm}>
             <FormText 
                requireText="Name of the bar"
             />
            <TextInputBig 
                typeOfText="name"
                placeHolder="Name of the bar"
                onChangeText={setName}
            />
            <FormText 
                requireText="Location"
             />
            <TextInputBig 
                typeOfText="fullStreetAddress"
                placeHolder="location"
                onChangeText={setLocation}
            />
            <FormText 
                requireText="Music type"
             />
            <TextInputBig 
                typeOfText="name"
                placeHolder="music of the bar"
                onChangeText={setMusicType}
            />
            <FormText 
                requireText="Operation hours"
             />
            <TextInputBig 
                typeOfText="name"
                placeHolder="Open to close hours"
                onChangeText={setOperationHours}
            />
            <FormText 
                requireText="Age restriction"
             />
              <TextInputBig 
                typeOfText="name"
                placeHolder="21+"
                onChangeText={setAge}
            />
            </View>
            <View style={styles.botones}>
                <ButtonFoward 
                textInside="Submit Bar!"
                pressAction={submit}
            />
            </View>
            
        </View>
    )
}

export default AddBar;

const styles = StyleSheet.create({
    container: {flex: 1},
    boxForm: {margin: 20, borderWidth: 1, borderRadius: 13, padding: 13, elevation: 13, backgroundColor: 'white'},
    botones: { alignItems: 'center', marginTop: 'auto', paddingBottom: 20},
})