import React from "react";
import { View, Image, StyleSheet } from "react-native";

export const StoryScreen = () => {
  return (
    <View>
      <Image
        style={styles.story}
        source={{
          uri: "https://images.pexels.com/photos/7784586/pexels-photo-7784586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: "100%",
    height: "100%",
  },
});
