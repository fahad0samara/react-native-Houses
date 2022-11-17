import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import Houses from "./Houses";

const Tab = createBottomTabNavigator();

function MyTabss() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "grey",
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 20, height: 80 },
      }}
    >
      <Tab.Screen
        name="Houses"
        component={Houses}
        options={{
          tabBarLabel: "Houses",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="house" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AdminContainer() {
  return <MyTabss />;
}

export default AdminContainer;
