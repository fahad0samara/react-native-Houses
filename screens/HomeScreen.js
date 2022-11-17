import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import AttractionItems, {
  localAttractions,
} from "../components/home/AttractionItems";
import PLACES from "../consts/places";

// import SearchBar from "../components/home/SearchBar";

export default function Home({ navigation }) {
  const [attractionData, setAttractionData] = useState(PLACES);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const sortByCateogry = (item) => {
    console.log(item);

    // 👇️ filter with 1 condition
    const filtered = PLACES.filter((place) => {
      return place.categories === item.text;
    });

    setAttractionData(filtered);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 10, marginTop: 30 }}>
        {/* <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} /> */}
        {/* <SearchBar cityHandler={setCity} /> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories
          handleSelectCategory={(item) => {
            console.log(item);
            sortByCateogry(item);
          }}
        />
        <AttractionItems
          attractionData={attractionData}
          navigation={navigation}
        />
      </ScrollView>
      {/* <Divider width={1} />
      <BottomTabs /> */}
    </SafeAreaView>
  );
}
