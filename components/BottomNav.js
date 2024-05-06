import { View } from "react-native";
import CircularButton from "./CircularButton";

export default function BottomNav({ navigation }) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItem: "center",
        justifyContent: "center",
        padding: 10,
        // backgroundColor: "blue",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 320,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          //   backgroundColor: "red",
          zIndex: 10,
        }}
      >
        <CircularButton
          handleClick={() => navigation.navigate("profile")}
          icon={"person"}
          size={25}
          color={"maroon"}
        />
        <View style={{}}>
          <CircularButton
            handleClick={() => navigation.navigate("home")}
            icon={"home"}
            size={40}
            color={"maroon"}
          />
        </View>
        <CircularButton
          handleClick={() => navigation.navigate("settings")}
          icon={"settings"}
          size={25}
          color={"maroon"}
        />
      </View>
    </View>
  );
}
