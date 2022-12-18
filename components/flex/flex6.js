import { View, Text } from "react-native";

const Flex6 = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        alignItems: "flex-end",
        padding: 20,
        flex: 1,
      }}
    >
      {/* alignSelf: "center"
        View kendisini verir
        
        */}
      <View style={{ backgroundColor: "green", alignSelf: "center" }}>
        <Text>S1</Text>
      </View>
      <View style={{ backgroundColor: "green", alignSelf: "stretch" }}>
        <Text>S2</Text>
      </View>

      <View style={{ backgroundColor: "green", alignSelf: "flex-end" }}>
        <Text>S3</Text>
      </View>

      <View style={{ backgroundColor: "green", alignSelf: "flex-start" }}>
        <Text>S4</Text>
      </View>
    </View>
  );
};
export default Flex6;
