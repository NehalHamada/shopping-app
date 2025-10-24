import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function CartItem({ item, onRemove }) {
  return (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.remove} onPress={onRemove}>
        <Text style={styles.removeText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },
  image: { width: 60, height: 60, marginRight: 10 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { color: "#28A745", marginTop: 4 },
  remove: { padding: 5 },
  removeText: { color: "#E74C3C", fontSize: 18 },
});
