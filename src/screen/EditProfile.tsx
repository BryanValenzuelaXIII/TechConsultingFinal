import React from "react";
import { StyleSheet, View } from "react-native";
import FormText from "../components/FormText";
import TextInputBig from "../components/TextInputBig";
import ButtonFoward from "../components/ButtonFoward";

function EditProfile(){

    function dummyFunction(){
        console.log("dummy function inside editpreferences")
    }

    return(
        <View style={styles.container}>
            <View style={styles.boxForm}>
                 <FormText 
                requireText="Change name"
                />
                <TextInputBig 
                    typeOfText="name"
                    placeHolder="Name of the bar"
                    onChangeText={dummyFunction}
                />
                <FormText 
                    requireText="Change password"
                />
                <TextInputBig 
                    typeOfText="fullStreetAddress"
                    placeHolder="location"
                    onChangeText={dummyFunction}
                />
                <FormText 
                    requireText="Erase favorite list"
                />
                 <TextInputBig 
                    typeOfText="fullStreetAddress"
                    placeHolder="location"
                    onChangeText={dummyFunction}
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