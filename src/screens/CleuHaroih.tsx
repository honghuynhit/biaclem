import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  Layout, Section, SectionContent, Text, themeColor,
  TopNav,
  useTheme
} from "react-native-rapi-ui";
// import { Avatar, Layout, Section, SectionContent, themeColor, TopNav, useTheme } from "react-native-rapi-ui";
import { MainStackParamList } from "../types/navigation";
const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
const dataList = [
  {
    "id": 1,
    "name": "Crŏng Diac Ma Gŏ̀h",
    "url": "https://httlvn.org/wp-content/uploads/2020/10/3d-scaled.jpg"
  },
  {
    "id": 2,
    "name": "Ma Hem Jêsu Bu Dŏ̀ng Diac Loh",
    "url": "https://httlvn.org/wp-content/uploads/2020/10/4d-scaled.jpg"
  },
  {
    "id": 3,
    "name": "Ìh Khoi Lam Trùh Ti Jêsu 'Nhŏ̀q",
    "url": "https://httlvn.org/wp-content/uploads/2020/10/4d-scaled.jpg"
  },
  {
    "id": 4,
    "name": "Jò Au Ngan Long Pagat Malem",
    "url": "https://httlvn.org/wp-content/uploads/2020/10/4d-scaled.jpg"
  },
  {
    "id": 5,
    "name": "bài hát 5",
    "url": "https://httlvn.org/wp-content/uploads/2020/10/4d-scaled.jpg"
  },
  {
    "id": 6,
    "name": "bài hát 6",
    "url": "https://httlvn.org/wp-content/uploads/2020/10/4d-scaled.jpg"
  },
  {
    "id": 7,
    "name": "bài hát 7",
    "url": "https://httlvn.org/wp-content/uploads/2020/10/4d-scaled.jpg"
  },
  {
    "id": 8,
    "name": "bài hát 8",
    "url": "https://httlvn.org/wp-content/uploads/2020/10/4d-scaled.jpg"
  }, {
    "id": 9,
    "name": "bài hát 9",
    "url": "https://httlvn.org/wp-content/uploads/2020/10/4d-scaled.jpg"
  },
  {
    "id": 10,
    "name": "bài hát 10",
    "url": "https://httlvn.org/wp-content/uploads/2020/10/4d-scaled.jpg"
  },
  {
    "id": 11,
    "name": "bài hát 11",
    "url": "https://httlvn.org/wp-content/uploads/2020/10/4d-scaled.jpg"
  },
]

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "CleuHaroih">) {
  const { isDarkmode, setTheme } = useTheme();
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
        middleContent="Calêu Hadròih"
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
        {
          dataList.map(r =>
            <TouchableOpacity key={r.id} onPress={() => navigation.navigate("Avatar", r)}>
              <Section style={{ marginTop: 20, marginHorizontal: 20 }}>
                <SectionContent>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text size="lg">{r.id + '. ' + r.name}</Text>
                  </View>
                </SectionContent>
              </Section>
            </TouchableOpacity>

          )
        }
      </ScrollView>
    </Layout>
  );
}
