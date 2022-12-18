import { View, Text } from "react-native";

const Flex5 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red", padding: 10 }}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,

            backgroundColor: "green",
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>S1</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "green",
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>S2</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "green",
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>S3</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "green",
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>S4</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "green",
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>S5</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "green",
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>S6</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "green",
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>S7</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "green",
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>S8</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "green",
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>S9</Text>
        </View>
      </View>
    </View>
  );
};
export default Flex5;
