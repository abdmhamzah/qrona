import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import axios from "axios";

export default function Place(props) {
  return (
    <View style={styles.container}>
      {props.places.map((place) => (
        <TouchableOpacity
          onPress={() => props.toQrHotplace(place)}
          style={styles.place_box}
          key={place.id}
        >
          <Text style={styles.box_title}>{place.name}</Text>
          <Text style={styles.box_desc}>{place.address}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#65DCB8",
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00B979",
    marginTop: 60,
  },
  place_box: {
    backgroundColor: "#B3EFDD",
    width: 320,
    borderRadius: 5,
    marginTop: 25,
  },
  box_title: {
    marginTop: 13,
    marginHorizontal: 24,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#566573",
  },
  box_desc: {
    marginHorizontal: 24,
    marginBottom: 13,
    color: "#566573",
  },
});
