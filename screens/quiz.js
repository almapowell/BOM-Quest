import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

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
      "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&encode=url3986";
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

  const handleShowResults = () => {
    navigation.navigate("Result", { score });
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
                    disabled={selectionIsMade}
                    style={
                      selectedIndex === index
                        ? correctAnswer
                          ? styles.optionButtonCorrect
                          : styles.optionButtonWrong
                        : styles.optionButton
                    }
                    onPress={() => handleSelectedOption(option)}
                  >
                    <Text style={styles.option}>
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
            <View style={styles.bottom}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>

              {selectionIsMade && questionCount !== 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleNextPress}
                >
                  <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
              )}
              {questionCount === 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleShowResults}
                >
                  <Text style={styles.buttonText}>SHOW RESULTS</Text>
                </TouchableOpacity>
              )}
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
    paddingTop: 40,
    paddingHorizontal: 16,
    height: "100%",
  },
  top: {
    marginVertical: 16,
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
  button: {
    backgroundColor: "#004A8F",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  question: {
    fontSize: 26,
    color: "white",
  },
  option: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#000814",
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "#FFC300",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  questionsParent: {
    height: "100%",
  },
  optionButtonCorrect: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#00AC29",
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "#FFC300",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  optionButtonWrong: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#FF3233",
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "#FFC300",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
