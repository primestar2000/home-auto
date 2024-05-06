import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "../../components/screens/Auth/Login";
import SignUp from "../../components/screens/Auth/SignUp";

export default function GuestNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
