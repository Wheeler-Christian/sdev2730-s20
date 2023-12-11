import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import BlueScreen from "./screens/BlueScreen";
import GreenScreen from "./screens/GreenScreen";
import RedScreen from "./screens/RedScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#222" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Blue" component={BlueScreen} />
          <Stack.Screen name="Green" component={GreenScreen} />
          <Stack.Screen name="Red" component={RedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
