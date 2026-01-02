
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SignUpUser from "./screen/SignUpUser";
import LoginScreen from "./screen/LoginScreen";
import WelcomeScreen from "./screen/WelcomeScreen";
import BottomNavigationBar from "./BottomNavigationBar";
import auth from '@react-native-firebase/auth';
import { ActivityIndicator, View } from "react-native";
import { storage } from "./utils/MmkvStorage";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "./redux/reduxStore";
import { setTrue } from "./redux/guestSlice";
import SettingAndBar from "./screen/SettingAndBar";
import AddBar from "./screen/AddBar";
import EditPreferences from "./screen/EditPreferences";
import EditProfile from "./screen/EditProfile";
import EditBars from "./screen/EditBars";

const Stack = createStackNavigator();

const Navigation = () =>{

    const [user, setUser] = useState<any>(null);
    const [isGuest, setIsGuest] = useState(false);
    const [loading, setLoading] = useState(true);

    const guest = useSelector((state: RootState) => state.guest.value)
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(currentUser => {
            setUser(currentUser);

            if(storage.getBoolean('user.isGuest')){
                dispatch(setTrue());
            } 
                
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
            {
                (!user && !guest) ? (
                    <>
                        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                        <Stack.Screen name="LoginScreen" component={LoginScreen} />
                        <Stack.Screen name="SignUpUser" component={SignUpUser} />
                        
                    </>

                ) : (
                    <>
                        <Stack.Screen name="BottomNavigationBar" component={BottomNavigationBar} options={{ headerShown: false }} />
                        <Stack.Screen name="Settings" component={SettingAndBar} />
                        <Stack.Screen name="AddBar" component={AddBar} />
                        <Stack.Screen name="EditPreferences" component={EditPreferences} />
                        <Stack.Screen name="EditProfile" component={EditProfile} />
                        <Stack.Screen name="EditBars" component={EditBars} />
                    </>
                        
                )
            }

            </Stack.Navigator>
        </NavigationContainer>
            

    )
}

export default Navigation;
