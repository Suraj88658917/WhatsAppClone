import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'

const data = [
  {
    id: 1,
    name: "Add\nStatus",
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
  }
];

const data1 = [
  {
    id: "1",
    image: "https://i.pravatar.cc/300?img=56",
    Text: "AlgoPrep Learning Class",
    Subtitle: "Array Practice & Preparation 📘🧠💻",
    time: "11:42",
  },
]

const data2 = [
  {
    id: 1,
    name: "New lndian Era (NIE)",
    image: "https://i.pravatar.cc/300?img=56",
    Subtitle1: "1.1M followers",
    Subtitle: "Follow"

  },
  {
    id: 2,
    name: "Sherya Ghoshal",
    image: "https://i.pravatar.cc/150?img=12",
    Subtitle1: "948K followers",
    Subtitle: "Follow",

  },
  {
    id: 3,
    name: "Lisha Batta",
    image: "https://i.pravatar.cc/150?img=13",
    Subtitle1: "1.1M followers",
    Subtitle: "Follow"
  },
  {
    id: 4,
    name: "Love Status❤️",
    image: "https://i.pravatar.cc/150?img=11",
    Subtitle1: "941K followers",
    Subtitle: "Follow"
  },
  {
    id: 5,
    name: "Amer Ujala",
    image: "https://i.pravatar.cc/150?img=12",
    Subtitle1: "194K followers",
    Subtitle: "Follow"
  },
  {
    id: 6,
    name: "MineCraft",
    image: "https://i.pravatar.cc/150?img=13",
    Subtitle1: "594K followers",
    Subtitle: "Follow"
  },
  {
    id: 7,
    name: "WhatsApp",
    image: "https://i.pravatar.cc/300?img=56",
    Subtitle1: "394K followers",
    Subtitle: "Follow"
  },
  {
    id: 8,
    name: " Uttar Pradesh Gov...",
    image: "https://i.pravatar.cc/150?img=11",
    Subtitle1: "994K followers",
    Subtitle: "Follow"
  },
  {
    id: 9,
    name: "Broken Soul💜⭐",
    image: "https://i.pravatar.cc/150?img=15",
    Subtitle1: "194K followers",
    Subtitle: "Follow"
  },
  {
    id: 10,
    name: "MicroSoft",
    image: "https://i.pravatar.cc/150?img=18",
    Subtitle1: "194K followers",
    Subtitle: "Follow"
  },
  {
    id: 11,
    name: "FaceBook",
    image: "https://i.pravatar.cc/300?img=20",
    Subtitle1: "394K followers",
    Subtitle: "Follow"
  },
  {
    id: 12,
    name: "Maths🔵✔️",
    image: "https://i.pravatar.cc/150?img=21",
    Subtitle1: "494K followers",
    Subtitle: "Follow"
  }
];

const dotedata = [
  { id: "1", title: "Create Channnel" },
  { id: "2", title: "status privacy" },
  { id: "3", title: "Starred" },
  { id: "4", title: "Ad perfernces" },
  { id: "5", title: "Settings" },
];


const renderItem = ({ item }) => {
  return (
    <View style={{ paddingLeft: 10 }}>
      <TouchableOpacity>

        <Image
          style={{
            width: 90,
            height: 155,
            borderRadius: 15
          }}
          source={{ uri: item.image }}
        />

        <Text
          style={{
            position: "absolute",
            bottom: 10,
            left: 12,
            color: "#fff",
            fontSize: 14
          }}
        >
          {item.name}
        </Text>

        <Image
          style={{
            position: "absolute",
            width: 40,
            height: 40,
            borderRadius: 50,
            borderWidth: 3,
            borderColor: "#25D366",
            left: 8,
            top: 8
          }}
          source={{ uri: item.image }}
        />

      </TouchableOpacity>
    </View>
  );
};

