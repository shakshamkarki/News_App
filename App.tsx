import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

// Dummy posts data
const initialPosts = Array.from({ length: 15 }, (_, index) => ({
  id: `${index + 1}`,
  username: `user_${index + 1}`,
  profileImage: `https://placeimg.com/100/100/people${index}`,
  image: `https://placeimg.com/640/480/nature${index}`,
  caption: `Post #${index + 1} - Enjoying the view!`,
}));

const App = () => {
  // State for last updated timestamp & posts
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [posts] = useState(initialPosts);

  // Update the timestamp every 2 hours
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 7200000); // 2 hours in milliseconds
    return () => clearInterval(interval);
  }, []);

  // Formatting the date and time
  const formatLastUpdated = () => {
    const options = { hour: "numeric", minute: "2-digit", hour12: true };
    const time = lastUpdated.toLocaleTimeString("en-US", options).toLowerCase();
    const date = lastUpdated.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    return `${date} || ${time}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Top Container with Robot Icon and Text */}
        <View style={styles.topContainer}>
          <Text style={styles.profileEmoji}>🤖</Text>
          <Text style={styles.searchText}>Want to make it more customized?</Text>
        </View>

        {/* Last Updated Container */}
        <View style={styles.lastUpdatedContainer}>
          <Text style={styles.lastUpdatedText}>Last Updated:</Text>
          <Text style={styles.lastUpdatedTime}>{formatLastUpdated()}</Text>
        </View>

        {/* Posts Feed */}
        {posts.map((post) => (
          <View key={post.id} style={styles.postContainer}>
            <Text style={styles.username}>{post.username}</Text>
            <Image source={{ uri: post.image }} style={styles.postImage} />
            <Text style={styles.caption}>{post.caption}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollContainer: {
    padding: 10,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    width: screenWidth * 0.89,
  },
  profileEmoji: {
    fontSize: 24,
    marginRight: 10,
    opacity: 0.1, // Fixed opacity value
  },
  searchText: {
    fontSize: 12,
    color: "#A9A9A9",
  },
  lastUpdatedContainer: {
    width: screenWidth * 0.32, // Takes up 32% of the screen width
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 14,
    marginBottom: 10,
    alignItems: "flex-start", // Fixed incorrect align property
  },
  lastUpdatedText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "red",
  },
  lastUpdatedTime: {
    fontSize: 10,
    color: "blue",
  },
  postContainer: {
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  postImage: {
    width: "100%",
    height: 200,
    marginBottom: 5,
    borderRadius: 10,
  },
  caption: {
    fontSize: 14,
    color: "#333",
  },
});

export default App;
