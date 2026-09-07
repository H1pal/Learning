import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { theme } from "./util/colors";
import { useState } from "react";

export default function App() {
  // working과 travel 내비게이션의 항목 선택 여부 상태
  const [working, setWorking] = useState(true);
  // 입력창의 값을 useState로 관리
  const [text, setText] = useState("");
  const work = () => setWorking(true);
  const travel = () => setWorking(false);
  const onChangeText = (payLoad) => {
    setText(payLoad);
  };
  const addTodo = () => {
    alert(text);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{ ...styles.btnText, color: working ? "white" : theme.grey }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{ ...styles.btnText, color: working ? theme.grey : "white" }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {/* TextInput: 입력창
        placeholder: 사용자가 입력하기 전의 예시 창
        keyboardType: 숫자 패드, 전화번호 입력, 이메일 주소 입력용 등 키보드의 종류를 선정
        returnKeyType: 보내기 칸 설정
        multiline: 입력창이 가득 찼을 때 줄바꿈
        placeholderTextColor: placeholder의 색상 지정
        onChangeText: 입력창의 값이 변경될 때마다 실행
        autoCapitalize: 기준점에 따라서 대문자 지정을 설정
         */}
        <TextInput
          // keyboardType="web-search"
          // returnKeyType="send"
          // multiline
          // placeholderTextColor="red"
          // autoCapitalize={"sentences"}
          // onSubmitEditing: Enter(제출)하였을 때 상호작용

          // 입력창의 값을 useState로 관리
          value={text}
          onChangeText={onChangeText}
          onSubmitEditing={addTodo}
          placeholder={working ? "Add a To Do" : "Where Do You Wanna go?"}
          style={styles.input}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
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
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 26,
    marginTop: 20,
    fontSize: 18,
  },
});
