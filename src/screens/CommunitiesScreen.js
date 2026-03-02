import { StyleSheet, Text, TouchableOpacity, View, Image, Modal, FlatList } from 'react-native'
import React, { useState } from 'react'


const dotedata = [
  { id: "5", title: "Settings" },
];

const renderItem = ({ item }) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.itemText}>{item.title}</Text>
  </TouchableOpacity>
);

const CommunitiesScreen = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 50,
          paddingHorizontal: 16
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "400" }}>
          Communities
        </Text>

        <TouchableOpacity onPress={() => setVisible(true)}>
          <Image
            style={{ width: 26, height: 35, tintColor: "#000" }}
            source={require("../assets/images/kebab-menu.png")}
          />
        </TouchableOpacity>
      </View>

      <Modal transparent visible={visible} animationType="fade">
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

      <View style={{ justifyContent: "center", alignItems: "center", height: 260 }}>
        <Image style={{ width: 155, height: 150 }}
          source={require("../assets/images/whatsapp1.jpg")} />
      </View>

      <View style={{ justifyContent: "center", alignItems: "center", height: 50 }}>
        <Text style={{ fontSize: 23, fontWeight: "500" }}>Stay cannected with a community</Text>
      </View>
      <View>
        <Text style={{ fontSize: 14, textAlign: "center", fontWeight: "450" }}>community bring members together in  {"\n"}
          topic based groups, and make it easy to get{"\n"}
          admin announcements. Any community you're{"\n"}
          added to will appear here.</Text>
      </View>

      <View style={{ marginTop: 40, paddingHorizontal: 35 }}>
        <TouchableOpacity style={{ backgroundColor: "#0c8817", paddingVertical: 10, justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
          <Text style={{ fontSize: 16, fontWeight: "400", color: "#fff" }}>Start your community</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 15, fontWeight: "400", textAlign: "center" }}>Tap ➕ on the Chats tab to create a new {"\n"}
          community.</Text>
      </View>
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
      </View>

    </View>
  )
}

export default CommunitiesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  overlay: {
    flex: 1,
    alignItems: "flex-end",
    paddingTop: 40,
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