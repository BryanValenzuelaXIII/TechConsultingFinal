import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import BarList from "../components/BarList";
import BarDetailsModal from "../components/BarDetailsModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reduxStore";
import { fetchAllBarsRequest } from "../redux/barsSlice";

type Bar = {
    id: string;
    title: string;
    typeOfMusic: string;
    hoursOfOperation: string;
    description: string;
    location: string;
};

type Props = {};

const ShowBarResults = ({ }: Props) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedBar, setSelectedBar] = useState<Bar | null>(null);
    const dispatch = useDispatch();
    const { allBars, loadingAll } = useSelector(
        (state: RootState) => state.bars
    );

    useEffect(() => {
        dispatch(fetchAllBarsRequest());
    }, [dispatch]);

    // const bars: Bar[] = [
    //     {
    //         id: "1",
    //         title: "The Jazz Lounge",
    //         typeOfMusic: "Jazz / Blues",
    //         hoursOfOperation: "6 PM - 2 AM",
    //         description: "Live jazz every night with local artists.",
    //         location: 'Atlanta'
    //     },
    //     {
    //         id: "2",
    //         title: "Neon Nights",
    //         typeOfMusic: "EDM / House",
    //         hoursOfOperation: "8 PM - 4 AM",
    //         description: "High-energy club with famous DJs.",
    //         location: 'Mars'
    //     },
    //     {
    //         id: "3",
    //         title: "Retro Vibes",
    //         typeOfMusic: "80s / 90s Hits",
    //         hoursOfOperation: "5 PM - 1 AM",
    //         description: "Throwback music and themed nights.",
    //         location: 'El Paso'
    //     },
    // ];

    const openModal = (bar: Bar) => {
        setSelectedBar(bar);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedBar(null);
    };

    return (
        <View style={{ flex: 1, backgroundColor: "gray" }}>
            <FlatList
                data={allBars}
                refreshing={loadingAll}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <BarList
                        title={item.name}
                        typeOfMusic={item.musicType}
                        hoursOfOperation={item.operationHours}
                        onPress={() => openModal(item)}
                    />
                )}
            />

            <BarDetailsModal
                visible={modalVisible}
                bar={selectedBar}
                onPress={closeModal}
            />
        </View>
    );
};

export default ShowBarResults;
