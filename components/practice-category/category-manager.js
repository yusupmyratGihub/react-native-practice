import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import FAB from "../common/fab";
import Categories from "./categories";
import AddCategory from "./add-category";

const CategoryManager = () => {
  const [modelVisible, setmodelVisible] = useState(false);
  const [categories, setcategories] = useState([
    {
      title: "Cerezler",
      desc: "Findik,Fistik,Leblebi",
    },
    {
      title: "Meyveler",
      desc: "Elma, Armut,Ayva,Mandalina",
    },
  ]);
  return (
    <View style={styles.container}>
      <Categories categories={categories} />
      <AddCategory
        modelVisible={modelVisible}
        setmodelVisible={setmodelVisible}
      />
      <FAB />
    </View>
  );
};

export default CategoryManager;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
