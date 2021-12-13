import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BauHnoiDaSuqDo from "../screens/BauHnoiDaSuqDo";
import BauWaiKhonPadum from "../screens/BauWaiKhonPadum";
import CleuHaroih from "../screens/CleuHaroih";
import Home from "../screens/Home";
import ListCaleuHadroih from "../screens/ListCaleuHadroih";

const MainStack = createStackNavigator();
const Main = () => {
  const linking = {
    prefixes: [
      /* your linking prefixes */
    ],
    config: {
      screens: {
        Home: "home",
        CleuHaroih: "caleuharoih",
        Buttons: "buttons",
        Colors: "colors",
        BauWaiKhonPadum: "bauwaykhonpadum",
        BauHnoiDaSuqDo: "bauhnoidasuqdo"
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
        <MainStack.Screen name="BauWaiKhonPadum" component={BauWaiKhonPadum} />
        <MainStack.Screen name="BauHnoiDaSuqDo" component={BauHnoiDaSuqDo} />
        <MainStack.Screen name="ListCaleuHadroih" component={ListCaleuHadroih} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
