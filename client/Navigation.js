import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// screens
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import StackScreen from "./screens/StackScreen";
import LocationScreen from "./screens/LocationScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";

// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeStackNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen
        name="Home o el nombre que quiero"
        component={HomeScreen}
      />
      <HomeStackNavigator.Screen
        name="Stack"
        component={StackScreen}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      <HomeStackNavigator.Screen name="Location" component={LocationScreen} />
    </HomeStackNavigator.Navigator>
  );
}
// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

export default function Navigation() {
  return (
    <NavigationContainer>
<SafeAreaView>
  <view style={styles.container}>
    <FlatList
    data={data}
    keyExtractor={(item)=>item.id.toString()}
    renderItem={({item})=> (
      <AccordionItem title={item.title} bodyText={item.body}/>
    )}/>
  </view>
</SafeAreaView>






      <Tab.Navigator
        // initialRouteName="Home"
        screenOptions={{
          // headerShown: false,
          tabBarActiveTintColor: "purple",
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: "#ad40af"},
          tabBarInactiveTintColor: "#fff",
          tabBarActiveTintColor: "yellow",
          style: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#ffffff",
            borderRadius: 15,
            height: 90,
            ...styles.shadow,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={MyStack}
          options={{
            tabBarLabel: "Paula",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={40} />
            ),
            // tabBarBadge: 2,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Location"
          component={LocationScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="compass" size={37} color="purple" />
            ),
            // tabBarBadge: 2,
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-circle" size={34} color="purple" />
            ),
            // tabBarBadge: 2,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
