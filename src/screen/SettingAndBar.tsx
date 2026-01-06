import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { storage } from "../utils/MmkvStorage";
import ButtonFoward from "../components/ButtonFoward";
import { useDispatch } from "react-redux";
import { setFalse } from "../redux/guestSlice";
import { FireBaseLogOut } from "../utils/FireBaseLogin";
import OptionsBotton from "../components/OptionsBotton";
import { useNavigation } from "@react-navigation/native";
import SubTitle from "../components/SubTitle";


export default function SettingAndBar() {

    const navigation = useNavigation();

    const userOptions = [
    {
        id: 0,
        label: "Edit preferences",
        icon: require('../../assets/icons8-preferences-50.png'),
        description: 'Edit your preferences so it shows onn the map automatically',
         execute: () => {
            storage.getBoolean('user.isGuest') ? (
                Alert.alert("Please login to use this future")
            ): (
                navigation.navigate('EditPreferences')
            )
        }
    }, { 
        id: 1,
        label: 'Edit your profile',
        icon: require('../../assets/icons8-customer-50.png'),
        description: 'Edit your preferences so it shows onn the map automatically',
        execute: () => {
            storage.getBoolean('user.isGuest') ? (
                Alert.alert("Please login to use this future")
            ): (
                navigation.navigate('EditProfile')
            )
        }
    },] 

    const barOptions = [
        {
        id: 2,
        label: 'Add your bar/club',
        icon: require('../../assets/icons8-add-50.png'),
        description: 'Edit your preferences so it shows onn the map automatically',
        execute: () => {
            storage.getBoolean('user.isGuest') ? (
                Alert.alert("Please login to use this future")
            ): (
                navigation.navigate('AddBar')
            )
        }
    },
    {
        id: 3,
        label: 'Edit your bar/club',
        icon: require('../../assets/icons8-edit-50.png'),
        description: 'Edit your preferences so it shows onn the map automatically',
        execute: () => {
            storage.getBoolean('user.isGuest') ? (
                Alert.alert("Please login to use this future")
            ): (
                navigation.navigate('EditBars')
            )
        }
    },
    ] 

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
            
            <View style={styles.opciones}>
                <SubTitle 
                    sub="PROFILE"
                />
                <OptionsBotton 
                    data={userOptions}
                />
                <SubTitle 
                    sub="BARS"
                />
                <OptionsBotton 
                    data={barOptions}
                />
                <View style={styles.botones}>
                 {
                    storage.getBoolean('user.isGuest') ? (
                        
                            <ButtonFoward 
                            textInside="Sign In!"
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

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, },
    login: { backgroundColor: 'white', alignContent: 'center' },
    opciones: {flex: 1, justifyContent: 'flex-start', backgroundColor: 'white'},
    botones: { alignItems: 'center', marginTop: 'auto', paddingBottom: 20},
    textTitle: { fontSize: 40, fontWeight: '700', margin: 10 }
})