import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

const SingleStory = () => {
  return (
    <View style={styles.storyset}>
      <View style={styles.story}>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.pexels.com/photos/7784586/pexels-photo-7784586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          }}
        />
      </View>
      <Text style={styles.title}>Tom Wilson</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  storyset: {
    marginRight: 10,
  },
  story: {
    padding: 2,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#FF005C",
  },
  image: {
    width: 55,
    height: 55,
    resizeMode: "cover",
    borderRadius: 15,
  },
  title: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 14,
  },
});

export default SingleStory;
