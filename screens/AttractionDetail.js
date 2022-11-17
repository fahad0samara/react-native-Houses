import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../consts/colors";
import MapView from "react-native-maps";

const AttractionDetail = ({ navigation, route }) => {
  const place = route.params;
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ScrollView>
        <ImageBackground
          source={{ uri: place.image }}
          style={{ width: "100%", height: 300 }}
        >
          <View style={style.header}>
            <Icon
              name="arrow-back-ios"
              size={28}
              color={COLORS.white}
              onPress={navigation.goBack}
            />
            <Icon name="more-vert" size={28} color={COLORS.white} />
          </View>
          <View>
            <View style={{ flexDirection: "row", paddingTop: 180 }}>
              <Icon name="star" size={30} color={COLORS.orange} />
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {place.rating}
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View>
          <View style={style.iconContainer}>
            <Icon name="favorite" color={COLORS.red} size={30} />
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Icon name="place" size={28} color={COLORS.primary} />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                fontWeight: "bold",
                color: COLORS.primary,
              }}
            ></Text>
          </View>
          <Text
            style={{
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 20,
              marginRight: 20,
            }}
          >
            {place.name}
          </Text>
          <Text style={{ marginTop: 20, lineHeight: 22, marginRight: 20 }}>
            {place.details}
          </Text>
          <MapView
            style={style.map}
            initialRegion={{
              latitude: place.coordinate.latitude,
              latitudeDelta: place.coordinate.latitudeDelta,
              longitude: place.coordinate.longitude,
              longitudeDelta: place.coordinate.longitudeDelta,
            }}
          >
            <MapView.Marker
              title={place.name}
              coordinate={{
                latitude: place.coordinate.latitude,
                longitude: place.coordinate.longitude,
              }}
            />
          </MapView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  iconContainer: {
    height: 60,
    width: 60,
    position: "absolute",
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  footer: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    height: 200,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  map: {
    width: "100%",
    height: 300,
    margin: 10,
  },
});

export default AttractionDetail;
