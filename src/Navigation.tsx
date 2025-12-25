import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SignUpUser from "./screen/SignUpUser";
import LoginScreen from "./screen/LoginScreen";
import WelcomeScreen from "./screen/WelcomeScreen";

const Stack = createStackNavigator();

const Navigation = () =>{

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignUpUser" component={SignUpUser} />
            </Stack.Navigator>
        </NavigationContainer>
            

    )
}

export default Navigation;