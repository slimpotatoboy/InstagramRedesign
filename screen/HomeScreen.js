import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Story from "../components/Story";
import Header from "../components/Header";
import SinglePost from "../components/SinglePost";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      <Story navigation={navigation} />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFF3F5",
  },
});

export default HomeScreen;
