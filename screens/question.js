import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Options from "./types/options";

const Question = ({ navigation, route }) => {
  const { questions, question, questionPosition, section } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(question);
  const [questionCount, setQuestionCount] = useState(questionPosition);

  const handleNextPress = () => {
    setCurrentQuestion(questions[questionCount]);
    setQuestionCount((prevState) => prevState + 1);
  };

  const handlePreviousPress = () => {
    setCurrentQuestion(questions[questionCount - 2]);
    setQuestionCount((prevState) => prevState - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionsParent}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("List", { section: section })}
          >
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
          <Text style={styles.question}>{currentQuestion.question}</Text>
        </View>

        {/* OPTIONS */}
        <Options question={currentQuestion} section={section} />
        <View>
          <Text style={{ color: "white", textAlign: "center" }}>
            {currentQuestion.ref}
          </Text>
        </View>

        {/* BUTTONS */}
        <View style={styles.bottom}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => handlePreviousPress(1)}
              style={[
                styles.bottomButtons,
                { marginLeft: 5 },
                questionCount === 1 && styles.disabled,
              ]}
              disabled={questionCount === 1}
            >
              <Text style={styles.bottomButtonsText}>Previous</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => handleNextPress(1)}
              style={[
                styles.bottomButtons,
                { marginRight: 5 },
                questionCount === questions.length && styles.disabled,
              ]}
              disabled={questionCount === questions.length}
            >
              <Text style={styles.bottomButtonsText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Question;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 80,
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
  bottomButtons: {
    backgroundColor: "#004A8F",
    padding: 12,
    borderRadius: 40,
    marginVertical: 10,
  },
  bottomButtonsText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  disabled: {
    opacity: 0.2,
  },
});
