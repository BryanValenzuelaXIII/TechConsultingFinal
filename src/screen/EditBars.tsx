import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import SubTitle from "../components/SubTitle";
import BarList from "../components/BarList";
import { getYourBar } from "../utils/GetBars";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reduxStore";
import { fetchUserBarsRequest } from "../redux/barsSlice";
import { getAuth } from "@react-native-firebase/auth";

function EditBars() {
  const [myBars, setMyBars] = useState<any[]>([]);
  const dispatch = useDispatch();
  const { userBars, loadingUser }  = useSelector((state: RootState) => state.bars)

  /*useEffect(() => {
    const fetchBars = async () => {
      try {
        const bars = await getYourBar("email@email.com");
        setMyBars(bars);
      } catch (error) {
        console.error("Failed to fetch bars:", error);
      }
    };

    fetchBars();
  }, []); */

  useEffect(() => {
    const email = getAuth().currentUser?.email;

    if (!email) return;

    dispatch(fetchUserBarsRequest({ owner: email }));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SubTitle sub="SELECT YOUR BAR" />
      </View>

      <FlatList
        data={userBars}
        keyExtractor={(item) => item.id ?? item.name}
        style={{ flex: 1 }}
        refreshing={loadingUser}
        renderItem={({ item }) => (
          <BarList
            title={item.name}
            typeOfMusic={item.musicType}
            hoursOfOperation={item.operationHours}
            onPress={() => console.log('Pressed bar:', item.name)}
          />
        )}
      />
    </View>
  );
}

export default EditBars;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: { padding: 10 },
  barListContainer: { flex: 1 },
});
