import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  Layout, Section, SectionContent, Text, TextInput, themeColor,
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
    "id": -1,
    "name": "Bau Waiq Khŏ̀n Padùm",
    "url": [
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287539/biaclem.com/caleu-hadroih/11_th4sgz.png", 
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287542/biaclem.com/caleu-hadroih/12_gnvwgr.png"
  ]
  },
  {
    "id": 0,
    "name": "Muc Luc",
    "url": [
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287536/biaclem.com/caleu-hadroih/01_wm3tzk.png", 
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287537/biaclem.com/caleu-hadroih/02_dtejew.png",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287541/biaclem.com/caleu-hadroih/03_okqsee.png",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287537/biaclem.com/caleu-hadroih/04_sto1sc.png",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287534/biaclem.com/caleu-hadroih/05_gvrdrv.png",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287539/biaclem.com/caleu-hadroih/06_pmptn1.png",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287535/biaclem.com/caleu-hadroih/07_tykf6c.png",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287535/biaclem.com/caleu-hadroih/08_x1no0c.png",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287538/biaclem.com/caleu-hadroih/09_vu3isz.png",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287540/biaclem.com/caleu-hadroih/10_hjzhvm.png"
  ]
  },
  {
    "id": 1,
    "name": "Crŏng Diac Ma Gŏ̀h",
    "url": [
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287541/biaclem.com/caleu-hadroih/13_kpftsk.png",
     "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287542/biaclem.com/caleu-hadroih/14_upmojc.jpg"
    ]
  },
  {
    "id": 2,
    "name": "Ma Hem Jêsu Bu Dŏ̀ng Diac Loh",
    "url": [
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287541/biaclem.com/caleu-hadroih/15_bxve3d.jpg",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287542/biaclem.com/caleu-hadroih/16_gzea4g.jpg"
    ]
  },
  {
    "id": 3,
    "name": "Ìh Khoi Lam Trùh Ti Jêsu 'Nhŏ̀q",
    "url": [
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287544/biaclem.com/caleu-hadroih/17_laswtk.jpg",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287551/biaclem.com/caleu-hadroih/18_rfcwvd.jpg",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287544/biaclem.com/caleu-hadroih/19_ncsq0i.jpg"
    ]
  },
  {
    "id": 4,
    "name": "Jò Au Ngan Long Pagat Malem",
    "url": [
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287555/biaclem.com/caleu-hadroih/20_r9xk12.jpg",
  ]
  },
  {
    "id": 5,
    "name": "Nòi Leq I Jêsu I Plình Joq 'Nŏ̀ng",
    "url": [
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287555/biaclem.com/caleu-hadroih/21_aafvc9.jpg",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287566/biaclem.com/caleu-hadroih/22_eaqdlm.jpg"
  ]
  },
  {
    "id": 6,
    "name": "Haq Jah Dèch Ìh",
    "url": [
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287550/biaclem.com/caleu-hadroih/23_ozmthl.jpg",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287555/biaclem.com/caleu-hadroih/24_ym6amr.jpg",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287552/biaclem.com/caleu-hadroih/25_febr6z.jpg",
  ]
  },
  {
    "id": 7,
    "name": "Xoi Ùh Tem",
    "url": [
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287553/biaclem.com/caleu-hadroih/26_fcnqy1.jpg",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287554/biaclem.com/caleu-hadroih/27_qhltlk.jpg"
    ]
  },
  {
    "id": 8,
    "name": "Lac Trong Hangai Ca Boc Plình",
    "url": [
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287555/biaclem.com/caleu-hadroih/28_unsojv.jpg",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287556/biaclem.com/caleu-hadroih/29_msu5we.jpg"
  ]
  }, {
    "id": 9,
    "name": "Au Loh Khoi Enh Tôi Au",
    "url": [
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287556/biaclem.com/caleu-hadroih/30_nbj2fk.jpg",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287536/biaclem.com/caleu-hadroih/31_mgshpf.jpg"
    ]
  },
  {
    "id": 10,
    "name": "Au 'Mang Leq Yoc Au 'Mang Leq",
    "url": [
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287535/biaclem.com/caleu-hadroih/32_o0kgii.jpg",
      "https://res.cloudinary.com/huynhga-cloudinary/image/upload/v1639287536/biaclem.com/caleu-hadroih/33_wzckhx.jpg"
  ]
  }
]



export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "CleuHaroih">) {
  const { isDarkmode, setTheme } = useTheme();
  const [valSearch, setValSearch] = React.useState<string>("");
  const [listData, setListData] = React.useState(dataList);

  function handelSearch(text: any) {
    setValSearch(text)
    if (text != "") {
      const newListData = dataList.filter(
        data => {
          return parseInt(text) === data.id
        }
      )
      setListData(newListData)
    } else {
      const newListData = dataList.filter(
        data => {
          return data
        }
      )
      setListData(newListData)
    }
  }

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
        middleContent={
          <View>
            <Text style={{ marginBottom: 0, paddingTop: 0, width: 300, height: 10 }}>
            </Text>

            <TextInput
              style={{ width: 100 }}
              placeholder="Nhập số bài hát"
              value={valSearch}
              onChangeText={(val) => { handelSearch(val ? val : "") }}
              rightContent={
                <Ionicons name="search" size={20} color={themeColor.gray300} />
              }
            />
          </View>
        }
        middleAction={() => navigation.goBack()}
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
          listData.map(r =>
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
