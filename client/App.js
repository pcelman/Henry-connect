// import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store.js";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
     </Provider>
  );
}
