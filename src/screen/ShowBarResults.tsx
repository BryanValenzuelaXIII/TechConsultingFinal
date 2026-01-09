import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import BarList from "../components/BarList";
import BarDetailsModal from "../components/BarDetailsModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reduxStore";
import { fetchAllBarsRequest } from "../redux/barsSlice";
import { useRoute } from "@react-navigation/native";
import { filterBars } from "../utils/filterBars";

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
    const route = useRoute();
    
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedBar, setSelectedBar] = useState<Bar | null>(null);
    const dispatch = useDispatch();
    const { allBars, loadingAll } = useSelector(
        (state: RootState) => state.bars
    );
    const { music, age, distance, cost, hours } = route.params ?? {};
    
    useEffect(() => {
        dispatch(fetchAllBarsRequest());
    }, [dispatch]);

    const filteredBars = filterBars(allBars, {
        music,
        age,
        distance,
        cost,
        hours,
    });


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
                data={filteredBars}
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
