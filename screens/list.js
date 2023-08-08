import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Title from "../components/title";
import alma from "../components/questions/alma.json";
import enos from "../components/questions/enos.json";
import nephi1 from "../components/questions/nephi1.json";
import nephi2 from "../components/questions/nephi2.json";
import jacob from "../components/questions/jacob.json";
import jarom from "../components/questions/jarom.json";
import mosiah from "../components/questions/mosiah.json";
import omni from "../components/questions/omni.json";
import origin from "../components/questions/origin.json";
import other from "../components/questions/other.json";
import words from "../components/questions/words.json";

const List = ({ navigation, route }) => {
  const { section } = route.params;
  const [cacheKeys, setCacheKeys] = React.useState([]);

  let questions = [];
  if (section.value === "alma") {
    questions = alma;
  } else if (section.value === "enos") {
    questions = enos;
  } else if (section.value === "jacob") {
    questions = jacob;
  } else if (section.value === "jarom") {
    questions = jarom;
  } else if (section.value === "mosiah") {
    questions = mosiah;
  } else if (section.value === "nephi1") {
    questions = nephi1;
  } else if (section.value === "nephi2") {
    questions = nephi2;
  } else if (section.value === "omni") {
    questions = omni;
  } else if (section.value === "origin") {
    questions = origin;
  } else if (section.value === "other") {
    questions = other;
  } else if (section.value === "words") {
    questions = words;
  }

  const getAllKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      // read key error
    }
    setCacheKeys(keys);
  };

  React.useEffect(() => {
    getAllKeys();
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Title titleText={section.label} />
      <ScrollView contentContainerStyle={styles.listContainer}>
        {questions.map((q, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Question", {
                questions,
                question: q,
                questionPosition: index + 1,
                section,
              })
            }
            style={[
              styles.item,
              cacheKeys.includes(q.id) && styles.correctAnswer,
            ]}
          >
            <Text style={[{ color: "white" }]}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  correctAnswer: {
    borderColor: "#00DB6F",
    borderWidth: "3px",
  },
});
