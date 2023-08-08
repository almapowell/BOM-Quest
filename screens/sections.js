import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import Title from "../components/title";
import rootStyles from "../components/styles";
import Chevron from "../components/chevron";
import AsyncStorage from "@react-native-async-storage/async-storage";

const bomSections = [
  { label: "First Nephi", value: "nephi1" },
  { label: "Second Nephi", value: "nephi2" },
  { label: "Jacob", value: "jacob" },
  { label: "Enos", value: "enos" },
  { label: "Jarom", value: "jarom" },
  { label: "Omni", value: "omni" },
  { label: "Words of Wisdom", value: "words" },
  { label: "Mosiah", value: "mosiah" },
  { label: "Alma", value: "alma" },
  { label: "Origin", value: "origin" },
  { label: "Other", value: "other" },
];

const Sections = ({ navigation, route }) => {
  const [percentages, setPercentages] = React.useState([]);

  const getPercentages = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("percentages");
      setPercentages(jsonValue ? JSON.parse(jsonValue) : []);
    } catch (e) {
      // read error
    }
  };

  const calculatePercentage = (fraction) => {
    const first = fraction?.split("/")[0];
    const second = fraction?.split("/")[1];
    let wholeValue = ((first / second) * 100).toFixed();
    return wholeValue + "%";
  };

  React.useEffect(() => {
    getPercentages();
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Title titleText={"B.O.M Sections"} />
      <SafeAreaView>
        <ScrollView>
          {bomSections.map((s, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("List", { section: s })}
              style={[rootStyles.wideButton, { backgroundColor: "#FFC300" }]}
            >
              <Text style={[rootStyles.wideButtonText, { color: "black" }]}>
                {s.label}
              </Text>
              <View style={styles.display}>
                <Text style={rootStyles.percentageText}>
                  {calculatePercentage(percentages[s.value])}
                </Text>
                <Chevron />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Sections;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 80,
    paddingHorizontal: 16,
    height: "100%",
  },
  button: {
    width: "100%",
    backgroundColor: "green",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  display: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
});
