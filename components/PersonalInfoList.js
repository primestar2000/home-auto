import { View, Text } from "react-native";
import { COLORS } from "../assets/Helper/Constant";

export default function PersonalInfoListItem({ title, value }) {
  return (
    <View style={{ flexDirection: "row", gap: 10, padding: 2 }}>
      <Text style={{ fontWeight: 800, color: COLORS.dark.gray, fontSize: 13 }}>
        {title}:
      </Text>
      <Text style={{ color: "gray", fontSize: 13 }}>{value}</Text>
    </View>
  );
}
