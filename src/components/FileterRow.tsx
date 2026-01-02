import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  label: string;
  value: string | null;
  onPress: () => void;
};

export default function FilterRow({ label, value, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>
        {value ?? "Select an option"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginVertical: 8
  },
  label: {
    fontSize: 14,
    color: "#555"
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 4
  }
});
