import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GuestNavigation from "./assets/Navigation/GuestNavigation";
import UserNavigation from "./assets/Navigation/UserNavigation";
import { AppContext } from "./assets/Context/AppContext";

export default function App() {
  const [networkIp, setNetworkIp] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const setItem = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log("Item set successfully!");
    } catch (error) {
      console.error("Error setting item:", error);
    }
  };

  const getItem = async (key) => {
    try {
      const item = await AsyncStorage.getItem(key);
      if (item !== null) {
        console.log(`Item retrieved successfully for key ${key}:`, item);
        if (key === "ipAddress") setNetworkIp(item);
        if (key === "darkMode") setDarkMode(item === "true");
      } else {
        console.log(`Item not found in AsyncStorage for key ${key}.`);
      }
    } catch (error) {
      console.error("Error getting item:", error);
    }
  };

  useEffect(() => {
    getItem("ipAddress");
    getItem("darkMode");
  }, []);

  useEffect(() => {
    if (networkIp !== "") setItem("ipAddress", networkIp);
  }, [networkIp]);

  useEffect(() => {
    setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  const Stack = createNativeStackNavigator();

  return (
    <AppContext.Provider
      value={{ networkIp, setNetworkIp, darkMode, setDarkMode }}
    >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="GuestNavigation"
        >
          <Stack.Screen
            name="GuestNavigation"
            component={GuestNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserNavigation"
            component={UserNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
