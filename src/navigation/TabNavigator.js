import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UpdateScreen from "../screens/UpdateScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import CommunitiesScreen from "../screens/CommunitiesScreen";
import CallsScreen from "../screens/CallsScreen";
import ChatScreen from "../screens/ChatScreen";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                

                tabBarStyle: {
                    backgroundColor: "#ffffff", //0f1017
                    height: 110,

                },

                tabBarActiveTintColor: "#25D366",
                tabBarInactiveTintColor: "#000000",

                tabBarLabelStyle: {
                    fontWeight: "bold",
                    fontSize: 14,
                    
                },

                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === "Chat") {
                        iconName = focused ? "chatbubble" : "chatbubble-outline";
                    }
                    else if (route.name === "Update") {
                        iconName = focused ? "refresh" : "refresh-outline";
                    }
                    else if (route.name === "Communities") {
                        iconName = focused ? "people" : "people-outline";
                    }
                    else if (route.name === "Calls") {
                        iconName = focused ? "call" : "call-outline";
                    }

                    return <Ionicons name={iconName} size={25} color={"#000000"} />;
                },
            })}
        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Update" component={UpdateScreen} />
            <Tab.Screen name="Communities" component={CommunitiesScreen} />
            <Tab.Screen name="Calls" component={CallsScreen} />

        </Tab.Navigator>
    );
};

export default TabNavigator;