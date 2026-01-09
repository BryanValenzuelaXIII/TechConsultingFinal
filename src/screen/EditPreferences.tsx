import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import FormText from "../components/FormText";
import TextInputBig from "../components/TextInputBig";
import ButtonFoward from "../components/ButtonFoward";
import { storage } from "../utils/MmkvStorage";
import ModalForm from "../components/ModalForm";
import FilterModal from "../components/FilterModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reduxStore";
import { setPreferences } from "../redux/userSlice";
import { useNavigation } from "@react-navigation/native";

function EditPreferences() {
     const dispatch = useDispatch();
     const { music, distance, cost, age } = useSelector((state: RootState) => state.user);
     const navigation = useNavigation();

    const [lmusic, setMusic] = useState('')
    const [ldistance, setDistance] = useState('')
    const [lcost, setCost] = useState('')
    const [lage, setAge] = useState('')
    const [activeModal, setActiveModal] = useState<
        "music" | "age" | "cost" | "distance" | null
    >(null);

    function dummyFunction() {
        console.log("dummy function inside editpreferences")
    }

    function updatePref() {
        storage.set('user.music', music)
        storage.set('user.distance', distance)
        storage.set('user.cost', cost)
        storage.set('user.age', age)
    }

    function updatePrefState() {
        dispatch(
            setPreferences({
                music: lmusic,
                distance: ldistance,
                cost: lcost,
                age: lage,
            })
        );
        Alert.alert("Preferences saved!");
        navigation.goBack();
    }
    function reset() {
        dispatch(
            setPreferences({
                music: "",
                distance: "",
                cost: "",
                age: "",
            })
        );
        Alert.alert("Preferences resete!");
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxForm}>
                <FormText
                    requireText="What music you'll like to hear?"
                />
                <ModalForm
                    value={lmusic}
                    onPress={() => setActiveModal("music")}
                />

                <FormText
                    requireText="Distance?"
                />
                <ModalForm
                    value={ldistance}
                    onPress={() => setActiveModal("distance")}
                />

                <FormText
                    requireText="Free cover?"
                />
                <ModalForm
                    value={lcost}
                    onPress={() => setActiveModal("cost")}
                />

                <FormText
                    requireText="Age?"
                />
                <ModalForm
                    value={lage}
                    onPress={() => setActiveModal("age")}
                />
            </View>

            <View style={styles.botones}>
                <ButtonFoward
                    textInside="Change preferences"
                    pressAction={updatePrefState}
                />
            </View>

            <View style={styles.botones}>
                <ButtonFoward
                    textInside="Reset preferences"
                    pressAction={reset}
                />
            </View>

            <FilterModal
                visible={activeModal === "music"}
                title="Select music type"
                options={["Pop", "Rock", "Latin", "Jazz", "Electronic", "Alternative"]}
                onSelect={(value) => {
                    setMusic(value);
                    setActiveModal(null);
                }}
                onClose={() => setActiveModal(null)}
            />

            <FilterModal
                visible={activeModal === "distance"}
                title="Select max distance"
                options={["5 miles", "10 miles", "15 miles", "30 miles"]}
                onSelect={(value) => {
                    setDistance(value);
                    setActiveModal(null);
                }}
                onClose={() => setActiveModal(null)}
            />

            <FilterModal
                visible={activeModal === "cost"}
                title="Select cost"
                options={["Free", "Any"]}
                onSelect={(value) => {
                    setCost(value);
                    setActiveModal(null);
                }}
                onClose={() => setActiveModal(null)}
            />

            <FilterModal
                visible={activeModal === "age"}
                title="Select age group"
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

export default EditPreferences

const styles = StyleSheet.create({
    container: { flex: 1 },
    boxForm: { margin: 20, borderWidth: 1, borderRadius: 13, padding: 13, elevation: 13, backgroundColor: 'white' },
    botones: { alignItems: 'center', marginTop: 'auto', paddingBottom: 20 },
})
