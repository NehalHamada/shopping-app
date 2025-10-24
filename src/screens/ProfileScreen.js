import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Profile" />
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to your profile!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 18, color: "#333" },
});
