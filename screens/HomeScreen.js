import { View, Text, StyleSheet, Button } from "react-native";

function HomeScreen({ navigation }) {
  function pressHandler(name) {
    navigation.navigate(name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the home screen for Colors.</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to blue screen"
          color="blue"
          onPress={() => pressHandler("Blue")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to green screen"
          color="green"
          onPress={() => pressHandler("Green")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to red screen"
          color="red"
          onPress={() => pressHandler("Red")}
        />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#eee",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 10,
    width: "50%",
  },
});
