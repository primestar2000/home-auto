import {
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  TextInput,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "react-native";
import { useContext, useEffect, useState } from "react";
import SettingsInput from "../settingsInput";
import { COLORS } from "../../assets/Helper/Constant";
import { AppContext } from "../../assets/Context/AppContext";
import SettingsCard from "../SettingsCard";
import SelectComponent from "../SelectComponent";
import SelectItem from "../SelectItem";
import { DeviceEndpoint } from "../../assets/Helper/FakeData";

export default function Settings() {
  const [inputedIpValue, setInputedIpValue] = useState("");
  const [networkIpDisplay, setNetworkIpDisplay] = useState("");
  const [selectedDevice, setSelectedDevice] = useState(null);
  const {
    user,
    setUser,
    darkMode,
    setDarkMode,
    networkIp,
    setNetworkIp,
    signOutUser,
  } = useContext(AppContext);

  // useEffect(() => {
  //   console.log(inputedIpValue);
  // }, [inputedIpValue]);

  return (
    <ScrollView>
      <View
        style={[
          Styles.container,
          { backgroundColor: darkMode ? COLORS.PRIMARY_DARK : "white" },
        ]}
      >
        <SettingsCard title={"General Information"}>
          <View style={Styles.formWrap}>
            <SettingsInput placeholder={"name"} />
            <SettingsInput placeholder={"Sex"} />
          </View>
        </SettingsCard>

        <SettingsCard
          title={"Network IP"}
          onPress={() => {
            if (inputedIpValue != "") {
              if (!(inputedIpValue < 12)) {
                setNetworkIp(inputedIpValue);
              }
            }
          }}
        >
          <View style={Styles.formWrap}>
            <SettingsInput
              type={"numeric"}
              placeholder="192.168......"
              onChangeText={(text) => {
                setInputedIpValue(text);
              }}
            />
            <Text
              style={{
                color: darkMode ? COLORS.dark.white : COLORS.dark.gray,
              }}
            >
              {networkIp}
            </Text>
          </View>
        </SettingsCard>
        <SettingsCard title={"preference"}>
          <View
            style={[
              Styles.darkModeWrap,
              { flexDirection: "row", justifyContent: "space-between" },
            ]}
          >
            <Text style={Styles.darkModeLabel}>Dark Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={() => {
                setDarkMode(!darkMode);
              }}
            />
          </View>
        </SettingsCard>
        <SettingsCard title={"Add Device Endpoint"}>
          <View style={Styles.formWrap}>
            <SettingsInput placeholder={"Title"} />
            <SelectComponent title={"Select Endpoint"} value={selectedDevice}>
              {DeviceEndpoint.map((device) => {
                return (
                  <SelectItem
                    onPress={() => {
                      console.log(device.endpoint);
                      setSelectedDevice(device.endpoint);
                    }}
                    key={device.id}
                  >
                    {device.endpoint}
                  </SelectItem>
                );
              })}
            </SelectComponent>
          </View>
        </SettingsCard>
        <Button
          title="Log out"
          onPress={() => {
            signOutUser();
          }}
        />
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#111827",
  },
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
  formWrap: {
    rowGap: 10,
    padding: 10,
  },
  cardTitle: {
    textAlign: "center",
    margin: 10,
    fontSize: 18,
    color: COLORS.light.white,
  },
  darkModeWrap: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  darkModeLabel: {
    color: COLORS.light.gray,
    fontSize: 16,
  },
});
