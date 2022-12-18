import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Practice1 = () => {
  return (
    <View style={styles.comtaiemr}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TechproEducation</Text>
        <Button title=" ..." color="#333333" />
      </View>

      <View style={styles.content}>
        <View style={styles.image1}></View>
        <Text style={styles.desc}>
          <Text style={{ fontWeight: "bold" }}>Lorem </Text> :Every five
          minutes, at least one Indian woman dies during pregnancy and
          childbirth. More than 80% deliveries occur with the assistance of
          staff nurses in LMICs (Low Middle-Income Countries). Most of these
          staff nurses are unaware of the standard protocol for monitoring the
          labor during pregnancy.{" "}
        </Text>

        <View style={styles.imageCOntainer}>
          <View style={styles.img2}></View>
          <View style={styles.img3}></View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button title="Tab1" color="#333333" />
        <Button title="Tab1" color="#333333" />
        <Button title="Tab1" color="#333333" />
      </View>
    </View>
  );
};

export default Practice1;

const styles = StyleSheet.create({
  comtaiemr: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "orange",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 25,
    color: "white",
  },
  footer: {
    backgroundColor: "orange",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  content: {
    padding: 20,
    flex: 1,
    backgroundColor: "yellow",
  },
  image1: {
    backgroundColor: "gray",
    width: "100%",
    height: 159,
  },
  desc: {
    marginVertical: 20,
    fontSize: 17,
  },
  imageCOntainer: { flexDirection: "row" },
  img2: { backgroundColor: "gray", height: 150, flex: 2 },
  img3: { backgroundColor: "gray", height: 150, flex: 3, marginLeft: 20 },
});
