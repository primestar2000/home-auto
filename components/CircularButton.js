import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, View, Text } from "react-native";

export default function CircularButton({
  icon,
  size,
  type,
  color,
  handleClick,
}) {
  return (
    <Pressable>
      <View
        style={{
          padding: 5,
          backgroundColor: "white",
          borderRadius: 200,
          borderColor: "white",
          borderStyle: "solid",
          borderWidth: 4,
        }}
      >
        <MaterialIcons
          onPress={handleClick}
          name={icon}
          size={size}
          color={color}
          type={"main"}
        />
      </View>
    </Pressable>
  );
}
