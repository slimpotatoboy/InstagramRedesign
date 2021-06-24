import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

const Navigate = ({ children }) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default Navigate;
