import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { FontAwesome } from "@expo/vector-icons";
import PersonalInfoListItem from "../PersonalInfoList";
import * as Linking from "expo-linking";
import BottomNav from "../BottomNav";
import { useContext } from "react";
import { AppContext } from "../../assets/Context/AppContext";
import { COLORS } from "../../assets/Helper/Constant";

export default function Profile({ navigation }) {
  const bgImage = require("../../assets/images/img_building.jpg");
  const userImage = require("../../assets/images/user.jpeg");
  const { darkMode } = useContext(AppContext);
  return (
    <View style={Styles.Layout}>
      <View style={Styles.backgroundContainer}>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={Styles.container}
        >
          <View style={Styles.topSection}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
            >
              <MaterialIcons name={"chevron-left"} size={40} color={"white"} />
            </Pressable>
            <View style={Styles.profileInfoCont}>
              <Image source={userImage} style={Styles.UserImg} />
              <Text style={Styles.username}>Stephen simon</Text>
              <Text style={Styles.userPosition}>C.E.O Pitechy</Text>
              <View style={Styles.socialIconsWrap}>
                <Pressable
                  onPress={() => {
                    Linking.openURL("https://expo.dev");
                  }}
                >
                  <FontAwesome
                    name="facebook"
                    size={30}
                    color="#1e6dc4"
                    style={Styles.buttonIcon}
                  />
                </Pressable>
                <FontAwesome
                  name="twitter"
                  size={30}
                  color="#4cc3fb"
                  style={Styles.buttonIcon}
                />
                <FontAwesome
                  name="google"
                  size={30}
                  color="#f8374a"
                  style={Styles.buttonIcon}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View
        style={[
          Styles.BottomContainer,
          {
            backgroundColor: darkMode
              ? COLORS.PRIMARY_DARK
              : COLORS.PRIMARY_LIGHT,
          },
        ]}
      >
        <View style={{ height: "fit-content" }}>
          <View style={Styles.aboutMeCont}>
            <Text
              style={{
                fontWeight: "800",
                fontSize: 16,
                textAlign: "center",
                color: "white",
              }}
            >
              About Me
            </Text>

            <Text
              style={{
                textAlign: "justify",
                fontSize: 13,
                color: "white",
              }}
            >
              I'm Stephen simon, CEO of Pitechy, and I'm passionate about
              harnessing technology to make life simpler and more efficient. At
              Pitechy, we believe in the power of technology to shape a brighter
              future.
            </Text>
          </View>
        </View>
        <View
          style={[
            Styles.personalInfoContainer,
            {
              backgroundColor: darkMode
                ? COLORS.SECONDARY_DARK
                : COLORS.PRIMARY_LIGHT,
            },
          ]}
        >
          <Text
            style={{
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: 16,
              color: darkMode ? COLORS.light.white : COLORS.dark.gray,
            }}
          >
            Personal Information
          </Text>
          <PersonalInfoListItem title="Phone" value="+234 8052630338" />
          <PersonalInfoListItem title="Email" value="primstar2000@gmail.com" />
          <PersonalInfoListItem title="Facebook" value="stephen simon" />
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}></View>
    </View>
  );
}

const Styles = StyleSheet.create({
  Layout: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    position: "relative",
    objectFit: "cover",
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  topSection: {},
  profileInfoCont: {
    alignItems: "center",
  },
  UserImg: {
    width: 110,
    height: 110,
    borderRadius: 200,
  },
  username: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  userPosition: {
    color: "white",
  },
  socialIconsWrap: {
    flexDirection: "row",
    padding: 10,
    gap: 15,
  },
  BottomContainer: {
    width: "100vw",
    padding: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#f7efef",
    height: "50%",
  },
  aboutMeCont: {
    width: "100%",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "rgba(6, 6, 6, 0.8)",
    alignSelf: "center",
    top: "-40%",
  },
  personalInfoContainer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
  },
});
