import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "../assets/Helper/Constant";

export default function CustomInput({ placeholder }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.light.white,
    borderRadius: 10,
  },
  input: {
    height: 40,
    width: "100%",
    fontSize: 16,
  },
});
