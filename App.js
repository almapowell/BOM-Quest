import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation";

// 	// Muliple Choice
//   ,{
//     "type": "multi",
//     "ref": "Refer to Origin of BOM",
//     "question": "",
//     "answer": "Mormon",
//     "incorrect_answers": ["Joseph", "Moroni"]
//   },
// 	// True or False
//   ,{
//     "type": "bool",
//     "ref": "Refer to Origin of BOM",
//     "question": "",
//     "answer": "t"
//   },
//   	// Fill in the Blank
// 	 ,{
//     "type": "fill",
//     "ref": "Refer to Origin of BOM",
//     "question": "",
//     "answer": "Israel"
//   },

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
