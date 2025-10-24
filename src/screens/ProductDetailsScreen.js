import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartContext } from "../context/CartContext";

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => addToCart(product)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: { width: 150, height: 150, marginVertical: 20 },
  name: { fontSize: 22, fontWeight: "bold" },
  price: { fontSize: 18, color: "#28A745", marginVertical: 10 },
  button: {
    backgroundColor: "#28A745",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
