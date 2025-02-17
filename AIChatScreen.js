import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AIChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the AI Chat!</Text>
      {/* You can integrate an AI chatbot here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});

export default AIChatScreen;
