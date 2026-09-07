import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { theme } from "./util/colors";
import { useState } from "react";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({});
  const work = () => setWorking(true);
  const travel = () => setWorking(false);
  const onChangeText = (payLoad) => {
    setText(payLoad);
  };
  const addTodo = () => {
    if (text.trim() === "") {
      setText("");
      return;
    }
    setText("");

    /* Object.assign을 이용하여 todo를 저장하는 방식
    const newTodos = Object.assign({}, todos, {
      [Date.now()]: {
        text,
        work: working,
      },
    }); */

    // spread 연산자, 문법 설탕 활용(최신)
    // Object.assign과 동일하게 작동함
    const newTodos = {
      ...todos,
      [Date.now()]: { text, working },
    };

    setTodos(newTodos);
    // console.log(todos);
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
        <TextInput
          value={text}
          onChangeText={onChangeText}
          onSubmitEditing={addTodo}
          returnKeyType={"done"}
          placeholder={working ? "Add a To Do" : "Where Do You Wanna go?"}
          style={styles.input}
        ></TextInput>
        <ScrollView style={{ height: "100%" }}>
          {/* Object.keys로 저장된 todos들을 
          구별하여 각 todos들을 화면에 나타냄*/}
          {Object.keys(todos).map((key) => (
            <View style={styles.todo} key={key}>
              <Text style={styles.todoText}>{todos[key].text}</Text>
            </View>
          ))}
        </ScrollView>
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
    marginVertical: 20,
    fontSize: 18,
  },
  todo: {
    backgroundColor: theme.todoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 10,
    opacity: 0.9,
  },
  todoText: {
    color: "white",
    fontSize: 18,
    fontWeight: 600,
    opacity: 1,
  },
});
