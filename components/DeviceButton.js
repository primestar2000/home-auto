import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppContext } from "../assets/Context/AppContext";
import { COLORS } from "../assets/Helper/Constant";

export default function DeviceButton({
  icon,
  label,
  color,
  handleDeviceButton,
  deviceId,
  deviceState,
  appTheme,
}) {
  const { darkMode } = useContext(AppContext);
  return (
    <TouchableOpacity
      style={[
        deviceState ? Styles.buttonAlt : Styles.button,
        {
          backgroundColor: darkMode
            ? COLORS.SECONDARY_DARK
            : COLORS.SECONDARY_LIGHT,
        },
      ]}
      onPress={() => {
        handleDeviceButton(deviceId);
      }}
    >
      <MaterialIcons name={icon} size={30} color={color} />
      <Text style={{ color: color }}>{label}</Text>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: "#1f2937",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 4,
    borderColor: COLORS.dark.gray,
  },
  buttonAlt: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: "#101014",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 4,
    borderColor: "green",
  },
});
