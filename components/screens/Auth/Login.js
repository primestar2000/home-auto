import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../../customInput";
import SubmitButton from "../../SubmitButton";
import { COLORS } from "../../../assets/Helper/Constant";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTtile}>Login</Text>
      <View style={styles.form}>
        <CustomInput placeholder="Email" />
        <CustomInput placeholder="Password" />
        <SubmitButton
          onPress={() => {
            navigation.navigate("UserNavigation");
          }}
        />
        <Pressable
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.bottomLink}>Create Account</Text>
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
    marginVertical: 20,
    fontWeight: "600",
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
