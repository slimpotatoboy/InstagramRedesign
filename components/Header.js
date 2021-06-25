import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Header = ({ navigation }) => {
  const goMessage = () => {
    navigation.navigate("Message");
  };
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Instagram</Text>
      <TouchableOpacity>
        <Entypo style={styles.icon} name="message" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  icon: {},
});

export default Header;
