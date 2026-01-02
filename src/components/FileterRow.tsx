import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  titulo: string;
  value: string | null;
  onPress: () => void;
};

export default function FilterRow({ titulo, value, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.value}>
        {value ?? "Select an option"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: { backgroundColor: "white", borderRadius: 12, padding: 15, marginVertical: 8},
  titulo: {fontSize: 14, color: "darkviolet", fontWeight: 'bold', },
  value: {fontSize: 16, fontWeight: "500", marginTop: 4}
});
