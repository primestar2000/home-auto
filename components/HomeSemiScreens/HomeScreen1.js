import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DeviceButton from "../DeviceButton";
import BottomNav from "../BottomNav";
import * as NavigationBar from "expo-navigation-bar";
import { AppContext } from "../../assets/Context/AppContext";
import { COLORS } from "../../assets/Helper/Constant";
import TwoWaySwitchCustom from "../TwoWaySwitchCustom";
export default function HomeScreen1() {
  return (
    <>
      <Image
        style={styles.heroImage}
        source={require(`../../assets/images/room1.jpg`)}
      />
      <View style={styles.connectionStatusContainer}>
        <MaterialIcons
          name={WifiStatus ? "wifi" : "wifi-off"}
          size={30}
          color={WifiStatus ? "green" : "red"}
        />
        <Text style={{ color: WifiStatus ? "green" : "red" }}>
          {WifiStatus ? "Connected" : "Not Connected"}
        </Text>
        <Text style={{ color: COLORS.dark.gray }}>{networkIp}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrap}>
          {Object.keys(devices).map((deviceId) => (
            <DeviceButton
              key={deviceId}
              handleDeviceButton={handleDeviceButton}
              icon={"speaker"} // Replace with appropriate icons
              color={"green"} // Replace with appropriate colors
              label={`Device ${deviceId.charAt(deviceId.length - 1)}`}
              deviceId={deviceId}
              deviceState={devices[deviceId]}
            />
          ))}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: "#111827",
    position: "relative", // Ensure the mainScreen acts as a relative positioning context for absolute positioning within it
  },
  topLayout: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: "relative",
    elevation: 3,
    // borderBottomColor: "gray",
    // borderWidth: 2,
    shadowColor: "#1f2937",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  welcomeText: {
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
    paddingHorizontal: 20,
    padding: 10,
  },
  usernameText: {
    color: "violet",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  heroImage: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 20,
  },
  connectionStatusContainer: {
    paddingVertical: 5,
    alignItems: "center",
  },
  buttonContainer: {
    paddingVertical: 20,
    justifyContent: "center",
  },
  buttonWrap: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    gap: 10,
  },
  menu: {
    position: "absolute",
    width: "100%",
    top: 0,
    bottom: 0,
    zIndex: 20,
    padding: 20,
    // backgroundColor: "#ff00003b",
  },
  menuContent: {
    padding: 20,
    width: 200,
    right: 0,
    borderRadius: 20,
    top: 70,
    position: "absolute",
    marginRight: 0,
    backgroundColor: "#1f2937",
  },
  menuItems: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
    marginTop: 20,
  },
  screenTitle: {
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
  },
  menuButton: {
    right: 0,
    paddingHorizontal: 10,
  },
  roomButton: {
    height: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.SECONDARY_DARK,
  },
  roomButtonWrap: {
    width: 200,
    columnGap: 10,
    backgroundColor: "blue",
    flexDirection: "row",
    alignSelf: "center",
  },
  topFirstCol: {
    flexDirection: "row",
  },
  switchContainer: {
    alignItems: "center",
    padding: 20,
  },
});
