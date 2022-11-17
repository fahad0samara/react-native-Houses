import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ToastAndroid,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useForm, Controller } from "react-hook-form";

export default function ProfileScreen({ navigation }) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [name, setName] = useState(" ");
  const [details, setDetails] = useState(" ");
  const [location, setLocation] = useState(" ");
  const [image, setImage] = useState(" ");
  const [rating, setRating] = useState(" ");
  const [categories, setCategories] = useState(" ");
  const [categoriesList, setCategoriesList] = useState([
    { label: "Festivals", value: "Festivals" },
    { label: "Tourism Places", value: "Tourism Places" },
    { label: "Local Resturents", value: "Local Resturents" },
    { label: "Fast Foods", value: "Fast Foods" },
    { label: "Houses", value: "Houses" },
    { label: "Desserts", value: "Desserts" },
  ]);

  const [latitude, setLatitude] = useState(42.541492540022624);
  const [longitude, setLongitude] = useState(16.966178784751108);
  const [coordinate, setCoordinate] = useState({
    latitude: 42.541492540022624,
    longitude: 16.966178784751108,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  function showToast() {
    ToastAndroid.show("تم الاضافة بنجاح", ToastAndroid.SHORT);
  }

  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data, "data");
    showToast();
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.label}>Name</Text>
          <Controller
            name="name"
            defaultValue=""
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                selectionColor={"#5188E3"}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Text style={styles.label}>Details</Text>
          <Controller
            name="details"
            defaultValue=""
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                selectionColor={"#5188E3"}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <View>
            <Text style={styles.label}>Categories</Text>
            <Controller
              name="categories"
              defaultValue=""
              control={control}
              render={({ field: { onChange, value } }) => (
                <View style={styles.dropdownGender}>
                  <DropDownPicker
                    style={styles.dropdown}
                    value={categories}
                    items={categoriesList}
                    open={categoryOpen}
                    setOpen={setCategoryOpen}
                    setValue={setCategories}
                    setItems={setCategoriesList}
                    placeholder="Select Categories"
                    placeholderStyle={styles.placeholderStyles}
                    onChangeValue={onChange}
                    zIndex={3000}
                    zIndexInverse={1000}
                  />
                </View>
              )}
            />
          </View>
          <Text style={styles.label}>Location</Text>
          <Controller
            name="location"
            defaultValue=""
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                selectionColor={"#5188E3"}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Text style={styles.label}>Image Url</Text>
          <Controller
            name="image"
            defaultValue=""
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                selectionColor={"#5188E3"}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Text style={styles.label}>Rating</Text>
          <Controller
            name="rating"
            defaultValue=""
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                selectionColor={"#5188E3"}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <Text style={styles.getStarted}>Get Started</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
    padding: 10,
    marginTop: 30,
  },
  input: {
    borderStyle: "solid",
    borderColor: "#B7B7B7",
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 15,
    height: 50,
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  },
  label: {
    marginBottom: 7,
    marginStart: 10,
  },
  placeholderStyles: {
    color: "grey",
  },
  dropdownGender: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },
  dropdownCompany: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },
  getStarted: {
    backgroundColor: "#5188E3",
    color: "white",
    textAlign: "center",
    marginHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 20,
  },
  logIn: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  links: {
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#758580",
  },
});
