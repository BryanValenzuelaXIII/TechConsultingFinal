import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import FormText from "../components/FormText";
import TextInputBig from "../components/TextInputBig";
import ButtonFoward from "../components/ButtonFoward";
import SubTitle from "../components/SubTitle";
import OptionsBotton from "../components/OptionsBotton";
import { getAllBars, getYourBar } from "../utils/GetBars";
import { storage } from "../utils/MmkvStorage";

function EditBars(){

    const [myBars, setMyBars] = useState<any[]>([]);
    //storage.getString("user.email")
    const populateBars = async() => {
        const bars = await getYourBar("email@email.com");
        setMyBars(bars);
    }

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
            {  myBars ? (
                <View style={{flex:1}}>
                    {myBars.map(bar => (
                        <Text key={bar.id}>{bar.musicType}</Text>
                    ))}
                    <Button
                    title="populate bars"
                    onPress={populateBars}
                    ></Button>
                </View>
                ): 
                (<Button
                title="populate bars"
                onPress={populateBars}
                >
                </Button>) 
            }
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