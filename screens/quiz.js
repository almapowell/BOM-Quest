import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import rootStyles from "../components/styles";

const shuffleArray = (arr) =>
  arr.sort(function () {
    return 0.5 - Math.random();
  });

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [questionCount, setQuestionCount] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectionIsMade, setSelectionIsMade] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const getQuiz = async () => {
    setIsLoading(true);
    const url =
      "https://opentdb.com/api.php?amount=1000&difficulty=easy&type=multiple&encode=url3986";
    const response = await fetch(url);
    const data = await response.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false);
  };

  const handleNextPress = () => {
    setCorrectAnswer(false);
    setSelectionIsMade(false);
    setSelectedIndex(null);
    setQuestionCount((prev) => prev + 1);
    setOptions(generateOptionsAndShuffle(questions[questionCount + 1]));
  };

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers, _question.correct_answer];
    shuffleArray(options);
    return options;
  };

  const handleSelectedOption = (_option) => {
    setSelectionIsMade(true);
    setSelectedIndex(options.indexOf(_option));
    if (_option === questions[questionCount].correct_answer) {
      setScore((prev) => prev + 10);
      setCorrectAnswer(true);
    } else {
      setCorrectAnswer(false);
    }
  };

  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View>
          <Text style={{ color: "white" }}>Loading...</Text>
        </View>
      ) : (
        questions && (
          <View style={styles.questionsParent}>
            <View style={styles.top}>
              <Text style={styles.questionCounter}>
                Question {questionCount + 1}
                <Text style={{ fontWeight: "400", fontSize: 15 }}>/10</Text>
              </Text>

              <Text style={styles.scoreBoard}>{score}</Text>
            </View>
            <View style={styles.top}>
              <Text style={styles.question}>
                {decodeURIComponent(questions[questionCount].question)}
              </Text>
            </View>

            {/* OPTIONS */}
            <View style={styles.options}>
              {options.map((option, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    disabled={selectionIsMade}
                    style={[
                      styles.optionButton,
                      selectedIndex === index
                        ? correctAnswer
                          ? styles.optionButtonCorrect
                          : styles.optionButtonWrong
                        : styles.optionButton,
                    ]}
                    onPress={() => handleSelectedOption(option)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        selectedIndex === index
                          ? correctAnswer
                            ? styles.optionTextCorrect
                            : styles.optionTextWrong
                          : styles.optionText,
                      ]}
                    >
                      {decodeURIComponent(option)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View>
              <Text style={{ color: "white", alignSelf: "center" }}>
                {selectionIsMade
                  ? correctAnswer
                    ? "Correct"
                    : "Wrong"
                  : "Pick an answer"}
              </Text>
            </View>

            {/* BUTTONS */}
            <View style={[styles.bottom, { alignSelf: "center" }]}></View>

            <View style={styles.bottom}>
              <TouchableOpacity
                style={rootStyles.secondary}
                onPress={() => navigation.navigate("Quest")}
              >
                <Text style={rootStyles.secondaryText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={rootStyles.primary}
                onPress={handleNextPress}
              >
                <Text style={rootStyles.primaryText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 16,
    height: "100%",
  },
  top: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  question: {
    fontSize: 20,
    color: "white",
  },
  questionCounter: {
    fontWeight: "500",
    color: "rgba(194, 218, 255, .5)",
    fontSize: 24,
  },
  scoreBoard: {
    fontWeight: "500",
    color: "#FFF1AD",
    fontSize: 24,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "500",
    color: "rgba(194, 218, 255, .9)",
  },
  optionTextCorrect: {
    color: "#00AC29",
  },
  optionTextWrong: {
    color: "#FF3233",
  },
  optionButton: {
    backgroundColor: "transparent",
    borderColor: "rgba(194, 218, 255, .6)",
    paddingVertical: 18,
    marginVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  questionsParent: {
    height: "100%",
  },
  optionButtonCorrect: {
    borderColor: "#00AC29",
  },
  optionButtonWrong: {
    borderColor: "#FF3233",
  },
});
