import { Text, View, StyleSheet, Image } from "react-native";

function GreenScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Green screen.</Text>
      <Image
        style={styles.image}
        source={require("../assets/images/green-rainforest.jpg")}
      />
    </View>
  );
}

export default GreenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  text: {
    color: "darkgreen",
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
