import React, { useState } from "react";
import {View, Text, TouchableOpacity, StyleSheet, FlatList,} from "react-native";

type DropdownProps = {
  label: string;
  options: string[];
  selectedValue: string | null;
  onSelect: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedValue,
  onSelect,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      {/* Anchor */}
      <View style={styles.anchor}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setOpen(!open)}
          activeOpacity={0.7}
        >
          <Text style={styles.value}>
            {selectedValue ?? "Select an option"}
          </Text>
        </TouchableOpacity>

        {open && (
          <View style={styles.list}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onSelect(item);
                    setOpen(false);
                  }}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    marginHorizontal: 5,
  },

  anchor: {
    position: "relative", // 👈 important
  },

  dropdown: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "white",
  },

  value: {
    fontSize: 20,
  },

  list: {
    position: "absolute", // 👈 prevents layout shifting
    top: 60,              // below the dropdown
    left: 5,
    right: 5,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
    zIndex: 1000,
    elevation: 5,         // Android
    maxHeight: 200,
  },

  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },

  optionText: {
    fontSize: 16,
  },
});