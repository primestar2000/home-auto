import { Pressable, StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import CustomInput from "../../customInput";
import SubmitButton from "../../SubmitButton";
import { COLORS } from "../../../assets/Helper/Constant";
import Loader from "../../Loader";
import { passwordConfirmed } from "../../../assets/Helper/helperFunction";
import {
  getAuth,
  createUserWithEmailAndPassword,
  EmailAuthCredential,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";

export default function SignUp({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  useEffect(() => {
    console.log(email, password);
  }, [email, password, confirmationPassword]);
  const createNewUser = async () => {
    //verify password confirmed
    if (await passwordConfirmed(password, confirmationPassword)) {
      setLoading(true);
      createUserWithEmailAndPassword(getAuth(), email, password)
        .then((userCredential) => {
          return updateProfile(getAuth().currentUser, {
            displayName: userName,
          });
        })
        .then(() => {
          console.log("profile updated");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      Alert.alert("password doesnt match");
    }
  };

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
        <CustomInput
          placeholder="Username"
          onChangeText={(text) => {
            setUserName(text);
          }}
        />
        <CustomInput
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <CustomInput
          placeholder="Password"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <CustomInput
          placeholder="Confirm Password"
          onChangeText={(text) => {
            setConfirmationPassword(text);
          }}
        />
        <SubmitButton
          onPress={() => {
            createNewUser();
          }}
        />
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
