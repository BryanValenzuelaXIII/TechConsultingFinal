import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import TextInputBig from "../components/TextInputBig";
import ButtonFoward from "../components/ButtonFoward";
import {storeDocumentWithId} from "../utils/FireBaseStore"

function AddBar() {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [musicType, setMusicType] = useState('');
    const [theme, setTheme] = useState('');
    const [operationHours, setOperationHours] = useState('');

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
        <View>
            <Text>
                Name of the Bar
            </Text>
            <TextInputBig 
                typeOfText="name"
                placeHolder="Name of the bar"
                onChangeText={setName}
            />
            <Text>
                location
            </Text>
            <TextInputBig 
                typeOfText="fullStreetAddress"
                placeHolder="location"
                onChangeText={setLocation}
            />
            <Text>
                Music type
            </Text>
            <TextInputBig 
                typeOfText="name"
                placeHolder="music of the bar"
                onChangeText={setMusicType}
            />
            <Text>
                Operation hours
            </Text>
            <TextInputBig 
                typeOfText="name"
                placeHolder="Open to close hours"
                onChangeText={setOperationHours}
            />
            <ButtonFoward 
                textInside="Submit Bar!"
                pressAction={submit}
            />
        </View>
    )
}

export default AddBar;