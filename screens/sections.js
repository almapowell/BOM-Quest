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
    "1 Nephi",
    "2 Nephi",
    "Jacob",
    "Enos",
    "Joam",
    "Omni",
    "Words of Wisdom",
    "Mosiah",
    "Alma",
    "Helaman",
    "3 Nephi",
    "4 Nephi",
    "Ether",
    "Mormon",
  ];

  return (
    <View style={styles.container}>
      <Title titleText={"B.O.M Sections"} />
      <SafeAreaView>
        <ScrollView>
          {bomSections.map((s, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Quest")}
              style={[
                rootStyles.wideButton,
                { backgroundColor: "#FFC300", opacity: index === 0 ? 1 : 0.2 },
              ]}
            >
              <Text style={[rootStyles.wideButtonText, { color: "black" }]}>
                {s}
              </Text>
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
    paddingTop: 40,
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
