import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import SingleStory from "./SingleStory";
import { Entypo } from "@expo/vector-icons";

const Story = ({ navigation }) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.addMe}>
          <View style={styles.add}>
            <Entypo name="plus" size={32} color="#FF005C" />
          </View>
          <Text style={styles.title}>Me</Text>
        </View>
        <SingleStory navigation={navigation} />
        <SingleStory navigation={navigation} />
        <SingleStory navigation={navigation} />
        <SingleStory navigation={navigation} />
        <SingleStory navigation={navigation} />
        <SingleStory navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingLeft: 20,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  addMe: {
    marginRight: 10,
  },
  add: {
    backgroundColor: "#fff",
    width: 64,
    height: 64,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 14,
  },
});

export default Story;
