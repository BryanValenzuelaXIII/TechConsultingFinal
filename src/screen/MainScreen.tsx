import React, { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import FilterModal from "../components/FilterModal";
import FilterRow from "../components/FileterRow";
import ButtonFoward from "../components/ButtonFoward";
import { useNavigation } from "@react-navigation/native";

const backImage = require('../../assets/club_placeholder.jpg')

export default function WelcomeScreen() {
  const [activeModal, setActiveModal] = useState<
    "music" | "age" | "distance" | "cost" | "hours" | null
  >(null);

  const [music, setMusic] = useState<string | null>(null);
  const [age, setAge] = useState<string | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [cost, setCost] = useState<string | null>(null);
  const [hours, setHours] = useState<string | null>(null);
  const navigation = useNavigation();

  function dummyFunction(){
        console.log("dummy function inside editpreferences")
      setMusic(null);
      setAge(null);
      setDistance(null);
      setCost(null);
      setHours(null);
    }

  function searchBar (){
    navigation.navigate('ShowBarResults')
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={backImage} style={styles.image}>
        <View style={styles.panel}>
          <FilterRow
            titulo="Music type"
            value={music}
            onPress={() => setActiveModal("music")}
          />

          <FilterRow
            titulo="Max distance"
            value={distance}
            onPress={() => setActiveModal("distance")}
          />

          <FilterRow
            titulo="Age"
            value={age}
            onPress={() => setActiveModal("age")}
          />

          <FilterRow
            titulo="Cost"
            value={cost}
            onPress={() => setActiveModal("cost")}
          />

          <FilterRow
            titulo="Hours"
            value={hours}
            onPress={() => setActiveModal("hours")}
          />

          <View style={styles.botones}>
                <ButtonFoward 
                textInside="Look for a bar!"
                pressAction={searchBar}
            />
            </View>

          <View style={styles.erase}>
            <TouchableOpacity
              onPress={dummyFunction}
            >
                <Text style={styles.texto}>
                  {"Reset fields" /*create function + create in utils filter results */}
                </Text>
            </TouchableOpacity>
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
        visible={activeModal == "distance"}
        title="Max distance"
        options={["5 miles", "10 miles", "15 miles", "30 miles"]}
        onSelect={setDistance}
        onClose={() => setActiveModal(null)}
      />

      <FilterModal
        visible={activeModal == "age"}
        title="Age"
        options={["All ages", "18+", "21+"]}
        onSelect={setAge}
        onClose={() => setActiveModal(null)}
      />

      <FilterModal
        visible={activeModal == "cost"}
        title="cost"
        options={["Free", "Any"]}
        onSelect={setCost}
        onClose={() => setActiveModal(null)}
      />

      <FilterModal
        visible={activeModal == "hours"}
        title="Hours"
        options={["Now", "Opens at 8pm", "Closes at 2am"]}
        onSelect={setHours}
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
 botones: { alignItems: 'center', marginTop: 'auto', paddingBottom: 5},


erase: {alignItems: 'center'},
texto: {color: 'darkviolet', fontWeight: '600'}

})