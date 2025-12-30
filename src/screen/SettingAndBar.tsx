import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { storage } from "../utils/MmkvStorage";
import ButtonFoward from "../components/ButtonFoward";
import { useDispatch } from "react-redux";
import { setFalse } from "../redux/guestSlice";
import { FireBaseLogOut } from "../utils/FireBaseLogin";
import OptionsBotton from "../components/OptionsBotton";

export default function SettingAndBar() {



    const settingOptions = [{id: 0,
        label: "Edit preferences",
    }, {
        id: 1,
        label: 'Edit your bars',
    }, {
        id: 2,
        label: 'Add your bar/club',
    },
     {
        id: 3,
        label: 'Edit your profile',
        execute: dummyFunction,
    }]

    const dispatch = useDispatch()

    function dummyFunction(){
        console.log("press button")
    }

    function dummyFunction2(){
        console.log("preciono buton 2")
    }

    const fakeLogin = () => {
        storage.set('user.isGuest', false);
        dispatch(setFalse());
    }

    const handleLogOut = () => {
        FireBaseLogOut();
    }

    return (
        <View style={styles.container}>
            <View style={styles.login}>
                <Text style={styles.textTitle} >
                    {"Settings"}
                </Text>
            </View>
            <OptionsBotton 
                data={settingOptions}
            />

            <View style={styles.botones}>
                {
                    storage.getBoolean('user.isGuest') ? (
                        <ButtonFoward 
                            textInside="fake Sign In!"
                            pressAction={fakeLogin}
                        />
                    ) : (
                       <ButtonFoward 
                            textInside="Log out!"
                            pressAction={handleLogOut}
                        />
                    )
                }
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, },
    login: { flex: 1, backgroundColor: 'white', alignContent: 'center' },
    botones: { justifyContent: 'center' },
    textTitle: { fontSize: 40, fontWeight: '700', margin: 10 }
})