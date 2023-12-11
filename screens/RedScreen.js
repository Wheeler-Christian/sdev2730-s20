import { Text, View, StyleSheet } from "react-native";

function RedScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Red Screen</Text>
    </View>
  );
}

export default RedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    padding: 16,
  },
  text: {
    color: "white",
  },
});
