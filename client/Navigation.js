import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

//screens
import HomeScreen from "./screens/HomeScreen";
import LocationScreen from "./screens/LocationScreen";
import StackScreen from "./screens/StackScreen";
import UserScreen from "./screens/UserScreen";


const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarStyle: {
                backgroundColor:"#5947C2"
            },
            tabBarActiveBackgroundColor: "#5037B6",
            tabBarActiveTintColor: "white"
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
             options={{
                tabBarIcon: ({color, size}) =>(
                    <Ionicons name="home-outline" size={size} color={color} />
                )
            }}
            />
            <Tab.Screen name="Location" component={LocationScreen}
            options={{
                tabBarIcon: ({color, size}) =>(
                    <Ionicons name="ios-compass-outline" size={size} color={color} />
                )
            }}
            />
            <Tab.Screen name="User" component={UserScreen}
            options={{
                tabBarIcon: ({color, size}) =>(
                    <Feather name="user" size={size} color={color} />
                )
            }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}