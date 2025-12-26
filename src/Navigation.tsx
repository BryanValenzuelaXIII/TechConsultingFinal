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

const Stack = createStackNavigator();

const Navigation = () =>{

    const [user, setUser] = useState<any>(null);
    const [isGuest, setIsGuest] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(currentUser => {
            setUser(currentUser);

            setIsGuest(storage.getBoolean('user.isGuest') ? true: false);
                
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
                (!user && !isGuest) ? (
                    <>
                        <Stack.Screen name="WelcomeScreen">
                            {(props) => <WelcomeScreen {...props} setIsGuest={setIsGuest} />}
                        </Stack.Screen>
                        <Stack.Screen name="LoginScreen" component={LoginScreen} />
                        <Stack.Screen name="SignUpUser" component={SignUpUser} />
                        
                    </>

                ) : (
                        <Stack.Screen name="BottomNavigationBar" component={BottomNavigationBar} options={{ headerShown: false }} />
                )
            }

            </Stack.Navigator>
        </NavigationContainer>
            

    )
}

export default Navigation;