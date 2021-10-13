import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.des}>Sunny</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#595959",
  },
  // City
  city: {
    flex: 1.1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    color: "white",
    fontSize: 60,
    fontWeight: "700",
  },
  // Weather
  weather: {
    flex: 3.5,
  },
  day: {
    flex: 1,

    alignItems: "center",
  },
  temp: {
    color: "white",
    marginTop: 50,
    fontSize: 160,
  },
  des: {
    color: "white",
    marginTop: -20,
    fontSize: 40,
  },
});
