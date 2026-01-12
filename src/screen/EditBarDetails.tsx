import React, { useState } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import TextInputBig from "../components/TextInputBig";
import ButtonFoward from "../components/ButtonFoward";
import FormText from "../components/FormText";
import { storeDocumentWithId } from "../utils/FireBaseStore";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function EditBarDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { bar } = route.params;

  const [name] = useState(bar.name); // name is not editable
  const [musicType, setMusicType] = useState(bar.musicType ?? "");
  const [operationHours, setOperationHours] = useState(bar.operationHours ?? "");
  const [age, setAge] = useState(bar.age ?? "");
  const [description, setDescription] = useState(bar.description ?? "");
  const [cost, setCost] = useState(bar.cost ?? "");

  const handleSave = async () => {
    const updatedBar = {
      ...bar,
      musicType,
      operationHours,
      age,
      description,
      cost,
    };

    try {
      await storeDocumentWithId("Bars", bar.id ?? name, updatedBar);
      Alert.alert("Success", "Bar updated!");
      navigation.goBack();
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Could not update bar");
    }
  };

  return (
    <View style={styles.boxForm}>
      <FormText requireText="Music Type" />
      <TextInputBig
        placeHolder="Enter music type"
        value={musicType}
        onChangeText={setMusicType}
      />

      <FormText requireText="Operation Hours" />
      <TextInputBig
        placeHolder="Enter hours"
        value={operationHours}
        onChangeText={setOperationHours}
      />

      <FormText requireText="Age Restriction" />
      <TextInputBig
        placeHolder="Enter age restriction"
        value={age}
        onChangeText={setAge}
      />

      <FormText requireText="Description" />
      <TextInputBig
        placeHolder="Enter description"
        value={description}
        onChangeText={setDescription}
      />

      <FormText requireText="Cost" />
      <TextInputBig
        placeHolder="Enter cost"
        value={cost}
        onChangeText={setCost}
      />

      <View style={styles.botones}>
        <ButtonFoward textInside="Save Changes" pressAction={handleSave} />
      </View>
    </View>



  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  boxForm: { margin: 10, borderWidth: 1, borderRadius: 13, padding: 13, elevation: 13, backgroundColor: 'white', marginHorizontal: 10 },
  botones: { alignItems: "center", marginTop: 20 },
});
