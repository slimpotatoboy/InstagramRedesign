import React from "react";
import HomeScreen from "../screen/HomeScreen";
import MessageScreen from "../screen/MessageScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackNav = () => {
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
};

export default StackNav;
