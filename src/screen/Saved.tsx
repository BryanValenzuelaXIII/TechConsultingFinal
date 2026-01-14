import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reduxStore";
import BarList from "../components/BarList";
import BarDetailsModal from "../components/BarDetailsModal";

const backImage = require("../../assets/savedBackground.png");

type Bar = {
  id: string;
  name: string;
  musicType: string;
  operationHours: string;
  description: string;
  location: string;
};

export default function Saved() {
  const [showBars, setShowBars] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBar, setSelectedBar] = useState<Bar | null>(null);

  const { allBars } = useSelector((state: RootState) => state.bars);
  const favorites: string[] = useSelector(
    (state: RootState) => state.user.favorites
  );

  // 🔑 Map favorite names → full bar objects
  const favoriteBars: Bar[] = allBars.filter((bar: Bar) =>
    favorites.some(
      (fav) => fav.toLowerCase() === bar.name.toLowerCase()
    )
  );

  const openModal = (bar: Bar) => {
    setSelectedBar(bar);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedBar(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backImage} style={styles.image}>
        <View style={styles.login}>
          <Text style={styles.textTitle}>Saved clubs/events!</Text>

          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowBars((prev) => !prev)}
          >
            <Text style={styles.dropdownText}>Clubs</Text>
            <Image
              source={require("../../assets/icons8-dropdown-48.png")}
            />
          </TouchableOpacity>

          {showBars && (
            <FlatList
              data={favoriteBars}
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
          )}
        </View>
      </ImageBackground>

      <BarDetailsModal
        visible={modalVisible}
        bar={selectedBar}
        onPress={closeModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  login: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  textTitle: {
    fontSize: 40,
    fontWeight: "700",
    margin: 10,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    height: 70,
    marginHorizontal: 10,
  },
  dropdownText: {
    fontSize: 30,
    fontWeight: "700",
  },
});
