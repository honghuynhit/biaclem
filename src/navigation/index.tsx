import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Avatar from "../screens/Avatar";
import Buttons from "../screens/Buttons";
import CleuHaroih from "../screens/CleuHaroih";
import Colors from "../screens/Colors";
import Forms from "../screens/Forms";
import Home from "../screens/Home";

const MainStack = createStackNavigator();
const Main = () => {
  const linking = {
    prefixes: [
      /* your linking prefixes */
    ],
    config: {
      screens: {
        Home: "home",
        CleuHaroih: "typography",
        Buttons: "buttons",
        Colors: "colors",
        Forms: "forms",
      },
    },
  };
  return (
    <NavigationContainer linking={linking}>
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="CleuHaroih" component={CleuHaroih} />
        <MainStack.Screen name="Buttons" component={Buttons} />
        <MainStack.Screen name="Colors" component={Colors} />
        <MainStack.Screen name="Forms" component={Forms} />
        <MainStack.Screen name="Avatar" component={Avatar} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
