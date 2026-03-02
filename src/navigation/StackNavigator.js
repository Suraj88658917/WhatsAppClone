import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import TabNavigator from "./TabNavigator";
import CameraScreen from "../screens/CameraScreen"
import ScannerScreen from "../screens/ScannerScreen"



const Stack = createNativeStackNavigator();


const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>
              <Stack.Screen name="MainTabs" component={TabNavigator}/>
              <Stack.Screen name="CameraScreen" component={CameraScreen}/>
              <Stack.Screen name="ScannerScreen" component={ScannerScreen}/>
        </Stack.Navigator>
    )
}


export default StackNavigator;