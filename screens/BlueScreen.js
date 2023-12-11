import { Text, View, StyleSheet } from "react-native";

function BlueScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Blue Screen</Text>
    </View>
  );
}

export default BlueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
  text: {
    color: "white",
  },
});
