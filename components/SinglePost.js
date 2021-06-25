import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const SinglePost = () => {
  const [heart, setHeart] = React.useState(false);
  const [save, setSave] = React.useState(false);
  return (
    <View style={styles.singlePost}>
      <View style={styles.firstPart}>
        <View style={styles.left}>
          <Image
            style={styles.photoIco}
            source={{
              uri: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            }}
          />
          <View style={styles.man}>
            <Text style={styles.profileTitle}>Robert Phan</Text>
            <Text style={styles.designation}>Designer</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Entypo name="dots-three-vertical" size={18} color="#484860" />
        </View>
      </View>
      <View style={styles.post}>
        <Text style={styles.postText}>This is so amazing</Text>
        <Image
          style={styles.postImage}
          source={{
            uri: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
          }}
        />
      </View>
      <View style={styles.reactions}>
        <View style={styles.left}>
          <FontAwesome
            style={styles.heart}
            name="heart-o"
            size={24}
            color={!heart ? "black" : "#FF005C"}
            onPress={() => setHeart(!heart)}
          />
          <FontAwesome name="comment-o" size={24} color="black" />
        </View>
        <View style={styles.right}>
          <FontAwesome
            name="bookmark"
            size={24}
            color={!save ? "black" : "#FF005C"}
            onPress={() => setSave(!save)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  singlePost: {
    padding: 20,
  },
  firstPart: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  photoIco: {
    width: 50,
    height: 50,
    borderRadius: 18,
    marginRight: 10,
  },
  profileTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  designation: {
    color: "#A4A4B2",
    fontSize: 14,
  },
  post: {
    marginBottom: 10,
  },
  postText: {
    fontSize: 16,
    width: "100%",
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
  reactions: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heart: {
    marginRight: 10,
  },
});

export default SinglePost;
