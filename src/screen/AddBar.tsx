import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import TextInputBig from "../components/TextInputBig";
import ButtonFoward from "../components/ButtonFoward";
import { storeDocumentWithId } from "../utils/FireBaseStore"
import FormText from "../components/FormText";
import { storage } from "../utils/MmkvStorage";
import { useNavigation } from "@react-navigation/native";
import FilterRow from "../components/FileterRow";
import ModalForm from "../components/ModalForm";
import FilterModal from "../components/FilterModal";

function AddBar() {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [musicType, setMusicType] = useState('');
    const [operationHours, setOperationHours] = useState('');
    const [cost, setCost] = useState('')
    const [description, setDescription] = useState("");
    const [age, setAge] = useState('')

    const [activeModal, setActiveModal] = useState<
        "music" | "age" | "cost" | "hours" | null
    >(null);

    const navigation = useNavigation();

    const bar = {
        name,
        location,
        musicType,
        operationHours,
        age,
        description,
        cost,
        owner: storage.getString("user.email"),
        songsListed: ["Apology", "zouk", "perro negro", "Con calma", "sun flowers"],
    };

    function getStringArray(key: string): string[] {
        const allBars = storage.getString(key);
        return allBars ? JSON.parse(allBars) : [];
        //this is to get all owners bars
    }

    function setStringArray(key: string, allBars: string[]) {
        storage.set(key, JSON.stringify(allBars));
        //this is to update owners bars
    }

    function submit() {
        storeDocumentWithId('Bars', name, bar);


        const existingBars = getStringArray("user.ownerBars");
        const updatedBars = [...existingBars, name];

        setStringArray("user.ownerBars", updatedBars);

        Alert.alert("Bar added!");
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxForm}>
                <FormText
                    requireText="Name of the bar"
                />
                <TextInputBig
                    typeOfText="name"
                    placeHolder="Name of the bar"
                    onChangeText={setName}
                />
                <FormText
                    requireText="Location"
                />
                <TextInputBig
                    typeOfText="fullStreetAddress"
                    placeHolder="Street, City, ST ZIP"
                    onChangeText={setLocation}
                />

                <FormText requireText="Music type" />
                <ModalForm
                    value={musicType}
                    onPress={() => setActiveModal("music")}

                />

                <FormText requireText="Operation hours" />
                <ModalForm
                    value={operationHours}
                    onPress={() => setActiveModal("hours")}

                />

                <FormText requireText="Age restriction" />
                <ModalForm
                    value={age}
                    onPress={() => setActiveModal("age")}

                />

                <FormText requireText="Cover cost" />
                <TextInputBig
                    typeOfText="name"
                    placeHolder="Leave blank if it is free"
                    onChangeText={setCost}
                />

                <FormText requireText="Description" />
                <TextInputBig
                    typeOfText="name"
                    placeHolder="Anything you want to add"
                    onChangeText={setDescription}
                />

            </View>
            <View style={styles.botones}>
                <ButtonFoward
                    textInside="Submit Bar!"
                    pressAction={submit}
                />
            </View>

            <FilterModal
                visible={activeModal === "music"}
                title="Select music type"
                options={["Pop", "Rock", "Latin", "Jazz", "Electronic", "Alternative"]}
                onSelect={(value) => {
                    setMusicType(value);
                    setActiveModal(null);
                }}
                onClose={() => setActiveModal(null)}
            />

            <FilterModal
                visible={activeModal === "hours"}
                title="Select operation hours"
                options={["10am - 2am", "5pm - 2am", "8pm - 2am"]}
                onSelect={(value) => {
                    setOperationHours(value);
                    setActiveModal(null);
                }}
                onClose={() => setActiveModal(null)}
            />

            <FilterModal
                visible={activeModal === "age"}
                title="Select age restriction"
                options={["All ages", "18+", "21+"]}
                onSelect={(value) => {
                    setAge(value);
                    setActiveModal(null);
                }}
                onClose={() => setActiveModal(null)}
            />

        </View>
    )
}

export default AddBar;

const styles = StyleSheet.create({
    container: { flex: 1 },
    boxForm: { margin: 10, borderWidth: 1, borderRadius: 13, padding: 13, elevation: 13, backgroundColor: 'white', marginHorizontal: 10 },
    botones: { alignItems: 'center', marginTop: 'auto', marginBottom: 15 },
})