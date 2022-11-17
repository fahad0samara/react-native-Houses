import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/home/Categories";
import AttractionItems, {
  localAttractions,
} from "../components/home/AttractionItems";
import PLACES from "../consts/places";

export default function Houses({ navigation }) {
  const [attractionData, setAttractionData] = useState(PLACES);

  useEffect(() => {
    // 👇️ filter with 1 condition
    const filtered = PLACES.filter((place) => {
      return place.categories === "Houses";
    });
    setAttractionData(filtered);
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View
        style={{ backgroundColor: "white", padding: 10, marginTop: 30 }}
      ></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Categories
          handleSelectCategory={(item) => {
            console.log(item);
            sortByCateogry(item);
          }}
        /> */}
        <AttractionItems
          attractionData={attractionData}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
