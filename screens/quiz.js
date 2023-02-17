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
                    <Text style={styles.optionText}>
                      {decodeURIComponent(option)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View>
              <Text style={{ color: "white", alignSelf: "center" }}>
                {selectionIsMade && (correctAnswer ? "Correct" : "Wrong")}
              </Text>
            </View>

            {/* BUTTONS */}
            <View style={styles.bottom}>
              <TouchableOpacity
                style={rootStyles.secondary}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={rootStyles.secondaryText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={rootStyles.primary}
                onPress={handleNextPress}
              >
                <Text style={rootStyles.primaryText}>Next Question</Text>
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
