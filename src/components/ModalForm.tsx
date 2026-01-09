import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {

  value: string | null;
  onPress: () => void;
};

export default function ModalForm({ value, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress} >
      <Text style={styles.value} >
        {value ?? "Select an option"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: { borderRadius: 15, padding: 5, marginVertical: 5, borderWidth: 1, height: 40, marginHorizontal: 10},
  titulo: {fontSize: 14, color: "darkviolet", fontWeight: 'bold', },
  value: {fontSize: 16, marginTop: 4, fontWeight: 'bold'}
});
