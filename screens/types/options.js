import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
} from "react-native";

const Options = ({ question }) => {
  const [textInputValue, setTextInputValue] = useState("");
  const [selectionIsMade, setSelectionIsMade] = useState(false);
  const [guess, setGuess] = useState(null);
  const inputWidth = Dimensions.get("window").width - 148;

  const onOptionPress = (_option) => {
    setGuess(_option.toLowerCase());
    setSelectionIsMade(true);
  };

  const getAdvStyles = (_value) => {
    if (selectionIsMade && _value.toLowerCase() === guess.toLowerCase()) {
      return {
        backgroundColor:
          _value.toLowerCase() === question.answer.toLowerCase()
            ? "#00DB6F"
            : "#FF4888",
      };
    }
  };

  useEffect(() => {
    setTextInputValue("");
    setSelectionIsMade(false);
    setGuess(null);
  }, [question]);

  return (
    <View style={styles.options}>
      {question.type === "multi" &&
        question.options.map((_o) => {
          return (
            <TouchableOpacity
              disabled={selectionIsMade}
              onPress={() => onOptionPress(_o)}
              style={[styles.optionButton, getAdvStyles(_o)]}
            >
              <Text style={styles.optionText}>{_o}</Text>
            </TouchableOpacity>
          );
        })}
      {question.type === "bool" && (
        <View>
          <TouchableOpacity
            disabled={selectionIsMade}
            onPress={() => onOptionPress("t")}
            style={[styles.optionButton, getAdvStyles("t")]}
          >
            <Text style={styles.optionText}>True</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={selectionIsMade}
            onPress={() => onOptionPress("f")}
            style={[styles.optionButton, getAdvStyles("f")]}
          >
            <Text style={styles.optionText}>Fasle</Text>
          </TouchableOpacity>
        </View>
      )}
      {question.type === "fill" && (
        <View style={styles.inputContainer}>
          <TextInput
            editable={!selectionIsMade}
            style={[
              styles.optionButton,
              styles.optionText,
              { width: inputWidth },
              getAdvStyles(textInputValue.toLowerCase()),
            ]}
            onChangeText={(text) => setTextInputValue(text)}
            value={textInputValue}
            placeholderTextColor="grey"
            placeholder="Insert your answer.."
          />
          <TouchableOpacity
            disabled={!textInputValue || selectionIsMade}
            style={[styles.submitInput, !textInputValue && { opacity: 0.3 }]}
            onPress={() => onOptionPress(textInputValue)}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
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
    borderColor: "#000814",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  submitInput: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 6,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#000814",
    width: 110,
    backgroundColor: "#FFC300",
  },
  submitText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
  },
});
