import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation";

// 	// Muliple Choice
//   ,{
//     "type": "multi",
//     "ref": "",
//     "question": "",
//     "answer": "Mormon",
//     "incorrect_answers": ["Joseph", "Moroni"]
//   },
// 	// True or False
//   ,{
//     "type": "bool",
//     "ref": "",
//     "question": "",
//     "answer": "t"
//   },
//   	// Fill in the Blank
// 	 ,{
//     "type": "fill",
//     "ref": "",
//     "question": "",
//     "answer": ""
// },

// //  Empty
//  , { }

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
