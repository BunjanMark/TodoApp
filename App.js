import { View, Text, Image, SafeAreaView } from "react-native";

import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Todo from "./src/screens/Todo";
import "./src/assets/icons/home.png";

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => (
              <Image source={require("./src/assets/icons/home.png")} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="To do list"
          component={Todo}
          options={{
            tabBarLabel: "To do list",
            tabBarIcon: () => (
              <Image source={require("./src/assets/icons/tasks.png")} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
