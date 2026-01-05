import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import TextInputBig from "../components/TextInputBig";
import ButtonFoward from "../components/ButtonFoward";
import {storeDocumentWithId} from "../utils/FireBaseStore"
import FormText from "../components/FormText";
import { storage } from "../utils/MmkvStorage";
import { useNavigation } from "@react-navigation/native";

function AddBar() {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [musicType, setMusicType] = useState('');
    const [operationHours, setOperationHours] = useState('');
    const [cost, setCost] = useState('')

    const [age, setAge] = useState('')

    const navigation = useNavigation();

    const bar = {
        name: name,
        location: location,
        musicType: musicType,
        operationHours: operationHours,
        owner: storage.getString("user.email"),
        cost: cost,
        age: age,
        songsListed: ["Apology", "zouk", 'perro negro', 'Con calma', 'sun flowers']
    }

    function getStringArray(key: string): string[] {
        const allBars = storage.getString(key);
        return allBars ? JSON.parse(allBars) : [];
        //this is to get all owners bars
    }

    function setStringArray(key: string, allBars: string[]) {
       storage.set(key, JSON.stringify(allBars));
       //this is to update owners bars
     }

    function submit(){
        storeDocumentWithId('Bars', name, bar);


        const existingBars = getStringArray("user.ownerBars");
        const updatedBars = [...existingBars, name];

        setStringArray("user.ownerBars", updatedBars);

        Alert.alert("Bar added!");
        navigation.goBack();
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
            <FormText 
                requireText="Cover cost?"
             />
              <TextInputBig 
                typeOfText="name"
                placeHolder="$"
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