import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SharedUniversalComponent from "./SharedUniversalComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile experience (App.native.tsx)</Text>
      <SharedUniversalComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
