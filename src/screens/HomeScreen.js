import React, { useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header";

export default function HomeScreen({ navigation }) {
  const { addToCart } = useContext(CartContext);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate("ProductDetails", { product: item })
            }
            onAdd={() => addToCart(item)}
          />
        )}
        contentContainerStyle={{ padding: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2FFF5" },
});
