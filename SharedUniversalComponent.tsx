import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SharedUniversalComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shared Universal Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    padding: 20,
  },
  text: {
    color: "white",
  },
});
