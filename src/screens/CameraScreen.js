import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

const CameraScreen = ({ navigation }) => {

    const [cameraPosition] = useState('back');
    const device = useCameraDevice(cameraPosition);
    const camera = useRef(null);

    const [hasPermission, setHasPermission] = useState(false);
    const [imagedata, setImagedata] = useState(null);

    useEffect(() => {
        checkPermission();
    }, []);

    const checkPermission = async () => {
        const permission = await Camera.requestCameraPermission();
        if (permission === 'granted') {
            setHasPermission(true);
        }
    };

    const takePitcure = async () => {
        try {
            const photo = await camera.current.takePhoto();
            setImagedata(photo);
                 console.log("image path : ", photo);
        } catch (error) {
            console.log("Camera Error:", error);
        }
    };

    if (!hasPermission) {
        return (
            <View style={styles.center}>
                <Text>No Camera Permission</Text>
            </View>
        );
    }

    if (!device) {
        return (
            <View style={styles.center}>
                <Text>Loading Camera...</Text>
            </View>
        );
    }

    if (imagedata) {
        return (
            <View style={{ flex: 1 }}>
                <Image
                    style={{ width: "100%", height: "100%" }}
                    source={{ uri: 'file:///data/user/0/com.whatsapp/cache/mrousavy5577436552434808562.jpg' }}
                />

                <TouchableOpacity
                   onPress={() => navigation.goBack()}
                    style={styles.backBtn}
                >
                    <Text style={{ fontWeight: 'bold' }}>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <Camera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                photo={true}
            />

            <TouchableOpacity
                onPress={takePitcure}
                style={styles.capture}
            />
        </View>
    );
};

export default CameraScreen;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    capture: {
        width: 70,
        height: 70,
        backgroundColor: "red",
        borderRadius: 40,
        position: "absolute",
        bottom: 50,
        alignSelf: "center"
    },

    backBtn: {
        position: "absolute",
        top: 50,
        left: 20,
        backgroundColor: "#ddd",
        padding: 10,
        borderRadius: 10
    }
});