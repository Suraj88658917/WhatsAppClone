import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: 1,
    name: "JS KOZI AANA JAANA",
    image: "https://i.pravatar.cc/300?img=56",
    lastMessage: "+91 70600 565335 7:30 gate 5 to p...",
    time: "7:30 PM",

  },
  {
    id: 2,
    name: "Rahul",
    image: "https://i.pravatar.cc/150?img=12",
    lastMessage: "7077 is your verification code",
    time: "6:10 PM",

  },
  {
    id: 3,
    name: "Guddu K Dalle",
    image: "https://i.pravatar.cc/150?img=13",
    lastMessage: "You were added",
    time: "11/02/26",

  },
  {
    id: 4,
    name: "Unknown Contact",
    image: "https://i.pravatar.cc/150?img=11",
    lastMessage: "Hello",
    time: "Yesterday",

  },
  {
    id: 5,
    name: "Guddu PG 5 Gali No 18 (Boys)",
    image: "https://i.pravatar.cc/150?img=12",
    lastMessage: "You were added",
    time: "Mon",

  },
  {
    id: 6,
    name: "GD Discussion",
    image: "https://i.pravatar.cc/150?img=13",
    lastMessage: "Assignment kab submit karna hai?",
    time: "Mon",

  },
  {
    id: 7,
    name: "Planetspark",
    image: "https://i.pravatar.cc/300?img=56",
    lastMessage: "Your verification code is 7077",
    time: "Sun",

  },
  {
    id: 8,
    name: "Web Technologies",
    image: "https://i.pravatar.cc/150?img=11",
    lastMessage: "Project discussion",
    time: "Sun",

  },
  {
    id: 9,
    name: "Amit",
    image: "https://i.pravatar.cc/150?img=15",
    lastMessage: "Kal match hai kya?",
    time: "Sat",

  },
  {
    id: 10,
    name: "College Group",
    image: "https://i.pravatar.cc/150?img=18",
    lastMessage: "Notes bhej diye",
    time: "24/12/25",

  },
  {
    id: 11,
    name: "Rohit",
    image: "https://i.pravatar.cc/300?img=20",
    lastMessage: "Call karna",
    time: "Thu",

  },
  {
    id: 12,
    name: "React Native Devs",
    image: "https://i.pravatar.cc/150?img=21",
    lastMessage: "New update released",
    time: "Wed",

  }
];

const dotedata = [
  { id: "1", title: "New group" },
  { id: "2", title: "New Community" },
  { id: "3", title: "Broadcast lists" },
  { id: "4", title: "Linked Device" },
  { id: "5", title: "Starred" },
  { id: "6", title: "Payments" },
  { id: "7", title: "Read all" },
  { id: "8", title: "Settings" }
];

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 15,
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: 52,
          height: 52,
          borderRadius: 26,
        }}
      />

      <View style={{ marginLeft: 12, flex: 1 }}>
        <Text
          style={{
            color: "#000000",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          {item.name || "Unknown"}
        </Text>

        <Text
          style={{
            color: "#838587",
            marginTop: 2,
            fontWeight: "500"
          }}
          numberOfLines={1}
        >
          {item.lastMessage}
        </Text>

      </View>

      <Text style={{
        color: "#8696a0",
        marginTop: 2,
      }}
        numberOfLines={1}>{item.time}</Text>

    </TouchableOpacity>
  );
};


const data1 = [
  {
    id: "1",
    Text: "No Unread chats",
    Subtitle: "View all Chats"
  }
]

const data2 = [
  {
    id: "1",
    Text: "Add to your Favourites list",
  }
]

const data3 = [
  {
    id: "1",
    Text: "New List"
  }
]

const renderItem1 = ({ item }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", }}>
      <Text style={{ fontSize: 16, color: "#000000", fontWeight: "600" }}>{item.Text}</Text>
      <TouchableOpacity
        style={{ padding: 25 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#10c716" }}>{item.Subtitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

const renderItem2 = ({ item }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", }}>
      <Image style={{ width: 90, height: 100, tintColor: "#000000" }}
        source={require("../assets/images/phone-book.png")} />
      <Text style={{ fontSize: 20, fontWeight: "600", color: "#000000", textAlign: "center", marginTop: 30 }}>{item?.Text}</Text>
      <Text style={{ fontSize: 15, fontWeight: "400", textAlign: "center", color: "#000000", marginTop: 10 }}> see your favourites in both chats and {"\n"}
        Calls. Add as many people or  group as {"\n"}
        you went.</Text>
      <TouchableOpacity>
        <Text style={{ fontSize: 15, color: "#2af123", fontWeight: "bold", marginTop: 20 }}>Add people or groups</Text>
      </TouchableOpacity>
    </View>
  )
}
const renderItem3 = ({ item }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "#000000", fontWeight: "bold" }}>{item?.Text}</Text>
    </View>
  )
}


