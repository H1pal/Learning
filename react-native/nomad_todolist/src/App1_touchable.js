import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { theme } from "./util/colors";

// Touchable 컴포넌트: 누를 시에 UI 상호작용이 발생
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        {/* ToucableOpacity: 클릭 시에 요소의 투명도를 조절함 
        activeOpacity: 투명도 조절하는 속성
        */}
        <TouchableOpacity activeOpacity={0}>
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        {/* TouchableHighlight: 클릭 시에 배경색이 바뀌는 하이라이트 효과 */}
        <TouchableHighlight
          underlayColor="#dddddd"
          activeOpacity={0.5}
          onPress={() => console.log("press")}
        >
          <Text style={styles.btnText}>Travel</Text>
        </TouchableHighlight>
        {/* TouchableWithoutFeeback: UI(시각적) 변화가 하나도 없는 Touchable */}
        {/* <TouchableWithoutFeedback
          onPress={() => console.log("touchableWithOutFeedback!!")}
        >
          <Text style={styles.btnText}>Touchable</Text>
        </TouchableWithoutFeedback> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    // color.js에서 색 상수 가져오기
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    color: "white",
    fontSize: 44,
    fontWeight: 600,
  },
});
