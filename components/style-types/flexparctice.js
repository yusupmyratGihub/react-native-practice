import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalstyle from "./globalstyle";

const Flexparctice = () => {
  return (
    <View style={globalstyle.ekran}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Section1</Text>
      </View>

      <View style={styles.row2}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Section2</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Section3</Text>
        </View>
      </View>

      <View style={styles.row2}>
        <View style={[styles.button, { flex: 2 }]}>
          <Text style={styles.buttonText}>Section4</Text>
        </View>
        <View style={[styles.button, { flex: 1, marginLeft: 5 }]}>
          <Text style={styles.buttonText}>Section5</Text>
        </View>
      </View>
    </View>
  );
};

export default Flexparctice;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    backgroundColor: "red",
    padding: 40,
    alignItems: "stretch",
  },
  button: {
    backgroundColor: "gray",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 25,
    color: "white",
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