const renderItem4 = ({ item }) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.itemText}>{item.title}</Text>
  </TouchableOpacity>
);


const ChatScreen = () => {
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const [selected, setSelected] = useState("All");
  const [visible, setVisible] = useState(false);

  const getData = () => {
    if (selected === "All") return { data: data, render: renderItem };
    if (selected === "Unread") return { data: data1, render: renderItem1 };
    if (selected === "Favourites") return { data: data2, render: renderItem2 };
    if (selected === "Group") return { data: data, render: renderItem };
    if (selected === "+") return { data: data3, render: renderItem3 };

    return null;
  }

  const result = getData();

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 45, flexDirection: "row", height: 60 }}>
        <View style={{ width: 200, justifyContent: "center", paddingHorizontal: 15 }}>
          <Text style={{ color: "#14d835", fontWeight: "bold", fontSize: 25, }}>WhatsApp</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ScannerScreen')}
          style={{ width: 80, justifyContent: "center", alignItems: "flex-end", }}>
          <Image style={{ width: 23, height: 23, tintColor: "#000000", }}
            source={require("../assets/images/qr-code (1).png")} />
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}
          style={{ width: 90, justifyContent: "center", alignItems: "center" }}>
          <Image style={{ width: 23, height: 23, tintColor: "#000000" }}
            source={require("../assets/images/camera (1).png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setVisible(true)}
          style={{ width: 20, justifyContent: "center", alignItems: "center", }}>
          <Image style={{ width: 30, height: 30, tintColor: "#000000" }}
            source={require("../assets/images/kebab-menu.png")} />
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
                renderItem={renderItem4}
              />
            </View>
          </TouchableOpacity>
        </Modal>



      </View>

      <View>

        <TextInput
          placeholder='Ask Meta AI or Search'
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholderTextColor={"#4d4a4a"}
          keyboardType="email-address"
        />
        <Image style={{ width: 18, height: 18, tintColor: "#625d5d", position: "absolute", top: 32, left: 40 }}
          source={require("../assets/images/loupe.png")} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal
      >
        <View style={{ flexDirection: "row", height: 60, paddingHorizontal: 15, gap: 10, }}>
          <TouchableOpacity onPress={() => setSelected("All")}
            style={{ width: 60, height: 35, justifyContent: "center", alignItems: "center", borderRadius: 40, borderColor: "#9f9c9c", borderWidth: 1 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#545151" }}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelected("Unread")}
            style={{ width: 100, height: 35, justifyContent: "center", alignItems: "center", borderRadius: 40, borderColor: "#9f9c9c", borderWidth: 1 }} >
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#545151" }}>Unread 1</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelected("Favourites")}
            style={{ width: 100, height: 35, justifyContent: "center", alignItems: "center", borderRadius: 40, borderColor: "#9f9c9c", borderWidth: 1 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#545151" }}>Favourites</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelected("Group")}
            style={{ width: 100, height: 35, justifyContent: "center", alignItems: "center", borderRadius: 40, borderColor: "#9f9c9c", borderWidth: 1 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#545151" }}>Group 1</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelected("+")}
            style={{ width: 50, height: 35, justifyContent: "center", alignItems: "center", borderRadius: 20, borderColor: "#9f9c9c", borderWidth: 1 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#545151" }}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>


      {
        result ? (
          <FlatList
            data={result.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={result.render}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 190  , }}
            

          />
        ) : (
          <View>

          </View>
        )
      }

      <View style={{ position: "absolute" }}>
        <TouchableOpacity  >
          <Image style={{ width: 30, height: 30, backgroundColor: "#393131", borderRadius: 20, marginBottom: 20, left: 350, top: 650 }}
            source={require("../assets/images/circle.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ width: 50, height: 50, backgroundColor: "#269a22", borderRadius: 9, left: 340, top: 650 }}
            source={require("../assets/images/add-new.png")} />
        </TouchableOpacity>
      </View>




    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 50,
    borderRadius: 30,
    backgroundColor: "#ececf6",
    marginHorizontal: 15,
    marginVertical: 15,
    paddingLeft: 55,
    fontSize: 16,
    fontWeight: "400",

  },
  overlay: {
    flex: 1,
    alignItems: "flex-end",
    paddingTop: 66,
    paddingRight: 10
  },

  menuBox: {
    width: 200,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingVertical: 4,
    elevation: 5,
    borderWidth: 2,
    borderColor: "#fffbfb"
  },

  item: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },

  itemText: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "400"
  }
})