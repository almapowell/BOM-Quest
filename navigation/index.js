import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Quest from "../screens/quest";
import Sections from "../screens/sections";
import List from "../screens/list";

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
        name="List"
        component={List}
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
