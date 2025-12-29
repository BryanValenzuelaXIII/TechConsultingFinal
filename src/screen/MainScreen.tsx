import React, { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import Dropdown from "../components/DropDownOptions";

const backImage = require('../../assets/searchClubB.jpg')

export default function WelcomeScreen(){

  const [music, setMusic] = useState<string | null>(null);
  const [theme, setTheme] = useState<string | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);

    const dummyAction = () => {
            Alert.alert("Action trigger!");
        }

    return (
        <View style = {styles.container}>
            <ImageBackground source={backImage}  style={styles.image}>
                <View style={styles.login}>
                <Dropdown
        label="What music type are you looking for?"
        options={["Pop", "Rock", "Hip Hop", "Jazz", "Electronic"]}
        selectedValue={music}
        onSelect={setMusic}
      />

      <Dropdown
        label="What theme are you looking for?"
        options={["Chill", "Party", "Karaoke ", "Live Band"]}
        selectedValue={theme}
        onSelect={setTheme}
      />

      <Dropdown
        label="Max distance from you?"
        options={["5 miles", "10 miles", "20 miles", "50 miles"]}
        selectedValue={distance}
        onSelect={setDistance}
      />

      <Dropdown
        label="At what time do you plan to go?"
        options={["Now", "Tonight", "Tomorrow", "This weekend"]}
        selectedValue={time}
        onSelect={setTime}
      />
            </View>

            </ImageBackground>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1,},
    image: {flex: 1, justifyContent: 'center',},
    login: {flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.7)', justifyContent: 'space-around', borderTopLeftRadius: 50, marginTop: 13 },
    

    textTitle: {fontSize: 25, fontWeight: '700', margin: 10}
})