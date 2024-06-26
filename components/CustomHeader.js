import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext } from "react";
import { COLORS } from "../assets/Helper/Constant";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AppContext } from "../assets/Context/AppContext";

export default function CustomHeader() {
  const { darkMode, setDarkMode, loggedInUser } = useContext(AppContext);

  const altUserImage = require("../assets/images/altUserImage.png");
  const appOwnerImage = require("../assets/images/user.jpeg");
  let userImage;
  if (loggedInUser.photoURL) {
    userImage = loggedInUser.photoURL;
  } else if (loggedInUser.email == "primestar2000@gmail.com") {
    userImage = appOwnerImage;
  } else {
    userImage = altUserImage;
  }
  return (
    <View
      style={[
        styles.topLayout,
        { backgroundColor: darkMode ? COLORS.PRIMARY_DARK : "white" },
      ]}
    >
      <View style={styles.topFirstCol}>
        <Pressable>
          <Image style={styles.userImage} source={userImage} />
        </Pressable>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={[
              styles.screenTitle,
              { color: darkMode ? "white" : COLORS.dark.gray },
            ]}
          >
            Prime Home
          </Text>
          <Text
            style={{
              color: "orange",
            }}
          >
            {loggedInUser.displayName
              ? loggedInUser.displayName
              : loggedInUser.email}
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.menuButton}
        onPress={() => {
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? (
          <Feather name="sun" size={24} color="orange" />
        ) : (
          <MaterialCommunityIcons
            name={"weather-night"}
            size={28}
            color={COLORS.dark.gray}
          />
        )}
      </Pressable>
      {/* <Pressable
        style={styles.menuButton}
        onPress={() => {
          setMenuStatus(!menuStatus);
        }}
      >
        <MaterialCommunityIcons
          name="dots-vertical"
          size={28}
          color={darkMode ? "white" : COLORS.dark.gray}
        />
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  topLayout: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
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
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  welcomeText: {
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
    paddingHorizontal: 20,
    padding: 10,
  },
  usernameText: {
    color: "violet",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  topFirstCol: {
    flexDirection: "row",
  },
  screenTitle: {
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
  },
});
