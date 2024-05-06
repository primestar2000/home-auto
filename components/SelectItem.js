import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SelectContext } from "./SelectComponent";

export default function SelectItem({ children, onPress }) {
  const { setModalVisible } = useContext(SelectContext);
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        setModalVisible(false);
      }}
    >
      <Text style={{ paddingVertical: 10 }}>{children}</Text>
    </TouchableOpacity>
  );
}
