import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

export const Layout = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("./assets/background.jpg")} style={styles.image}>

            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
  },
   image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});