const renderItem1 = ({ item }) => {
  return (
    <View
      style={{
        alignItems: "center",
        padding: 12,
        backgroundColor: "#fff"
      }}
    >
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginRight: 12,
          }}
          source={{ uri: item.image }}
        />

        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            {item?.Text}
          </Text>

          <Text style={{ color: "#585252", marginTop: 2 }}>
            {item?.Subtitle}
          </Text>
        </View>

        <Text style={{ fontSize: 12, color: "#000000" }}>
          {item?.time}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const renderItem2 = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 18,
        backgroundColor: "#fff",
      }}
    >
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <Image
          style={{
            width: 55,
            height: 55,
            borderRadius: 30,
            marginRight: 12
          }}
          source={{ uri: item.image }}
        />

        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            {item?.name}
          </Text>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 2 }}>
            <Text style={{ color: "gray" }}>
              {item?.Subtitle1}
            </Text>

            <Text style={{ color: "#015700", backgroundColor: "#b9fbbd", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 20 }}>
              {item?.Subtitle}
            </Text>
          </View>

        </View>
      </TouchableOpacity>
    </View>
  );
};


const renderItem3 = ({ item }) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.itemText}>{item.title}</Text>
  </TouchableOpacity>
);
const UpdateScreen = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 50, }}>
        <View style={{ height: 60, justifyContent: "center", alignItems: "center", }}>
          <Text style={{ fontSize: 24, fontWeight: 390, paddingLeft: 18 }}>Updates</Text>
        </View>
        <TouchableOpacity style={{ justifyContent: "center" }}>
          <View style={{ width: 240, alignItems: "flex-end" }}>
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
                keyExtractor={(item) => item.id}
                renderItem={renderItem3}
              />
            </View>
          </TouchableOpacity>
        </Modal>

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}>
        <View>
          <View style={{ paddingLeft: 18, height: 40 }}>
            <Text style={{ fontSize: 22, fontWeight: "500", }}>Status</Text>
          </View>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

          <View style={{ marginTop: 19, flexDirection: "row" }}>
            <View style={{ width: 200 }}>
              <Text style={{ fontSize: 22, fontWeight: "400", paddingLeft: 14, justifyContent: "center", fontWeight: "bold" }}>Channels</Text>
            </View>
            <View style={{ width: 190, alignItems: "flex-end", justifyContent: "center" }}>
              <Text style={{ fontSize: 15, backgroundColor: "#eae3e3", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20, fontWeight: "500" }}>Explore</Text>
            </View>
          </View>

          <FlatList
            data={data1}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem1}
          />

          <View style={{ paddingLeft: 18, height: 35, }}>
            <Text style={{ fontSize: 15, color: "#554e4e", fontWeight: "bold" }}>Find chennels to follow</Text>
          </View>

          <FlatList
            data={data2}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem2}
          />

          <View style={{ padding: 15, backgroundColor: "#fff" }}>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                backgroundColor: "#fff",
                borderRadius: 20,
                marginBottom: 12,
                borderWidth: 0.5
              }}
            >
              <Image
                style={{ width: 20, height: 20, marginRight: 8, tintColor: "#039338" }}
                source={require("../assets/images/qr-code (1).png")}
              />
              <Text style={{ fontSize: 16, fontWeight: "500", color: "#05af43" }}>
                Explore more
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                backgroundColor: "#ffffff",
                borderRadius: 20,
                borderWidth: 0.5
              }}
            >
              <Image
                style={{ width: 18, height: 18, marginRight: 8, tintColor: "#066c2c" }}
                source={require("../assets/images/plus.png")}
              />
              <Text style={{ fontSize: 16, fontWeight: "500", color: "#05af43" }}>
                Create channel
              </Text>
            </TouchableOpacity>

          </View>

        </View>

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
            backgroundColor: "#e4e4e4",
            width: 50,
            height: 50,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 12,
            elevation: 5
          }}
        >
          <Image
            style={{ width: 20, height: 20, tintColor: "#000" }}
            source={require("../assets/images/square-pen.png")}
          />
        </TouchableOpacity>

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
            source={require("../assets/images/camera (2).png")}
          />
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default UpdateScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  overlay: {
    flex: 1,
    alignItems: "flex-end",
    paddingTop: 66,
    paddingRight: 10
  },

  menuBox: {
    width: 210,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingVertical: 4,
    elevation: 5,
    borderWidth: 2,
    borderColor: "#fffbfb"
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