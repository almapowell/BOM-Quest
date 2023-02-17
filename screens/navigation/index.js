import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../home";
import Quiz from "../quiz";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // cardStyle: { backgroundColor: "grey" },
        cardStyle: { backgroundColor: "#000814" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
