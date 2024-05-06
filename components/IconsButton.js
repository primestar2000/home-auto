import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable } from "react-native";

export default function IconBotton({ icon }) {
  return (
    <Pressable>
      <MaterialIcons name={icon} size={30} color="#fff" />
    </Pressable>
  );
}
