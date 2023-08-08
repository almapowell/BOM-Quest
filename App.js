import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation";
import Dog from "./assets/dog.svg";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
