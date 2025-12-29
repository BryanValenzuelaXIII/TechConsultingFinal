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

      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setOpen(!open)}
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
    marginHorizontal: 5
  },
  dropdown: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    padding: 14,
    marginHorizontal: 5
  },
  value: {
    fontSize: 16,
  },
  list: {
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 6,
  },
  option: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  optionText: {
    fontSize: 16,
  },
});