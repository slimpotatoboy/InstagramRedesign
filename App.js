import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navigate from "./components/Navigate";
import StackNav from "./components/StackNav";

export default function App() {
  return (
    <Navigate>
      <StackNav />
      <StatusBar backgroundColor="#FF005C" translucent={false} />
    </Navigate>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});
