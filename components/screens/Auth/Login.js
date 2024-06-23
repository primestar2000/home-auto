import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomInput from "../../customInput";
import SubmitButton from "../../SubmitButton";
import { COLORS } from "../../../assets/Helper/Constant";
import Loader from "../../Loader";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(email, password);
  }, [email, password]);
  const login = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
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
        <Text style={styles.pageTtile}>Login</Text>
      </View>
      <View style={styles.form}>
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
        <SubmitButton
          onPress={() => {
            login();
            // navigation.navigate("UserNavigation");
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
  form: {
    width: "100%",
    padding: 20,
    rowGap: 15,
    flex: 1,
  },
  bottomLink: {
    textAlign: "center",
    color: COLORS.light.green,
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
});
