import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'


const dotedata = [
  { id: "1", title: "Clear call Log" },
  { id: "2", title: "Settings" },
];

const data = [
  {
    id: 1,
    name: "Nitin ClassMate",
    image: "https://i.pravatar.cc/300?img=56",
    subtitle: "<- Today, 09:42",


  },
  {
    id: 2,
    name: "Nitin ClassMate",
    image: "https://i.pravatar.cc/150?img=12",
    subtitle: "<- Today, 09:42",
  },
];

const data1 = [
  {
    id: 1,
    name: "Sourabh Bhaiya",
    image: "https://i.pravatar.cc/300?img=56",

  },
  {
    id: 2,
    name: "Aman Bhai",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Guddu bhai",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 4,
    name: "Sam",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 5,
    name: "WhatsApp",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 6,
    name: "Nitash Kumar",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 7,
    name: "Rohit Kumar",
    image: "https://i.pravatar.cc/300?img=56",
  },
  {
    id: 8,
    name: " Amit Saini",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 9,
    name: "Sumit Pal",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 10,
    name: "Nitin Saini",
    image: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: 11,
    name: "Sangeet saini",
    image: "https://i.pravatar.cc/300?img=20",
  },
  {
    id: 12,
    name: "Suraj Saini",
    image: "https://i.pravatar.cc/150?img=21",
  },
  {
    id: 3,
    name: "Guddu bhai",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 4,
    name: "Sam",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 5,
    name: "WhatsApp",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 6,
    name: "Nitash Kumar",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 7,
    name: "Rohit Kumar",
    image: "https://i.pravatar.cc/300?img=56",
  },
];


const renderItem = ({ item }) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.itemText}>{item.title}</Text>
  </TouchableOpacity>
);

const renderItem1 = ({ item }) => {
  return (
    <View
      style={{
        paddingHorizontal: 18,
        paddingVertical: 12,
        backgroundColor: "#fff"
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Image
          style={{ width: 50, height: 50, borderRadius: 25 }}
          source={{ uri: item.image }}
        />

        <View style={{ flex: 1, marginLeft: 12, }}>
          <Text style={{
            fontSize: 16, fontWeight: "600"
          }}>
            {item?.name}
          </Text>

          <Text style={{ color: "gray", marginTop: 4 }}>
            {item?.subtitle}
          </Text>
        </View>
        <Image
          style={{ width: 22, height: 22, }}
          source={require("../assets/images/call.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const renderItem2 = ({ item }) => {
  return (
    <View
      style={{
        paddingHorizontal: 18,
        paddingVertical: 12,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Image
          style={{ width: 50, height: 50, borderRadius: 25 }}
          source={{ uri: item.image }}
        />

        <View style={{ flex: 1, marginLeft: 12, }}>
          <Text style={{
            fontSize: 16, fontWeight: "600"
          }}>
            {item?.name}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>

          <Image
            style={{ width: 22, height: 22, marginRight: 20 }}
            source={require("../assets/images/call.png")}
          />

          <Image
            style={{ width: 22, height: 22 }}
            source={require("../assets/images/video-camera.png")}
          />

        </View>


      </TouchableOpacity>
    </View>

  );
};

const CallsScreen = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 50 }}>
        <View style={{ height: 60, justifyContent: "center", alignItems: "center", }}>
          <Text style={{ fontSize: 24, fontWeight: 390, paddingLeft: 18 }}>Calls</Text>
        </View>

        <TouchableOpacity style={{ justifyContent: "center" }}>
          <View style={{ width: 270, alignItems: "flex-end" }}>
            <Image style={{ width: 20, height: 20, tintColor: "#000" }}
              source={require("../assets/images/loupe.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setVisible(true)}
          style={{ justifyContent: "center", }}>
          <View style={{ width: 70, alignItems: "flex-end" }}>
            <Image style={{ width: 40, height: 40, tintColor: "#000" }}
              source={require("../assets/images/kebab-menu.png")} />
          </View>
        </TouchableOpacity>

        <Modal
          transparent
          visible={visible}
          animationType="fade">

          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={() => setVisible(false)}
          >
            <View style={styles.menuBox}>
              <FlatList
                data={dotedata}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}>
        <View style={{ height: 40, justifyContent: "center" }}>
          <Text style={{ fontSize: 21, fontWeight: "600", paddingLeft: 18 }}>Favorites</Text>
        </View>

        <View style={{ paddingLeft: 18, marginTop: 15, height: 50, justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >

            <View
              style={{
                backgroundColor: "#25D366",
                width: 40,
                height: 40,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 20, height: 20, tintColor: "#fff" }}
                source={require("../assets/images/heart.png")}
              />
            </View>

            <Text
              style={{
                fontSize: 16,
                marginLeft: 15,
                fontWeight: "500"
              }}
            >
              Add favorites
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingLeft: 18, height: 50, justifyContent: "center" }}>
          <Text style={{ fontSize: 21, fontWeight: "600" }}>Recent</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem1}
        />

        <View style={{ marginTop: 15, flexDirection: "row", }}>
          <View style={{ width: 200 }}>
            <Text style={{ fontSize: 21, fontWeight: "400", paddingLeft: 14, justifyContent: "center", fontWeight: "500" }}>Start a call</Text>
          </View>
          <View style={{ width: 190, alignItems: "flex-end", justifyContent: "center" }}>
            <Text style={{ fontSize: 15, backgroundColor: "#eae3e3", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20, fontWeight: "500" }}>Hide</Text>
          </View>
        </View>

        <FlatList
          data={data1}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem2}
        />

      </ScrollView>

      <View
        style={{
          position: "absolute",
          right: 20,
          bottom: 30,
          alignItems: "center"
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#25D366",
            width: 60,
            height: 60,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            elevation: 6
          }}
        >
          <Image
            style={{ width: 24, height: 24, tintColor: "#fff" }}
            source={require("../assets/images/call.png")}
          />
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default CallsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  overlay: {
    flex: 1,
    alignItems: "flex-end",
    paddingTop: 50,
    paddingRight: 10
  },

  menuBox: {
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 8,
    elevation: 8
  },

  item: {
    paddingVertical: 13,
    paddingHorizontal: 20
  },

  itemText: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "400"
  }
})