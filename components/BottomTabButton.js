import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function BottomTabButton({ size }) {
  return (
    <TouchableOpacity>
      <Ionicons name="home" style={{ fontSize:0 }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
