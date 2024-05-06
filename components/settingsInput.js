import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import { COLORS } from "../assets/Helper/Constant";
import { AppContext } from "../assets/Context/AppContext";

export default function SettingsInput({ placeholder, type, onChangeText }) {
  const { darkMode } = useContext(AppContext);
  const [value, setInputvalue] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => {
          onChangeText(text);
          // onChangeText(value);
        }}
        keyboardType={type}
        style={[
          styles.input,
          {
            borderColor: darkMode ? COLORS.dark.gray : COLORS.light.gray,
            color: darkMode ? COLORS.light.gray : COLORS.dark.gray,
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.light.gray}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: COLORS.lightest.gray,
    borderWidth: 2,
    paddingHorizontal: 10,
    color: COLORS.light.white,
  },
});
