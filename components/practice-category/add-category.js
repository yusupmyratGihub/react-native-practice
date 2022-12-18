import { Alert, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";

const AddCategory = (props) => {
  const { modalVisible, setModalVisible } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal");
      }}
    >
      <Text>AddCategory</Text>
    </Modal>
  );
};

export default AddCategory;

const styles = StyleSheet.create({});
