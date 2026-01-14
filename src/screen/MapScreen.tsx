import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { requestLocationPermission } from "../utils/PermisionRequest";
import ButtonFoward from "../components/ButtonFoward";
import TextInputBig from "../components/TextInputBig";
import BarDetailsModal from "../components/BarDetailsModal";
import { fetchAllBarsRequest } from "../redux/barsSlice";
import { RootState } from "../redux/reduxStore";
import { filterBars } from "../utils/filterBars";

type UserLocation = {
    latitude: number;
    longitude: number;
};

type Bar = {
    id: string;
    name: string;
    musicType: string;
    operationHours: string;
    description: string;
    location: string;
    age: string;
    cost?: string;
    latitude: number;
    longitude: number;
};


export default function PreferencesScreen() {
    const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
    const [selectedBar, setSelectedBar] = useState<Bar | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch();
    const { allBars } = useSelector((state: RootState) => state.bars);
    const { music, age, distance, cost } = useSelector(
        (state: RootState) => state.user
    );

    const getLocation = async () => {
        const hasPermission = await requestLocationPermission();
        if (!hasPermission) return;

        Geolocation.getCurrentPosition(
            position => {
                setUserLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            error => console.log("Geolocation error:", error),
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    // Replace your dummy points with "bars"
    // const bars: Bar[] = [
    //     {
    //         id: '1',
    //         title: "Mi casita",
    //         typeOfMusic: "Jazz / Blues",
    //         hoursOfOperation: "6 PM - 2 AM",
    //         description: "Ahi vive el arti",
    //         latitude: 31.801098,
    //         longitude: -106.272550,
    //     },
    //     {
    //         id: '2',
    //         title: "Mi vecino",
    //         typeOfMusic: "EDM / House",
    //         hoursOfOperation: "8 PM - 4 AM",
    //         description: "No se quien vive ahi",
    //         latitude: 31.791635,
    //         longitude: -106.269454,
    //     },
    // ];

    useFocusEffect(
        useCallback(() => {
            getLocation();
            dispatch(fetchAllBarsRequest());

        }, [dispatch])
    );

    const bars: Bar[] = allBars;
    const specificBar = React.useMemo(() => {
        return filterBars(bars, {
            music: music || null,
            age: age || null,
            distance: distance || null,
            cost: cost || null,
        });
    }, [bars, music, age, distance, cost]);

    const openModal = (bar: Bar) => {
        setSelectedBar(bar);
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedBar(null);
        setModalVisible(false);
    };

    const mapKey = `${music}-${age}-${distance}-${cost}`;

    return (
        <View style={styles.container}>
            <View style={styles.login}>

                {userLocation && (
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ flex: 1 }}
                        key={mapKey}
                        initialRegion={{
                            latitude: userLocation.latitude,
                            longitude: userLocation.longitude,
                            latitudeDelta: 0.085,
                            longitudeDelta: 0.0821,
                        }}
                    >
                        {specificBar.map(bar => {
                            if (!bar.latitude || !bar.longitude) return null;

                            return (
                                <Marker
                                    key={bar.id ?? bar.name}
                                    coordinate={{
                                        latitude: bar.latitude,
                                        longitude: bar.longitude,
                                    }}
                                    title={bar.name}
                                    description={bar.description}
                                    onPress={() => openModal(bar)}
                                />
                            );
                        })}
                    </MapView>
                )}
            </View>

            <View style={styles.botonalignment}>
                <ButtonFoward textInside="get location" pressAction={getLocation} />
            </View>

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
    login: { flex: 1, backgroundColor: "white", justifyContent: "flex-end" },
    botonalignment: { alignItems: "center" },
});
