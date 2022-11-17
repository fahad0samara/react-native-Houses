import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import users from "../consts/users";

export default function UserProfile() {
  const [avatar, setAvatar] = useState(" ");
  const [name, setName] = useState(" ");
  const [address, setaddress] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [phone, setPhone] = useState(" ");

  useEffect(() => {
    // declare the data fetching function

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("user_id");
        if (value !== null) {
          console.log(value);
          const filtered = users.filter((user) => {
            return user.id === value;
          });

          console.log(filtered[0]);
          setName(filtered[0].name);
          setAvatar(filtered[0].image);
          setaddress(filtered[0].address);
          setEmail(filtered[0].email);
          setPhone(filtered[0].phone);
        }
      } catch (e) {
        // error reading value
      }
    };

    // call the function
    getData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image style={styles.avatar} source={{ uri: avatar }} />

          <Text style={styles.name}>{name} </Text>
          <Text style={styles.userInfo}>{email} </Text>
          <Text style={styles.userInfo}>{address} </Text>
        </View>
      </View>

      <View style={styles.body}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#778899",
    height: 500,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  },
});
