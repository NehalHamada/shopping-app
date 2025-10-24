import React, { useContext } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Header from "../components/Header";

export default function CartScreen() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cart" />
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem item={item} onRemove={() => removeFromCart(item.id)} />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Your cart is empty 🛒</Text>
        }
      />
      {cart.length > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
          <Text style={styles.clearText}>Clear Cart</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2FFF5" },
  empty: { textAlign: "center", marginTop: 50, fontSize: 18, color: "gray" },
  clearButton: {
    backgroundColor: "#E74C3C",
    padding: 15,
    margin: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  clearText: { color: "#fff", fontWeight: "bold" },
});
