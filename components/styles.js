import { StyleSheet } from "react-native";

// wrong red #FF4888
// correct green #00DB6F

// main button styles
// padding: 16,
// paddingHorizontal: 35,
// borderRadius: 40,

const rootStyles = StyleSheet.create({
  wideButton: {
    backgroundColor: "#004A8F",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 40,
    alignItems: "center",
    marginVertical: 30,
  },
  wideButtonText: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
  },
  primary: {
    backgroundColor: "#004A8F",
    padding: 16,
    paddingHorizontal: 35,
    borderRadius: 40,
    marginVertical: 10,
  },
  primaryText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  secondary: {
    borderWidth: 1,
    // borderColor: "#FFF1AD",
    borderColor: "rgba(194, 218, 255, .5)",
    padding: 16,
    paddingHorizontal: 35,
    borderRadius: 40,
    marginVertical: 10,
  },
  secondaryText: {
    fontSize: 18,
    // color: "#FFF1AD",
    color: "rgba(194, 218, 255, .5)",
    fontWeight: "400",
  },
  nextButton: {
    backgroundColor: "#004A8F",
    padding: 16,
    paddingHorizontal: 35,
    borderRadius: 40,
    marginVertical: 10,
  },
});

export default rootStyles;
