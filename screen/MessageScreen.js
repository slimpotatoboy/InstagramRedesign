import React from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";

const DATA = [
  {
    id: 1,
    name: "Ralphp Edward",
    message: "Im doing homeword, but...",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    active: true,
  },
  {
    id: 2,
    name: "Ralphp Edward",
    message: "Im doing homeword, but...",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    active: true,
  },
  {
    id: 3,
    name: "Ralphp Edward",
    message: "Im doing homeword, but...",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    active: true,
  },
];

const MessageScreen = () => {
  const renderItem = ({ item }) => (
    <View
      style={styles.singlemessage}
      backgroundColor={!!item.active && "#FFFFFF"}
      borderWidth={!!item.active && 1}
      borderColor={!!item.active && "#fff"}
    >
      <View style={styles.imageView}>
        <Image style={styles.image} source={{ uri: item.image }} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.message}>
      <Text>Messages</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  message: {},
  singlemessage: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  imageView: {
    borderRadius: 18,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 18,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default MessageScreen;
