import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Pressable,
  StatusBar,
  TouchableOpacity,
  Modal,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DeviceButton from "../DeviceButton";
import BottomNav from "../BottomNav";
import * as NavigationBar from "expo-navigation-bar";
import { AppContext } from "../../assets/Context/AppContext";
import { COLORS } from "../../assets/Helper/Constant";
import TwoWaySwitchCustom from "../TwoWaySwitchCustom";

export default function Home({ navigation, route }) {
  const [devices, setDevices] = useState({
    Relay1: false,
    Relay2: false,
    Relay3: false,
    Relay4: false,
    Relay5: false,
    Relay6: false,
  });
  const [WifiStatus, setWifiStatus] = useState(false);
  const { networkIp } = useContext(AppContext);
  const [menuStatus, setMenuStatus] = useState(false);
  const [presentRoom, setPresentRoom] = useState(1);
  const { darkMode, setDarkMode } = useContext(AppContext);

  // useEffect(() => {
  //   console.log(presentRoom);
  // }, [presentRoom]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://${networkIp}/WifiStatus`);
        const status = response.status;
        if (status === 200) {
          setWifiStatus(true);
        } else {
          setWifiStatus(false);
        }
      } catch (error) {
        console.log(error);
        setWifiStatus(false);
      }
      // console.log(route.params);
    };

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  function handleDeviceButton(deviceId) {
    if (WifiStatus) {
      toggleDevice(deviceId, devices[deviceId]);
      setDevices((prevState) => ({
        ...prevState,
        [deviceId]: !devices[deviceId],
      }));
    }
  }

  async function toggleDevice(deviceId, value) {
    try {
      const req = await fetch(
        `http://${networkIp}/${deviceId}${value ? "OFF" : "ON"}`
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View
      style={[
        styles.mainScreen,
        {
          backgroundColor: darkMode
            ? COLORS.PRIMARY_DARK
            : COLORS.PRIMARY_LIGHT,
        },
      ]}
    >
      {menuStatus && (
        <Modal transparent={true}>
          <Pressable
            onPress={() => {
              setMenuStatus(false);
            }}
            style={[styles.menu]}
          >
            <View
              style={[
                styles.menuContent,
                {
                  backgroundColor: darkMode
                    ? COLORS.SECONDARY_DARK
                    : COLORS.SECONDARY_LIGHT,
                },
              ]}
            >
              <TouchableOpacity>
                <Text
                  style={[
                    styles.menuItems,
                    {
                      color: darkMode
                        ? COLORS.SECONDARY_LIGHT
                        : COLORS.SECONDARY_DARK,
                    },
                  ]}
                >
                  Rooms
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.menuItems,
                    {
                      color: darkMode
                        ? COLORS.SECONDARY_LIGHT
                        : COLORS.SECONDARY_DARK,
                    },
                  ]}
                >
                  Settings
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.menuItems,
                    {
                      color: darkMode
                        ? COLORS.SECONDARY_LIGHT
                        : COLORS.SECONDARY_DARK,
                    },
                  ]}
                >
                  About
                </Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>
      )}

      <ScrollView>
        <View style={styles.switchContainer}>
          <TwoWaySwitchCustom
            value={presentRoom}
            onChange={() => {
              if (presentRoom == 1) {
                setPresentRoom(2);
              } else {
                setPresentRoom(1);
              }
            }}
          />
        </View>
        {/* <View style={styles.roomButtonWrap}>
          <Pressable style={styles.roomButton}>
            <Text>Room1</Text>
          </Pressable>
          <Pressable style={styles.roomButton}>
            <Text>Room1</Text>
          </Pressable>
        </View> */}

        <Image
          style={styles.heroImage}
          source={
            presentRoom == 1
              ? require(`../../assets/images/room3.jpg`)
              : require(`../../assets/images/room4.jpg`)
          }
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
            {Object.keys(devices).map((deviceId, index) => {
              if (presentRoom == 1) {
                return index >= 0 && index <= 2 ? (
                  <DeviceButton
                    key={deviceId}
                    handleDeviceButton={handleDeviceButton}
                    icon={"speaker"} // Replace with appropriate icons
                    color={"green"} // Replace with appropriate colors
                    label={`Device ${deviceId.charAt(deviceId.length - 1)}`}
                    deviceId={deviceId}
                    deviceState={devices[deviceId]}
                  />
                ) : (
                  ""
                );
              }
            })}
          </View>
          <View style={styles.buttonWrap}>
            {Object.keys(devices).map((deviceId, index) => {
              if (presentRoom == 2) {
                return index >= 3 && index <= 6 ? (
                  <DeviceButton
                    key={deviceId}
                    handleDeviceButton={handleDeviceButton}
                    icon={"speaker"} // Replace with appropriate icons
                    color={"green"} // Replace with appropriate colors
                    label={`Device ${deviceId.charAt(deviceId.length - 1)}`}
                    deviceId={deviceId}
                    deviceState={devices[deviceId]}
                  />
                ) : (
                  ""
                );
              }
            })}
          </View>
        </View>
      </ScrollView>
      {/* <BottomNav navigation={navigation} /> */}
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: "#111827",
    position: "relative", // Ensure the mainScreen acts as a relative positioning context for absolute positioning within it
  },

  userImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
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
