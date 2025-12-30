import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ButtonFoward from "./ButtonFoward";

export default function ProfileButton(){

    const navigation = useNavigation();

    const goToSettings = () => {
            navigation.navigate("Settings");
        };

    return(
        // <TouchableOpacity
        // onPress={goToSettings}>
        //     <Text style={styles.textInside}>
        //         {'Profile'}
        //     </Text>
        // </TouchableOpacity>
        <ButtonFoward 
            textInside="Profile"
            pressAction={goToSettings}
        />
    )
}

const styles = StyleSheet.create({
    textInside: {
        fontSize: 13,
        color: 'darkviolet', 
        fontWeight: '600'
    }
})