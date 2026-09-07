import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { theme } from "./util/colors";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Fontisto from "@expo/vector-icons/Fontisto";

const STORAGE_KEY = "@todos";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({});
  useEffect(() => {
    loadTodos();
  }, []);
  const work = () => setWorking(true);
  const travel = () => setWorking(false);
  const onChangeText = (payLoad) => {
    setText(payLoad);
  };
  const saveTodos = async (toSave) => {
    const item = JSON.stringify(toSave);
    await AsyncStorage.setItem(STORAGE_KEY, item);
  };
  const loadTodos = async () => {
    const item = await AsyncStorage.getItem(STORAGE_KEY);
    setTodos(JSON.parse(item));
  };

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

  /* todos를 삭제하는 기능 */
  const deleteTodos = (key) => {
    // alert를 보내 Cancel과 I'm Sure 두 자기 버튼을 띄우고,
    // I'm Sure 버튼 클릭 시: I'm 인자에서 받은 key의 todo를 삭제
    // Cancel 버튼 클릭 시 취소
    Alert.alert("Delete To Do", "Are You Sure?", [
      {
        text: "Cancel",
      },
      {
        text: "I'm Sure",
        style: "destructive",
        onPress: () => {
          const newTodos = { ...todos };
          delete newTodos[key]; // delete 요청을 받은 key를 가진 todos를 삭제
          setTodos(newTodos);
          saveTodos(newTodos);
        },
      },
    ]);
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
            todos[key].working === working ? (
              <View style={styles.todo} key={key}>
                <Text style={styles.todoText}>{todos[key].text}</Text>
                {/* 삭제 버튼 -> deleteTodos로 클릭된 todo의 key(timestamp)를 전달함 */}
                <TouchableOpacity onPress={() => deleteTodos(key)}>
                  <Text>
                    <Fontisto name="trash" size={20} color={theme.second} />
                  </Text>
                </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todoText: {
    color: "white",
    fontSize: 18,
    fontWeight: 600,
    opacity: 1,
  },
});
