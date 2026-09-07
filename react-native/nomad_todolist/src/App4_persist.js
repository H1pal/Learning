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
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// AsyncStorage의 KEY (저장된 값들을 식별할 수 있도록 함)
const STORAGE_KEY = "@todos";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({});
  const work = () => setWorking(true);
  const travel = () => setWorking(false);
  const onChangeText = (payLoad) => {
    setText(payLoad);
  };
  const saveTodos = async (toSave) => {
    const item = JSON.stringify(toSave);
    // 비동기 로컬저장소에 데이티를 저장
    await AsyncStorage.setItem(STORAGE_KEY, item);
    // console.log(item);
  };
  const loadTodos = async () => {
    // 비동기 저장소에서 데이터를 가져오기
    const item = await AsyncStorage.getItem(STORAGE_KEY);
    // console.log(item);
    setTodos(JSON.parse(item));
  };
  useEffect(() => {
    loadTodos();
  }, []);
  // dep: mount 시에만 AsyncStorage에서 todos 데이터를 불러옴

  const addTodo = async () => {
    if (text.trim() === "") {
      setText("");
      return;
    }
    setText("");

    const newTodos = {
      ...todos,
      [Date.now()]: { text, working },
    };
    await saveTodos(newTodos);
    setTodos(newTodos);
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
          {Object.keys(todos).map((key) =>
            // 각 todos의 working속성에 따라
            // 구분하여 Work 영억과 Travel 영역을 나눔
            todos[key].working === working ? (
              <View style={styles.todo} key={key}>
                <Text style={styles.todoText}>{todos[key].text}</Text>
              </View>
            ) : null,
          )}
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
