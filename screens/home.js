import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Title from "../components/title";
import Banner from "../components/banner";
import rootStyles from "../components/styles";
// import * as Progress from "react-native-progress";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Progress.Bar progress={0.3} width={200} />
      <Progress.Pie progress={0.4} size={50} />
      <Progress.Circle size={30} indeterminate={true} />
      <Progress.CircleSnail color={["red", "green", "blue"]} /> */}
      <Title titleText={"B.O.M Quest"} />
      <Banner type="home" />
      <TouchableOpacity
        onPress={() => navigation.navigate("Sections")}
        style={[rootStyles.wideButton, { backgroundColor: "#FFC300" }]}
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
    paddingTop: 40,
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
