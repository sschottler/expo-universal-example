import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SharedUniversalComponent from "./SharedUniversalComponent";
import DropdownMenu from "./DropdownMenu";

export default function App() {
  return (
    <View style={styles.container}>
      <h1>Web experience (App.web.tsx)</h1>
      <DropdownMenu />

      <div style={{ padding: 20 }}>
        <SharedUniversalComponent />
      </div>
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
});
