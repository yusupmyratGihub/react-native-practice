import { View, Text } from "react-native";

const Flex4 = () => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        flex: 1,

        justifyContent: "space-between",
        padding: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "green",
            marginRight: 10,

            flex: 1,
          }}
        >
          <Text>Section 2</Text>
        </View>

        <View
          style={{
            backgroundColor: "red",

            flex: 2,
          }}
        >
          <Text>Section 2</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "green",
            marginRight: 10,

            flex: 2,
          }}
        >
          <Text>Section 2</Text>
        </View>

        <View
          style={{
            backgroundColor: "red",

            flex: 1,
          }}
        >
          <Text>Section 2</Text>
        </View>
      </View>
    </View>
  );
};
export default Flex4;
