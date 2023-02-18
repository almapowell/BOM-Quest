import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import rootStyles from "../components/styles";
import questions from "../components/questions.json";
import Options from "./types/options";

const Quest = ({ navigation }) => {
  const [questionCount, setQuestionCount] = useState(1);

  const handleNextPress = () => {
    setQuestionCount((prev) => prev + 1);
  };

  const handlePreviousPress = () => {
    setQuestionCount((prev) => prev - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionsParent}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.questionCounter}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.questionCounter}>
            Question {questionCount}
            <Text style={{ fontWeight: "400", fontSize: 15 }}>
              /{questions.length}
            </Text>
          </Text>
        </View>

        <View style={styles.top}>
          <Text style={styles.question}>
            {questions[questionCount].question}
          </Text>
        </View>

        {/* OPTIONS */}
        <Options question={questions[questionCount]} />

        {/* BUTTONS */}
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={handlePreviousPress}
            style={rootStyles.primary}
          >
            <Text style={rootStyles.primaryText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNextPress}
            style={rootStyles.primary}
          >
            <Text style={rootStyles.primaryText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Quest;
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 16,
    height: "100%",
  },
  top: {
    marginVertical: 5,
  },

  bottom: {
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  questionsParent: {
    height: "100%",
  },
  question: {
    fontSize: 26,
    fontWeight: "400",
    color: "white",
    textAlign: "center",
  },
  questionCounter: {
    fontWeight: "500",
    color: "rgba(194, 218, 255, .5)",
    fontSize: 24,
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "400",
    color: "black",
  },
  optionButton: {
    backgroundColor: "white",
    borderColor: "black",
    paddingVertical: 18,
    marginVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 40,
    borderWidth: 2,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  optionButtonCorrect: {
    backgroundColor: "#00DB6F",
  },
  optionButtonWrong: {
    backgroundColor: "#FF4888",
  },
});
