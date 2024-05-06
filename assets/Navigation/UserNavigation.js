import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Home from "../../components/screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../../components/screens/settings";
import Profile from "../../components/screens/Profile";
import BottomTabButton from "../../components/BottomTabButton";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../Helper/Constant";
import { AppContext } from "../Context/AppContext";
import BottomNavIconWrap from "../../components/BottomNavIconWrap";

export default function UserNavigation() {
  const { darkMode } = useContext(AppContext);
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: darkMode
            ? COLORS.PRIMARY_DARK
            : COLORS.PRIMARY_LIGHT,
          padding: "auto",
          height: 60,
        },
        headerShown: false,
        tabBarLabelStyle: {
          color: COLORS.light.gray,
          fontSize: 14,
          fontWeight: "700",
        },
        tabBarIconStyle: {
          color: COLORS.dark.gray,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <BottomNavIconWrap isVisible={focused ? true : false}>
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={24}
                  color={focused ? COLORS.dark.green : COLORS.dark.gray}
                />
              </BottomNavIconWrap>
            );
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <BottomNavIconWrap isVisible={focused ? true : false}>
                <Ionicons
                  name={focused ? "settings" : "settings-outline"}
                  size={24}
                  color={focused ? COLORS.dark.green : COLORS.dark.gray}
                />
              </BottomNavIconWrap>
            );
          },
        }}
        name="settings"
        component={Settings}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <BottomNavIconWrap isVisible={focused ? true : false}>
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  size={24}
                  color={focused ? COLORS.dark.green : COLORS.dark.gray}
                />
              </BottomNavIconWrap>
            );
          },
        }}
        name="profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
