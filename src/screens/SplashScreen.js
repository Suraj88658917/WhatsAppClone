import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

const SplashScreen = ({ navigation }) => {


        useEffect(() => {
              setTimeout(() => {
           navigation.replace("MainTabs");
        }, 2000);
      }, []);


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#ffffff",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 40
            }}
        >

            <View>
                <Image
                    style={{ width: 80, height: 80, tintColor: "#14d835", marginTop: 330 }}
                    source={require("../assets/images/whatsapp.png")}
                />
            </View>

            <View style={{ alignItems: "center" }}>
                <Text style={{ color: "#2f2d2d", fontSize: 14 }}>from</Text>

                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
                    <Image
                        style={{
                            width: 22,
                            height: 22,
                            tintColor: "#14d835",
                            marginRight: 5
                        }}
                        source={require("../assets/images/meta.png")}
                    />
                    <Text style={{ color: "#14d835", fontSize: 19 }}>Meta</Text>
                </View>
            </View>

        </View>
    );
};

export default SplashScreen;