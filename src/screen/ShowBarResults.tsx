import React from "react";
import { Text, View } from "react-native";
import BarList from "../components/BarList";

function ShowBarResults(){
    return(
        <View style= {{backgroundColor: 'gray'}}>
            <BarList />
        </View>
    )
}
export default ShowBarResults