import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Geolocation from '@react-native-community/geolocation';
import { requestLocationPermission } from "../utils/PermisionRequest";
import ButtonFoward from "../components/ButtonFoward";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import TextInputBig from "../components/TextInputBig";
import { useFocusEffect } from "@react-navigation/native";
import BarDetailsModal from "../components/BarDetailsModal";

type UserLocation = {
    latitude: number;
    longitude: number;
};

type Bar = {
    id: string;
    title: string;
    typeOfMusic: string;
    hoursOfOperation: string;
    description: string;
    latitude: number;
    longitude: number;
};

export default function PreferencesScreen() {
    const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
    const [selectedBar, setSelectedBar] = useState<Bar | null>(null);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const getLocation = async () => {
        try {
            const hasPermission = await requestLocationPermission();
            if (!hasPermission) {
                console.log('Permission not granted');
                return;
            }

            Geolocation.getCurrentPosition(
                position => {
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
    };

    useFocusEffect(useCallback(() => {
        getLocation();
    }, []));

    // Replace your dummy points with "bars"
    const bars: Bar[] = [
        {
            id: '1',
            title: "Mi casita",
            typeOfMusic: "Jazz / Blues",
            hoursOfOperation: "6 PM - 2 AM",
            description: "Ahi vive el arti",
            latitude: 31.801098,
            longitude: -106.272550,
        },
        {
            id: '2',
            title: "Mi vecino",
            typeOfMusic: "EDM / House",
            hoursOfOperation: "8 PM - 4 AM",
            description: "No se quien vive ahi",
            latitude: 31.791635,
            longitude: -106.269454,
        },
    ];

    const handleMarkerLongPress = (bar: Bar) => {
        setSelectedBar(bar);
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedBar(null);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.login}>
                <TextInputBig
                    typeOfText="name"
                    placeHolder="Enter the address or name of the place"
                />

                {userLocation ? (
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ flex: 1 }}
                        region={{
                            latitude: userLocation.latitude,
                            longitude: userLocation.longitude,
                            latitudeDelta: 0.085,
                            longitudeDelta: 0.0821,
                        }}
                    >
                        {bars.map((bar) => (
                            <Marker
                                key={bar.id}
                                coordinate={{
                                    latitude: bar.latitude,
                                    longitude: bar.longitude,
                                }}
                                title={bar.title}
                                description={bar.description}
                                onPress={() => handleMarkerLongPress(bar)}
                            />
                        ))}
                    </MapView>
                ) : (
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ flex: 1 }}
                        region={{
                            latitude: 33.7490,
                            longitude: -84.3877,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    />
                )}
            </View>

            <View style={styles.botonalignment}>
                <ButtonFoward
                    textInside="get location"
                    pressAction={getLocation}
                />
            </View>

            {/* Bar Details Modal */}
            <BarDetailsModal
                visible={modalVisible}
                bar={selectedBar}
                onPress={closeModal}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    login: { flex: 1, backgroundColor: 'white', justifyContent: 'flex-end' },
    botonalignment: { alignItems: 'center' },
    textTitle: { fontSize: 40, fontWeight: '700', margin: 10 }
});
