import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Image style={styles.image} source={{ uri: item.image }} />
    <Text style={styles.name}>{item.name}</Text>
  </TouchableOpacity>
);

export default function MessageScreen() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Messages</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

// const Item = ({ item }) => (
//   <View
//     style={styles.singlemessage}
//     backgroundColor={!!item.active && "#FFFFFF"}
//     borderWidth={!!item.active && 1}
//     borderColor={!!item.active && "#fff"}
//   >
//     <View style={styles.imageView}>
//       <Image style={styles.image} source={{ uri: item.image }} />
//     </View>
//     <Text style={styles.name}>{item.name}</Text>
//   </View>
// );

// const MessageScreen = () => {
//   const renderItem = ({ item }) => <Item item={item} />;
//   return (
//     <View style={styles.message}>
//       <Text>Messages</Text>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   message: {},
//   singlemessage: {
//     paddingVertical: 5,
//     paddingHorizontal: 20,
//     flexDirection: "row",
//   },
//   imageView: {
//     borderRadius: 18,
//   },
//   image: {
//     width: 50,
//     height: 50,
//     borderRadius: 18,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginLeft: 10,
//   },
// });

// export default MessageScreen;
