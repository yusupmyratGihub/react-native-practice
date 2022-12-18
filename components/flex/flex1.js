import { View } from "react-native";

const Flex1 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      {/* alignItems: "center"  => Babaya cocuklarini ortala demek*/}
      <View
        style={{ backgroundColor: "green", padding: 10, alignItems: "center" }}
      >
        <Text>Selection 1</Text>
      </View>

      <View
        style={{ backgroundColor: "gray", padding: 10, alignItems: "center" }}
      >
        <Text>Selection 2</Text>
      </View>

      <View
        style={{ backgroundColor: "red", padding: 10, alignItems: "center" }}
      >
        <Text>Selection 3</Text>
      </View>
    </View>
  );
};
export default Flex1;
