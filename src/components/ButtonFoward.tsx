import React, { memo } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  pressAction: () => void;
  textInside: string;
};

const ButtonFoward = memo(function ButtonFoward({pressAction, textInside}: Props){

    return(
        <TouchableOpacity
        onPress={pressAction}
        style = {styles.mainButton}
        >
            <Text>
                {textInside}
            </Text>
        </TouchableOpacity>
    )
})

export default ButtonFoward;

const styles = StyleSheet.create({
    mainButton: {backgroundColor: 'cornflowerblue', height: 50, width: 150, borderRadius: 10, 
        alignItems: 'center', justifyContent: 'center', margin: 5
    }
})