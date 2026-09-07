import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-web";

export default function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>메인 화면</Text>
      </View>
      <View style={styles.main}>
        <Text>메인 스크린 메인 메인슼린</Text>
        <Button
          style={styles.bt_nav}
          onPress={() => {
            navigation.navigate("Detail", {
              yourId: 123123,
              done: true,
              todo: "할 일",
            });
          }}
        >
          스크린으로 이동이동
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
  },
  text: {
    fontSize: 18,
    color: "lightgrey",
  },
  bt_nav: {
    width: 30,
    height: 20,
  },
});
