import { Text, View, StyleSheet, Image } from "react-native";

function BlueScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Blue screen.</Text>
      <Image
        style={styles.image}
        source={require("../assets/images/blue-flowers.jpg")}
      />
    </View>
  );
}

export default BlueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  text: {
    color: "darkblue",
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
