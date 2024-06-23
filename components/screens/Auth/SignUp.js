import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../customInput";
import SubmitButton from "../../SubmitButton";
import { COLORS } from "../../../assets/Helper/Constant";
import Loader from "../../Loader";

export default function SignUp({ navigation }) {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      {loading && <Loader />}
      <View style={styles.topSection}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/icon.png")}
        />
        <Text style={styles.welcText}>Welcome to Home Auto</Text>
        <Text style={styles.pageTtile}>Sign Up</Text>
      </View>
      <View style={styles.form}>
        {/* <CustomInput placeholder="Name" /> */}
        <CustomInput placeholder="Email" />
        <CustomInput placeholder="Password" />
        <CustomInput placeholder="Confirm Password" />
        <SubmitButton />
        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.bottomLink}>Log in</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  pageTtile: {
    fontSize: 30,
    fontWeight: "900",
  },
  topSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcText: {
    color: "green",
    fontSize: 25,
  },
  image: {
    width: 200,
    height: 200,
  },
  form: {
    width: "100%",
    padding: 20,
    rowGap: 15,
    flex: 1,
    justifyContent: "center",
  },
  bottomLink: {
    textAlign: "center",
    color: COLORS.light.green,
    fontSize: 16,
  },
});
