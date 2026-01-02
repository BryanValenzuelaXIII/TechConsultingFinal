import React from "react";
import { StyleSheet, View } from "react-native";
import FormText from "../components/FormText";
import TextInputBig from "../components/TextInputBig";
import ButtonFoward from "../components/ButtonFoward";
import SubTitle from "../components/SubTitle";
import OptionsBotton from "../components/OptionsBotton";

function EditBars(){

     const BarsDummy = [
        {
            id: 0,
            label: "Bar 1",
             
        }, { 
            id: 1,
            label: 'Bar 2',
            execute: () => {
                dummyFunction();
            }
        },]

    function dummyFunction(){
        console.log("dummy function inside editpreferences")
    }

    return(
        <View style={styles.container}>
            
            <View style={styles.opciones}>
                <SubTitle 
                    sub="SELECT YOUR BAR"
                />
                <OptionsBotton 
                    data={BarsDummy}
                />
            </View>

        </View>
    )
}

export default EditBars

const styles = StyleSheet.create({
    container: { flex: 1, },
    login: { backgroundColor: 'white', alignContent: 'center' },
    opciones: {flex: 1, justifyContent: 'flex-start', backgroundColor: 'white'},
    botones: { alignItems: 'center', marginTop: 'auto', paddingBottom: 20},
    textTitle: { fontSize: 40, fontWeight: '700', margin: 10 }
})