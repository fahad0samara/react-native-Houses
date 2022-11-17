import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const items = [
  {
    id: "1",
    image: require("../../assets/images/festevalsplaces.png"),
    text: "Festivals",
  },
  {
    id: "2",
    image: require("../../assets/images/tourismplaces.png"),
    text: "Tourism Places",
  },
  {
    id: "3",
    image: require("../../assets/images/food-house.jpg"),
    text: "Local Resturents",
  },
  {
    id: "4",
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    id: "5",
    image: require("../../assets/images/localHouses.png"),
    text: "Houses",
  },
  // {
  //   id: "6",
  //   image: require("../../assets/images/coffee.png"),
  //   text: "Coffee & Tea",
  // },
  // {
  //   id: "7",
  //   image: require("../../assets/images/desserts.png"),
  //   text: "Desserts",
  // },
];

export default function Categories({ handleSelectCategory }) {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{ marginBottom: 30 }}
            onPress={() => handleSelectCategory(item)}
          >
            <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 40,
                  resizeMode: "contain",
                }}
              />
              <Text style={{ fontSize: 13, fontWeight: "900" }}>
                {item.text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
