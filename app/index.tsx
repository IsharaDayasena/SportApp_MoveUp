import { Link, router } from "expo-router";
import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView, View } from "react-native";


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'column',  alignItems: "center"}}>
          <Text style={styles.textMain}>
            Start Your Sports Journey Here ...
          </Text>
          <Text style={styles.text}>
            MoveUp
          </Text>
        </View>
        <Image
          style={styles.logo}
          source={require("../assets/images/MoveUp.png")}/>
    
        <TouchableOpacity style={styles.button}
          onPress={() => router.push("/signup")}
        >
          <Text style={styles.buttonText}>Let's Go</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#00000",
    justifyContent: "center",
    alignItems: 'center',
    padding: 16,
  },
  textMain:{
    fontSize: 20,
    color: "#004aad",
    fontWeight: "bold",
  },
  text:{
    fontSize: 50,
    color: "#004aad",
    fontWeight: "bold",
    margin:10,    
  },
  logo: {
    height: 400,
    width: 400,
   
  },
  button: {
    backgroundColor: "#003174",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 30,
     height: 50,
    justifyContent: "center",
   
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
