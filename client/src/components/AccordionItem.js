import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIconst from "react-native-vector-icons/MaterialIcons";
import React from "react";

const AccordionItem = ({ title, bodyText }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <view style={styles.titleContainer}>
          <Text style={styles.title}>titulo</Text>
          <MaterialIcons name={"keyboard-arrow-right"} size={30} />
        </view>
      </TouchableOpacity>
      <View style={styles.body}>
        <text>aqui va un texto</text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: "2%",
    borderRadius: 12,
    backgroundColor: "white",
    marginBottom: "2%",
    overflow: "hidden",
  },
  title: {
    fontSize: 16,
    color: "#2d2d2d",
    fontWeight: "bold",
  },
  body: {
    paddingHorizontal: "2%",
    paddingVertical: "3%",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default AccordionItem;
