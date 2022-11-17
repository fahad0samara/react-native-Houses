import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";

const OnBoardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/jazanIntro.jpg")}
      >
        <View style={style.details}>
          <Text style={{ color: "white", fontSize: 35, fontWeight: "bold" }}>
            Discover
          </Text>
          <Text style={{ color: "white", fontSize: 35, fontWeight: "bold" }}>
            Jazan with us
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("MainContainer")}
          >
            <View style={style.btn}>
              <Text style={{ fontWeight: "bold" }}>Get Started</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <View style={style.btnr}>
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Get Rented
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: "50%",
    bottom: 0,
    position: "absolute",
    paddingHorizontal: 40,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },

  btnr: {
    height: 50,
    width: 120,
    backgroundColor: "blue",
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    textColor: "white",
  },
});
export default OnBoardScreen;
