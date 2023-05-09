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

const Sections = ({ navigation }) => {
  const bomSections = [
    "First Nephi",
    "Second Nephi",
    "Jacob",
    "Enos",
    "Jarom",
    "Omni",
    "Words of Wisdom",
    "Mosiah",
    "Alma",
    "Origin",
    "Other",
  ];

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
                {s}
              </Text>
              <Text style={rootStyles.percentageText}>0%</Text>
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
});
