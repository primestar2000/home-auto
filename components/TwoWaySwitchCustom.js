import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { COLORS } from "../assets/Helper/Constant";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { AppContext } from "../assets/Context/AppContext";
export default function TwoWaySwitchCustom({ value, onChange }) {
  const [position, setPosition] = useState(value);
  const { darkMode } = useContext(AppContext);
  const left = useSharedValue(0);

  // function for onchange

  const animationStyle = useAnimatedStyle(() => {
    return {
      left: withTiming(left.value, { duration: 300 }),
    };
  });

  function trigerAnimation() {
    onChange();
    if (position == 1) {
      left.value = 60;
      setPosition(2);
    } else {
      left.value = 0;
      setPosition(1);
    }
  }
  return (
    <Pressable
      onPress={trigerAnimation}
      style={[
        styles.constainer,
        { backgroundColor: darkMode ? "rgba(92, 89, 91, 0.8)" : "transparent" },
      ]}
    >
      <Text style={styles.titles}>room1</Text>
      <Text style={[styles.titles, styles.activeLink]}>room2</Text>
      <Animated.View
        style={[styles.buttonOverlay, animationStyle]}
      ></Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    height: 30,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  titles: {
    width: 60,
    textAlign: "center",
    zIndex: 1,
    color: "white",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  buttonOverlay: {
    backgroundColor: "rgba(119, 116, 117, 0.8)",
    height: "100%",
    width: 60,
    borderRadius: 20,
    position: "absolute",
  },
});
