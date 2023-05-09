import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Title from "../components/title";
import Banner from "../components/banner";
import rootStyles from "../components/styles";

const List = ({ navigation, route }) => {
  const { section } = route.params;
  return (
    <View style={styles.container}>
      <Title titleText={section} />
      <View style={styles.listContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Sections")}
            style={[styles.item]}
          >
            <Text style={[{ color: "white" }]}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 80,
    paddingHorizontal: 16,
    height: "100%",
  },
  button: {
    width: "100%",
    backgroundColor: "#004A8F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "auto",
  },
  item: {
    backgroundColor: "#535353",
    height: 50,
    width: 50,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 7,
  },
});
