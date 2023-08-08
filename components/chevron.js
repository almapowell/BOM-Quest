import React from "react";
import { StyleSheet, View } from "react-native";

const Chevron = () => {
  return <View style={styles.chev} />;
};

export default Chevron;

const styles = StyleSheet.create({
  chev: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#272822",
    transform: [{ rotate: "90deg" }],
  },
});
