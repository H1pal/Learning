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

const TODOS_KEY = "@todos";
const LOCATION_KEY = "@location";

/*
1. remember where I am:
  Work nav에 있었다면 재시작 시 work에서 시작
  Travel nav에 있었다면 재시작 시 travel에서 시작
2. make function to complete todos
  각 To Do의 완료 여부 표시하도록 개선
3. update
  To Do를 수정할 수 있도록 기능을 추가
 */

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
    // await saveTodos(newTodos);
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
          // saveTodos(newTodos);
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
    console.log(isWorking);
  };
  const loadLocation = async () => {
    const isWorking = await AsyncStorage.getItem(LOCATION_KEY);
    // 앱 최초 실행 시에는 데이터가 없기 때문에 useState(true를 그대로 사용)
    if (isWorking !== null) setWorking(isWorking === "1");
    // console.log(isWorking);
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
    // 비동기(async) 함수는 Promise 객체를 반환하므로 내부에서 따로
    // 콜백함수 내부에서 따로 선언해야 함
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
                      // 단락 평가: isDone이 true라면 완료 스타일 todoText에 적용
                      // false라면 적용하지 않음
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
