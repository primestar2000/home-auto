import { View, Image, StyleSheet } from "react-native";
import { heroImages } from "../assets/helper";

export default function HeroImageContainer() {
  console.log(heroImages[0].url);
  return (
    <Image
      style={Styles.heroImage}
      source={require(`../assets/images/room2.jpg`)}
    />
  );
}

const Styles = StyleSheet.create({
  heroImage: {
    width: "100%",
    // height: 200,
    height: "40vh",
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
