import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import ImageSlider from 'react-native-image-slider';
import {
  Layout, themeColor,
  TopNav, useTheme
} from "react-native-rapi-ui";
import { MainStackParamList } from "../types/navigation";

export default function ({
  navigation, route
}: StackScreenProps<MainStackParamList, "ListCaleuHadroih">) {
  const { isDarkmode, setTheme } = useTheme();
  const data_is = route.params ? route.params : {}
  const imageList = data_is.url ? data_is.url : ["https://httlvn.org/wp-content/uploads/2020/10/4d-scaled.jpg"]
  return (
    <Layout>
      <TopNav
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white : themeColor.black}
          />
        }
        leftAction={() => navigation.goBack()}
        middleContent={data_is.id + '. ' + data_is.name}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <View style={styles.container}>
        <ImageSlider images={imageList} />
      </View>

    </Layout>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -130
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  image_slider: {
    paddingTop: 0
  }
});
