import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Geolocation from '@react-native-community/geolocation';
import { requestLocationPermission } from "../utils/PermisionRequest";
import ButtonFoward from "../components/ButtonFoward";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import TextInputBig from "../components/TextInputBig";

type UserLocation = {
  latitude: number;
  longitude: number;
};

export default function PreferencesScreen(){

    const [userLocation, setUserLocation] = useState<UserLocation | null>(null);

    const dummyAction = () => {
            Alert.alert("Action trigger!");
        }

    const getLocation = async() =>{
        try{
            const hasPermission = await requestLocationPermission();
            if (!hasPermission) {
            console.log('Permission not granted');
            return;
            }

    Geolocation.getCurrentPosition(
      position => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
        setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
      },
      error => {
        console.log('Geolocation error:', error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  } catch (e) {
    console.log('Error getting the location', e);
  }
    }

    const dummyBars = [{latitude: 31.801098,
                        longitude: -106.272550,
                        title: "Mi casita",
                        description: 'Ahi vive el arti'}, 
                        {
                        latitude: 31.791635,
                        longitude: -106.269454,
                        title: "Mi vecino",
                        description: 'No se quien vive ahi'
                        },
                    ]

    return (
        <View style = {styles.container}>
            <View style={styles.login}>
                <View>
                    <TextInputBig 
                        typeOfText="name"
                        placeHolder="Enter the address or name of the place"
                    />

                </View>
            {
                userLocation ? (
                    <MapView
                provider={PROVIDER_GOOGLE} 
                style={{ flex: 1 }}
                region={{
                    latitude: userLocation.latitude ,
                    longitude: userLocation.longitude,
                    latitudeDelta: 0.085,
                    longitudeDelta: 0.0821,
                }}
                >
                {dummyBars.map((bar, index) => (
                    <Marker
                    key={index}
                    coordinate={{
                        latitude: bar.latitude,
                        longitude: bar.longitude,
                    }}
                    title={bar.title}
                    description={bar.description}
                    />
                ))}
                </MapView>
                ) : (
                    <MapView
                provider={PROVIDER_GOOGLE} 
                style={{ flex: 1 }}
                region={{
                    latitude:  33.7490,
                    longitude: -84.3877,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                ></MapView>
                )
            }
            
            </View>
            <View style={styles.botonalignment}>
                <ButtonFoward 
                    textInside="get location"
                    pressAction={getLocation}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1,},
    login: {flex: 1, backgroundColor: 'white',  justifyContent: 'flex-end'},
    form: {flex: 3, backgroundColor: 'lightblue', borderTopLeftRadius: 40,
            justifyContent: 'center', },
    botonalignment: {alignItems: 'center'},

    textTitle: {fontSize: 40, fontWeight: '700', margin: 10}
})