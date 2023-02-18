import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const shuffleArray = (arr) =>
  arr.sort(function () {
    return 0.5 - Math.random();
  });

const Options = ({ question }) => {
  const [textInputValue, setTextInputValue] = React.useState("");

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers, _question.answer];
    shuffleArray(options);
    return options;
  };

  return (
    <View style={styles.options}>
      {question.type === "multi" &&
        generateOptionsAndShuffle(question).map((_o, index) => {
          return (
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>{_o}</Text>
            </TouchableOpacity>
          );
        })}
      {question.type === "bool" && (
        <View>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>True</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Fasle</Text>
          </TouchableOpacity>
        </View>
      )}
      {question.type === "fill" && (
        <TextInput
          style={[styles.optionButton, styles.optionText]}
          onChangeText={(text) => setTextInputValue(text)}
          value={textInputValue}
          placeholderTextColor="grey"
          placeholder="Insert your answer.."
        />
      )}
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  options: {
    marginVertical: 16,
    flex: 1,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "500",
  },
  optionButton: {
    backgroundColor: "white",
    paddingVertical: 18,
    marginVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 40,
    borderWidth: 2,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
