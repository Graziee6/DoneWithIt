import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "./src/screens/WelcomeScreen";
import ImageScreen from "./src/screens/ImageScreen";

const navigator = createStackNavigator({
  Welcome: Welcome,
  ImageScreen: ImageScreen
},{
  initialRouteName:"Welcome",
  defaultNavigationOptions:{
    title:"DoneWithIt App"
  }
})

export default createAppContainer(navigator)
