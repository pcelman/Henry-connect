import { View, Text } from "react-native";
import React from "react";

export default function Componente() {
  return (
    <SafeAreaView>
      <view style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AccordionItem title={item.title} bodyText={item.body} />
          )}
        />
      </view>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
