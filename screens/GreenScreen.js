import { Text, View, StyleSheet } from "react-native";

function GreenScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Green Screen</Text>
    </View>
  );
}

export default GreenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    padding: 16,
  },
  text: {
    color: "white",
  },
});
