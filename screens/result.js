import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Banner from "../components/banner";
import Title from "../components/title";

const Result = ({ navigation, route }) => {
  const { score } = route.params;
  return (
    <View style={styles.container}>
      <Title titleText={"Results"} />
      <Text style={styles.scoreText}>{score}</Text>
      <Banner type={score > 60 ? "success" : "failure"} />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
    height: "100%",
  },
  button: {
    backgroundColor: "#004A8F",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "800",
    alignSelf: "center",
    color: "white",
  },
});
