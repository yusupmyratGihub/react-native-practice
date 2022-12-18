import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Flex1 from "./components/flex/flex1";
import Flex2 from "./components/flex/flex2";
import Flex3 from "./components/flex/flex3";
import Flex4 from "./components/flex/flex4";
import Flex5 from "./components/flex/flex5";
import Position from "./components/position/position";
import CategoryManager from "./components/practice-category/category-manager";
import Practice1 from "./components/practice-flexbox/practice1";
import Flexparctice from "./components/style-types/flexparctice";
{
  /*rnfes */
}

export default function App() {
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      {/*<Flex1 />
      <Flex2 />
      <Flex3 />
      <Flex4 />
      
      
      */}
      <CategoryManager />
    </View>
  );
}
