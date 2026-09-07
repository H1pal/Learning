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
import AntDesign from "@expo/vector-icons/AntDesign";

/* ToDoList 기능 추가 및 최적화 */

// 1. 현재에 있는 nav touchable을 클릭 시 AsyncStorage에 중복된 값을 저장하지 않도록 개선

const TODOS_KEY = "@todos";
const LOCATION_KEY = "@location";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({});
  useEffect(() => {
    loadTodos();
    loadLocation();
  }, []);
  const work = async () => {
    setWorking(true);
  };
  const travel = async () => {
    setWorking(false);
  };
  const onChangeText = (payLoad) => {
    setText(payLoad);
  };
  /* storage 저장 */
  const saveTodos = async (toSave) => {
    const item = JSON.stringify(toSave);
    await AsyncStorage.setItem(TODOS_KEY, item);
  };
  /* storage 불러오기 */
  const loadTodos = async () => {
    const item = await AsyncStorage.getItem(TODOS_KEY);
    setTodos(JSON.parse(item));
  };

  /* 추가 */
  const addTodo = async () => {
    if (text.trim() === "") {
      setText("");
      return;
    }
    setText("");

    const newTodos = {
      ...todos,
      [Date.now()]: { text, working, isDone: false },
    };
    setTodos(newTodos);
  };

  /* 삭제 */
  const deleteTodos = (key) => {
    Alert.alert("Delete To Do", "Are You Sure?", [
      {
        text: "Cancel",
      },
      {
        text: "I'm Sure",
        style: "destructive",
        onPress: () => {
          const newTodos = { ...todos };
          delete newTodos[key];
          setTodos(newTodos);
        },
      },
    ]);
  };

  /* 수정 */
  const updateTodos = (key) => {
    Alert.prompt("Editting", "Changing Your To Do", (text) => {
      const newTodos = { ...todos };
      newTodos[key].text = text;
      setTodos(newTodos);
    });
  };

  /* checkbox */
  const onCompleted = (key) => {
    const newTodos = { ...todos };
    newTodos[key].isDone ^= 1;
    setTodos(newTodos);
  };

  const saveLocation = async () => {
    const isWorking = (+working).toString();
    await AsyncStorage.setItem(LOCATION_KEY, isWorking);
  };
  const loadLocation = async () => {
    const isWorking = await AsyncStorage.getItem(LOCATION_KEY);
    if (isWorking !== null) setWorking(isWorking === "1");
  };

  /* working이 변경 시에만 AsyncStorage에 저장 */
  useEffect(() => {
    const save = async () => {
      await saveLocation();
    };
    save();
  }, [working]);

  /* todos 변경 시에만 todos를 AsyncStorage에 저장 */
  useEffect(() => {
    const save = async () => {
      await saveTodos(todos);
    };
    save();
  }, [todos]);

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
                <View>
                  <TouchableOpacity onPress={() => onCompleted(key)}>
                    <Text>
                      {todos[key].isDone ? (
                        <Fontisto
                          name="checkbox-active"
                          size={24}
                          color={theme.second}
                        />
                      ) : (
                        <Fontisto
                          name="checkbox-passive"
                          size={24}
                          color={"white"}
                        />
                      )}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.todoTextContainer}>
                  <Text
                    style={[
                      styles.todoText,
                      todos[key].isDone && {
                        textDecorationLine: "line-through",
                        color: theme.second,
                      },
                    ]}
                  >
                    {todos[key].text}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <TouchableOpacity onPress={() => updateTodos(key)}>
                    <Text>
                      <AntDesign name="edit" size={20} color={theme.second} />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteTodos(key)}>
                    <Text>
                      <Fontisto name="trash" size={20} color={theme.second} />
                    </Text>
                  </TouchableOpacity>
                </View>
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
  todoTextContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  todoText: {
    color: "white",
    fontSize: 18,
    fontWeight: 600,
    opacity: 1,
  },
});
