import { View } from "react-native";
import { COLORS } from "../assets/Helper/Constant";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import { useEffect, useState } from "react";
export default function BottomNavIconWrap({ children, isVisible }) {
  const [visibility, setVisibility] = useState();

  useEffect(() => {
    function trigger() {
      paddX.value = 20;
    }
    trigger();
  }, [isVisible]);
  const paddX = useSharedValue(0);

  const AnimatedStyle = useAnimatedStyle(() => {
    return {
      paddingHorizontal: withTiming(paddX.value, { duration: 1000 }),
    };
  });
  return (
    <Animated.View
      style={[
        {
          backgroundColor: isVisible ? "rgba(221, 255, 235, 1)" : "transparent",
          paddingVertical: 5,
          paddingHorizontal: 0,
          borderRadius: 50,
        },
        AnimatedStyle,
      ]}
    >
      {children}
      {/* Render the children directly without double curly braces */}
    </Animated.View>
  );
}
