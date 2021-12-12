import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { ScrollView, View } from "react-native";
import { Layout, Section, SectionContent, Text, themeColor, TopNav, useTheme } from "react-native-rapi-ui";
import { MainStackParamList } from "../types/navigation";

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "BauWaiKhonPadum">) {
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
        middleContent="Bàu Waiq Khàn Padùm"
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
                Waiq Baq nhèn con ŏi ta plình.{"\n"}{"\n"}
                Hiniq Baq jah padèch Hadròeh. Diac Baq jah Trùh.{"\n"}{"\n"}
                Manoh enh Baq jah wìa lem, ŏi ta crŏng ta neh tiàh Diac plình.{"\n"}{"\n"}
                Xìn am nhèn con hì cô da hwèq caq 'nang lem.{"\n"}{"\n"}
                Xìn ca 'naih hreo hiniq lôi nhèn con. Tìah ca nhèn con ca 'naih hreo hiniq lôi wì 'noiq ma ta git ca nhèn con.{"\n"}{"\n"}
                Xìn paq am nhèn con lam trong padô 'nùt, mahaq dèch nhèn con loh khoi enh trong ngang dù.{"\n"}{"\n"}
                Taiq! Diac cwiềng, itai 'ngah lem, ŏi dìq ta Baq hloi hloi. Amen.{"\n"}
              </Text>
            </View>
          </SectionContent>
        </Section>
      </ScrollView>
    </Layout>
  );
}
