import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Alert } from 'react-native';

const image = {uri: "https://httlvn.org/wp-content/uploads/2020/10/1d-scaled.jpg"}

const showAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert MSG",
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        styel: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

export default function App() {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
      <Button title="Show Alert" onPress={showAlert}></Button>
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});