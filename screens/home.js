import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Title from "../components/title";
import Banner from "../components/banner";
import rootStyles from "../components/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }
    console.log("Done.");
  };

  const defaultPercentages = {
    alma: "0/2416",
    enos: "0/66",
    nephi1: "0/571",
    nephi2: "0/588",
    jacob: "0/303",
    jarom: "0/45",
    mosiah: "0/1083",
    omni: "0/92",
    origin: "0/102",
    other: "0/61",
    words: "0/44",
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("percentages");
      if (!jsonValue) {
        let jsonPercentages = JSON.stringify(defaultPercentages);
        await AsyncStorage.setItem("percentages", jsonPercentages);
      }
    } catch (e) {
      // error reading value
    }
  };

  const getPercentages = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("percentages");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // read error
    }
  };

  React.useEffect(() => {
    getData();
    // getPercentages();
  }, []);

  return (
    <View style={styles.container}>
      <Title titleText={"B.O.M Quest"} />
      <Banner type="home" />
      <TouchableOpacity
        onPress={() => navigation.navigate("Sections")}
        // onPress={() => clearAll()}
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
