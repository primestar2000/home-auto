import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../assets/Helper/Constant";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function SubmitButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={styles.container}
    >
      <Text style={styles.title}>Submit</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    paddingVertical: 15,
    borderRadius: 50,
    backgroundColor: COLORS.light.green,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    color: COLORS.light.white,
    fontWeight: "800",
  },
});
