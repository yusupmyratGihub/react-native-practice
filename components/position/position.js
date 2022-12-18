import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Position = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buton}>
        <Text style={styles.buttonText}>+</Text>
      </View>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  buton: {
    backgroundColor: "blue",
    width: 50,
    height: 50,
    position: "absolute",
    right: 20,
    bottom: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  buttonText: { color: "white", fontSize: 40 },
});
