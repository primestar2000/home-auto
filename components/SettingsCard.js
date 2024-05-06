import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { COLORS } from "../assets/Helper/Constant";
import { AppContext } from "../assets/Context/AppContext";

export default function SettingsCard({ children, title, onPress }) {
  const { user, setUser, darkMode, setDarkMode } = useContext(AppContext);
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: darkMode
            ? COLORS.SECONDARY_DARK
            : COLORS.SECONDARY_LIGHT,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.17,
          shadowRadius: 3.05,
          elevation: 4,
        },
      ]}
    >
      <Text style={[styles.cardTitle, { color: COLORS.dark.gray }]}>
        {title}
      </Text>
      {children}
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={[styles.button, { backgroundColor: COLORS.dark.green }]}
      >
        <Text style={styles.buttonLabel}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 320,
    padding: 15,
    marginVertical: 20,
    backgroundColor: "#1f2937",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3, // Add elevation for shadow
  },
  button: {
    width: "fit-content",
    backgroundColor: "#4b5563",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  buttonLabel: {
    color: "white",
    textAlign: "center",
  },
  cardTitle: {
    textAlign: "center",
    margin: 10,
    fontSize: 18,
    color: COLORS.light.white,
  },
});
