import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";

const Categories = ({ categories }) => {
  return (
    <View>
      <Text>Kategoriler {3}</Text>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index}
        renderItem={(category) => (
          <View style={styles.category}>
            <View>
              <Text style={styles.text}>{category.item.title}</Text>
              <Text style={styles.desc}>{category.item.desc}</Text>
            </View>
            <TouchableHighlight
              onPress={() => console.log("ok")}
            ></TouchableHighlight>
          </View>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
  },
  desc: {
    fontSize: 14,
  },
});
