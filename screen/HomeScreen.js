import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Story from "../components/Story";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Story />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFF3F5",
  },
});

export default HomeScreen;
