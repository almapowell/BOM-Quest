import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Title from "../components/title";
import Banner from "../components/banner";
import rootStyles from "../components/styles";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title titleText={"B.O.M Quest"} />
      <Banner type="home" />
      <TouchableOpacity
        onPress={() => navigation.navigate("Sections")}
        style={[
          rootStyles.wideButton,
          { backgroundColor: "#FFC300", justifyContent: "center" },
        ]}
      >
        <Text style={[rootStyles.wideButtonText, { color: "black" }]}>
          Start Playing
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

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
});
