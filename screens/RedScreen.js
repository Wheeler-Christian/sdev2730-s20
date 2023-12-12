import { Text, View, StyleSheet, Image } from "react-native";

function RedScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>This is the Red screen.</Text>
    <Image
      style={styles.image}
      source={require("../assets/images/red-lanterns.jpg")}
    />
  </View>
  );
}

export default RedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faa",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  text: {
    color: "#a00",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 500,
    resizeMode: "contain",
  },
});
