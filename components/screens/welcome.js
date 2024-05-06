import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  console.log("welcome screen mounts");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.iconImage}
          source={require("../../assets/logo.jpg")}
        />
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate("home");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>Get Started</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b0a36",
    alignItems: "center",
  },
  content: {
    position: "absolute",
    top: "10%",
    justifyContent: "center",
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "cursive",
  },
  iconImage: {
    width: 250,
    height: 250,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#da3b00",
    padding: 10,
    borderRadius: 20,
    position: "absolute",
    bottom: 0,
    marginBottom: 40,
  },
});
