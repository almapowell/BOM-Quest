import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import MyStack from "./screens/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
