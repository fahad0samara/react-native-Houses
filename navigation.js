import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AttractionDetail from "./screens/AttractionDetail";
import MainContainer from "./screens/MainContainer";
import OnBoardScreen from "./screens/OnBoardScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import AdminContainer from "./screens/AdminContainer";

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  //AdminContainer
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoardScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="AdminContainer" component={AdminContainer} />

        <Stack.Screen name="AttractionDetail" component={AttractionDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
