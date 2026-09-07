import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import theme from "../util/theme/Theme";
import Signin from "../screens/auth/SigninScreen";
import Signup from "../screens/auth/SignupScreen";

const Tab = createBottomTabNavigator();

const option = {
  title: "메뉴 화면",
  headerStyle: { backgroundColor: theme.bg },
  headerTintColor: "white",
};

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Signin" component={Signin}></Tab.Screen>
      <Tab.Screen name="Signup" component={Signup}></Tab.Screen>
    </Tab.Navigator>
  );
}
