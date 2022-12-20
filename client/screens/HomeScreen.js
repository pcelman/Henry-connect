import React, {useState} from "react";
import { StyleSheet, Text, View} from 'react-native';
import AccordionList from "../components/AccordionList";
const HomeScreen = () => {
  return (
    <View>
      <Text style={{
        fontSize: 30,
        textAlign: "center",
        marginTop: "20%"
      }}
      >HENRYconnect</Text>
      <AccordionList/>
    </View>
  );
}

export default HomeScreen;