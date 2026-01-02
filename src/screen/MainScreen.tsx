import React, { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import Dropdown from "../components/DropDownOptions";
import FilterModal from "../components/FilterModal";
import FilterRow from "../components/FileterRow";
import ButtonFoward from "../components/ButtonFoward";

const backImage = require('../../assets/club_placeholder.jpg')

export default function WelcomeScreen() {
  const [activeModal, setActiveModal] = useState<
    "music" | "theme" | "distance" | "time" | null
  >(null);

  const [music, setMusic] = useState<string | null>(null);
  const [theme, setTheme] = useState<string | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);

  function dummyFunction(){
        console.log("dummy function inside editpreferences")
    }

  return (
    <View style={styles.container}>
      <ImageBackground source={backImage} style={styles.image}>
        <View style={styles.panel}>
          <FilterRow
            label="Music type"
            value={music}
            onPress={() => setActiveModal("music")}
          />

          <FilterRow
            label="Theme"
            value={theme}
            onPress={() => setActiveModal("theme")}
          />

          <FilterRow
            label="Max distance"
            value={distance}
            onPress={() => setActiveModal("distance")}
          />

          <FilterRow
            label="When are you going?"
            value={time}
            onPress={() => setActiveModal("time")}
          />

          <View style={styles.botones}>
                <ButtonFoward 
                textInside="Change preferences"
                pressAction={dummyFunction}
            />
            </View>
        </View>
      </ImageBackground>

      <FilterModal
        visible={activeModal == "music"}
        title="Select music type"
        options={["Pop", "Rock", "Hip Hop", "Jazz", "Electronic"]}
        onSelect={setMusic}
        onClose={() => setActiveModal(null)}
      />

      <FilterModal
        visible={activeModal == "theme"}
        title="Select theme"
        options={["Chill", "Party", "Karaoke", "Live Band"]}
        onSelect={setTheme}
        onClose={() => setActiveModal(null)}
      />

      <FilterModal
        visible={activeModal == "distance"}
        title="Max distance"
        options={["5 miles", "10 miles", "20 miles", "50 miles"]}
        onSelect={setDistance}
        onClose={() => setActiveModal(null)}
      />

      <FilterModal
        visible={activeModal == "time"}
        title="When are you going?"
        options={["Now", "Tonight", "Tomorrow", "This weekend"]}
        onSelect={setTime}
        onClose={() => setActiveModal(null)}
      />

      

    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, },
  image: { flex: 1, justifyContent: 'center', },
  login: { flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.6)', justifyContent: 'space-around', borderTopLeftRadius: 50, marginTop: 13 },


  textTitle: { fontSize: 25, fontWeight: '700', margin: 10 },
  panel: {
  flex: 1,
  backgroundColor: "rgba(255,255,255,0.85)",
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
  padding: 20,
  marginTop: 100
},
 botones: { alignItems: 'center', marginTop: 'auto', paddingBottom: 20},
})