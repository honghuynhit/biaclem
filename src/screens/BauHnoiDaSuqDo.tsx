import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { ScrollView, View } from "react-native";
import { Layout, Section, SectionContent, Text, themeColor, TopNav, useTheme } from "react-native-rapi-ui";
import { MainStackParamList } from "../types/navigation";

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "BauHnoiDaSuqDo">) {
  const { isDarkmode, setTheme } = useTheme();
  const [text, setText] = React.useState<string>("");
  const [pass, setPass] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [value, setValue] = React.useState<string | null>(null);
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [RadioToggle, setRadioToggle] = React.useState<boolean>(false);

  const items = [
    { label: "Front-end Developer", value: "FED" },
    { label: "Back-end Developer", value: "BED" },
    { label: "Full-stack Developer", value: "FSD" },
  ];

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
        middleContent="Bàu Hnŏ̀i Da Sùq Đô"
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
        <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
          <SectionContent>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ marginBottom: 10, fontSize: 20 }}>
                Au lùi Boc plình i cwiềng itai dìq dŏng la Baq, la yiêng broq plình crŏng taneh.{"\n"}{"\n"}
                Au lùi Jêsu Christ aih là con moiq xa-ông enh Boc plình, Wa Chuaq bèn.{"\n"}{"\n"}
                Haq jah ŏi jiêng enh yiêng Hadròih, jah xa-ông canòm ca gù ardrùh haq Mari.{"\n"}{"\n"}
                Chìuq xa lep ŏi ta tì Bônxơphilat, chìuq tiêng đình ta Long pagat, chìuq ca chìt wa ca tùh.{"\n"}{"\n"}
                Haq loh ta hwinh cajìp trùh hì piq. Haq rìh hlŏ̀i enh mangai cachìt. Haq tŏc ta plình, ha qngui 'Be qma Boc plình i Cwiềng La Baq.{"\n"}{"\n"}
                Enh aih Haq jah wìh hlŏ̀i, Đòiq Hadrah mangai rìh wa mangai cachìt.{"\n"}{"\n"}
                Au lùi yiêng Hadròih, au lùi tagop Hadròih ta crŏng taneh.{"\n"}{"\n"}
                Biềc qnì loq da Sùq Đô Hadròih biềc caqnaih toiq lôi, biềc rìh hlŏ̀i da chac hamac. Wa biềc rìh halình hloi hloi. Amen!
              </Text>
            </View>
          </SectionContent>
        </Section>
      </ScrollView>
    </Layout>
  );
}
