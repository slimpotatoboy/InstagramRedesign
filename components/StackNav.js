import React from "react";
import HomeScreen from "../screen/HomeScreen";
import MessageScreen from "../screen/MessageScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { StoryScreen } from "../screen/StoryScreen";

const Stack = createStackNavigator();
const Root = createStackNavigator();

export default function StackNav() {
  return (
    <Root.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Root.Screen name="Main" component={MainStack} />
      <Root.Screen name="Story" component={StoryScreen} />
    </Root.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
    </Stack.Navigator>
  );
}
