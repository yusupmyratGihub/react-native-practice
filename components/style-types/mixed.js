import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalstyle from "./globalstyle";

const Mixed = () => {
  return (
    <View style={[globalstyle.ekran, { backgroundColor: "red" }]}>
      {/* style tanimlarken karisik bu sekilde tanimlanir */}
      <Text>Mixed</Text>
    </View>
  );
};

export default Mixed;
