import React, { useState } from "react";
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const backImage = require('../../assets/savedBackground.png');

export default function Saved(){

    const [showBars, setShowBars] = useState(false);

    const showHide = () =>{
        setShowBars(!showBars);
    }

    return (
        <View style = {styles.container}>
            <ImageBackground source={backImage}  style={styles.image}>
                <View style={styles.login}>
                    <Text style={styles.textTitle} >
                    {"Saved clubs/events!"}
                    </Text>
                    <TouchableOpacity style={{flexDirection: 'row' , height: 70, }}
                        onPress={showHide}>
                        <Text style = {{ fontSize: 30, fontWeight: '700', margin: 10}}>
                            {"Clubs"}
                        </Text>
                        <Image 
                            style={{ marginRight: 10, marginLeft: 'auto'}}
                            source={require('../../assets/icons8-dropdown-48.png')}
                        />
                    </TouchableOpacity>
                    {
                        showBars ? (
                             <Text>
                                Hello new world
                            </Text>
                        ) : <></> 
                           
                    }
                    
                </View>
            </ImageBackground>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1,},
    login: {flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.7)',  alignContent: 'center'},
    botones: {justifyContent: 'center'},
    image: {flex: 1, justifyContent: 'center',},
    textSubTitle: {fontSize: 30, fontWeight: '700', margin: 10},
    textTitle: {fontSize: 40, fontWeight: '700', margin: 10}
})