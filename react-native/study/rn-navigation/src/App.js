import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./screens/DetailScreen";
import theme from "./util/theme/Theme";
import MainTabs from "./tabs/MainTabs";

const Stack = createNativeStackNavigator();

const option = {
  title: "메뉴 화면",
  headerStyle: { backgroundColor: theme.bg },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={option} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: "상세 정보",
            headerStyle: { backgroundColor: theme.bg },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
