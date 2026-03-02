// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text>WhatsApp</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container:{
//     flex:1 , 
//     justifyContent:"center",
//     alignContent:"center",
//     alignItems:"center",
//     backgroundColor:"#fff"
//   }
// })


import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator"

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;