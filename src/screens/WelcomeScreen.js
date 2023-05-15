import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";

const Welcome = () => {
  return (
    <ImageBackground
      style={styles.backgroundImageStyle}
      source={require("./../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("./../assets/logo-red.png")}
          style={styles.logo}
        />
        <Text style={styles.textStyles}>sell what you don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImageStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  textStyles: {
    textTransform: "capitalize",
  },
});

export default Welcome;
