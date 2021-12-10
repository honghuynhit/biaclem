import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Layout, Text,
  themeColor, TopNav, useTheme
} from "react-native-rapi-ui";
import { MainStackParamList } from "../types/navigation";

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "Home">) {
  const { isDarkmode, setTheme } = useTheme();
  const styles = StyleSheet.create({
    listItem: {
      marginHorizontal: 20,
      marginTop: 20,
      padding: 20,
      backgroundColor: isDarkmode ? "#262834" : "white",
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });

  return (
    <Layout>
      <TopNav
        middleContent="Bìac Lem"
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
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("CleuHaroih")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Calêu Hadròih</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  );
}
