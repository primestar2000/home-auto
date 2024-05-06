import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../../customInput";
import SubmitButton from "../../SubmitButton";
import { COLORS } from "../../../assets/Helper/Constant";

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTtile}>Sign Up</Text>
      <View style={styles.form}>
        <CustomInput placeholder="Name" />
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
