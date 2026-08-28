import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // FlexBox: 모바일은 컴포넌트를 flexbox 스타일로 지정하여 스타일 제어
    // 기본 flexDirection: Column
    <View
      style={{
        /* flexDirection: "row" */
        // 화면 전체를 차지 (1비율)
        flex: 1, // 상대적으로 크기 지정 (모바일 환경에서의 픽셀 지정은 폰 기종 별로 차이 날 가능성 잇음)
      }}
    > {/* 각 요소를 flex를 1로 지정하여 1:1:1비율로 화면 설정 */}
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 1, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
    </View>

    // <View style={styles.container}>
    //   <Text
    //     style={styles.text}
    //     /* style={{
    //       fontSize: 40,
    //     }}
    //      스타일을 인라인으로 곧바로도 작성 가능 */
    //   >
    //     hello
    //   </Text>
    //   <StatusBar style="dark" />
    // </View>
  );
}

// style을 camelCase로 작성
/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "antiqueblue",
    alignItems: "center",
    justifyContent: "center",
    // border: "1px green solid"
  },
  text: {
    fontSize: 28,
    color: "black",
    fontWeight: 800,
  },
}); */
