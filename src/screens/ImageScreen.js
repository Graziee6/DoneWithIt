import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";

import colors from "../config/colors";

export default function ImageScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.buttons}>
        <View style={styles.deleteButton}></View>
        <View style={styles.closeButton}></View>
      </View>
      <Image
        resizeMode="contain"
        style={styles.imageStyle}
        source={require("./../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#000",
    flex: 1,
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    width: "100%",
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight + 20 : null,
  },
  closeButton: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    position: "absolute",
    left: 40,
  },
  deleteButton: {
    backgroundColor: colors.secondary,
    width: 40,
    height: 40,
    position: "absolute",
    right: 40,
  },
  imageStyle: {
    height: "100%",
    width: "100%",
  },
});
