import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Quiz from "../screens/quiz";
import Quest from "../screens/quest";
import Sections from "../screens/sections";

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
      <Stack.Screen
        name="Quest"
        component={Quest}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sections"
        component={Sections}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
